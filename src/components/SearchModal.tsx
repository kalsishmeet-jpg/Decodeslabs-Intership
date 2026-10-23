"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { INITIAL_FIGURES, NEWS_ARTICLES, Figure } from "@/data/mockData";
import { Search, X, Sparkles, Newspaper, ArrowRight } from "lucide-react";

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, setSelectedFigure, setActiveTab } = useApp();
  const [searchTerm, setSearchTerm] = useState("");

  if (!isSearchOpen) return null;

  const filteredFigures = INITIAL_FIGURES.filter(
    (f) =>
      f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.franchise.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.maker.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredNews = NEWS_ARTICLES.filter(
    (n) =>
      n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-12 flex items-start justify-center">
      <div
        onClick={() => setIsSearchOpen(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      <div className="relative w-full max-w-xl bg-[#191c1e] border border-[#8b5cf6]/40 rounded-3xl overflow-hidden shadow-2xl z-10 animate-in fade-in zoom-in-95">
        {/* Search Input */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center gap-3 bg-[#111415]/70">
          <Search className="w-5 h-5 text-[#8b5cf6]" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search figures, anime (e.g. Gojo, Makima, JJK, Chainsaw Man)..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-[#958ea0] focus:outline-none font-medium"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="text-[#958ea0] hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-xs uppercase font-mono text-[#4cd7f6] hover:underline ml-2"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto no-scrollbar space-y-6">
          {/* Figures Section */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-[#cbc3d7]">
              <Sparkles className="w-3.5 h-3.5 text-[#8b5cf6]" />
              <span>Collectibles &amp; Figures ({filteredFigures.length})</span>
            </div>
            {filteredFigures.length === 0 ? (
              <p className="text-xs text-[#958ea0] italic">No matching figures found.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {filteredFigures.map((fig) => (
                  <div
                    key={fig.id}
                    onClick={() => {
                      setSelectedFigure(fig);
                      setIsSearchOpen(false);
                    }}
                    className="p-2.5 rounded-xl bg-[#111415] hover:bg-[#282a2c] border border-white/5 hover:border-[#8b5cf6]/40 cursor-pointer transition-all flex items-center gap-3 group"
                  >
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-[#282a2c] shrink-0">
                      <Image
                        src={fig.imageUrl}
                        alt={fig.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs font-heading font-semibold text-white truncate">
                        {fig.name}
                      </h5>
                      <div className="flex items-center justify-between text-[11px] text-[#958ea0]">
                        <span>{fig.franchise}</span>
                        <span className="text-[#8b5cf6] font-mono font-bold">
                          ${fig.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* News Section */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-[#cbc3d7]">
              <Newspaper className="w-3.5 h-3.5 text-[#06b6d4]" />
              <span>Anime News &amp; Updates ({filteredNews.length})</span>
            </div>
            {filteredNews.length === 0 ? (
              <p className="text-xs text-[#958ea0] italic">No matching news articles.</p>
            ) : (
              <div className="space-y-2">
                {filteredNews.map((news) => (
                  <div
                    key={news.id}
                    onClick={() => {
                      setActiveTab("news");
                      setIsSearchOpen(false);
                    }}
                    className="p-3 rounded-xl bg-[#111415] hover:bg-[#282a2c] border border-white/5 hover:border-[#06b6d4]/40 cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div className="flex-1 min-w-0 pr-3">
                      <span className="text-[10px] font-mono text-[#06b6d4] uppercase">
                        {news.category}
                      </span>
                      <h5 className="text-xs font-heading font-medium text-white truncate">
                        {news.title}
                      </h5>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#958ea0] group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
