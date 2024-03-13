<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  name: string
  icon?: string
  color?: 'default' | 'primary'
}>()

const colorClass = computed(() => {
  if (props.color === 'primary') {
    return 'bg-primary-700 text-white hover:bg-primary-700/90 focus-visible:ring-2 focus-visible:ring-primary-700/50 dark:bg-primary-600 dark:hover:bg-primary-600/90 dark:focus-visible:ring-primary-600/50'
  }

  return 'bg-gray-100 text-gray-700 hover:bg-gray-100/90 focus-visible:ring-2 focus-visible:ring-gray-100/50 dark:bg-gray-800 dark:hover:bg-gray-800/90 dark:focus-visible:ring-gray-800/50 dark:text-gray-300'
})
</script>

<template>
  <button
    :aria-label="name"
    class="inline-flex size-10 select-none appearance-none items-center justify-center rounded-full outline-none transition-colors duration-200"
    :class="colorClass"
  >
    <slot>
      <i v-if="icon" class="h-5 w-5" :class="icon" />
    </slot>
  </button>
</template>

<style scoped></style>
