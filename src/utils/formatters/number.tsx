export function formatNumber(value: number): string {
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new Error("O valor deve ser um número válido.");
  }

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const valorFormatado = formatter.format(value);
  return valorFormatado;
}
