import { formatCurrency } from "@/utils/formatters/currency";
import { Card } from "../ui/card";
import VariationBadge from "./variation-badge";
import { formatNumber } from "@/utils/formatters/number";

export type TQuote = {
  code: string;
  name: string;
  last: number;
  location?: string;
  buy?: number;
  sell?: number;
  points?: number;
  variation: number;
  format: [string];
};

export default function QuoteCard({
  quote,
  outline,
  hideCode,
}: {
  quote: TQuote;
  outline?: boolean;
  hideCode?: boolean;
}) {
  const teste = formatNumber(132344.88);
  console.log("tyeste", teste);
  return (
    <Card outline={outline} className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h3 className="font-bold text-gray-900 dark:text-gray-50 text-lg">
          {quote.name}
          {quote.code && !hideCode && (
            <span className="text-sm font-light text-gray-400 ml-2">
              {quote.code}
            </span>
          )}
        </h3>
        <VariationBadge value={quote?.variation} />
      </div>
      {quote.location && (
        <span className="text-gray-400">{quote.location}</span>
      )}
      <span className="flex flex-wrap gap-6">
        {quote.buy && (
          <QuoteCardItem title="Compra" value={formatCurrency(quote.buy)} />
        )}
        {quote.sell && (
          <QuoteCardItem title="Venda" value={formatCurrency(quote.sell)} />
        )}
        {quote.points && (
          <QuoteCardItem title="Pontos" value={formatNumber(132344.88)} />
        )}
        {quote.last && (
          <QuoteCardItem
            title="Última cotação"
            value={formatCurrency(quote.last)}
          />
        )}
      </span>
    </Card>
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
