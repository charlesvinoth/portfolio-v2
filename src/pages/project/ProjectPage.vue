<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'
import { ref } from 'vue'
import Footer from '@/components/Footer.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
import { getProject } from '@/utils/projects'
import scrollToTop from '@/utils/scrollToTop'
import Header from './components/Header.vue'
import ProjectDetails from './components/ProjectDetails.vue'
import ProjectLink from './components/ProjectLink.vue'
import ProjectScreenshots from './components/ProjectScreenshots.vue'
import ProjectTechnologies from './components/ProjectTechnologies.vue'

const props = defineProps<{ name: string }>()

const project = getProject(props.name)

const headerRef = ref(null)
const isHeaderVisible = useElementVisibility(headerRef)

scrollToTop()
</script>

<template>
  <main class="container mx-auto px-6 lg:px-10">
    <Header ref="headerRef" />

    <template v-if="project">
      <ProjectDetails
        v-motion-slide-visible-once-bottom
        :name="project.name"
        :description="project.description.long"
      />
      <ProjectLink v-motion-slide-visible-once-bottom :link="project.link" />
      <ProjectTechnologies
        v-motion-slide-visible-once-bottom
        :technologies="project.technologies"
      />
      <ProjectScreenshots
        :type="project.type"
        :folder="project.folder"
        :screenshots-count="project.screenshotsCount"
      />
    </template>

    <Footer />
    <ScrollToTop v-if="!isHeaderVisible" />
  </main>
</template>

<style scoped></style>
