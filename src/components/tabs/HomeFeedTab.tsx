"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { INITIAL_FIGURES, COMMUNITY_SPOTLIGHT, Figure } from "@/data/mockData";
import {
  Flame,
  Zap,
  ShoppingBag,
  Heart,
  MessageSquare,
  Camera,
  ArrowRight,
  Sparkles,
  Timer,
} from "lucide-react";

export default function HomeFeedTab() {
  const { addToCart, setSelectedFigure, toggleWishlist, isWishlisted, setActiveTab } = useApp();
  const [selectedFilter, setSelectedFilter] = useState("All Feed");

  // Hero Countdown Timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    mins: 32,
    secs: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.secs > 0) {
          return { ...prev, secs: prev.secs - 1 };
        } else if (prev.mins > 0) {
          return { ...prev, mins: prev.mins - 1, secs: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, mins: 59, secs: 59 };
        }
        return { hours: 0, mins: 0, secs: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const heroFigure = INITIAL_FIGURES[0]; // David Martinez Edgerunners
  const trendingFigures = INITIAL_FIGURES.slice(1, 3); // Gojo & Denji

  const filterOptions = ["All Feed", "Figures", "News", "Pre-orders", "Community"];

  return (
    <div className="flex flex-col gap-6 lg:gap-8 pb-12">
      {/* Hero Banner: Limited Edition Cyberpunk Edgerunners Figure Release */}
      <div className="relative w-full rounded-3xl overflow-hidden bg-[#1d2022] border border-[#8b5cf6]/30 shadow-2xl group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${heroFigure.imageUrl}')` }}
        />
        {/* Dark Obsidian Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111415] via-[#111415]/75 to-transparent sm:via-[#111415]/60" />

        <div className="relative z-10 p-5 sm:p-8 flex flex-col justify-end min-h-[460px] sm:min-h-[520px] gap-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="px-3 py-1 rounded-full bg-[#03b5d3] text-[#00424e] text-xs font-bold font-mono uppercase tracking-wider shadow-lg">
              Exclusive Drop
            </span>
            <span className="text-[#06b6d4] text-xs sm:text-sm font-semibold flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-[#06b6d4]/30">
              <Zap className="w-4 h-4 fill-current text-[#4cd7f6] animate-pulse" />
              <span>{heroFigure.unitsLeft} Units Left Worldwide</span>
            </span>
          </div>

          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-xs uppercase font-mono text-[#8b5cf6] font-bold tracking-widest">
              Cyberpunk Edgerunners • Good Smile Company
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white leading-tight">
              {heroFigure.name}
            </h2>
            <p className="text-sm sm:text-base text-[#cbc3d7] line-clamp-2 leading-relaxed">
              {heroFigure.description}
            </p>
          </div>

          {/* Countdown & Quick Action Widget */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-white/10">
            {/* Countdown Grid */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex flex-col items-center justify-center bg-[#111415]/80 backdrop-blur-md border border-white/10 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 shadow-lg">
                <span className="text-lg sm:text-2xl font-bold font-heading text-[#8b5cf6]">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-mono text-[#958ea0] uppercase">Hours</span>
              </div>
              <span className="text-lg text-[#8b5cf6] font-bold">:</span>
              <div className="flex flex-col items-center justify-center bg-[#111415]/80 backdrop-blur-md border border-white/10 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 shadow-lg">
                <span className="text-lg sm:text-2xl font-bold font-heading text-[#8b5cf6]">
                  {String(timeLeft.mins).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-mono text-[#958ea0] uppercase">Mins</span>
              </div>
              <span className="text-lg text-[#8b5cf6] font-bold">:</span>
              <div className="flex flex-col items-center justify-center bg-[#111415]/80 backdrop-blur-md border border-white/10 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 shadow-lg">
                <span className="text-lg sm:text-2xl font-bold font-heading text-[#4cd7f6]">
                  {String(timeLeft.secs).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-mono text-[#958ea0] uppercase">Secs</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedFigure(heroFigure)}
                className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-heading font-semibold text-sm transition-all border border-white/10"
              >
                Inspect Specs
              </button>
              <button
                onClick={() => addToCart(heroFigure)}
                className="flex-1 sm:flex-initial px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#8b5cf6] to-[#6d3bd7] text-white font-heading font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_25px_rgba(139,92,246,0.4)] flex items-center justify-center gap-2 group"
              >
                <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Grab (${heroFigure.price.toFixed(2)})</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {filterOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => {
              setSelectedFilter(opt);
              if (opt === "Figures" || opt === "Pre-orders") setActiveTab("drops");
              if (opt === "News") setActiveTab("news");
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-heading font-semibold whitespace-nowrap transition-all ${
              selectedFilter === opt
                ? "bg-[#8b5cf6] text-white shadow-[0_0_15px_rgba(139,92,246,0.35)]"
                : "bg-[#1d2022] text-[#cbc3d7] hover:text-white hover:bg-[#282a2c] border border-white/5"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Trending Drops Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#4cd7f6] fill-current" />
            <span>Trending Drops</span>
          </h3>
          <button
            onClick={() => setActiveTab("drops")}
            className="text-xs font-heading font-semibold text-[#8b5cf6] hover:text-[#d0bcff] flex items-center gap-1 group"
          >
            <span>View All Drops</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {trendingFigures.map((fig) => {
            const wishlisted = isWishlisted(fig.id);
            return (
              <div
                key={fig.id}
                className="relative rounded-3xl bg-[#1d2022] overflow-hidden border border-white/5 hover:border-[#8b5cf6]/40 transition-all duration-300 shadow-xl p-4 sm:p-5 flex flex-col gap-4 group"
              >
                {/* Image Box */}
                <div
                  onClick={() => setSelectedFigure(fig)}
                  className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden bg-cover bg-center cursor-pointer"
                  style={{ backgroundImage: `url('${fig.imageUrl}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d2022] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-black/60 backdrop-blur-md text-[#4cd7f6] border border-[#06b6d4]/30 text-xs font-mono font-bold uppercase">
                    {fig.status === "Flash Drop" ? "Pre-Order Live" : "Breaking News"}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(fig.id);
                    }}
                    className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-[#ffb4ab] transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        wishlisted ? "fill-[#ffb4ab] text-[#ffb4ab]" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs text-[#958ea0]">
                    <span>{fig.maker} • {fig.franchise}</span>
                    <span className="font-mono text-[#8b5cf6] font-bold text-sm">
                      ${fig.price.toFixed(2)}
                    </span>
                  </div>
                  <h4
                    onClick={() => setSelectedFigure(fig)}
                    className="text-base sm:text-lg font-bold font-heading text-white cursor-pointer group-hover:text-[#4cd7f6] transition-colors line-clamp-1"
                  >
                    {fig.name}
                  </h4>
                  <p className="text-xs text-[#cbc3d7] line-clamp-2 leading-relaxed">
                    {fig.description}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <div className="flex items-center gap-4 text-xs text-[#958ea0]">
                    <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                      <Heart className="w-3.5 h-3.5" />
                      {fig.likes.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                      <MessageSquare className="w-3.5 h-3.5" />
                      {fig.comments}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedFigure(fig)}
                      className="px-4 py-2 rounded-xl bg-[#282a2c] hover:bg-[#323537] text-white text-xs font-heading font-medium transition-colors"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => addToCart(fig)}
                      className="px-4 py-2 rounded-xl bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-xs font-heading font-bold transition-all shadow-[0_0_12px_rgba(139,92,246,0.3)]"
                    >
                      Pre-Order
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Community Spotlight Section */}
      <div className="flex flex-col gap-4 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2">
            <Camera className="w-5 h-5 text-[#8b5cf6]" />
            <span>Community Spotlight</span>
          </h3>
          <span className="text-xs font-mono text-[#958ea0]">#OtakuPulseVault</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {COMMUNITY_SPOTLIGHT.map((item) => (
            <div
              key={item.id}
              className="relative rounded-3xl overflow-hidden bg-[#1d2022] h-72 sm:h-80 flex flex-col justify-end p-5 bg-cover bg-center border border-white/5 shadow-xl group cursor-pointer"
              style={{ backgroundImage: `url('${item.imageUrl}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#111415] via-[#111415]/40 to-transparent group-hover:via-[#111415]/20 transition-all duration-300" />
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#8b5cf6]">
                    <Image
                      src={item.userAvatar}
                      alt={item.user}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold font-heading text-white">
                      {item.user}
                    </span>
                    <span className="text-xs text-[#4cd7f6] font-mono">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-white">
                  <Heart className="w-3.5 h-3.5 fill-[#ffb4ab] text-[#ffb4ab]" />
                  <span className="font-mono">{item.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
