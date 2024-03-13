<script setup lang="ts">
import Logo from '@/components/Logo.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
</script>

<template>
  <header
    class="flex h-24 w-full items-center justify-between border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900"
  >
    <Logo @click="$router.push({ name: 'home' })" />
    <ThemeToggle />
  </header>
</template>

<style scoped></style>
