<template>
  <div>
    <nav>
      <ul>
        <li><NuxtLink to="/">Dashboard</NuxtLink></li>
        <li><NuxtLink to="/budgets">Budgets</NuxtLink></li>
        <li><NuxtLink to="/categories">Categories</NuxtLink></li>
        <li><NuxtLink to="/stats">Statistics</NuxtLink></li>
        <li><NuxtLink to="/goals">Goals</NuxtLink></li>
      </ul>
    </nav>
    <slot />
  </div>
</template>
