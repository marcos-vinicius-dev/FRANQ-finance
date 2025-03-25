import { NavLink } from "react-router";
import { Card } from "../ui/card";
import { formatNumber } from "@/utils/formatters/number";

export default function TaxCard({
  to,
  title,
  outline,
  items,
}: {
  to: string;
  title?: string;
  outline?: boolean;
  items: { label: string; value: number }[];
}) {
  return (
    <NavLink to={to}>
      <Card outline={outline} className="flex gap-6">
        {title && (
          <p className="text-gray-900 dark:text-blue-600 text-xl font-bold">
            {title}
          </p>
        )}
        <div className="flex gap-4">
          {items.map((item, index) => {
            return (
              <span key={`tax-card-${index}`} className="flex flex-col">
                <p className=" text-gray-900 dark:text-white">{item.label}</p>
                <p className=" text-gray-900 dark:text-white text-xl font-bold">
                  {formatNumber(item.value)}
                </p>
              </span>
            );
          })}
        </div>
      </Card>
    </NavLink>
  );
}
