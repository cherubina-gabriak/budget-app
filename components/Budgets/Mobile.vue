<script setup lang="ts">
import type { Budget } from "~/types/database.types";

const props = defineProps(["budgets"]);

const client = useSupabaseClient<Budget[]>();
const user = useSupabaseUser();
</script>

<template>
  <div>my props: {{ budgets }}</div>
</template>
