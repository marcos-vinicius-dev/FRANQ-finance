import { CurrencyTable } from "@/components/finance/currency/currency-table";
import SkeletonTable from "@/components/layout/skeleton-table";
import type { ICurrencyQuote } from "@/entities/currency";
import getFinance from "@/gateway/finance";
import { formatQuotesForDisplay } from "@/utils/quotes/formatQuotesForDisplay";

import { useState, useEffect } from "react";

export default function CurrenciesListPage() {
  const [quotes, setQuotes] = useState<ICurrencyQuote[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const finance = await getFinance();
        const { source, ...currencies } = finance.currencies;

        setQuotes(formatQuotesForDisplay(currencies));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-8">
        Moedas
      </h1>
      {loading ? (
        <SkeletonTable />
      ) : quotes && quotes.length > 0 ? (
        <CurrencyTable data={quotes} />
      ) : (
        <span className="text-gray-600">Nenhuma cotação disponível</span>
      )}
    </>
  );
}
