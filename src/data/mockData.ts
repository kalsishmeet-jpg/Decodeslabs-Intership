export interface Figure {
  id: string;
  name: string;
  franchise: string;
  maker: string;
  price: number;
  originalPrice?: number;
  scale: string;
  status: "Exclusive" | "Pre-Order" | "In Stock" | "Flash Drop" | "Limited Drop";
  stockText?: string;
  releaseDate: string;
  imageUrl: string;
  description: string;
  likes: number;
  comments: number;
  featured?: boolean;
  unitsLeft?: number;
  totalUnits?: number;
}

export interface NewsItem {
  id: string;
  title: string;
  category: "Studio Update" | "Awards" | "Manga" | "Simulcast" | "Industry";
  timeAgo: string;
  readTime: string;
  imageUrl: string;
  summary: string;
  likes?: number;
  comments?: number;
}

export interface AiringShow {
  id: string;
  title: string;
  franchise: string;
  episode: string;
  airTime: string;
  statusText: string;
  imageUrl: string;
}

export interface PreOrderItem {
  id: string;
  title: string;
  maker: string;
  scale: string;
  status: "Shipped" | "Preparing" | "Confirmed";
  estArrival: string;
  imageUrl: string;
}

export const INITIAL_FIGURES: Figure[] = [
  {
    id: "fig-edgerunners-david",
    name: "David Martinez 'Cyberware Overdrive' Deluxe Ver.",
    franchise: "Cyberpunk Edgerunners",
    maker: "Good Smile Company",
    price: 289.0,
    scale: "1/7 Scale",
    status: "Exclusive",
    stockText: "500 Units Left",
    releaseDate: "Q1 2025",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCV5t_-iTgCczaBU-rYnCUlL2GuhOpSElaQHJj7vCWpIJL-g8g75DWNANZTDyDBp_TTbs-5XmKK7IYtndlUlY0AoF1S6wUS49JVQkzXFxiJTeYnhVmhUBUNp_HwTEC6n9_dXvNvMGqUQA_csTzJwR7ZX8ezSZQR-Zgco5DdlcJb4BG3AVGQa2QwjCIqWk3ZsbsfL6spV1fnwoVbihrL-8Eckbws24qQBXRC5UyCiow2kpH2a5BI7suKaA",
    description:
      "Good Smile Company opens global pre-orders for the ultimate Edgerunners collectible featuring dynamic LED sandevistan light trails and swappable cybernetic arms.",
    likes: 4210,
    comments: 689,
    featured: true,
    unitsLeft: 88,
    totalUnits: 500,
  },
  {
    id: "fig-jjk-gojo-hollow",
    name: "Satoru Gojo: Hollow Purple Ver.",
    franchise: "Jujutsu Kaisen",
    maker: "MegaHouse",
    price: 245.0,
    scale: "1/7 Scale",
    status: "Flash Drop",
    stockText: "412 / 500 Units Claimed",
    releaseDate: "Est. Q4 2024",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyBOPlDXhyCpGWfDf0WFIe9amY0mVpBgjR0vIgxNxNREAhsYn_qK21we8CiaZKQoHi2QgTQGQLnMKTIMZ5mCEBPjp6LB0TSNN40nhx8nn70QgIiePeTxscKdNgbYQlMsZS3_Vr4DYIJzaqoLPwaN98_wxGl9YHRXynUNkiwtiZPlRSP2DSkxOrUL6eZVX9ITlwTFb2jnlkw088CuNNOemArZCw1pk21sfVda36zvcCkzCRHyn2omNIOw",
    description:
      "The highly anticipated statue features interchangeable head sculpts with unblindfolded crystalline eyes and dynamic LED base lighting simulating his Domain Expansion.",
    likes: 1420,
    comments: 342,
    unitsLeft: 88,
    totalUnits: 500,
  },
  {
    id: "fig-csm-denji-eternity",
    name: "Denji vs. Eternity Devil Masterpiece Statue",
    franchise: "Chainsaw Man",
    maker: "Prime 1 Studio",
    price: 749.0,
    scale: "1/4 Scale",
    status: "Pre-Order",
    stockText: "Limited Allocation",
    releaseDate: "Est. Q2 2025",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOE64xRSmQBR6pGqEIHopAo5nZcw1VT-m1Vqi5u0KD32P3LOM3AskMq_mLSqe568vl8KB28WvzQUa5rZ_c90YPy81Rf6rQkTBzIaT-pTPSQbnRmU6wAfd30SJVrDge_ImbACR-LIvwIw4zvzK5ev2RK3l83SGc_YTDt-8Hp1_r1zVfD_oCQa4wSaLkhndge7zrYNQHzRO8Nydrge_Isa38S7UXcvc5qF93DGjEaYtFJQyOKws8hIvESA",
    description:
      "Standing at an impressive 1/4 scale, this colossal diorama captures the raw chaotic energy of Public Safety Hunters in action with translucent blood splash resin.",
    likes: 2840,
    comments: 512,
  },
  {
    id: "fig-csm-makima-control",
    name: "Makima Control Ver.",
    franchise: "Chainsaw Man",
    maker: "eStream Shibuya Scramble",
    price: 189.99,
    originalPrice: 215.0,
    scale: "1/8 Scale",
    status: "In Stock",
    stockText: "Only 14 left in Akiba Vault",
    releaseDate: "In Stock & Ready to Ship",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlR82XcXVeMCfuDSijXNWc8ktNPjhbANCn37_l-hzithF2zTGjquroHLTJo1oG6Hnqfye1tEyqoYTRPMPEj8A5LKU7yWeqTaaSxAbqYGISHIHG95jHGeMMFxlMBjTXBE7-blabzGm-etZnfxM8RHLbdplaRCHHj-SM_d5XcPrlwRbStUqnSr7iS0dt_-HB7_OAz3CqYWhrE66vjzMz2IJsuNJaF5-UFvtG2r6gI5CoSDsIkvatbf_rGQ",
    description:
      "Wearing her iconic trench coat on a cobblestone blood-stained diorama base, capturing Makima's calm yet chilling aura with sharp, tailored fabric texturing.",
    likes: 3120,
    comments: 418,
  },
  {
    id: "fig-op-luffy-gear5",
    name: "Monkey D. Luffy Gear 5 Nika Form",
    franchise: "One Piece",
    maker: "MegaHouse Variable Action Heroes",
    price: 310.0,
    scale: "1/6 Scale",
    status: "Limited Drop",
    stockText: "VIP Early Access",
    releaseDate: "Est. Q1 2025",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4-ARi7XrtZEY-o3OqMPKxa3Zmhc0qvVn-Ce1kTawQg57BgcJhTlz6BDh9iSRYXg8v2sKUxm8TOFdKpLy3uMJWuK1SAVwoyKxqMTkok5xXxqMZm00eid3UNfRuP9bShwzCENneDrd-Ooi6wk10H1n_4VUwcsfyg91PMeju0vZk088PQJ441nqYjUiDk8e7p0j4uzy-fFU3g_JcTaRuVQ0O2HHwDx3g7YX1zo-iEOBvTehnCFOcroS54g",
    description:
      "Surrounded by swirling white comic clouds and pearlized translucent lightning, Luffy's awakened joyful sun god warrior manifestation is rendered with supreme fidelity.",
    likes: 5410,
    comments: 924,
  },
  {
    id: "fig-op-zoro-asura",
    name: "Roronoa Zoro Demon Slash Asura",
    franchise: "One Piece",
    maker: "Bandai Spirits Tamashii",
    price: 240.0,
    originalPrice: 260.0,
    scale: "1/7 Scale",
    status: "In Stock",
    stockText: "Only 3 Left",
    releaseDate: "In Stock",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5zy_AjpUZ8SwJi0DPsvnX_3Izx4iMTAQ9UOxnHRRDhPYoLvJmPSMLvKSssvZdOSIpdzCZRkDf6ZeUX3CJPvDyU-0470PWZzbya3cI6b7fOTTRt3oDSmHiDLAXKco8IVh8DhsK8P1O8GYvWd7Klfn8TZHYuzjdwQFjkUpdcQUkzdGVNLjo8BsFOQWNJRYB-J0SRX3mdOcNsBIgr_cOHQq9DyyTUmDMjls36Q1Jfj22dz4uCROTGF69tw",
    description:
      "Triple-headed, nine-sword illusion style sculpted with neon spectral aura trails and battle-damaged wano armor.",
    likes: 1980,
    comments: 264,
  },
];

export const NEWS_ARTICLES: NewsItem[] = [
  {
    id: "news-mappa-pipeline",
    title: "MAPPA Announces Revolutionary Pipeline for Upcoming Projects",
    category: "Studio Update",
    timeAgo: "3m ago",
    readTime: "4 min read",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBs_JWQ6nf8cuXgkuacYkuBb3ZfJuM9yYBnaTyFBmYL8H7bAn0fclRsfAKjx1szl8czMcalMPvkbnP31ZZBDeN2xnuUKY-EimKTVEZ9w6Uv21zi9DEu8q5Kr92nl5KFOYbfRyfnNns0hoR8mpiaWug3vxHlGZL6bo80InjZqVKwW4TzcbRS_jW0bGXfgYpw1Nb7mfx8dEhPGpaRqwQVp6I7Bl2EbloeBeV4mabfqblWOeffzVTdM8R3rQ",
    summary:
      "At their annual creator showcase, MAPPA revealed enhanced in-house CGI blending tools and improved artist schedules for Chainsaw Man and Hell's Paradise continuations.",
  },
  {
    id: "news-tokyo-anime-awards",
    title: "Tokyo Anime Awards 2025: Complete Nominees List Revealed",
    category: "Awards",
    timeAgo: "1h ago",
    readTime: "6 min read",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtrMzGJL9pN6Z3F_OSFFr8nxUnDG8nInwbzR_ZnbHD9l4ZdNbAI-X7YJzYogSgXO0eMCAMbh2ITT5N7tngU4HmFqpJRKVjf-jnKb6dW3QJryEOpAvlyWmvFsIf9B94bDwA9S3kIaxVDMhhcrmPFfB4PwcAUKbrlnm43473apDZ6205Gj_nWLmqMYHyK773nKcX-qbuC9WrUbtlwbWfJ8eKV92gjh5pYbFe5xaRNpjX05L9cEsvEXs8sw",
    summary:
      "The prestigious Tokyo Anime Awards committee released this year's top anime movie and television contenders, highlighting boundary-pushing independent works.",
  },
  {
    id: "news-bluelock-35m",
    title: "Blue Lock Manga Crosses 35 Million Copies Sold Worldwide",
    category: "Manga",
    timeAgo: "3h ago",
    readTime: "2 min read",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJBWp-HQi5P2H0zYj2ckXt9NluUefChVUTp90-g-imfGrjAW7aRb1xY9_yU0J9nCbCmXnAERfgQ3mpMbp9BKLCrunYzNOnB_bsZdE2xHrkEFQ4MVAw3X1uI7UlC0YtLbRELdhobY5KpNFCkFpuZxXJCjyAWesxeQOqtsVdIp7MMUIGKVcMfQjaRMORO848WTDEEikBb3ts_KJKC9UzESPANZ6SbhLgXNS_bDhjfHmY8VVIlodqkQnRhg",
    summary:
      "Muneyuki Kaneshiro and Yusuke Nomura's smash soccer thriller continues its phenomenal commercial trajectory following recent movie box-office milestones.",
  },
];

export const AIRING_SCHEDULE: AiringShow[] = [
  {
    id: "show-ds",
    title: "Hashira Training Arc",
    franchise: "Demon Slayer",
    episode: "Ep. 08",
    airTime: "Wed 23:30",
    statusText: "Airing Today",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC77kay9V9ApUX6Pz7WRtusrHsM9xj9zeuXJi21iWsmQM6FMJqmIa1v5y0k0_KZxmQQN8Q0IPeiOd3WFH8aZplD3qp9tn4qR-ZKOGe5UH73tFpGiHKfvZBL40y7abpA9KUinMudLDhLuUqM84dIpafzy-CzhfUB5Ok8xidfGa5CNHoUpr06T87Kix_yMF47IDC7cx5Jab4AyihyubbAs7f_AKP3CU5H1HNiRBw4oYFhRWaKqU8ZyEbc7w",
  },
  {
    id: "show-csm",
    title: "Reze Arc Movie Prep",
    franchise: "Chainsaw Man",
    episode: "Special",
    airTime: "Thu 00:00",
    statusText: "In 2 Days",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5_IXjA9Iuy5yc5YHwHVfdDkD1kQpFC7w1Fb9bwvgjWkTUGpCFHyKAHPxWmKrlwP4vDcAdIVh0eNlqWqdnzHZNcFMFY783sKwTagFfmcOkCnRV4fslrF67CQzfghqAyUTk2APyLAiARzMUsMEMxRsBlZV1xWp5L7xoMmhiEcjz0SMu2G6syt30aoJqUxmrlFPesuBLpn0whWUbEVEx4z-2s6fjhUjK6Li0OgcZ8bJdrHEy4HzBXBczjA",
  },
  {
    id: "show-sl",
    title: "Season 2: Arise",
    franchise: "Solo Leveling",
    episode: "Ep. 02",
    airTime: "Sat 18:00",
    statusText: "In 4 Days",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDceK1OxsO7HVyo4he_R1GLUEllRGdrPFzw7f8xF_Tbp7y_OS9qI8R7eR7fAQz8r6D1O3aypfMNTwX3Qxz9XWYiuOmelJcKSo7OhnxiITErjW3v8DUXR-jA3oMsyBHYy9Wfl3SCOCl3B6IfGE9bvzKIUBOlKEj5bEJuEovsL-kMuI-Bi6Vq8CReKIOVaSSm0kkfgv2y9cFUBdlWM5vbOeXXhWSkyoqOU4Wmel2QtFfFTyydzFeUnjS65Q",
  },
];

export const ACTIVE_PREORDERS: PreOrderItem[] = [
  {
    id: "po-1",
    title: "Gojo Satoru - Infinite Void ver.",
    maker: "Shibuya Scramble",
    scale: "1/7 Scale",
    status: "Shipped",
    estArrival: "Est. Oct 28",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCA7lqUPv2PLdwQfXBAaiy7qV2PPiPEsIijVji6_cNSKf1WETH7dBBZj9MrDcoizj8KDJaNbiB_AvRUUBB5XoYetwCVui2MaqwjcP0dERs7Ljhbe_BhStlEDEe7E_rsYBl0MeD1lYviWMcoEIrrFjk31j543CExFynCz7UHung3xOHegLCWPvzheWxWBVnjVA7W-ZD6EMsAvgK21aJs-qqXLZZ1wDNDUUQmmXSDQEfgDTaSZojwNkhKXQ",
  },
  {
    id: "po-2",
    title: "Power - Blood Fiend Edition",
    maker: "Good Smile Company",
    scale: "1/8 Scale",
    status: "Preparing",
    estArrival: "Est. Nov 14",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2D9MQRrvs_koMCkR2-V_WDYYEWxpu1-VwdvuE5t6h6B-9L4pC45hqJtqw2FV2iSj3D8l3viXoK5RLlsb8v4TolFNDXqqbph0XUGYj2mlH2OLybXJZeAOYmI4PqDIT_G1J8zZy7ss6Z6VgIEzcUG7JolHQYP2GEDf1xU0n3tK96ozkJ1JRST9y7f82CF4Y7dYoDOAzxWX3PDe2FVDEU8UfnG09BQ2qnFfcub7rrF977I4E36ykhG2Mxw",
  },
];

export const COMMUNITY_SPOTLIGHT = [
  {
    id: "spotlight-1",
    user: "@EvaCollector",
    subtitle: "Tokyo-3 Setup",
    userAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCss_ZBQdh26WH_tqaUbzMj8VIellWR3ZW8nnqyXuCpeWpoLvwWyClQ0v0DgMe5MUPhng5LjDjEeZ7RuCtEqk8M0VoLBFWi78IwFUq3pt9NdtjQpYeUEATyck0CO1_3V0byd6Td1AIq8mspn-5ILVM0vxwg2zZckykGg6MKgIofQvwlNF2fdCAPcjjgvkj7ONVCGZga6tnFGY-pPDL8ANWXoj6brU5V9UoqVebvkcfjiZHUd2KjqZTyWA",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnevjQ9GKAGUcmXVwKJnVFwJpmzUTwfrjONWBg6j2JSnqDVriwEsdHw7-cXRqo3J5T1hcK4RlUsK94VORrJnhIMXlHkV8n2Yv71z_OMBNaOZ99DIdcjwwho6n1zzYCBP32gzaKCTmf9T_uNku51im22g_AZgqn5xjrrRPgs-Cyy85X-PVgRvFMNdS5Adj950BvfSHXbqtN7zgiWwHqNpsUoWfTsQXzr1_TBPyest5vYz4IJTRGsISHAA",
    likes: 1240,
    tags: ["Evangelion", "DetolfMod", "LEDSetup"],
  },
  {
    id: "spotlight-2",
    user: "@NendoLife",
    subtitle: "Akihabara Mini",
    userAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClq-E5vEloVDgNdNkP3AxFU9hsrrms3oVywMFmeWPlZ3CDNoSLetZSOsj7VWSOOUxfUI3HdJLIxHQI78yPsC96-T61YGvMlGNWtB7B9cgiyRAFfKCTkpSkdGRtQNS-dki_LF5g6kxcFnwSUn9Z2o7yNqmpflIMKEpUiClkrtWqNtQGCaDn1JjsFfwIs2GPchHmVetZTsrMhz6mO5eht0hA2dQU3nu_btkFo4QBUTPv5ndpdTcocOdePQ",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBxAROrtCcAOuK9dNfI_jhmyIJLIH-omJKY29RKtwZom-tsef-uEfgDQ1VW1tDUyr62Ci58s9DrZbeHXLpXvnDJQxz9F4VdtRJ_RShmLpQaWlNVqJTJwe8k9xGQvL3LbheKfGHst8RFGZSJI4XR1YN_2Rl26O-hHTLDnPaV9uMhbCrsiZyljyxKuvwlkym7AbLfrKCL8InOM_e5eHzBKN4cEzMZ0S33CPV4XXJrQNWZtw4wxiNU6CZrig",
    likes: 890,
    tags: ["Nendoroid", "ToyPhotography", "Diorama"],
  },
];

export const LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBE1YOUCOn3OyW42ircjtHn4GhtmpG_65Mil0_dxWLZyTu8HEqhd9pUOfWetfnrDAcOuaJ_edvih1_5is2kG2jbHUrrKvWFt7-fp1LmP1yxlGPmgEdD53_Sh341oumsovBarDhGMPArtgRhjlTJ7b_ElTfyZO49NKXmWc89pxCBsSQu_ml69RWUJhzmf2gJPCqZ1nblvsKqEdPKsYOeWLVwsLVz29o0_k9qNC1kqngbNKaqrxUAJiGs4w";

export const USER_AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBG1_GpdwigeA9nHHSrhbM1HBy5cTe6KxJxOHESYWPY6WfJMqLPSDTZljMYzKTMYTBAZwdLEQM9u5gy9KR8T5BoIwMyFz8QttOfAvU9polWvRTMu6a58iMcW240vhOzNQIUGzSP39EdlqgqCuuwPIaA1pdpTBji-86y9hUXzrha-Zgy2YCsLbJTOeaDnpOA5BVYNNAMYHEifDVElRxQ8QLX90Q4ILDyhsU52_v-jQFawNfnOPimLIr0TQ";
