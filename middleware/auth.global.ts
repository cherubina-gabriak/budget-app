export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser();
  const allRoutes = useRouter().options.routes.map((r) => {
    return r.path === "/login" ? "" : r.path;
  });

  if (!user.value && allRoutes.includes(to.path)) {
    return navigateTo("/login");
  } else if (user.value && to.path === "/login") {
    return navigateTo("/");
  }
});
