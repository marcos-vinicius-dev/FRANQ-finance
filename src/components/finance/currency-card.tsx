import { formatCurrency } from "@/utils/formatters/currency";
import { Card } from "../ui/card";
import VariationBadge from "./variation-badge";
import type { ICurrencyQuote } from "@/entities/currency";
import { NavLink } from "react-router";

export default function CurrencyCard({
  to,
  currency,
  outline,
}: {
  to: string;
  currency: ICurrencyQuote;
  outline?: boolean;
}) {
  return (
    <NavLink to={to}>
      <Card outline={outline} className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h3 className="font-bold text-gray-900 dark:text-gray-50 text-lg">
            {currency.name}
            <span className="text-sm font-light text-gray-400 ml-2">
              {currency.code}
            </span>
          </h3>
          <VariationBadge value={currency?.variation} />
        </div>
        <span className="flex flex-wrap gap-6">
          {currency?.buy && (
            <CurrencyCardItem
              title="Compra"
              value={formatCurrency(currency?.buy)}
            />
          )}
          {currency?.sell && (
            <CurrencyCardItem
              title="Venda"
              value={formatCurrency(currency?.sell)}
            />
          )}
        </span>
      </Card>
    </NavLink>
  );
}

function CurrencyCardItem({ title, value }: { title: string; value: string }) {
  return (
    <span className="flex flex-col">
      <p className=" text-gray-900 dark:text-white">{title}</p>
      <p className=" text-gray-900 dark:text-white text-xl font-bold">
        {value}
      </p>
    </span>
  );
}
