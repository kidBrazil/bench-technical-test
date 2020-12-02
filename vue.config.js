// Vue Config
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // Global import of variables and mixins
        // Crowbar-sass is one of my personal libraries, mostly includes useful resets
        // and a good responsive setup.
        prependData: `
          @import "~crowbar-sass/styles/global-main.scss";
          @import "@/assets/styles/variables.scss";
        `
      }
    }
  }
}
