export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const data: Promise<number> = $fetch(config.public.apiBase + "/message/random");
  return data;
});
