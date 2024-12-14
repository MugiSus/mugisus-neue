import { Career } from "@/models/career";

export default function CareerItem({
  career,
  isLast,
  isJapanese,
}: {
  career: Career;
  isLast?: boolean;
  isJapanese?: boolean;
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

        <p className="text-sm px-0.5 sm:text-base text-center">
          {isJapanese ? career.titleJa : career.title}
        </p>
      </div>
      {!isLast && (
        <div className="text-content rotate-90 lg:rotate-0 font-thin">
          {"--->"}
        </div>
      )}
    </li>
  );
}
