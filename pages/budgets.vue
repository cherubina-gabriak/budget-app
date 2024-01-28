<script setup lang="ts">
const Mobile = resolveComponent("BudgetsMobile");
const Desktop = resolveComponent("BudgetsDesktop");
</script>

<template>
  <component :is="$isMobile() ? Mobile : Desktop"></component>
</template>
