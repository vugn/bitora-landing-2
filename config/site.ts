export const siteConfig = {
  name: "BITORA",
  title: "BITORA",
  description: "Next-gen chain. Real-world ready.",
  url: "https://bitoraprotocol.com",

  // Hero Section
  hero: {
    statusText: {
      desktop: "BITORA LAYER 1 BLOCKCHAIN // STATUS:",
      mobile: "BITORA L1 //",
    },
    taglines: [
      "They run on hype. We run commerce",
      "Next-gen chain. Real-world ready.",
      "Build anything. Trade instantly. Pay globally.",
      "Powered by the $BTO token on the Bitora Layer 1 chain.",
    ],
    buttons: [
      {
        text: "Launch Wallet",
        icon: "Terminal",
        variant: "primary",
        action: "launch-wallet",
      },
      {
        text: "Read Whitepaper",
        icon: "FileText",
        variant: "secondary",
        action: "whitepaper",
      },
      {
        text: "Join Ecosystem",
        icon: "Network",
        variant: "tertiary",
        action: "ecosystem",
      },
    ],
  },

  // Navigation
  navigation: {
    logo: {
      src: "/logo/vectorlogo.svg",
      alt: "Bitora",
      text: {
        desktop: "[BITORA_PROTOCOL]",
        mobile: "[BITORA]",
      },
    },
    items: [
      { id: "code-genesis", label: "Code Genesis" },
      { id: "retail-pos", label: "Retail POS" },
      { id: "dev-portal", label: "Developers" },
      { id: "wallet-neural", label: "Wallet" },
      { id: "neural-ecosystem", label: "Ecosystem" },
      { id: "exchange-neural", label: "Exchange" },
      { id: "roadmap", label: "Roadmap" },
    ],
  },

  // Live Stats Configuration
  stats: {
    baseValues: {
      btoPrice: 0.0847,
      validators: 2156,
      txVolume: 12847,
      tokensCreated: 1247,
      posLocations: 89,
      marketCap: 84700000,
      countries: 12,
    },
    updateInterval: 2000,
    variance: {
      btoPrice: 0.001,
      validators: 10,
      txVolume: 1000,
      tokensCreated: 5,
      posLocations: 3,
      marketCap: 100000,
      countries: 2,
    },
  },

  // Social Media Links
  social: {
    telegram: "https://t.me/BTOoffical",
    discord: "https://discord.gg/CUMSxXpD",
    medium: "https://medium.com/@charanfarhat",
    reddit: "https://www.reddit.com/u/Competitive-Data-703/s/laQUzhlDfY",
  },

  // Footer
footer: {
    copyright: `© ${new Date().getFullYear()} Bitora Protocol. All rights reserved.`,
    sections: {
        platform: [
            { id: "code-genesis", label: "Code Genesis" },
            { id: "retail-pos", label: "Retail POS System" },
            { id: "dev-portal", label: "Developer Portal" },
            { id: "wallet-neural", label: "Wallet Interface" },
        ],
        services: [
            { id: "neural-ecosystem", label: "Ecosystem" },
            { id: "exchange-neural", label: "Exchange Hub" },
            { id: "roadmap", label: "Roadmap" },
            { id: "support-neural", label: "Support Network" },
        ],
    },
},

  // API Endpoints (for future integration)
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "https://api.bitora.com",
    endpoints: {
      stats: "/api/stats",
      roadmap: "/api/roadmap",
      news: "/api/news",
      validators: "/api/validators",
    },
  },
};

export type SiteConfig = typeof siteConfig;
