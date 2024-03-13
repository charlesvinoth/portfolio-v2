<script setup lang="ts">
import Logo from '@/components/Logo.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import Menus from './components/Menus.vue'
import MenusXL from './components/MenusXL.vue'
import HeaderWrapper from './HeaderWrapper.vue'
</script>

<template>
  <HeaderWrapper>
    <Logo />
    <Menus />
    <div class="flex gap-4">
      <ThemeToggle />
      <MenusXL />
    </div>
  </HeaderWrapper>
</template>

<style scoped></style>
