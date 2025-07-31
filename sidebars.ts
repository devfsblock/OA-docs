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
      collapsed: true,
      items: ["platform/solution-overview", "platform/core-features", "platform/key-innovations"],
    },

    // Technology Section
    {
      type: "category",
      label: "Technology",
      collapsed: true,
      items: ["technology/tokenomics", "technology/decentralized-storage"],
    },

    // Market Section
    {
      type: "category",
      label: "Market",
      collapsed: true,
      items: ["market/niche-focus-areas", "market/differentiators"],
    },

    // Roadmap Section
    {
      type: "category",
      label: "Roadmap",
      collapsed: true,
      items: ["roadmaps/roadmap"],
    },

    // Conclusion
    "conclusion",
  ],
}

export default sidebars
