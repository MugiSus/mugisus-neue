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
    <li className="flex flex-col gap-4 md:flex-row md:gap-6 items-center">
      <div className="flex flex-col gap-2 items-center">
        <time
          dateTime={career.date.toISOString()}
          className="text-sm text-neutral-400"
        >
          {dateString}
        </time>
        <p className="text-sm hover-inverse px-0.5 md:text-base">
          {career.title}
        </p>
      </div>
      {!isLast && <CareersSeparator className="rotate-90 md:rotate-0" />}
    </li>
  );
}
