"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { LOGO_URL, USER_AVATAR } from "@/data/mockData";
import { Bell, ShoppingBag, Search, Sparkles, X, Check } from "lucide-react";

export default function Navbar() {
  const {
    activeTab,
    setActiveTab,
    cartCount,
    setIsCartOpen,
    setIsSearchOpen,
    wishlist,
  } = useApp();

  const [isNotifOpen, setIsNotifOpen] = useState(false);

  const notifications = [
    {
      id: "n1",
      title: "Flash Drop Ending Soon",
      desc: "Gojo Satoru Unlimited Void has 88 units left.",
      time: "12m ago",
      unread: true,
    },
    {
      id: "n2",
      title: "Simulcast Airing Alert",
      desc: "Jujutsu Kaisen Season 3 Episode 14 airs in 4 hours.",
      time: "1h ago",
      unread: true,
    },
    {
      id: "n3",
      title: "Tracking Update",
      desc: "Gojo Infinite Void has departed Tokyo sorting facility.",
      time: "5h ago",
      unread: false,
    },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#111415]/85 backdrop-blur-2xl border-b border-[#323537]/50">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setActiveTab("home")}
            className="flex items-center gap-3 group text-left"
          >
            <div className="relative w-9 h-9 rounded-xl overflow-hidden ring-1 ring-[#8b5cf6]/40 p-0.5 bg-[#1d2022]">
              <Image
                src={LOGO_URL}
                alt="OtakuPulse Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold font-heading tracking-wider bg-gradient-to-r from-white via-[#e1e2e4] to-[#4cd7f6] bg-clip-text text-transparent">
                OTAKUPULSE
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#8b5cf6]">
                Anime Collectibles &amp; Hub
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 ml-4 bg-[#191c1e]/70 p-1 rounded-xl border border-white/5">
            <button
              onClick={() => setActiveTab("home")}
              className={`px-4 py-1.5 rounded-lg text-sm font-heading font-medium transition-all ${
                activeTab === "home"
                  ? "bg-[#8b5cf6] text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                  : "text-[#cbc3d7] hover:text-white hover:bg-white/5"
              }`}
            >
              Home Feed
            </button>
            <button
              onClick={() => setActiveTab("drops")}
              className={`px-4 py-1.5 rounded-lg text-sm font-heading font-medium transition-all flex items-center gap-1.5 ${
                activeTab === "drops"
                  ? "bg-[#8b5cf6] text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                  : "text-[#cbc3d7] hover:text-white hover:bg-white/5"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#4cd7f6]" />
              Figure Drops
            </button>
            <button
              onClick={() => setActiveTab("news")}
              className={`px-4 py-1.5 rounded-lg text-sm font-heading font-medium transition-all ${
                activeTab === "news"
                  ? "bg-[#8b5cf6] text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                  : "text-[#cbc3d7] hover:text-white hover:bg-white/5"
              }`}
            >
              Simulcast &amp; News
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className={`px-4 py-1.5 rounded-lg text-sm font-heading font-medium transition-all ${
                activeTab === "profile"
                  ? "bg-[#8b5cf6] text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                  : "text-[#cbc3d7] hover:text-white hover:bg-white/5"
              }`}
            >
              Vault Profile
            </button>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="w-10 h-10 rounded-xl bg-[#1d2022] hover:bg-[#282a2c] border border-white/5 flex items-center justify-center text-[#cbc3d7] hover:text-white transition-colors"
            title="Search Figures & News"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsNotifOpen(!isNotifOpen)}
              className="relative w-10 h-10 rounded-xl bg-[#1d2022] hover:bg-[#282a2c] border border-white/5 flex items-center justify-center text-[#cbc3d7] hover:text-white transition-colors"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute 2 top-2 right-2 w-2 h-2 rounded-full bg-[#06b6d4] ring-2 ring-[#111415] animate-ping" />
              <span className="absolute 2 top-2 right-2 w-2 h-2 rounded-full bg-[#06b6d4]" />
            </button>

            {isNotifOpen && (
              <div className="absolute right-0 mt-3 w-80 sm:w-96 rounded-2xl bg-[#1d2022]/95 border border-[#8b5cf6]/30 backdrop-blur-2xl shadow-2xl p-4 z-50 animate-in fade-in zoom-in-95">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4 text-[#8b5cf6]" />
                    <span className="font-heading font-semibold text-white text-sm">
                      Collector Pulse Alerts
                    </span>
                  </div>
                  <button
                    onClick={() => setIsNotifOpen(false)}
                    className="text-[#958ea0] hover:text-white text-xs"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex flex-col gap-2 mt-3 max-h-72 overflow-y-auto no-scrollbar">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className={`p-3 rounded-xl transition-all ${
                        n.unread
                          ? "bg-[#282a2c]/80 border-l-2 border-[#4cd7f6]"
                          : "bg-transparent hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h5 className="text-xs font-semibold text-white font-heading">
                          {n.title}
                        </h5>
                        <span className="text-[10px] text-[#958ea0]">{n.time}</span>
                      </div>
                      <p className="text-xs text-[#cbc3d7] mt-1 leading-relaxed">{n.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative w-10 h-10 rounded-xl bg-[#8b5cf6]/15 hover:bg-[#8b5cf6]/25 border border-[#8b5cf6]/40 flex items-center justify-center text-[#d0bcff] hover:text-white transition-all shadow-[0_0_15px_rgba(139,92,246,0.15)]"
            title="View Order Queue"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-full bg-[#06b6d4] text-[#001f26] font-bold text-[10px] flex items-center justify-center ring-2 ring-[#111415] animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Profile Avatar */}
          <button
            onClick={() => setActiveTab("profile")}
            className="flex items-center gap-2 p-1 pl-1.5 rounded-full bg-[#1d2022] hover:bg-[#282a2c] border border-white/10 transition-colors"
          >
            <div className="relative w-7 h-7 rounded-full overflow-hidden ring-1 ring-[#8b5cf6]">
              <Image
                src={USER_AVATAR}
                alt="User Profile"
                width={28}
                height={28}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="hidden sm:inline text-xs font-mono font-bold text-[#4cd7f6] pr-2">
              S-TIER
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
