<script setup lang="ts">
defineProps(["text", "path", "icon"]);
</script>

<template>
  <li>
    <div class="icon">{{ icon }}</div>
    <NuxtLink :to="path">{{ text }}</NuxtLink>
  </li>
</template>

<style scoped>
li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.2rem;
}

a {
  color: var(--navbar_font_color);
}

.icon {
  text-align: center;
  font-size: 1.3rem;
}
</style>
