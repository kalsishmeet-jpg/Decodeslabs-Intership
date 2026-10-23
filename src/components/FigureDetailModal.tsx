"use client";

import React from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { X, Heart, ShoppingBag, CheckCircle, ShieldCheck, Box, Layers, Calendar, Sparkles } from "lucide-react";

export default function FigureDetailModal() {
  const { selectedFigure, setSelectedFigure, addToCart, toggleWishlist, isWishlisted } = useApp();

  if (!selectedFigure) return null;

  const wishlisted = isWishlisted(selectedFigure.id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-10 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={() => setSelectedFigure(null)}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#191c1e] border border-[#8b5cf6]/40 rounded-3xl overflow-hidden shadow-2xl z-10 animate-in fade-in zoom-in-95">
        {/* Close Button */}
        <button
          onClick={() => setSelectedFigure(null)}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white/80 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Showcase */}
        <div className="relative w-full h-80 sm:h-96 bg-[#111415] overflow-hidden">
          <Image
            src={selectedFigure.imageUrl}
            alt={selectedFigure.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#191c1e] via-[#191c1e]/20 to-transparent" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 rounded-full bg-[#8b5cf6] text-white text-xs font-bold font-mono tracking-wider shadow-lg">
              {selectedFigure.scale}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#06b6d4] text-[#001f26] text-xs font-bold font-mono uppercase tracking-wider shadow-lg">
              {selectedFigure.status}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-xs uppercase font-mono text-[#4cd7f6] tracking-wider">
              {selectedFigure.franchise} • {selectedFigure.maker}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white leading-tight mt-1">
              {selectedFigure.name}
            </h2>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Price & Stock */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-[#111415] border border-white/5">
            <div>
              <span className="text-xs text-[#958ea0] block">Official Release Price</span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-2xl font-bold font-heading text-[#8b5cf6]">
                  ${selectedFigure.price.toFixed(2)}
                </span>
                {selectedFigure.originalPrice && (
                  <span className="text-sm text-[#958ea0] line-through">
                    ${selectedFigure.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs text-[#4cd7f6] font-medium flex items-center justify-end gap-1">
                <CheckCircle className="w-3.5 h-3.5" />
                {selectedFigure.stockText || "Official License"}
              </span>
              <span className="text-[11px] text-[#958ea0] block mt-0.5">
                Release: {selectedFigure.releaseDate}
              </span>
            </div>
          </div>

          {/* Figure Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#cbc3d7] mb-2">
              Collectible Overview &amp; Sculpting
            </h4>
            <p className="text-sm text-[#e1e2e4] leading-relaxed">
              {selectedFigure.description}
            </p>
          </div>

          {/* Collector Spec Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-[#111415] border border-white/5 flex flex-col gap-1">
              <span className="text-[#958ea0] flex items-center gap-1">
                <Box className="w-3.5 h-3.5 text-[#8b5cf6]" /> Scale
              </span>
              <span className="text-white font-mono font-semibold">{selectedFigure.scale}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#111415] border border-white/5 flex flex-col gap-1">
              <span className="text-[#958ea0] flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-[#06b6d4]" /> Material
              </span>
              <span className="text-white font-semibold">PVC, ABS &amp; Resin</span>
            </div>
            <div className="p-3 rounded-xl bg-[#111415] border border-white/5 flex flex-col gap-1">
              <span className="text-[#958ea0] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#8b5cf6]" /> Window
              </span>
              <span className="text-white font-semibold">{selectedFigure.releaseDate}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#111415] border border-white/5 flex flex-col gap-1">
              <span className="text-[#958ea0] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#06b6d4]" /> Extras
              </span>
              <span className="text-white font-semibold">LED Base / Heads</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={() => toggleWishlist(selectedFigure.id)}
              className={`p-3.5 rounded-xl border transition-all flex items-center justify-center gap-2 ${
                wishlisted
                  ? "bg-[#ffb4ab]/15 border-[#ffb4ab] text-[#ffb4ab]"
                  : "bg-[#111415] border-white/10 text-white hover:border-[#ffb4ab]/50"
              }`}
            >
              <Heart
                className={`w-5 h-5 ${wishlisted ? "fill-current" : ""}`}
              />
              <span className="text-sm font-heading font-medium hidden sm:inline">
                {wishlisted ? "Saved" : "Wishlist"}
              </span>
            </button>

            <button
              onClick={() => {
                addToCart(selectedFigure);
                setSelectedFigure(null);
              }}
              className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#6d3bd7] text-white font-heading font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_25px_rgba(139,92,246,0.35)] flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Claim Allocated Pre-Order (${selectedFigure.price.toFixed(2)})</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[11px] text-[#958ea0] pt-1">
            <ShieldCheck className="w-4 h-4 text-[#4cd7f6]" />
            <span>100% Authentic Licensed Figure • Tamper-evident Hologram Included</span>
          </div>
        </div>
      </div>
    </div>
  );
}
