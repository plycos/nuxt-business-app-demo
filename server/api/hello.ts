export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  type Message = {
    message: string;
  }
  const data: Promise<Message> = $fetch(config.public.apiBase + "/message");
  return data;
});
