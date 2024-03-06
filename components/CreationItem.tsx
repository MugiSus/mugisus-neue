"use client";

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
      className={`flex relative cursor-none group px-32 py-16 gap-0 place-items-center flex-col rounded-md max-w-full overflow-hidden transition-all duration-500 hover:duration-100 hover:bg-neutral-700 ${
        index % 2 ? "bg-creation-dark" : "bg-creation-light"
      }`}
      onMouseMove={(event) => {
        // subtle 3D effect
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (centerY - y) * 0.05;
        const rotateY = (centerX - x) * -0.05;
        event.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(40px) scale(104%)`;
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
      }}
    >
      <div
        className={`whitespace-nowrap leading-none tracking-tighter text-9xl duration-500 group-hover:duration-100 group-hover:text-neutral-600 ${
          index % 2 ? "text-creation-light" : "text-creation-dark"
        }`}
      >
        <div
          className={`absolute -left-4 -top-16 font-light animate-marquee-left`}
          style={{
            animationDuration: `${creation.title.length * 20000}ms`,
            animationDirection: index % 2 ? "reverse" : "normal",
          }}
        >
          {creation.title.repeat(4)}
        </div>
        <div
          className={`absolute -right-4 -bottom-14 font-semibold animate-marquee-right`}
          style={{
            animationDuration: `${creation.title.length * 20000}ms`,
            animationDirection: index % 2 ? "reverse" : "normal",
          }}
        >
          {creation.title.repeat(4)}
        </div>
      </div>
      <div className="text-center whitespace-nowrap transition-colors duration-500 group-hover:duration-100 group-hover:text-neutral-50 z-50">
        {creation.title}
      </div>
      <time
        dateTime={creation.date.toISOString()}
        className="text-neutral-800 text-xs transition-colors duration-500 group-hover:duration-100 group-hover:text-neutral-200 tabular-nums z-50"
      >
        {dateString}
      </time>
      <FontAwesomeIcon
        icon={faArrowRight}
        className="opacity-0 absolute h-5 right-4 top-0 bottom-0 m-auto text-neutral-200 duration-500 group-hover:duration-100 group-hover:opacity-100 transition-all"
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
