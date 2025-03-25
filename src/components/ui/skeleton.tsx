import { cx } from "@/utils/libs/tremor";

export default function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx("animate-pulse rounded-md bg-gray-600/10", className)}
      {...props}
    />
  );
}
