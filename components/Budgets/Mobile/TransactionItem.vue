<script lang="ts" setup>
const props = defineProps(["category", "amount", "comment"]);
</script>

<template>
  <div class="item-wrapper">
    <span>{{ category }}</span>
    <span>{{ amount }}</span>
    <span>{{ comment }}</span>
  </div>
</template>

<style scoped>
.item-wrapper {
  display: flex;
  flex-direction: column;
  border: 1px black solid;
  gap: 1rem;
}
</style>
