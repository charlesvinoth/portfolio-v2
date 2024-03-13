<script setup lang="ts">
import SectionDescription from '@/components/SectionDescription.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import ContactItem from './components/ContactItem.vue'
</script>

<template>
  <section class="py-24">
    <SectionTitle v-motion-slide-visible-once-bottom title="Contact" />
    <SectionDescription v-motion-slide-visible-once-bottom>
      Thank you for taking the time to explore my portfolio. I hope my work and expertise have
      captivated your interest, and you would like to discuss potential collaboration opportunities.
      Feel free to reach out to me through any of the following channels, and I will be happy to
      discuss your requirements in detail:
    </SectionDescription>

    <div class="mt-20 flex flex-col items-start gap-6">
      <ContactItem
        href="mailto:charlezvinoth@gmail.com"
        icon="icon-[material-symbols--mail-rounded]"
        label="charlezvinoth@gmail.com"
      />

      <ContactItem
        href="tel:+91-7010034120"
        icon="icon-[material-symbols--phone-in-talk-rounded]"
        label="+91-7010034120"
      />

      <ContactItem
        href="https://github.com/charlesvinoth"
        icon="icon-[mdi--github]"
        label="https://github.com/charlesvinoth"
      />

      <ContactItem
        href="https://www.linkedin.com/in/charles-vinoth"
        icon="icon-[mdi--linkedin]"
        label="https://www.linkedin.com/in/charles-vinoth"
      />

      <ContactItem
        href="https://maps.app.goo.gl/HNVYY5k4QG2GhvPPA"
        icon="icon-[material-symbols--location-on]"
        label="Tirunelveli, Tamilnadu, India"
      />
    </div>
  </section>
</template>

<style scoped></style>
