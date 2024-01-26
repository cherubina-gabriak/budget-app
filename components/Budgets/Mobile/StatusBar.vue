<script setup lang="ts">
defineProps(["budgets"]);

const { date, walkNextMonth, walkPrevMonth } = useCurrentDate();

console.log(date.value);
</script>

<template>
  <div class="s-bar-wrapper">
    <div class="stats">
      <div class="net-income">+100,000</div>
      <button>P</button>
    </div>
    <nav class="date-nav">
      <button @click="walkPrevMonth">Prev</button>
      <div>Date: {{ date.month }}, {{ date.year }}</div>
      <button @click="walkNextMonth">Next</button>
    </nav>
  </div>
</template>
<style scoped>
.s-bar-wrapper {
  height: 5rem;
  display: flex;
  flex-direction: column;
}
.date-nav {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
}

.stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
