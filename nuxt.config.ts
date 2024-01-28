// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/supabase", "@vueuse/nuxt"],
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/loginSuccess",
    },
  },
});
