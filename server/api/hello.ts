export default defineEventHandler(async (event) => {
  const id = crypto.randomUUID();
  return {
    hello: "Hello, World! " + id
  };
});
