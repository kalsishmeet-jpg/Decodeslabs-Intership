"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { Home, Zap, Newspaper, User } from "lucide-react";

export default function BottomNav() {
  const { activeTab, setActiveTab } = useApp();

  const navItems = [
    { key: "home", label: "Home", icon: Home },
    { key: "drops", label: "Drops", icon: Zap },
    { key: "news", label: "News", icon: Newspaper },
    { key: "profile", label: "Profile", icon: User },
  ] as const;

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#111415]/95 backdrop-blur-2xl border-t border-[#323537]/80 pb-safe shadow-[0_-4px_25px_rgba(0,0,0,0.5)]">
      <div className="flex justify-around items-center h-18 px-2 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.key;
          return (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`flex flex-col items-center justify-center gap-1 w-16 h-14 rounded-2xl transition-all duration-200 ${
                isActive
                  ? "text-[#8b5cf6] bg-[#8b5cf6]/15 font-bold shadow-[0_0_15px_rgba(139,92,246,0.25)] scale-105"
                  : "text-[#cbc3d7]/70 hover:text-white"
              }`}
            >
              <Icon
                className={`w-5 h-5 transition-transform ${
                  isActive ? "stroke-[2.5px] scale-110 text-[#8b5cf6]" : "stroke-[1.8px]"
                }`}
              />
              <span className="text-[11px] font-heading font-medium tracking-wide">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
