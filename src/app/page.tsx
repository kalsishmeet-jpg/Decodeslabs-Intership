"use client";

import React from "react";
import { AppProvider, useApp } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import CartDrawer from "@/components/CartDrawer";
import FigureDetailModal from "@/components/FigureDetailModal";
import SearchModal from "@/components/SearchModal";
import ToastContainer from "@/components/ToastContainer";
import HomeFeedTab from "@/components/tabs/HomeFeedTab";
import FigureDropsTab from "@/components/tabs/FigureDropsTab";
import AnimeNewsTab from "@/components/tabs/AnimeNewsTab";
import CollectorProfileTab from "@/components/tabs/CollectorProfileTab";

function MainContent() {
  const { activeTab } = useApp();

  return (
    <div className="min-h-screen bg-[#111415] text-[#e1e2e4] flex flex-col selection:bg-[#8b5cf6]/30">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 md:pb-16">
        {activeTab === "home" && <HomeFeedTab />}
        {activeTab === "drops" && <FigureDropsTab />}
        {activeTab === "news" && <AnimeNewsTab />}
        {activeTab === "profile" && <CollectorProfileTab />}
      </main>

      {/* Mobile Floating Bottom Bar */}
      <BottomNav />

      {/* Slide-over Cart & Modals */}
      <CartDrawer />
      <FigureDetailModal />
      <SearchModal />
      <ToastContainer />
    </div>
  );
}

export default function Home() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
