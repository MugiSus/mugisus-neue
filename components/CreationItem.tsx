import { Creation } from "@/models/creations";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      className={`flex relative group px-32 py-16 gap-1 place-items-center flex-col rounded-lg max-w-full overflow-hidden transition-all duration-300 hover:bg-stone-50 ${
        ["bg-creation-light", "bg-creation-dark"][index % 2]
      }`}
    >
      <div
        className={`whitespace-nowrap leading-none tracking-tighter text-9xl duration-300 group-hover:text-stone-200 ${
          ["text-creation-dark", "text-creation-light"][index % 2]
        }`}
      >
        <div className={`absolute -left-4 -top-16 font-light`}>
          {creation.title}
        </div>
        <div className={`absolute -right-4 -bottom-12 font-semibold`}>
          {creation.title}
        </div>
      </div>
      <div className="text-center whitespace-nowrap transition-colors duration-300 group-hover:text-stone-800 z-50">
        {creation.title}
      </div>
      <time
        dateTime={creation.date.toISOString()}
        className="text-primary text-xs transition-colors duration-300 group-hover:text-stone-600 tabular-nums z-50"
      >
        {dateString}
      </time>
      <FontAwesomeIcon
        icon={faArrowRight}
        className="opacity-0 absolute h-5 right-4 top-0 bottom-0 m-auto text-stone-600 duration-300 group-hover:opacity-100 transition-all group-hover:translate-x-1"
      />
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
