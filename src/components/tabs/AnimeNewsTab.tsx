"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { NEWS_ARTICLES, AIRING_SCHEDULE } from "@/data/mockData";
import {
  Clock,
  Bell,
  BellRing,
  Bookmark,
  Calendar,
  Sparkles,
  Flame,
  ThumbsUp,
  MessageCircle,
  Share2,
} from "lucide-react";

export default function AnimeNewsTab() {
  const { toggleReminder, reminders, addToast } = useApp();
  const [discussionLikes, setDiscussionLikes] = useState(342);
  const [hasLikedDiscussion, setHasLikedDiscussion] = useState(false);
  const [bookmarkedArticles, setBookmarkedArticles] = useState<string[]>([]);

  const isReminderSet = reminders.includes("Jujutsu Kaisen Season 3 Episode 14");

  const toggleBookmark = (id: string) => {
    setBookmarkedArticles((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        addToast("Bookmark Removed", "Article removed from reading list", "info");
        return prev.filter((item) => item !== id);
      } else {
        addToast("Saved to Reading List", "Article bookmarked for later", "success");
        return [...prev, id];
      }
    });
  };

  const handleLikeDiscussion = () => {
    if (!hasLikedDiscussion) {
      setDiscussionLikes((prev) => prev + 1);
      setHasLikedDiscussion(true);
      addToast("Upvoted Take", "You supported OtakuPulse_Meg's sakuga analysis!", "success");
    } else {
      setDiscussionLikes((prev) => prev - 1);
      setHasLikedDiscussion(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 lg:gap-8 pb-12">
      {/* Top Banner / Live Simulcast Hero */}
      <div className="relative w-full rounded-3xl bg-[#1d2022] p-6 sm:p-8 overflow-hidden border border-[#8b5cf6]/40 shadow-2xl group">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-cxbnRXR6KM2qoBJj6TRsA_EnGFduoVtdj3wlXJ6Na612FCA7cJDCd5CISy5gC6KPoqRNHVVc3tXI4iYlLxD8_oum9dxhPwyuNUySgJPYj8rFX-MpjFAL9tiuksAj-N__dxA-lJZB0MAC_dQdhkjvD9RbtKLvDUL-tt8dTyrCoYC-nu2pgTIAmwEQawS52l1RQOX7GKZew-SEt804fsj24_TrGAKuQvDFCxlSWCB-Jv8lkJvOPQub0g')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d2022] via-[#1d2022]/90 to-transparent" />

        <div className="relative z-10 flex flex-col gap-4 max-w-xl">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="px-3 py-1 rounded-full bg-[#8b5cf6] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-lg">
              Simulcast Live
            </span>
            <div className="flex items-center gap-1.5 text-[#06b6d4] text-xs font-mono font-semibold bg-black/40 px-3 py-1 rounded-full border border-[#06b6d4]/30">
              <Clock className="w-3.5 h-3.5" />
              <span>Next Drop in 04h 12m</span>
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-1.5">
              Jujutsu Kaisen Season 3
            </h2>
            <p className="text-xs sm:text-sm text-[#cbc3d7] leading-relaxed">
              Episode 14: &ldquo;The Shibuya Incident - Gate Open&rdquo; drops tonight with exclusive English sub &amp; dub audio tracks.
            </p>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => toggleReminder("Jujutsu Kaisen Season 3 Episode 14")}
              className={`flex-1 py-3 px-4 rounded-xl font-heading font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
                isReminderSet
                  ? "bg-[#06b6d4] text-[#001f26] shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  : "bg-[#8b5cf6] text-white hover:bg-[#7c3aed] shadow-[0_0_20px_rgba(139,92,246,0.35)]"
              }`}
            >
              {isReminderSet ? (
                <>
                  <BellRing className="w-4 h-4 animate-bounce" />
                  <span>Alert Active!</span>
                </>
              ) : (
                <>
                  <Bell className="w-4 h-4" />
                  <span>Remind Me</span>
                </>
              )}
            </button>

            <button
              onClick={() => toggleBookmark("jjk-s3-hero")}
              className="py-3 px-4 rounded-xl bg-[#111415] hover:bg-[#282a2c] text-white font-heading font-medium text-xs sm:text-sm flex items-center justify-center gap-2 border border-white/10 transition-colors"
            >
              <Bookmark
                className={`w-4 h-4 ${
                  bookmarkedArticles.includes("jjk-s3-hero") ? "fill-white" : ""
                }`}
              />
              <span>{bookmarkedArticles.includes("jjk-s3-hero") ? "Saved" : "Save"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Airing Schedule Carousel */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#8b5cf6]" />
            <span>Weekly Airing Schedule</span>
          </h3>
          <span className="text-xs font-heading font-semibold text-[#8b5cf6]">Tokyo JST Broadcast</span>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
          {AIRING_SCHEDULE.map((show) => (
            <div
              key={show.id}
              className="shrink-0 w-60 sm:w-64 rounded-2xl bg-[#1d2022] p-4 flex flex-col gap-3 border border-white/5 hover:border-[#8b5cf6]/40 transition-all shadow-md group"
            >
              <div
                className="relative w-full h-36 rounded-xl bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url('${show.imageUrl}')` }}
              >
                <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded-lg bg-black/70 backdrop-blur-md text-[#4cd7f6] text-xs font-mono font-bold border border-[#06b6d4]/30">
                  {show.airTime}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8b5cf6] font-bold">
                  {show.franchise}
                </span>
                <h4 className="text-sm font-bold font-heading text-white truncate mt-0.5">
                  {show.title}
                </h4>
              </div>

              <div className="flex items-center justify-between text-xs text-[#958ea0] pt-1 border-t border-white/5">
                <span className="font-mono text-white">{show.episode}</span>
                <span className="text-[#4cd7f6] font-medium">{show.statusText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Breaking Industry News */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#06b6d4]" />
            <span>Breaking Industry News</span>
          </h3>
          <span className="text-xs font-mono text-[#958ea0]">Live Wire</span>
        </div>

        <div className="flex flex-col gap-3">
          {NEWS_ARTICLES.map((article) => {
            const isBookmarked = bookmarkedArticles.includes(article.id);
            return (
              <div
                key={article.id}
                className="rounded-2xl bg-[#1d2022] p-4 sm:p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center border border-white/5 hover:border-[#8b5cf6]/30 hover:bg-[#282a2c]/60 transition-all shadow-md group"
              >
                <div
                  className="w-full sm:w-28 h-28 rounded-xl bg-cover bg-center shrink-0 border border-white/10"
                  style={{ backgroundImage: `url('${article.imageUrl}')` }}
                />

                <div className="flex flex-col flex-1 min-w-0 justify-between gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#8b5cf6]/20 text-[#d0bcff] text-[10px] font-mono uppercase font-bold">
                      {article.category}
                    </span>
                    <span className="text-xs text-[#958ea0]">{article.timeAgo}</span>
                  </div>

                  <h4 className="text-base font-bold font-heading text-white group-hover:text-[#4cd7f6] transition-colors line-clamp-1">
                    {article.title}
                  </h4>

                  <p className="text-xs text-[#cbc3d7] line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs text-[#958ea0]">
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5 text-[#8b5cf6]" />
                      {article.readTime}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleBookmark(article.id)}
                        className="p-1 rounded hover:text-white transition-colors"
                        title="Bookmark Article"
                      >
                        <Bookmark
                          className={`w-4 h-4 ${isBookmarked ? "fill-white text-white" : ""}`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Community Review and Discussion Highlights */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#8b5cf6]" />
            <span>Community Hot Takes</span>
          </h3>
          <span className="text-xs font-mono text-[#06b6d4]">#jjk-spoilers</span>
        </div>

        <div className="rounded-3xl bg-[#191c1e] p-5 sm:p-6 flex flex-col gap-4 border border-[#8b5cf6]/30 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full bg-cover bg-center ring-2 ring-[#8b5cf6]"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvfOZMBuJxLhxJz-XNpWlCauE3QqJqpRrFuSmDdU4PiRo97jLU4ZfqU4-ZcMq6vlA0FPE13hb1rJ2fUg1zRe1CHq4_Hbb5FpYLX5ReVue1LIT2FcsUAkrb58HW3b7kq51yk_smGdD35yuR7Lee2merkZUuxGY9L1NIuXzEERYpZ_yBQufhQ7lv5AEJzE1WkeaMQg5Ic_cTAlPR7mp7VsxdOf5aNqS7DF8erQP6rp53QtZb5xLJeWEQMQ')`,
                }}
              />
              <div>
                <h5 className="text-sm font-bold font-heading text-white">OtakuPulse_Meg</h5>
                <span className="text-[11px] text-[#958ea0]">25 mins ago • Shibuya Arc Thread</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-[#8b5cf6] bg-[#8b5cf6]/10 px-3 py-1 rounded-full border border-[#8b5cf6]/30 text-xs font-mono font-bold">
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>Hot Take</span>
            </div>
          </div>

          <p className="text-sm text-[#e1e2e4] leading-relaxed italic bg-[#111415]/60 p-4 rounded-2xl border border-white/5">
            &ldquo;That sakuga sequence in the latest Jujutsu Kaisen episode was genuinely otherworldly. MAPPA outdid themselves on the choreography and pacing. What did everyone else think about the sound design during the domain expansion?&rdquo;
          </p>

          <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs text-[#958ea0]">
            <div className="flex items-center gap-4">
              <button
                onClick={handleLikeDiscussion}
                className={`flex items-center gap-1.5 transition-colors ${
                  hasLikedDiscussion ? "text-[#4cd7f6] font-bold" : "hover:text-white"
                }`}
              >
                <ThumbsUp
                  className={`w-4 h-4 ${hasLikedDiscussion ? "fill-[#4cd7f6]" : ""}`}
                />
                <span>{discussionLikes}</span>
              </button>

              <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>84 Replies</span>
              </button>

              <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>

            <span className="text-[10px] font-mono text-[#8b5cf6] uppercase tracking-wider font-semibold">
              Verified Anime Critic
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
