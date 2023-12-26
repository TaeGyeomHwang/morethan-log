const CONFIG = {
  // profile setting (required)
  profile: {
    name: "DriedPollack",
    image: "/profilePicture2.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend developer",
    bio: "코딩 연습 중!",
    email: "jihuhw99@gmail.com",
    linkedin: "",
    github: "TaeGyeomHwang",
    instagram: "",
  },
  // projects: [
  //   {
  //     name: `morethan-log`,
  //     href: "https://github.com/morethanmin/morethan-log",
  //   },
  // ],
  // blog setting (required)
  blog: {
    title: "DriedPollack's Blog",
    description: "welcome to DriedPollack's Blog!",
    theme: "auto", //['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://driedpollack.vercel.app/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.9WbaUfoC2uFB71M5Z_L_r34pfg2r-tZGT83FtFPLnhs || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.9WbaUfoC2uFB71M5Z_L_r34pfg2r-tZGT83FtFPLnhs || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "TaeGyeomHwang/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
