"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Figure, INITIAL_FIGURES } from "@/data/mockData";

export interface CartItem {
  figure: Figure;
  quantity: number;
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: "success" | "info" | "warning";
}

interface AppContextType {
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  isWishlisted: (id: string) => boolean;
  cart: CartItem[];
  addToCart: (figure: Figure) => void;
  removeFromCart: (id: string) => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  toasts: ToastMessage[];
  addToast: (title: string, message: string, type?: "success" | "info" | "warning") => void;
  removeToast: (id: string) => void;
  activeTab: "home" | "drops" | "news" | "profile";
  setActiveTab: (tab: "home" | "drops" | "news" | "profile") => void;
  selectedFigure: Figure | null;
  setSelectedFigure: (figure: Figure | null) => void;
  reminders: string[];
  toggleReminder: (showTitle: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>(["fig-csm-makima-control", "fig-op-zoro-asura"]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [activeTab, setActiveTab] = useState<"home" | "drops" | "news" | "profile">("home");
  const [selectedFigure, setSelectedFigure] = useState<Figure | null>(null);
  const [reminders, setReminders] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const addToast = (title: string, message: string, type: "success" | "info" | "warning" = "success") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleWishlist = (id: string) => {
    const fig = INITIAL_FIGURES.find((f) => f.id === id);
    const figName = fig ? fig.name : "Item";
    setWishlist((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        addToast("Wishlist Updated", `Removed "${figName}" from wishlist radar`, "info");
        return prev.filter((item) => item !== id);
      } else {
        addToast("Added to Wishlist", `"${figName}" saved to your personal vault`, "success");
        return [...prev, id];
      }
    });
  };

  const isWishlisted = (id: string) => wishlist.includes(id);

  const addToCart = (figure: Figure) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.figure.id === figure.id);
      if (existing) {
        return prev.map((item) =>
          item.figure.id === figure.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { figure, quantity: 1 }];
    });
    addToast("Allocated Unit Claimed!", `Added "${figure.name}" to order queue.`, "success");
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.figure.id !== id));
    addToast("Order Updated", "Item removed from cart.", "info");
  };

  const cartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const cartTotal = cart.reduce((acc, curr) => acc + curr.figure.price * curr.quantity, 0);

  const toggleReminder = (showTitle: string) => {
    setReminders((prev) => {
      const exists = prev.includes(showTitle);
      if (exists) {
        addToast("Reminder Removed", `Disabled ping alert for ${showTitle}`, "info");
        return prev.filter((s) => s !== showTitle);
      } else {
        addToast("Simulcast Alert Set!", `We will ping your device when ${showTitle} airs!`, "success");
        return [...prev, showTitle];
      }
    });
  };

  return (
    <AppContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isWishlisted,
        cart,
        addToCart,
        removeFromCart,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        toasts,
        addToast,
        removeToast,
        activeTab,
        setActiveTab,
        selectedFigure,
        setSelectedFigure,
        reminders,
        toggleReminder,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        setIsSearchOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
