<script setup lang="ts">
const helloStore = useHelloStore();
const { data: _ignore, error, refresh } = await useAsyncData("hello",
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
  </div>
</template>
