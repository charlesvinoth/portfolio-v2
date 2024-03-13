<script setup lang="ts">
import useMenu from '@/composables/useMenu'
import MenuListItem from './MenuListItem.vue'

const { menus, activeMenu, setActiveMenu } = useMenu()
</script>

<template>
  <nav class="hidden xl:block">
    <ul class="flex items-center justify-between gap-8">
      <MenuListItem
        v-for="menu in menus"
        :key="menu"
        :menu="menu"
        :is-active="activeMenu === menu"
        @click="setActiveMenu(menu)"
      />
    </ul>
  </nav>
</template>

<style scoped></style>
