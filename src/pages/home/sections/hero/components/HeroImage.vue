<script setup lang="ts"></script>

<template>
  <div className="relative flex items-center justify-center xl:justify-end xl:order-1 xl:mr-4">
    <div class="relative size-80 xl:size-96">
      <div
        class="circle-1 absolute h-full w-full rounded-full bg-primary-700 dark:bg-primary-600"
      />
      <div class="circle-2 absolute h-full w-full rounded-full" />
      <div
        class="circle-3 absolute h-full w-full rounded-full bg-secondary-500 dark:bg-secondary-400"
      />
      <div class="circle-4 absolute h-full w-full rounded-full" />

      <div class="avatar-bg absolute left-0 top-0 h-full w-full rounded-full">
        <img src="@/assets/avatar.jpg" alt="charles avatar" class="rounded-full" />
      </div>
    </div>
  </div>
</template>

<style>
.avatar-bg {
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
}

.circle-1 {
  animation: morph-circle-1 12s linear infinite;
}

.circle-2 {
  top: -16px;
  left: 16px;
  animation: morph-circle-2 12s linear infinite;
}

.circle-3 {
  animation: morph-circle-3 12s linear infinite;
}

.circle-4 {
  top: 16px;
  left: -16px;
  animation: morph-circle-4 12s linear infinite;
}

@keyframes morph-circle-1 {
  0%,
  100% {
    top: -16px;
    left: -16px;
  }

  25% {
    top: -16px;
    left: 16px;
  }

  50% {
    top: 16px;
    left: 16px;
  }

  75% {
    top: 16px;
    left: -16px;
  }
}

@keyframes morph-circle-2 {
  0%,
  100% {
    @apply border border-dashed border-secondary-500 dark:border-secondary-500;
  }

  50% {
    @apply border border-dashed border-primary-700 dark:border-primary-600;
  }
}

@keyframes morph-circle-3 {
  0%,
  100% {
    top: 16px;
    left: 16px;
  }

  25% {
    top: 16px;
    left: -16px;
  }

  50% {
    top: -16px;
    left: -16px;
  }

  75% {
    top: -16px;
    left: 16px;
  }
}

@keyframes morph-circle-4 {
  0%,
  100% {
    @apply border border-dashed border-primary-700 dark:border-primary-600;
  }

  50% {
    @apply border border-dashed border-secondary-500 dark:border-secondary-500;
  }
}
</style>
