import { formatCurrency } from "@/utils/formatters/currency";
import { Card } from "../../ui/card";
import VariationBadge from "../variation-badge";
import { NavLink } from "react-router";
import type { IBitcoinQuote } from "@/entities/bitcoin";

export default function BitcoinCard({
  to,
  bitcoin,
  outline,
}: {
  to: string;
  bitcoin: IBitcoinQuote;
  outline?: boolean;
}) {
  return (
    <NavLink to={to}>
      <Card outline={outline} className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h3 className="font-bold text-gray-900 dark:text-gray-50 text-lg">
            {bitcoin.name}
          </h3>
          <VariationBadge value={bitcoin?.variation} />
        </div>
        <span className="flex flex-wrap gap-6">
          {bitcoin?.buy && (
            <QuoteCardItem
              title="Compra"
              value={formatCurrency(bitcoin?.buy)}
            />
          )}
          {bitcoin?.sell && (
            <QuoteCardItem
              title="Venda"
              value={formatCurrency(bitcoin?.sell)}
            />
          )}
          {bitcoin?.last && (
            <QuoteCardItem
              title="Última cotação"
              value={formatCurrency(bitcoin?.last)}
            />
          )}
        </span>
      </Card>
    </NavLink>
  );
}

function QuoteCardItem({ title, value }: { title: string; value: string }) {
  return (
    <span className="flex flex-col">
      <p className=" text-gray-900 dark:text-white">{title}</p>
      <p className=" text-gray-900 dark:text-white text-xl font-bold">
        {value}
      </p>
    </span>
  );
}
