<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: ["sign-up-success"],
});
</script>
<template>
  <div class="wrapper">
    <h1 class="confirmation">You confirmed your account!</h1>
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
