<script setup lang="ts">
definePageMeta({
  layout: false,
});
const client = useSupabaseClient();
const user = useSupabaseUser();

const email = ref("");
const password = ref("");
const isSignUp = ref(true);

const signUp = async () => {
  const { data, error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
  });
  console.log("user", data);
  console.log("error", error);
};

const login = async () => {
  const { data, error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  console.log("user", data);
  console.log("error", error);
};

onMounted(() => {
  watchEffect(() => {
    if (user.value) {
      navigateTo("/");
    }
  });
});
</script>

<template>
  <div>
    <h1>Welcome to the budget app!</h1>
    <form
      @submit.prevent="
        () => {
          isSignUp ? signUp() : login();
        }
      "
    >
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <button type="submit">{{ isSignUp ? "Sign up" : "Login" }}</button>
    </form>
    <button @click="isSignUp = !isSignUp">
      {{
        isSignUp
          ? "Already have an account? Click here to login"
          : "Click here to sign up"
      }}
    </button>
  </div>
</template>

<style scoped></style>
