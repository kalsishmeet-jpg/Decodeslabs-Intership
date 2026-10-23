"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { USER_AVATAR, ACTIVE_PREORDERS, INITIAL_FIGURES } from "@/data/mockData";
import {
  Settings,
  Package,
  Truck,
  Heart,
  Sparkles,
  Zap,
  Headphones,
  CheckCircle,
  ExternalLink,
  ShoppingBag,
  Trash2,
} from "lucide-react";

export default function CollectorProfileTab() {
  const { wishlist, toggleWishlist, addToCart, addToast } = useApp();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [userName, setUserName] = useState("Kaito_Pulse");
  const [userLocation, setUserLocation] = useState("Tokyo Vault");

  const wishlistedFigures = INITIAL_FIGURES.filter((f) => wishlist.includes(f.id));

  return (
    <div className="flex flex-col gap-6 lg:gap-8 pb-12">
      {/* Profile & Membership Badge Header */}
      <div className="relative overflow-hidden rounded-3xl bg-[#1d2022] p-6 sm:p-8 border border-[#8b5cf6]/30 shadow-2xl">
        {/* Ambient glow overlays */}
        <div className="absolute -right-16 -top-16 w-56 h-56 bg-[#8b5cf6]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-56 h-56 bg-[#06b6d4]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="relative">
              <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden ring-2 ring-[#8b5cf6] shadow-xl">
                <Image
                  src={USER_AVATAR}
                  alt="Collector Avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 bg-[#8b5cf6] text-white text-xs font-mono font-bold px-2 py-0.5 rounded-full shadow-md">
                S
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  {userName}
                </h2>
                <span className="bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 text-[#d0bcff] text-xs font-mono font-bold px-2.5 py-0.5 rounded-full">
                  S-Tier Otaku
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#cbc3d7] mt-1 font-mono">
                Member since Nov 2022 • {userLocation}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            className="p-3 rounded-2xl bg-[#111415] hover:bg-[#282a2c] text-[#cbc3d7] hover:text-white border border-white/10 transition-colors self-end sm:self-center"
            title="Collector Preferences"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Settings Dialog */}
        {isSettingsOpen && (
          <div className="mt-4 p-4 rounded-2xl bg-[#111415] border border-white/10 text-xs space-y-3 animate-in fade-in">
            <h5 className="font-heading font-semibold text-white">Profile Preferences</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[#958ea0] block mb-1">Display Handle</label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full bg-[#1d2022] border border-white/10 rounded-xl px-3 py-2 text-white font-mono"
                />
              </div>
              <div>
                <label className="text-[#958ea0] block mb-1">Vault Region</label>
                <input
                  type="text"
                  value={userLocation}
                  onChange={(e) => setUserLocation(e.target.value)}
                  className="w-full bg-[#1d2022] border border-white/10 rounded-xl px-3 py-2 text-white font-mono"
                />
              </div>
            </div>
            <button
              onClick={() => {
                setIsSettingsOpen(false);
                addToast("Profile Updated", "Preferences saved to local vault.", "success");
              }}
              className="px-4 py-2 rounded-xl bg-[#8b5cf6] text-white font-heading font-bold"
            >
              Save Settings
            </button>
          </div>
        )}

        {/* Tier Progress Bar */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-2">
          <div className="flex justify-between text-xs sm:text-sm font-mono">
            <span className="text-[#958ea0]">XP to God-Tier Vault VIP</span>
            <span className="text-[#4cd7f6] font-bold">8,420 / 10,000 XP (84%)</span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-[#111415] overflow-hidden p-0.5 border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] rounded-full shadow-[0_0_12px_rgba(139,92,246,0.6)]"
              style={{ width: "84%" }}
            />
          </div>
        </div>
      </div>

      {/* User Stats Summary Grid */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-[#1d2022] rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center border border-white/5 shadow-md">
          <Package className="w-6 h-6 text-[#8b5cf6] mb-1.5" />
          <span className="text-xl sm:text-3xl font-bold font-heading text-white">42</span>
          <span className="text-[10px] sm:text-xs font-mono uppercase text-[#958ea0] tracking-wider mt-0.5">
            Figures Owned
          </span>
        </div>

        <div className="bg-[#1d2022] rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center border border-white/5 shadow-md">
          <Truck className="w-6 h-6 text-[#06b6d4] mb-1.5" />
          <span className="text-xl sm:text-3xl font-bold font-heading text-white">5</span>
          <span className="text-[10px] sm:text-xs font-mono uppercase text-[#958ea0] tracking-wider mt-0.5">
            Active Pre-orders
          </span>
        </div>

        <div className="bg-[#1d2022] rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center border border-white/5 shadow-md">
          <Heart className="w-6 h-6 text-[#ffb4ab] mb-1.5 fill-current" />
          <span className="text-xl sm:text-3xl font-bold font-heading text-white">
            {wishlist.length}
          </span>
          <span className="text-[10px] sm:text-xs font-mono uppercase text-[#958ea0] tracking-wider mt-0.5">
            Wishlist Radar
          </span>
        </div>
      </div>

      {/* Active Pre-orders Tracking Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2">
            <Truck className="w-5 h-5 text-[#06b6d4]" />
            <span>Active Pre-orders Tracking</span>
          </h3>
          <span className="text-xs font-mono text-[#06b6d4]">5 in transit / prep</span>
        </div>

        <div className="flex flex-col gap-3">
          {ACTIVE_PREORDERS.map((item) => (
            <div
              key={item.id}
              className="bg-[#1d2022] rounded-2xl p-4 sm:p-5 flex gap-4 items-center border border-white/5 hover:border-[#06b6d4]/40 transition-all shadow-md group"
            >
              <div
                className="w-20 h-20 rounded-xl bg-cover bg-center shrink-0 border border-white/10"
                style={{ backgroundImage: `url('${item.imageUrl}')` }}
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full border ${
                      item.status === "Shipped"
                        ? "bg-[#06b6d4]/15 border-[#06b6d4]/30 text-[#4cd7f6]"
                        : "bg-[#8b5cf6]/15 border-[#8b5cf6]/30 text-[#d0bcff]"
                    }`}
                  >
                    {item.status}
                  </span>
                  <span className="text-xs font-mono text-[#958ea0]">
                    {item.estArrival}
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold font-heading text-white truncate mt-1">
                  {item.title}
                </h4>
                <p className="text-xs text-[#958ea0] truncate">{item.maker}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wishlist Radar with Price Drops & Stock Alerts */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#ffb4ab] fill-current" />
            <span>Wishlist Radar</span>
          </h3>
          <span className="text-xs font-mono text-[#8b5cf6]">
            {wishlist.length} monitored
          </span>
        </div>

        {wishlistedFigures.length === 0 ? (
          <div className="p-8 rounded-2xl bg-[#1d2022] text-center text-[#958ea0] border border-white/5">
            <Heart className="w-8 h-8 mx-auto mb-2 text-[#494454]" />
            <p className="text-sm">No items currently on your radar.</p>
            <p className="text-xs mt-1">Tap the heart on any figure drop to monitor its status!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {wishlistedFigures.map((fig) => (
              <div
                key={fig.id}
                className="bg-[#1d2022] rounded-2xl overflow-hidden flex flex-col border border-white/5 hover:border-[#8b5cf6]/40 transition-all shadow-md group"
              >
                <div
                  className="relative h-44 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${fig.imageUrl}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d2022] via-transparent to-transparent opacity-60" />

                  {fig.originalPrice && (
                    <div className="absolute top-3 right-3 bg-[#ffb4ab] text-[#690005] text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shadow-lg">
                      -15% Drop
                    </div>
                  )}

                  <button
                    onClick={() => toggleWishlist(fig.id)}
                    className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-[#ffb4ab]"
                    title="Remove from Wishlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-4 flex flex-col gap-2 flex-1 justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#06b6d4]">
                      {fig.stockText || "Tokyo Vault"}
                    </span>
                    <h4 className="text-sm font-bold font-heading text-white truncate mt-0.5">
                      {fig.name}
                    </h4>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-base font-bold font-heading text-[#8b5cf6]">
                        ${fig.price.toFixed(2)}
                      </span>
                      {fig.originalPrice && (
                        <span className="text-xs text-[#958ea0] line-through">
                          ${fig.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(fig)}
                    className="w-full py-2 px-3 rounded-xl bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-xs font-heading font-bold transition-all shadow-[0_0_12px_rgba(139,92,246,0.3)] flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Claim Pre-order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Membership Benefits & Rewards Card */}
      <div className="bg-gradient-to-br from-[#1d2022] via-[#282a2c] to-[#1d2022] rounded-3xl p-6 sm:p-8 border border-[#8b5cf6]/40 shadow-2xl relative overflow-hidden flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 flex items-center justify-center text-[#8b5cf6]">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
              S-Tier Collector Privileges
            </h3>
            <p className="text-xs sm:text-sm text-[#cbc3d7]">
              All VIP perks unlocked for active vault members
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-[#111415]/70 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 border border-white/5">
            <Zap className="w-5 h-5 text-[#8b5cf6] shrink-0" />
            <span className="text-xs sm:text-sm text-white font-medium">
              24h Early Drop Access (VIP Queue)
            </span>
          </div>

          <div className="bg-[#111415]/70 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 border border-white/5">
            <Truck className="w-5 h-5 text-[#06b6d4] shrink-0" />
            <span className="text-xs sm:text-sm text-white font-medium">
              Free Express EMS Air Freight
            </span>
          </div>

          <div className="bg-[#111415]/70 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 border border-white/5">
            <CheckCircle className="w-5 h-5 text-[#8b5cf6] shrink-0" />
            <span className="text-xs sm:text-sm text-white font-medium">
              10% Vault Cashback on all releases
            </span>
          </div>

          <div className="bg-[#111415]/70 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 border border-white/5">
            <Headphones className="w-5 h-5 text-[#06b6d4] shrink-0" />
            <span className="text-xs sm:text-sm text-white font-medium">
              VIP Japanese Concierge Support
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
