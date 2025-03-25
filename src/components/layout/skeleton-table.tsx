import Skeleton from "../ui/skeleton";

export default function SkeletonTable() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="w-full h-10" />
      <Skeleton className="w-full h-10" />
      <Skeleton className="w-full h-10" />
      <Skeleton className="w-full h-10" />
    </div>
  );
}
