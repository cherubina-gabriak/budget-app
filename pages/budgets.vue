<script setup lang="ts">
import type { Budget } from "~/types/database.types";

const client = useSupabaseClient<Budget[]>();
const user = useSupabaseUser();

const { data: budgets } = await useFetch<Budget[]>("/api/user-budgets", {
  headers: useRequestHeaders(["cookie"]),
  key: "budgets-from-server",
});

console.log(budgets.value);
</script>

<template>
  <h3>HELLO THIS IS BUDGETS PAGE</h3>
  <Budgets />
</template>
