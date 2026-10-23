"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export default function ToastContainer() {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl bg-[#1d2022]/95 border border-[#8b5cf6]/40 backdrop-blur-xl shadow-2xl text-[#e1e2e4] transition-all duration-300 animate-in slide-in-from-right-8"
        >
          {toast.type === "success" && (
            <CheckCircle2 className="w-5 h-5 text-[#4cd7f6] shrink-0 mt-0.5" />
          )}
          {toast.type === "info" && (
            <Info className="w-5 h-5 text-[#8b5cf6] shrink-0 mt-0.5" />
          )}
          {toast.type === "warning" && (
            <AlertCircle className="w-5 h-5 text-[#ffb4ab] shrink-0 mt-0.5" />
          )}
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold font-heading text-white">{toast.title}</h4>
            <p className="text-xs text-[#cbc3d7] mt-0.5 leading-relaxed">{toast.message}</p>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-[#958ea0] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
