export default {
  mode: "spa",
  head: {
    title: "Todomat",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [{ rel: "icon", type: "image/png", href: "favicon.png" }],
  },
  loading: false,
  build: {},
  modules: [],
  css: [],
  privateRuntimeConfig: {
    apiUser: process.env.API_USER,
    apiSecret: process.env.API_SECRET,
  },
};
