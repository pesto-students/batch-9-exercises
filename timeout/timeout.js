async function timeout(name) {
  const greeting = await setTimeout(() => `Hello ${name}`, 300);
  return greeting;
}

export { timeout };
