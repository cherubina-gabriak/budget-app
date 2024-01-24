<template>
  <div>
    <slot />
    <nav>
      <ul>
        <li><NuxtLink to="/">Dashboard</NuxtLink></li>
        <li><NuxtLink to="/budgets">Budgets</NuxtLink></li>
        <li><NuxtLink to="/categories">Categories</NuxtLink></li>
        <li><NuxtLink to="/stats">Statistics</NuxtLink></li>
        <li><NuxtLink to="/goals">Goals</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>
