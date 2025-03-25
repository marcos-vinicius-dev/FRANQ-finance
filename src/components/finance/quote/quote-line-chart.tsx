import { LineChart } from "@/components/ui/charts/line-chart";
import type { HistoricalQuote, QuoteCategory } from "@/entities/quote";
import { formatCurrency } from "@/utils/formatters/currency";

interface QuoteLineChartProps {
  data: HistoricalQuote[];
  category?: QuoteCategory;
}

export function QuoteLineChart({ data, category }: QuoteLineChartProps) {
  const categories =
    category === "taxes"
      ? ["Valor"]
      : [
          "Preço de abertura",
          "Preço de fechamento",
          "Preço máximo",
          "Preço mínimo",
          "Média dos preços",
        ];

  if (!data || data.length === 0) {
    return (
      <div className="h-80 flex items-center justify-center">
        <p className="text-gray-500">Nenhum dado disponível</p>
      </div>
    );
  }

  return (
    <LineChart
      className="h-80"
      data={data}
      index="date"
      categories={categories}
      yAxisWidth={60}
      valueFormatter={(value) => formatCurrency(value)}
    />
  );
}
