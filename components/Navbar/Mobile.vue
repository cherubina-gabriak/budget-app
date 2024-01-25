<script setup lang="ts">
import type { NuxtLink } from "#build/components";
</script>

<template>
  <ul>
    <li><NuxtLink to="/">Dashboard</NuxtLink></li>
    <li><NuxtLink to="/budgets">Budgets</NuxtLink></li>
    <li><NuxtLink to="/categories">Categories</NuxtLink></li>
    <li><NuxtLink to="/stats">Statistics</NuxtLink></li>
    <li><NuxtLink to="/goals">Goals</NuxtLink></li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  position: sticky;
  height: 10%;
  top: 100%;
  background-color: #26282b;
  display: flex;
  justify-content: space-around;
  padding: 0rem;
  margin: 0rem;
  font-size: 0.8rem;
}
a {
  color: var(--navbar_font_color);
}
</style>
