import { formatNumber } from "@/utils/formatters/number";

import { NavLink } from "react-router";
import { Card } from "@/components/ui/card";
import VariationBadge from "../variation-badge";
import type { IStockIndex } from "@/entities/stock";

export default function StockCard({
  to,
  stock,
  outline,
}: {
  to: string;
  stock: IStockIndex;
  outline?: boolean;
}) {
  return (
    <NavLink to={to}>
      <Card outline={outline} className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h3 className="font-bold text-gray-900 dark:text-gray-50 text-lg">
            {stock.name}
            <span className="text-sm font-light text-gray-400 ml-2">
              {stock.code}
            </span>
          </h3>
          <VariationBadge value={stock?.variation} />
        </div>
        {stock?.location && (
          <span className="text-gray-400">{stock?.location}</span>
        )}
        <span className="flex flex-wrap gap-6">
          {stock?.points && (
            <QuoteCardItem title="Pontos" value={formatNumber(stock?.points)} />
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
