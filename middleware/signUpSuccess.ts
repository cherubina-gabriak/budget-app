export default defineNuxtRouteMiddleware((to) => {
  if (to.path !== "/") {
    setTimeout(() => {
      return navigateTo("/");
    }, 2000);
  }
});
