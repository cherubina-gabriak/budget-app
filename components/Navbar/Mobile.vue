<script setup lang="ts">
import { LINKS_INFO } from "~/constants";
</script>

<template>
  <ul>
    <NavbarButton
      v-for="link in LINKS_INFO"
      :text="link.name"
      :path="link.path"
      :icon="link.icon"
    />
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  position: sticky;
  height: 7%;
  top: 100%;
  background-color: #26282b;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  font-size: 0.7rem;
}
</style>
