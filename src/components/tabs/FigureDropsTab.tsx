"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { INITIAL_FIGURES, Figure } from "@/data/mockData";
import { Zap, Heart, ShoppingBag, Eye, CheckCircle2, Clock } from "lucide-react";

export default function FigureDropsTab() {
  const { addToCart, toggleWishlist, isWishlisted, setSelectedFigure } = useApp();
  const [filter, setFilter] = useState<"All" | "Pre-orders" | "In Stock" | "Exclusive">("All");

  // Flash drop countdown
  const [flashTime, setFlashTime] = useState({
    hours: 2,
    mins: 45,
    secs: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setFlashTime((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const filterMap = {
    All: INITIAL_FIGURES,
    "Pre-orders": INITIAL_FIGURES.filter(
      (f) => f.status === "Pre-Order" || f.status === "Flash Drop"
    ),
    "In Stock": INITIAL_FIGURES.filter((f) => f.status === "In Stock"),
    Exclusive: INITIAL_FIGURES.filter(
      (f) => f.status === "Exclusive" || f.status === "Limited Drop"
    ),
  };

  const currentFigures = filterMap[filter];

  return (
    <div className="flex flex-col gap-6 lg:gap-8 pb-12">
      {/* FLASH DROP Live Allocation Card */}
      <div className="flex flex-col gap-3 bg-[#191c1e] rounded-3xl p-5 sm:p-6 border border-[#06b6d4]/40 shadow-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-48 h-48 bg-[#06b6d4]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#06b6d4]/20 border border-[#06b6d4]/40 flex items-center justify-center">
              <Zap className="w-4 h-4 text-[#4cd7f6] fill-current animate-pulse" />
            </div>
            <h2 className="text-base sm:text-lg font-bold font-heading text-white">
              FLASH DROP: Gojo Unlimited Void
            </h2>
          </div>
          <span className="text-xs font-mono font-bold text-[#4cd7f6] bg-[#06b6d4]/15 border border-[#06b6d4]/30 px-3 py-1 rounded-full flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>
              {String(flashTime.hours).padStart(2, "0")}h{" "}
              {String(flashTime.mins).padStart(2, "0")}m{" "}
              {String(flashTime.secs).padStart(2, "0")}s left
            </span>
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#cbc3d7] leading-relaxed">
          High-end 1/7 scale resin statue with LED domain expansion base. Global production limited strictly to 500 units worldwide.
        </p>

        {/* Stock allocation progress bar */}
        <div className="flex flex-col gap-1.5 pt-1">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-[#958ea0]">Allocated Stock Claimed</span>
            <span className="text-[#8b5cf6] font-bold">412 / 500 Units (82.4%)</span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-[#111415] overflow-hidden p-0.5 border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] rounded-full shadow-[0_0_10px_rgba(139,92,246,0.6)]"
              style={{ width: "82.4%" }}
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {(["All", "Pre-orders", "In Stock", "Exclusive"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2.5 rounded-2xl text-xs font-heading font-semibold shrink-0 transition-all ${
              filter === cat
                ? "bg-[#8b5cf6] text-white shadow-[0_0_15px_rgba(139,92,246,0.35)]"
                : "bg-[#191c1e] text-[#cbc3d7] hover:text-white hover:bg-[#282a2c] border border-white/5"
            }`}
          >
            {cat === "All" ? "All Drops" : cat}
          </button>
        ))}
      </div>

      {/* Figures Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentFigures.map((fig) => {
          const wishlisted = isWishlisted(fig.id);
          return (
            <div
              key={fig.id}
              className="flex flex-col bg-[#191c1e] rounded-3xl overflow-hidden border border-white/5 hover:border-[#8b5cf6]/40 transition-all duration-300 shadow-xl group"
            >
              {/* Image Area */}
              <div
                onClick={() => setSelectedFigure(fig)}
                className="relative w-full h-72 bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: `url('${fig.imageUrl}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#191c1e] via-transparent to-transparent opacity-60" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="text-xs font-mono font-bold bg-[#8b5cf6] text-white px-3 py-1 rounded-full shadow-lg">
                    {fig.scale}
                  </span>
                  <span className="text-xs font-mono font-bold bg-[#06b6d4] text-[#001f26] px-3 py-1 rounded-full uppercase shadow-lg">
                    {fig.status}
                  </span>
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(fig.id);
                  }}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-[#ffb4ab] transition-all hover:scale-105"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      wishlisted ? "fill-[#ffb4ab] text-[#ffb4ab]" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Info Area */}
              <div className="flex flex-col p-5 sm:p-6 gap-3 flex-1 justify-between">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#4cd7f6]">
                      {fig.franchise}
                    </span>
                    <span className="text-lg font-bold font-heading text-[#8b5cf6]">
                      ${fig.price.toFixed(2)}
                    </span>
                  </div>
                  <h3
                    onClick={() => setSelectedFigure(fig)}
                    className="text-base sm:text-lg font-bold font-heading text-white cursor-pointer group-hover:text-[#4cd7f6] transition-colors truncate"
                  >
                    {fig.name}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-[#958ea0] pt-1">
                    <span>{fig.releaseDate}</span>
                    <span className="text-[#06b6d4] font-medium">
                      {fig.stockText || "Tokyo Vault"}
                    </span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/5">
                  <button
                    onClick={() => toggleWishlist(fig.id)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-heading font-semibold transition-colors flex items-center justify-center gap-1.5 ${
                      wishlisted
                        ? "bg-[#ffb4ab]/15 border-[#ffb4ab] text-[#ffb4ab]"
                        : "bg-[#111415] border-white/10 text-white hover:bg-[#282a2c]"
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${wishlisted ? "fill-current" : ""}`} />
                    <span>{wishlisted ? "Wishlisted" : "Wishlist"}</span>
                  </button>

                  <button
                    onClick={() => addToCart(fig)}
                    className="py-2.5 px-3 rounded-xl bg-[#8b5cf6] text-white text-xs font-heading font-bold hover:bg-[#7c3aed] transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)] flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{fig.status === "In Stock" ? "Buy Now" : "Pre-Order"}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
