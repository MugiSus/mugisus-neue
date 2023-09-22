import { Creation } from "@/models/creations";
import Link from "next/link";

export default function CreationItem({
  creation,
  index,
}: {
  creation: Creation;
  index: number;
}) {
  const content = (
    <li
      className={`flex px-32 py-16 gap-1 place-items-center flex-col rounded-lg font-medium max-w-full ${
        ["bg-creation-light", "bg-creation-dark"][index % 2]
      }`}
    >
      <div className="text-center whitespace-nowrap">{creation.title}</div>
      <time
        dateTime={creation.date.toISOString()}
        className="text-primary text-xs"
      >
        {creation.date
          .toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .replaceAll("/", ".")}
      </time>
    </li>
  );

  return creation.href ? <Link href={creation.href}>{content}</Link> : content;
}
