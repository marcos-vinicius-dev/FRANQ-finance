import { Card } from "../ui/card";

export default function TaxCard({
  title,
  outline,
  children,
}: {
  title?: string;
  outline?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Card outline={outline} className="flex gap-6">
      {title && (
        <p className="text-gray-900 dark:text-blue-600 text-xl font-bold">
          {title}
        </p>
      )}
      <div className="flex gap-4">{children}</div>
    </Card>
  );
}

export function TaxCardItem({ title, value }) {
  return (
    <span className="flex flex-col">
      <p className=" text-gray-900 dark:text-white">{title}</p>
      <p className=" text-gray-900 dark:text-white text-xl font-bold">
        {value}
      </p>
    </span>
  );
}
