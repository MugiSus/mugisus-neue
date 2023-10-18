import { Creation } from "@/models/creations";
import Link from "next/link";

export default function CreationItem({
  creation,
  index,
}: {
  creation: Creation;
  index: number;
}) {
  const dateString = creation.date
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replaceAll("/", ".");

  const content = (
    <li
      className={`flex group px-32 py-16 gap-1 place-items-center flex-col rounded-lg max-w-full transition-all duration-1000 hover:duration-200 hover:-translate-y-1 hover:shadow-xl hover:bg-stone-50 ${
        ["bg-creation-light", "bg-creation-dark"][index % 2]
      }`}
    >
      <div className="text-center whitespace-nowrap transition-colors duration-1000 group-hover:duration-200 group-hover:text-stone-800">
        {creation.title}
      </div>
      <time
        dateTime={creation.date.toISOString()}
        className="text-primary text-xs transition-colors duration-1000 group-hover:duration-200 group-hover:text-stone-500"
      >
        {dateString}
      </time>
    </li>
  );

  return creation.href ? (
    <Link href={creation.href} className="max-w-full">
      {content}
    </Link>
  ) : (
    content
  );
}
