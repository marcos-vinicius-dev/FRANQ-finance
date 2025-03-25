export function formatCurrency(valor: number, moeda = "BRL"): string {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: moeda,
  });
  return formatter.format(valor);
}
