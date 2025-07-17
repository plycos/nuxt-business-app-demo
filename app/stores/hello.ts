export const useHelloStore = defineStore("hello", () => {
  const message = ref();

  async function getMessage() {
    try {
      const data = await $fetch("/api/hello");
      message.value = data;
      return data;
    } catch (error) {
      throw error;
    }
  }

  return {
    message,
    getMessage,
  };
});
