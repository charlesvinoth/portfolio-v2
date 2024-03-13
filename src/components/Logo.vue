<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()
</script>

<template>
  <div>
    <img v-if="isDark" src="@/assets/logo-dark.svg" alt="logo" class="size-10" />
    <img v-else src="@/assets/logo.svg" alt="logo" class="size-10" />
  </div>
</template>

<style scoped></style>
