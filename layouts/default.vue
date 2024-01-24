<template>
  <div>
    <NavbarDesktop v-if="!$isMobile()" />
    <slot />
    <NavbarMobile v-if="$isMobile()" />
  </div>
</template>
