<script setup lang="ts">
const props = defineProps(["budgets"]);
</script>

<template>
  <div class="budgets-wrapper">
    <BudgetsMobileTransactions :budgets="budgets" :isIncome="true" />
    <BudgetsMobileTransactions :budgets="budgets" :isIncome="false" />
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
