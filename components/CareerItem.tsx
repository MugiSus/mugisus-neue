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
    <li className="flex flex-col gap-1 items-center">
      <time
        dateTime={career.date.toISOString()}
        className="text-sm text-neutral-400"
      >
        {dateString}
      </time>
      <p className="text-sm hover-inverse px-0.5 md:text-base">
        {career.title}
      </p>
      {!isLast && <CareersSeparator className="text-md mt-5" />}
    </li>
  );
}
