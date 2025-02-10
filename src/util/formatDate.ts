export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new Error("Data inválida");
  }

  return new Intl.DateTimeFormat("pt-BR").format(date);
};
