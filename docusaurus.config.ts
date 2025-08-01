import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

const config: Config = {
  title: "OanicAI Docs",
  tagline: "Revolutionizing Data Labeling with Decentralized AI and Learn-to-Earn Ecosystem",

  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.oanicai.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "oanicai",
  projectName: "oanicai-docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/", // This serves docs at the root
          sidebarPath: "./sidebars.ts",
      //    editUrl: "https://github.com/oanicai/oanicai-docs/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/oanicai-social-card.jpg",
    navbar: {
      // No title, only logo
   logo: {
  alt: "OANICAI Logo",
  src: "img/logo.svg",
  width: 80,  // Increased size
  height: 80, // Increased size
},
      items: [
        {
          type: "doc",
          docId: "getting-started/introduction",
          position: "left",
          label: "OanicAI Documentation",
        },
      ],
    },
       footer: {
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "/getting-started/introduction",
            },
            // {
            //   label: "Platform Overview",
            //   to: "/platform/solution-overview",
            // },
            // {
            //   label: "Tokenomics",
            //   to: "/technology/tokenomics",
            // },
          ],
        },
        {
          title: "Socials",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/Wn3xcgrcX5",
            },
            {
              label: "X (Twitter)",
              href: "https://x.com/oanic_ai",
            },
            {
              label: "Telegram",
              href: "https://t.me/oanicai",
            },
            
          ],
        },
  //  {
  //         title: "More",
  //         items: [
  //           {
  //             label: "Website",
  //             href: "https://oanicai.com",
  //           },
  //           {
  //             label: "GitHub",
  //             href: "https://github.com/oanicai",
  //           },
  //           {
  //             label: "Whitepaper",
  //             href: "https://oanicai.com/whitepaper.pdf",
  //           },
  //         ],
  //       },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OANICAI.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
