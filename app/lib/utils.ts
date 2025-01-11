export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("es").format(date).replace(/\//g, ".");
};
