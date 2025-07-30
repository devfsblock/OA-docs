import type { SidebarsConfig } from "@docusaurus/plugin-content-docs"

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    

    // Getting Started Section
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: ["getting-started/introduction", "getting-started/problem-statement"],
    },

    // Platform Section
    {
      type: "category",
      label: "Platform",
      collapsed: false,
      items: ["platform/solution-overview", "platform/core-features", "platform/key-innovations"],
    },

    // Technology Section
    {
      type: "category",
      label: "Technology",
      collapsed: false,
      items: ["technology/tokenomics", "technology/decentralized-storage"],
    },

    // Market Section
    {
      type: "category",
      label: "Market",
      collapsed: false,
      items: ["market/niche-focus-areas", "market/differentiators"],
    },

    // Roadmap Section
    {
      type: "category",
      label: "Roadmap",
      collapsed: false,
      items: ["roadmap/roadmap"],
    },

    // Conclusion
    "conclusion",
  ],
}

export default sidebars
