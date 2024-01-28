<script setup lang="ts">
definePageMeta({
  layout: false,
});
const user = useSupabaseUser();

watch(
  user,
  () => {
    if (user.value) {
      return navigateTo("/");
    }
  },
  { immediate: true }
);
</script>
<template>
  <div class="wrapper">
    <h1 class="confirmation">You successfully logged in!</h1>
    <span>Redirecting...</span>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.confirmation {
  color: green;
}
</style>
