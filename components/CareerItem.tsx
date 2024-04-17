import { Career } from "@/models/career";

import CareersSeparator from "@/public/careers-separator.svg";

export default function CareerItem({
  career,
  isLast,
}: {
  career: Career;
  isLast?: boolean;
}) {
  const dateString = career.date
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replaceAll("/", ".");

  return (
    <li className="flex flex-col gap-2 items-center">
      <time
        dateTime={career.date.toISOString()}
        className="text-md text-neutral-400"
      >
        {dateString}
      </time>
      <p className="text-md hover-inverse px-0.5">{career.title}</p>
      {!isLast && <CareersSeparator className="text-md mt-4" />}
    </li>
  );
}
