<script setup lang="ts">
defineProps<{ technologies: string[] }>()
</script>

<template>
  <div class="mt-16">
    <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-50">Technologies Used</h2>
    <div class="mt-6 flex flex-wrap items-center gap-4">
      <div
        v-for="technology in technologies"
        :key="technology"
        class="inline-block rounded bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
      >
        {{ technology }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
