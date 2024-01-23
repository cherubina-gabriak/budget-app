<script setup lang="ts">
const client = useSupabaseClient();
const user = useSupabaseUser();

const newIncomeName = ref("");

const { data: incomes } = await useFetch("/api/income", {
  headers: useRequestHeaders(["cookie"]),
  key: "incomes-from-server",
});

const addNewIncome = async () => {
  const { data } = await client
    .from("income_categories")
    .insert({ user_id: user.value.id, name: newIncomeName.value })
    .select("name,category_id")
    .single();

  incomes.value?.push(data);
};

const deleteIncome = async (value: string) => {
  incomes.value = incomes.value?.filter((i) => i.category_id !== value);

  const { error } = await client
    .from("income_categories")
    .delete()
    .eq("category_id", value);
  if (error) {
    createError(error);
  }
};

const renameIncome = async (value: string) => {};
</script>

<template>
  <div>HELLO THIS IS CATEGORIES PAGE</div>
  <h3>From server:</h3>
  <div v-for="income in incomes" class="income_wrapper">
    <div>{{ income.name }}</div>
    <button @click="deleteIncome(income.category_id)">delete</button>
  </div>
  <input type="text" v-model="newIncomeName" />
  <button @click="addNewIncome">add income</button>
</template>

<style scoped>
.income_wrapper {
  display: flex;
}
</style>
