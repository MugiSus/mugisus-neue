import { Career } from "@/models/career";

export default function CareerItem({
  career,
  isLast,
}: {
  career: Career;
  isLast: boolean;
}) {
  const dateString = career.date
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replaceAll("/", ".");

  return (
    <li className="flex flex-col gap-1 items-center">
      <time
        dateTime={career.date.toISOString()}
        className="text-sm text-neutral-400"
      >
        {dateString}
      </time>
      <p className="text-md">{career.title}</p>
      {!isLast && <p className="text-md text-neutral-400 mt-5">▼</p>}
    </li>
  );
}
