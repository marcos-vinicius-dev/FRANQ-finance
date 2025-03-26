import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from "@/components/ui/table/table";
import type { ICurrencyQuote } from "@/entities/currency";
import { formatCurrency } from "@/utils/formatters/currency";
import VariationBadge from "../variation-badge";

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
