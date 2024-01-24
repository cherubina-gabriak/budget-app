<script setup lang="ts">
const Mobile = resolveComponent("BudgetsMobile");
const Desktop = resolveComponent("BudgetsDesktop");
</script>

<template>
  <div>hello! Im a budgets INDEX component!</div>
  <component :is="$isMobile() ? Mobile : Desktop"></component>
</template>
