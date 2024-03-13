<script setup lang="ts">
defineProps<{ menu: string; isActive: boolean }>()
</script>

<template>
  <li
    class="cursor-pointer text-sm capitalize leading-6 transition-colors hover:text-secondary-500 dark:hover:text-secondary-400"
    :class="isActive ? 'font-semibold text-secondary-500 dark:text-secondary-400' : 'font-medium'"
  >
    {{ menu }}
  </li>
</template>

<style scoped></style>
