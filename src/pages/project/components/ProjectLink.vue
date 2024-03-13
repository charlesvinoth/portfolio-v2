<script setup lang="ts">
defineProps<{ link: string }>()
</script>

<template>
  <div class="mt-16">
    <h2 class="mb-6 text-lg font-semibold text-gray-900 dark:text-gray-50">Project Link</h2>
    <a
      :href="link"
      target="_blank"
      class="font-medium text-secondary-500 underline dark:text-secondary-400"
      >{{ link }}</a
    >
  </div>
</template>

<style scoped></style>
