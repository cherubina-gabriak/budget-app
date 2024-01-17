<script setup lang="ts">
definePageMeta({
  layout: false,
});
const client = useSupabaseClient();
const user = useSupabaseUser();

const email = ref("");
const password = ref("");
const isLoggedIn = ref(true);
const isUserCreated = ref(false);

const signUp = async () => {
  const { data, error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
  });
  if (data.user?.aud) {
    isUserCreated.value = true;
    isLoggedIn.value = !isLoggedIn.value;
    email.value = "";
    password.value = "";
  }
  console.log("user registered", data);
  console.log("error", error);
};

const login = async () => {
  const { data, error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  console.log("user logged in", data);
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
    <h2 v-if="isUserCreated">Check your email for confirmation</h2>
    <form
      @submit.prevent="
        () => {
          isLoggedIn ? login() : signUp();
        }
      "
    >
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <button type="submit">{{ isLoggedIn ? "Login" : "Sign up" }}</button>
    </form>
    <button @click="isLoggedIn = !isLoggedIn">
      {{
        isLoggedIn
          ? "Don't have an account yet? Click here to sign up"
          : "Click here to login"
      }}
    </button>
  </div>
</template>

<style scoped></style>
