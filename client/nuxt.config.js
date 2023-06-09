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
  loading: true,
  build: {},
  modules: [],
  css: [],
  plugins: [{ src: "~/plugins/useInactivity.js", mode: "client" }],
};
