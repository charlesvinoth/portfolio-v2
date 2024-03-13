<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import IconButton from './button/IconButton.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <IconButton name="theme toggle" class="relative overflow-hidden" @click="toggleDark()">
    <i
      class="icon-[material-symbols--dark-mode] absolute size-5 text-secondary-500 dark:text-secondary-400"
      :class="[isDark ? 'rise' : 'set']"
    />
    <i
      class="icon-[material-symbols--light-mode] absolute size-5 text-secondary-500 dark:text-secondary-400"
      :class="[isDark ? 'set ' : 'rise']"
    />
  </IconButton>
</template>

<style scoped>
.rise {
  animation: rise 0.3s linear;
  animation-fill-mode: forwards;
}

.set {
  animation: set 0.3s linear;
  animation-fill-mode: forwards;
}

@keyframes rise {
  from {
    left: -20px;
    bottom: -20px;
  }

  to {
    left: calc(50% - 10px);
    bottom: calc(50% - 10px);
  }
}

@keyframes set {
  from {
    left: calc(50% - 10px);
    bottom: calc(50% - 10px);
  }

  to {
    left: 40px;
    bottom: -40px;
  }
}
</style>
