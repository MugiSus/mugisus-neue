"use client";

import { Creation } from "@/models/creation";
import Link from "next/link";
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

  return (
    <Link
      href={`/about/${creation.id}`}
      className="flex relative group px-20 py-10 gap-0 place-items-center flex-col max-w-full overflow-hidden transition-all cursor-none duration-500 hover:duration-80 hover:bg-neutral-700 hover:z-50 border border-dashed border-neutral-400 bg-creation-light min-w-64"
      onMouseMove={subtle3dEffect}
      onMouseLeave={abort3dEffect}
    >
      <div
        className="absolute text-neutral-600/5 whitespace-nowrap leading-none text-8xl duration-500 group-hover:duration-80 group-hover:text-neutral-600 flex gap-0 font-extralight left-0 top-3.5 animate-marquee-left select-none tracking-[-0.1em]"
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

      <div className="text-center whitespace-nowrap transition-colors duration-500 group-hover:duration-80 group-hover:text-neutral-50 z-50">
        {creation.title}
      </div>
      <time
        dateTime={creation.date.toISOString()}
        className="text-neutral-500 text-sm transition-colors duration-500 group-hover:duration-80 group-hover:text-neutral-200 z-50"
      >
        {dateString}
      </time>

      <div className="absolute flex text-xl right-2 inset-y-0 items-center duration-500 group-hover:duration-80 opacity-0 group-hover:opacity-100">
        <div className="text-neutral-50 font-light">{"->"}</div>
      </div>
    </Link>
  );
}
