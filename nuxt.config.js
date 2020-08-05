import theme from "@nuxt/content-theme-docs";

export default theme({
  content: {
    markdown: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  },
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
  loading: { color: "cyan" },
  generate: {
    fallback: "404.html", // for Netlify
    routes: ["/"], // give the first url to start crawling
  },
  i18n: {
    locales: () => [
      //   {
      //     code: "es",
      //     iso: "es-ES",
      //     file: "es-ES.js",
      //     name: "Español",
      //   },
      {
        code: "en",
        iso: "en-US",
        file: "en-US.js",
        name: "English",
      },
    ],
    defaultLocale: "en",
  },
});
