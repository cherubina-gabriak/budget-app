<script setup lang="ts">
import type { Budget } from "~/types/database.types";
const { date } = useCurrentDate();
const props = defineProps(["budgets", "isIncome"]);

const client = useSupabaseClient<Budget[]>();
const user = useSupabaseUser();

console.log(props.budgets);

const data = computed(() => {
  const currentEntries = props.budgets.filter(
    (b) => b.month === date.value.month && b.year === date.value.year
  );
  console.log("filtered:", currentEntries);
  return currentEntries;
});

console.log(data.value);
</script>

<template>
  <div class="wrapper">
    <h2>{{ isIncome ? "Income" : "Expenses" }}</h2>
  </div>
</template>

<style scoped>
.wrapper {
}
</style>
