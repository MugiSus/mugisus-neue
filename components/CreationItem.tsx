"use client";

import { Creation } from "@/models/creation";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { abort3dEffect, subtle3dEffect } from "@/lib/subtle3dEffects";

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

  const titleSpaceRemoved = creation.title.replaceAll(" ", "");

  const content = (
    <li
      className={`flex relative group px-20 py-14 gap-0 place-items-center flex-col max-w-full overflow-hidden transition-all cursor-none duration-500 hover:duration-80 hover:bg-neutral-700 hover:z-50 border border-dashed border-neutral-300 ${
        index % 2 ? "bg-creation-light" : "bg-creation-light"
      }`}
      onMouseMove={subtle3dEffect}
      onMouseLeave={abort3dEffect}
    >
      <div
        className={`whitespace-nowrap leading-none text-8xl duration-500 group-hover:duration-80 group-hover:text-neutral-600 ${
          index % 2 ? "text-creation-dark" : "text-creation-dark"
        }`}
      >
        <div
          className="absolute flex gap-0 font-extralight left-0 top-[30px] animate-marquee-left select-none tracking-[-0.1em]"
          style={{
            animationDuration: `${
              creation.title.length * (5500 + (index % 3) * 500)
            }ms`,
            animationDirection: index % 2 ? "normal" : "reverse",
          }}
        >
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div key={i}>
                <span className="group-hover:text-primary duration-100 group-hover:duration-80">
                  {titleSpaceRemoved.charAt(0)}
                </span>
                {titleSpaceRemoved.slice(1)}
              </div>
            ))}
        </div>
      </div>
      <div className="text-center whitespace-nowrap transition-colors duration-500 group-hover:duration-80 group-hover:text-neutral-50 z-50">
        {creation.title}
      </div>
      <time
        dateTime={creation.date.toISOString()}
        className="text-neutral-500 text-sm transition-colors duration-500 group-hover:duration-80 group-hover:text-neutral-200 z-50"
      >
        {dateString}
      </time>
      {creation.href && (
        <FontAwesomeIcon
          icon={faArrowRight}
          className="opacity-0 absolute h-5 right-4 top-0 bottom-0 m-auto text-neutral-200 duration-500 group-hover:duration-80 group-hover:opacity-100 transition-all"
        />
      )}
    </li>
  );

  return (
    <Link href={`/about/${creation.id}`} className="max-w-full">
      {content}
    </Link>
  );
}
