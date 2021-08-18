export const getLongDate = (date: Date) => {
  const options = { year: "numeric", month: "long", day: "numeric" } as const;

  return date.toLocaleDateString("ru-RU", options);
};
