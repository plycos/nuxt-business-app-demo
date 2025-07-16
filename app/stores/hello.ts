export const useHelloStore = defineStore("hello", () => {
  const message = ref<string>();

  async function getMessage() {
    try {
      const data = await $fetch("/api/hello");
      message.value = data.hello;
      throw new Error("Simulated Error " + Math.random());
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
