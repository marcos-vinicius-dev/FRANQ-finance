import VariationBadge from "@/components/finance/variation-badge";
import SkeletonTable from "@/components/layout/skeleton-table";
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from "@/components/ui/table/table";
import type { IBitcoinQuote } from "@/entities/bitcoin";
import getFinance from "@/gateway/finance";
import { formatCurrency } from "@/utils/formatters/currency";
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

export function BitcoinTable({ data }: { data: IBitcoinQuote[] }) {
  return (
    <Table className="mt-6">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Nome</TableHeaderCell>
          <TableHeaderCell>ISO</TableHeaderCell>
          <TableHeaderCell>Último</TableHeaderCell>
          <TableHeaderCell>Compra</TableHeaderCell>
          <TableHeaderCell>Venda</TableHeaderCell>
          <TableHeaderCell>Variação</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={`${item.code}-${item.name}`}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.format[0]}</TableCell>
            <TableCell>{formatCurrency(item.last)}</TableCell>
            <TableCell>{item.buy ? formatCurrency(item.buy) : "N/A"}</TableCell>
            <TableCell>
              {item.sell ? formatCurrency(item.sell) : "N/A"}
            </TableCell>
            <TableCell>
              <VariationBadge value={item.variation} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
