"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cart, removeFromCart, cartTotal, addToast } = useApp();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      addToast(
        "Order Confirmed!",
        "Pre-order allocated and added to your Vault Tracking.",
        "success"
      );
    }, 1500);
  };

  const handleClose = () => {
    setIsCartOpen(false);
    setOrderComplete(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-md transition-opacity"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#111415] border-l border-[#8b5cf6]/30 shadow-2xl flex flex-col text-[#e1e2e4]">
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#191c1e]/60">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#8b5cf6]" />
              <h3 className="font-heading font-bold text-lg text-white">Vault Order Queue</h3>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-lg text-[#958ea0] hover:text-white hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 no-scrollbar">
            {orderComplete ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 gap-4">
                <div className="w-16 h-16 rounded-full bg-[#06b6d4]/20 border border-[#06b6d4] flex items-center justify-center text-[#4cd7f6] animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold font-heading text-white">
                  Allocation Secured!
                </h4>
                <p className="text-sm text-[#cbc3d7]">
                  Your order has been logged into the Tokyo Vault distribution network. You can track its live status under the Collector Profile.
                </p>
                <div className="p-4 rounded-xl bg-[#1d2022] border border-white/10 w-full text-left text-xs space-y-1">
                  <div className="flex justify-between text-[#958ea0]">
                    <span>Confirmation ID</span>
                    <span className="font-mono text-[#4cd7f6]">#OTP-8849-JP</span>
                  </div>
                  <div className="flex justify-between text-[#958ea0]">
                    <span>Express EMS Dispatch</span>
                    <span className="text-white">Tokyo Akiba Depot</span>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="w-full mt-4 py-3 rounded-xl bg-[#8b5cf6] text-white font-heading font-semibold hover:bg-[#7c3aed] transition-colors shadow-lg"
                >
                  Return to Hub
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-3 text-[#958ea0]">
                <ShoppingBag className="w-12 h-12 stroke-[1.2px] text-[#494454]" />
                <p className="text-sm">Your order queue is currently empty.</p>
                <p className="text-xs text-[#958ea0]/70">
                  Explore trending drops or pre-orders to claim allocated figures.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {cart.map((item) => (
                  <div
                    key={item.figure.id}
                    className="p-3.5 rounded-2xl bg-[#1d2022] border border-white/5 flex gap-3.5 items-center hover:border-[#8b5cf6]/30 transition-all shadow-md"
                  >
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#282a2c] shrink-0 border border-white/10">
                      <Image
                        src={item.figure.imageUrl}
                        alt={item.figure.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#4cd7f6]">
                          {item.figure.scale} • {item.figure.franchise}
                        </span>
                        <span className="text-xs font-heading font-bold text-[#8b5cf6]">
                          ${item.figure.price.toFixed(2)}
                        </span>
                      </div>
                      <h4 className="text-sm font-heading font-semibold text-white truncate mt-0.5">
                        {item.figure.name}
                      </h4>
                      <p className="text-[11px] text-[#958ea0] truncate">
                        {item.figure.maker}
                      </p>
                      <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/5">
                        <span className="text-xs text-[#cbc3d7]">
                          Qty: <span className="text-white font-mono font-bold">{item.quantity}</span>
                        </span>
                        <button
                          onClick={() => removeFromCart(item.figure.id)}
                          className="text-[#ffb4ab] hover:text-white p-1 rounded transition-colors text-xs flex items-center gap-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* S-Tier Member Perk Callout */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#8b5cf6]/10 to-[#06b6d4]/10 border border-[#8b5cf6]/30 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#4cd7f6] shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold text-white">S-Tier Otaku Privilege:</span>
                    <span className="text-[#cbc3d7] block">
                      Free Express EMS Air Freight &amp; Zero Import Duty applied.
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          {!orderComplete && cart.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-[#191c1e]/80 flex flex-col gap-3">
              <div className="space-y-1.5 text-xs text-[#cbc3d7]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-white">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Express EMS Shipping</span>
                  <span className="font-mono text-[#4cd7f6]">FREE (S-Tier Perk)</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-white pt-2 border-t border-white/10">
                  <span>Total Due</span>
                  <span className="font-mono text-[#8b5cf6] text-base">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                disabled={isCheckingOut}
                onClick={handleCheckout}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#6d3bd7] text-white font-heading font-semibold hover:opacity-95 transition-all shadow-[0_0_20px_rgba(139,92,246,0.35)] flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {isCheckingOut ? (
                  <span>Locking In Allocation...</span>
                ) : (
                  <>
                    <span>Confirm &amp; Pre-Order</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#958ea0]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4cd7f6]" />
                <span>Authentic Manufacturer Guarantee • Tokyo Direct Dispatch</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
