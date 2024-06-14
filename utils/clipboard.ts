export const onCopy = async (text: string) => {
  await navigator.clipboard.writeText(text);
};
