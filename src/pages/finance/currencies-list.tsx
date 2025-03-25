import VariationBadge from "@/components/finance/variation-badge";
import SkeletonTable from "@/components/layout/skeleton-table";

import {
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table/table";
import type { ICurrencyQuote } from "@/entities/currency";
import getFinance from "@/gateway/finance";
import { formatCurrency } from "@/utils/formatters/currency";
import { formatQuotesForDisplay } from "@/utils/quotes/formatQuotesForDisplay";

import { useState, useEffect } from "react";

export function CurrencyTable({ data }: { data: ICurrencyQuote[] }) {
  return (
    <Table className="mt-6">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Código</TableHeaderCell>
          <TableHeaderCell>Nome</TableHeaderCell>
          <TableHeaderCell>Compra</TableHeaderCell>
          <TableHeaderCell>Venda</TableHeaderCell>
          <TableHeaderCell>Variação</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((currency) => (
          <TableRow key={`${currency.source}-${currency.code}`}>
            <TableCell>{currency.code}</TableCell>
            <TableCell>{currency.name}</TableCell>
            <TableCell>
              {currency.sell ? formatCurrency(currency.sell) : "N/A"}
            </TableCell>
            <TableCell>
              {currency.sell ? formatCurrency(currency.sell) : "N/A"}
            </TableCell>
            <TableCell>
              {currency.variation ? (
                <VariationBadge value={currency.variation} />
              ) : (
                "N/A"
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

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
