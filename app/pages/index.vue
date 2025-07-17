<script setup lang="ts">
const helloStore = useHelloStore();
const { error, refresh } = await useAsyncData("hello",
  () => helloStore.getMessage()
);

watch(error, () => {
  alert(error.value?.message);
});
</script>

<template>
  <div>
    <UButton color="primary" @click="() => refresh()">Refresh</UButton>
    <p>
      {{ helloStore.message }}
    </p>
    <p class="text-primary">
      {{ helloStore.random }}
    </p>
  </div>
</template>
