"use client";

import { Creation } from "@/models/creations";
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

  const content = (
    <li
      className={`flex relative group px-32 py-16 gap-0 place-items-center flex-col rounded-md max-w-full overflow-hidden transition-all cursor-none duration-500 hover:duration-80 hover:bg-neutral-700 hover:z-50 ${
        index % 2 ? "bg-creation-dark" : "bg-creation-light"
      }`}
      onMouseMove={subtle3dEffect}
      onMouseLeave={abort3dEffect}
    >
      <div
        className={`whitespace-nowrap leading-none tracking-tighter text-9xl duration-500 group-hover:duration-80 group-hover:text-neutral-600 ${
          index % 2 ? "text-creation-light" : "text-creation-dark"
        }`}
      >
        <div
          className={`absolute -left-4 -top-16 font-light animate-marquee-left`}
          style={{
            animationDuration: `${creation.title.length * 10000}ms`,
            animationDirection: index % 2 ? "reverse" : "normal",
          }}
        >
          {[...Array(4)].fill(
            <span>
              <span className="group-hover:text-primary duration-100 group-hover:duration-80">
                {creation.title.slice(-1)}
              </span>
              {creation.title.slice(0, -1)}
            </span>
          )}
        </div>
        <div
          className={`absolute -right-4 -bottom-14 font-semibold animate-marquee-right`}
          style={{
            animationDuration: `${creation.title.length * 10000}ms`,
            animationDirection: index % 2 ? "reverse" : "normal",
          }}
        >
          {[...Array(4)].fill(
            <span>
              <span className="group-hover:text-primary duration-100 group-hover:duration-80">
                {creation.title.slice(0, 1)}
              </span>
              {creation.title.slice(1)}
            </span>
          )}
        </div>
      </div>
      <div className="text-center whitespace-nowrap transition-colors duration-500 group-hover:duration-80 group-hover:text-neutral-50 z-50">
        {creation.title}
      </div>
      <time
        dateTime={creation.date.toISOString()}
        className="text-neutral-800 text-xs transition-colors duration-500 group-hover:duration-80 group-hover:text-neutral-200 tabular-nums z-50"
      >
        {dateString}
      </time>
      <FontAwesomeIcon
        icon={faArrowRight}
        className="opacity-0 absolute h-5 right-4 top-0 bottom-0 m-auto text-neutral-200 duration-500 group-hover:duration-80 group-hover:opacity-100 transition-all"
      />
    </li>
  );

  return creation.href ? (
    <Link
      href={creation.href}
      className="max-w-full"
      rel="noopener noreferrer"
      target="_blank"
    >
      {content}
    </Link>
  ) : (
    content
  );
}
