<script setup lang="ts">
import { ref } from 'vue'
import IconButton from '@/components/button/IconButton.vue'
import useMenu from '@/composables/useMenu'
import HeaderWrapper from '../HeaderWrapper.vue'
import MenuListItem from './MenuListItem.vue'

const { menus, activeMenu, setActiveMenu } = useMenu()
const showMenu = ref(false)

function _setActiveMenu(menu: string) {
  setActiveMenu(menu)
  showMenu.value = false
}
</script>

<template>
  <div class="xl:hidden">
    <IconButton
      name="open menu"
      icon="icon-[material-symbols--menu-rounded]"
      @click="showMenu = true"
    />

    <Teleport to="body">
      <nav
        class="fixed right-0 top-0 z-20 h-screen overflow-hidden bg-white transition-[width] dark:bg-gray-900"
        :class="showMenu ? 'no-scroll w-screen' : 'w-0'"
      >
        <HeaderWrapper class="!justify-end px-6">
          <IconButton
            name="close menu"
            icon="icon-[material-symbols--close-rounded]"
            @click="showMenu = false"
          />
        </HeaderWrapper>

        <ul class="space-y-6 px-6 py-8">
          <MenuListItem
            v-for="menu in menus"
            :key="menu"
            :menu="menu"
            :is-active="activeMenu === menu"
            @click="_setActiveMenu(menu)"
          />
        </ul>
      </nav>
    </Teleport>
  </div>
</template>

<style scoped></style>
