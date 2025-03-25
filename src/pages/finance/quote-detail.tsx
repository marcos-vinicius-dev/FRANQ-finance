import { QuoteLineChart } from "@/components/finance/quote/quote-line-chart";
import Skeleton from "@/components/ui/skeleton";
import type { IBitcoinQuote } from "@/entities/bitcoin";
import type { ICurrencyQuote } from "@/entities/currency";
import type { QuoteCategory, HistoricalQuote } from "@/entities/quote";
import type { IStockIndex } from "@/entities/stock";

import getFinance from "@/gateway/finance";
import { getQuoteHistorical } from "@/gateway/quote-historical";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function formatHistoricalData(
  data: Record<string, any>,
  category: QuoteCategory | undefined,
  code: string | undefined,
): HistoricalQuote[] {
  if (!category || !code) {
    return [];
  }
  return Object.entries(data).map(([date, data]) => {
    const quotes = data[category][code];

    if (category === "taxes") {
      return {
        date,
        Valor: quotes,
      };
    }

    return {
      date,
      "Preço de abertura": quotes.first,
      "Preço de fechamento": quotes.last,
      "Preço máximo": quotes.max,
      "Preço mínimo": quotes.min,
      "Média dos preços": quotes.avg,
    };
  });
}

export default function QuoteDetailPage() {
  const [quotes, setQuotes] = useState<HistoricalQuote[] | null>(null);
  const [quoteDetails, setQuoteDetails] = useState<
    ICurrencyQuote | IStockIndex | IBitcoinQuote
  >();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams<{ category?: QuoteCategory; code?: string }>();

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);

        const finance = await getFinance();

        setQuoteDetails(() => {
          const quote =
            params.code &&
            params.category &&
            finance[params.category][params.code];

          return {
            name: params.code,
            ...quote,
          };
        });

        const quoteHistorical =
          params?.category && (await getQuoteHistorical(params.category));

        const formattedData = formatHistoricalData(
          quoteHistorical,
          params.category,
          params.code,
        );

        setQuotes(formattedData);
        setError(null);
      } catch (err) {
        console.error("Failed to load historical data:", err);

        setError("Falha ao carregar dados históricos");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [params.category, params.code]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-8">
        Detalhes da Cotação - {quoteDetails?.name}
      </h1>

      <section className="flex flex-col gap-8">
        {loading ? (
          <Skeleton className="h-80 w-full" />
        ) : error ? (
          <div className="text-gray-500">{error}</div>
        ) : (
          <QuoteLineChart data={quotes || []} category={params.category} />
        )}
      </section>
    </div>
  );
}
