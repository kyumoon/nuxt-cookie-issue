<script setup lang="ts">
const cookie = useCookie<string>('temp')
if (process.server) {
  console.log('app: ', cookie.value)
}
</script>

<template>
  <!-- Edit this file to play around with Nuxt but never commit changes! -->
  <div>
    Nuxt 3 Playground<br>
    {{ cookie }}
  </div>
</template>

<style scoped>

</style>
