<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <h2 class="mb-4 flex items-center text-2xl font-semibold">
    <div class="mr-4 h-[2px] w-9 bg-secondary-500 dark:bg-secondary-400" />
    <div class="capitalize text-secondary-500 dark:text-secondary-500">
      {{ title }}
    </div>
  </h2>
</template>

<style scoped></style>
