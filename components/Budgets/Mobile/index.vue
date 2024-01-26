<script setup lang="ts">
import type { Budget } from "~/types/database.types";

const props = defineProps(["budgets"]);

const client = useSupabaseClient<Budget[]>();
const user = useSupabaseUser();
</script>

<template>
  <div class="budgets-wrapper">
    <BudgetsMobileTransactions :budgets="budgets" />
    <BudgetsMobileTransactions :budgets="budgets" />
    <BudgetsMobileStatusBar :budgets="budgets" />
  </div>
</template>

<style scoped>
.budgets-wrapper {
  height: 93%;
  width: 100%;
  background-color: rgb(217, 119, 119);
  overflow-y: scroll;
}
</style>
