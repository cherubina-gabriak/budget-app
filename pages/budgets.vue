<script setup lang="ts">
import type { Budget } from "~/types/database.types";

const Mobile = resolveComponent("BudgetsMobile");
const Desktop = resolveComponent("BudgetsDesktop");

const client = useSupabaseClient<Budget[]>();
const user = useSupabaseUser();

const { data: budgets } = await useFetch<Budget[]>("/api/user-budgets", {
  headers: useRequestHeaders(["cookie"]),
  key: "budgets-from-server",
});
</script>

<template>
  <h3>HELLO THIS IS BUDGETS PAGE</h3>

  <component
    :budgets="budgets"
    :is="$isMobile() ? Mobile : Desktop"
  ></component>
</template>
