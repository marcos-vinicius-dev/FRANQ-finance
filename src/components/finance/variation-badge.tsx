import { RiArrowDownSFill, RiArrowUpSFill } from "@remixicon/react";
import { Badge } from "../ui/badge";
import { formatNumber } from "@/utils/formatters/number";

export default function VariationBadge({ value }: { value: number }) {
  const isPositive = value >= 0;

  const Icon = isPositive ? RiArrowUpSFill : RiArrowDownSFill;

  return (
    <span>
      <Badge variant={isPositive ? "success" : "error"}>
        <Icon />
        {formatNumber(value)}%
      </Badge>
    </span>
  );
}
