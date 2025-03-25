import { useEffect, useState } from "react";
import getFinance from "@/gateway/finance";
import SkeletonTable from "@/components/layout/skeleton-table";
import { formatQuotesForDisplay } from "@/utils/quotes/formatQuotesForDisplay";
import { StockIndexTable } from "@/components/finance/stock/stock-index-table";
import type { IStockIndex } from "@/entities/stock";

export default function StockIndexListPage() {
  const [indices, setIndices] = useState<IStockIndex[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const finance = await getFinance();
        setIndices(formatQuotesForDisplay(finance.stocks));
      } catch (err) {
        console.error("Failed to load stock indices:", err);
        setError("Falha ao carregar dados");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-8">
        Índices do Mercado
      </h1>
      {loading ? (
        <SkeletonTable />
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : indices && indices.length > 0 ? (
        <StockIndexTable data={indices} />
      ) : (
        <div className="text-gray-500">Nenhum índice disponível</div>
      )}
    </main>
  );
}
