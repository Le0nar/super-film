export const getLongDate = (date: string) => {
  const correctDate = new Date(date);
  const options = { year: "numeric", month: "long", day: "numeric" } as const;

  return correctDate.toLocaleDateString("ru-RU", options);
};
