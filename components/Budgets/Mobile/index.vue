<script setup lang="ts">
import type { Budget, Category } from "~/types/database.types";

const { data: budgetsFromServer } = await useFetch<Budget[]>(
  "/api/user-budgets",
  {
    headers: useRequestHeaders(["cookie"]),
    key: "budgets-from-server",
  }
);

const { data: categoriesFromServer } = await useFetch<Category[]>(
  "/api/user-income-cat",
  {
    headers: useRequestHeaders(["cookie"]),
    key: "categories-from-server",
  }
);
// ВОЗМОЖНО useFetch УЖЕ РЕАКТИВНЫЙ ?  НЕ НАДО КОМПЬЮТИТЬ? НАДО НАПИСАТЬ ФУНКЦИЮ КОТОРАЯ ДОБАВЛЯЕТ
// ИЛИ МОЖЕТ ДОБАВИТЬ ПЛАГИНЫ, КОТОРЫЕ СКИДЫВАЮТ СОСТОЯНИЕ В РЕАКТИВНЫЙ СТЭЙТ??

const budgets = computed(() => {
  return budgetsFromServer.value;
});

const categories = computed(() => {
  return categoriesFromServer.value;
});
</script>

<template>
  <div class="budgets-wrapper">
    <BudgetsMobileTransactionsContainer :budgets="budgets" :isIncome="true" />
    <BudgetsMobileTransactionsContainer :budgets="budgets" :isIncome="false" />
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
