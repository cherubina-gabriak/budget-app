<template>
  <div class="layout">
    <NavbarDesktop v-if="!$isMobile()" />
    <slot />
    <NavbarMobile v-if="$isMobile()" />
  </div>
</template>

<style scoped>
.layout {
  width: 100%;
  height: 100%;
}
</style>
