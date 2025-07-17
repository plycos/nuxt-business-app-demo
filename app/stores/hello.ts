export const useHelloStore = defineStore("hello", () => {
  const message = ref();
  const random = ref();

  async function getMessage() {
    try {
      const data = await $fetch("/api/hello");
      const rand = await $fetch("/api/random");
      random.value = rand;
      message.value = data;
      return data;
    } catch (error) {
      throw error;
    }
  }

  return {
    message,
    random,
    getMessage,
  };
});
