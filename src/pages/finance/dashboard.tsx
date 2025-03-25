import { Button } from "@/components/ui/button";
import Skeleton from "@/components/ui/skeleton";
import getFinance from "@/gateway/finance";
import { formatDate } from "@/utils/formatters/date";
import { formatQuotesForDisplay } from "@/utils/quotes/formatQuotesForDisplay";
import { useEffect, useState } from "react";
import type { IQuotesState } from "@/entities/quote";
import CurrencyCard from "@/components/finance/currency-card";
import BitcoinCard from "@/components/finance/bitcoin-card";
import IndexesCard from "@/components/finance/stock/indexes-card";
import SectionHeader from "@/components/layout/section-header";
import StockCard from "@/components/finance/stock/stock-card";
import type { ITax } from "@/entities/tax";

const DEFAULT_TAXES_STATE: ITax = {
  date: "",
  cdi: 0,
  selic: 0,
  daily_factor: 0,
  selic_daily: 0,
  cdi_daily: 0,
};

export default function DashboardPage() {
  const [quotes, setQuotes] = useState<IQuotesState>({
    currencies: [],
    stocks: [],
    bitcoin: [],
    taxes: DEFAULT_TAXES_STATE,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const quotesData = await getFinance();

        const { source, ...currenciesData } = quotesData.currencies;

        setQuotes({
          currencies: formatQuotesForDisplay(currenciesData, 3, {
            category: "currencies",
            source,
          }),
          stocks: formatQuotesForDisplay(quotesData.stocks, 3, {
            category: "stocks",
          }),
          bitcoin: formatQuotesForDisplay(quotesData.bitcoin, 3, {
            category: "bitcoin",
          }),
          taxes: quotesData.taxes[0] || DEFAULT_TAXES_STATE,
          lastUpdated: new Date().toISOString(),
        });
        setError(null);
      } catch (err) {
        console.error("Failed to load financial data:", err);
        setError("Falha ao carregar dados financeiros");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (error) {
    return (
      <div className="p-4 text-center text-red-500">
        {error}
        <Button onClick={() => window.location.reload()} className="mt-4">
          Tentar novamente
        </Button>
      </div>
    );
  }

  return (
    <main className="p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
          Visão Geral
        </h1>
        {quotes.lastUpdated && (
          <span className="text-sm text-gray-500">
            Atualizado em: {formatDate(quotes.lastUpdated)}
          </span>
        )}
      </header>

      <section className="flex flex-col gap-8">
        <IndexesCard taxes={quotes.taxes} loading={loading} />

        {loading &&
          [...Array(3)].map((_, i) => (
            <article key={i}>
              <SectionHeader title="" link="" loading />
              <div className="grid grid-cols-3 gap-4">
                <Skeleton key={`skeleton-1-${i}`} className="h-40 rounded-lg" />
                <Skeleton key={`skeleton-2-${i}`} className="h-40 rounded-lg" />
                <Skeleton key={`skeleton-3-${i}`} className="h-40 rounded-lg" />
              </div>
            </article>
          ))}

        {!loading && (
          <>
            <article>
              <SectionHeader title="Índices" link="/acoes/indices" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {quotes.stocks.map((stock, index) => (
                  <StockCard
                    to={`/stocks/${stock?.code}`}
                    stock={stock}
                    key={index}
                  />
                ))}
              </div>
            </article>
            <article>
              <SectionHeader title="Moedas" link="/moedas" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {quotes.currencies.map((currency, index) => (
                  <CurrencyCard
                    to={`/currencies/${currency?.code}`}
                    currency={currency}
                    key={index}
                  />
                ))}
              </div>
            </article>
            <article>
              <SectionHeader title="Bitcoin" link="/bitcoin" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {quotes.bitcoin.map((bitcoin, index) => (
                  <BitcoinCard
                    to={`/bitcoin/${bitcoin?.code}`}
                    bitcoin={bitcoin}
                    key={index}
                  />
                ))}
              </div>
            </article>
          </>
        )}
      </section>
    </main>
  );
}
