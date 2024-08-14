export const getDateInfo = (
  options?: Intl.DateTimeFormatOptions | null,
  date?: string,
) => {
  return (date ? new Date(date) : new Date()).toLocaleDateString('pt-BR', {
    ...options,
  });
};
