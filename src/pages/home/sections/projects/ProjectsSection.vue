<script setup lang="ts">
import SectionDescription from '@/components/SectionDescription.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import { getProjects } from '@/utils/projects'
import ProjectListItem from './components/ProjectListItem.vue'

const projects = getProjects()
</script>

<template>
  <section class="py-24">
    <SectionTitle v-motion-slide-visible-once-bottom title="Projects" />
    <SectionDescription v-motion-slide-visible-once-bottom>
      Throughout my career as a lead front-end developer, I have had the opportunity to work on a
      diverse range of projects, each presenting unique challenges and opportunities for growth.
      From customer projects to personal endeavors and prototypes, I have consistently delivered
      well-documented, clean, user-friendly, and scalable solutions, regardless of the technology
      stack employed.
    </SectionDescription>

    <div class="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <ProjectListItem
        v-for="project in projects"
        :key="project.name"
        v-motion-slide-visible-once-bottom
        :item="project"
        @click="$router.push({ name: 'project', params: { name: project.name } })"
      />
    </div>
  </section>
</template>

<style scoped></style>
