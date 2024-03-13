<script setup lang="ts">
import IconButton from '@/components/button/IconButton.vue'
import scrollToTop from '@/utils/scrollToTop'
</script>

<template>
  <IconButton
    name="go to top"
    color="primary"
    icon="icon-[material-symbols--arrow-upward]"
    class="fixed bottom-0 right-0 z-10 m-6"
    @click="scrollToTop"
  />
</template>

<style scoped></style>
