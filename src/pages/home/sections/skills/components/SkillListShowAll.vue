<script setup lang="ts">
defineProps<{ count: number }>()
</script>

<template>
  <li
    v-motion-slide-visible-once-bottom
    class="flex size-28 cursor-pointer flex-col items-center justify-center rounded border border-gray-100 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800"
  >
    <div class="text-center text-sm font-medium">
      <p>+{{ count }}</p>
      <p>more</p>
    </div>
  </li>
</template>

<style scoped></style>
