export function formatDate(data: string): string {
  const regexData = /^\d{4}-\d{2}-\d{2}$/;

  if (!regexData.test(data)) {
    return "Data inválida";
  }

  const date = new Date(`${data}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const formatter = new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formatter.format(date);
}
