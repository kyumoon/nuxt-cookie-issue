<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const token = useCookie("token");

await useAsyncData(async () => {
  console.log("token: ", token.value);
  return {};
});
</script>
