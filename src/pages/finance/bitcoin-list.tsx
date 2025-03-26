import { BitcoinTable } from "@/components/finance/bitcoin/bitcoin-table";
import SkeletonTable from "@/components/layout/skeleton-table";
import type { IBitcoinQuote } from "@/entities/bitcoin";
import getFinance from "@/gateway/finance";
import { formatQuotesForDisplay } from "@/utils/quotes/formatQuotesForDisplay";
import { useEffect, useState } from "react";

export default function BitcoinListPage() {
  const [quotes, setQuotes] = useState<IBitcoinQuote[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const { bitcoin } = await getFinance();

        setQuotes(formatQuotesForDisplay(bitcoin));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-8">
        Bitcoin
      </h1>
      {loading ? (
        <SkeletonTable />
      ) : quotes && quotes.length > 0 ? (
        <BitcoinTable data={quotes} />
      ) : (
        <span className="text-gray-600">Nenhuma cotação disponível</span>
      )}
    </>
  );
}
