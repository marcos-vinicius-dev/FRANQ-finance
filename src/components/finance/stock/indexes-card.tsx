import type { ITax } from "@/entities/tax";
import Skeleton from "../../ui/skeleton";
import { formatDate } from "@/utils/formatters/date";
import { Card } from "../../ui/card";
import TaxCard from "../tax-card";

export default function IndexesCard({
  taxes,
  loading,
}: {
  taxes: ITax;
  loading: boolean;
}) {
  if (loading) {
    return (
      <article>
        <h2 className="text-xl mb-4">
          <Skeleton className="h-6 w-48" />
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-32 rounded-lg" />
          ))}
        </div>
      </article>
    );
  }

  return (
    <article>
      <h2 className="text-xl text-gray-900 dark:text-gray-50 mb-4 flex justify-between gap-6">
        Indicadores Financeiros
        {taxes.date && (
          <span className="font-light text-gray-400">
            {formatDate(taxes.date)}
          </span>
        )}
      </h2>
      <Card className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 !bg-transparent !shadow-none">
        <TaxCard
          to="/taxes/selic"
          title="SELIC"
          items={[
            { label: "SELIC Diária", value: taxes.selic_daily },
            { label: "SELIC Anual", value: taxes.selic },
          ]}
        />
        <TaxCard
          to="/taxes/cdi"
          title="CDI"
          items={[
            { label: "CDI Diária", value: taxes.cdi_daily },
            { label: "CDI Anual", value: taxes.cdi },
          ]}
        />
        <TaxCard
          to="/taxes/daily_factor"
          items={[{ label: "Fator Diário", value: taxes.daily_factor }]}
          outline
        />
      </Card>
    </article>
  );
}
