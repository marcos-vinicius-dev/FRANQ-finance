import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from "@/components/ui/table/table";

import VariationBadge from "../variation-badge";
import type { IStockIndex } from "@/entities/stock";

export function StockIndexTable({ data }: { data: IStockIndex[] }) {
  return (
    <Table className="mt-6">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Índice</TableHeaderCell>
          <TableHeaderCell>Localização</TableHeaderCell>
          <TableHeaderCell>Pontos</TableHeaderCell>
          <TableHeaderCell>Variação</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((index) => (
          <TableRow key={index.name}>
            <TableCell className="font-medium">{index.name}</TableCell>
            <TableCell>{index.location}</TableCell>
            <TableCell>
              {index.points ? index.points.toLocaleString() : "N/A"}
            </TableCell>
            <TableCell>
              <VariationBadge value={index.variation} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
