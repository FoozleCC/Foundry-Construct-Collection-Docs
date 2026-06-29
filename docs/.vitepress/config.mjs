import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Foundry Construct Collection Docs",
  description: "Public documentation for Foundry Construct Collection.",
  base: "/Foundry-Construct-Collection-Docs/",
  themeConfig: {
    nav: [
      { text: "Docs", link: "/" },
      { text: "Release Notes", link: "/release-notes" },
      { text: "Demos", link: "/demos/" }
    ],
    sidebar: [
      {
        text: "Overview",
        items: [
          { text: "Home", link: "/" },
          { text: "Getting Started", link: "/getting-started" },
          { text: "Troubleshooting", link: "/troubleshooting" },
          { text: "Release Notes", link: "/release-notes" }
        ]
      },
      {
        text: "Addons",
        items: [
          { text: "Foundry Camera", link: "/addons/foundry-camera" },
          { text: "Foundry Camera Target", link: "/addons/foundry-camera-target" },
          { text: "Foundry Physics", link: "/addons/foundry-physics" },
          { text: "Foundry Physics Body", link: "/addons/foundry-physics-body" },
          { text: "Foundry Physics Character", link: "/addons/foundry-physics-character" }
        ]
      },
      {
        text: "Future",
        items: [{ text: "Demos (Planned)", link: "/demos/" }]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/FoozleCC/Foundry" }
    ]
  }
});
