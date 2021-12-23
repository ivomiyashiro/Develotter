export const randomUsername = (name: string) => {
  const nameWithoutSpaces = name.replace(/\s/g, '');
  return nameWithoutSpaces + Math.round(Math.random() * 100000000);
};
