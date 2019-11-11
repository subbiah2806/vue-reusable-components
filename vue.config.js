module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-reusable-components/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/main.scss";`
      }
    }
  }
};
