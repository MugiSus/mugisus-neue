import { Career } from "@/models/career";

export default function CareerItem({ career }: { career: Career }) {
  const dateString = career.date
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replaceAll("/", ".");

  return (
    <li>
      <time
        dateTime={career.date.toISOString()}
        className="text-sm text-neutral-500"
      >
        {dateString}
      </time>
      <p className="text-md">{career.title}</p>
    </li>
  );
}
