import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from "@/components/ui/table/table";
import type { IBitcoinQuote } from "@/entities/bitcoin";
import { formatCurrency } from "@/utils/formatters/currency";
import VariationBadge from "../variation-badge";

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
