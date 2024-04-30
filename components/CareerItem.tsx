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
    <li className="flex flex-col gap-6 lg:flex-row lg:gap-6 items-center">
      <div className="flex flex-col gap-2 items-center hover:-translate-y-0.5 duration-200">
        <time
          dateTime={career.date.toISOString()}
          className="text-sm text-neutral-400"
        >
          {dateString}
        </time>
        <p className="text-sm px-0.5 sm:text-base">{career.title}</p>
      </div>
      {!isLast && <CareersSeparator className="rotate-90 lg:rotate-0" />}
    </li>
  );
}
