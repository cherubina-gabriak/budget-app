<script setup lang="ts">
import type { Budget } from "~/types/database.types";

const { width, height } = useWindowSize();
const isMobile = computed(() => {
  return width.value > 500 ? false : true;
});

const client = useSupabaseClient<Budget[]>();
const user = useSupabaseUser();

const { data: budgets } = await useFetch<Budget[]>("/api/user-budgets", {
  headers: useRequestHeaders(["cookie"]),
  key: "budgets-from-server",
});

console.log(budgets.value);

watchEffect(() => {
  console.log(isMobile.value);
});
</script>

<template>
  <div>HELLO THIS IS BUDGETS PAGE</div>
  <div v-for="budget in budgets"></div>
</template>
