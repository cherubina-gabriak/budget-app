<script setup lang="ts">
import type { NuxtLink } from "#build/components";
</script>

<template>
  <nav>
    <ul>
      <h4>DESKTOP NAVBAR</h4>
      <li><NuxtLink to="/">Dashboard</NuxtLink></li>
      <li><NuxtLink to="/budgets">Budgets</NuxtLink></li>
      <li><NuxtLink to="/categories">Categories</NuxtLink></li>
      <li><NuxtLink to="/stats">Statistics</NuxtLink></li>
      <li><NuxtLink to="/goals">Goals</NuxtLink></li>
    </ul>
  </nav>
</template>
