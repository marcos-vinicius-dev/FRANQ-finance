import { NavLink } from "react-router";
import { Button } from "../ui/button";
import Skeleton from "../ui/skeleton";

export default function SectionHeader({
  title,
  link,
  loading,
}: {
  title: string;
  link: string;
  loading?: boolean;
}) {
  if (loading) {
    return (
      <div className="flex justify-between items-center mb-4">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-8 w-24" />
      </div>
    );
  }

  return (
    <h2 className="text-xl text-gray-900 dark:text-gray-50 mb-4 flex justify-between gap-6">
      {title}
      <NavLink to={link}>
        <Button variant="light">Ver todos</Button>
      </NavLink>
    </h2>
  );
}
