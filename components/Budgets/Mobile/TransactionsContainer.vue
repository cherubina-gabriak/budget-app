<script setup lang="ts">
import type { Budget } from "~/types/database.types";
const props = defineProps(["budgets", "isIncome"]);

const { date } = useCurrentDate();

const client = useSupabaseClient<Budget[]>();
const user = useSupabaseUser();

const currentEntries = computed(() => {
  return props.budgets.filter(
    (b: Budget) => b.month === date.value.month && b.year === date.value.year
  );
});
</script>

<template>
  <div class="wrapper">
    <h2>{{ isIncome ? "Income" : "Expenses" }}</h2>
    <div class="transactions-list">
      <BudgetsMobileTransactionItem
        v-for="item in currentEntries"
        :category="item.category_id"
        :amount="item.base_amount"
        :comment="item.comment"
      />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
.transactions-list {
  display: grid;
  gap: 0.5rem;
  padding: 0.3rem;
  background-color: grey;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
</style>
