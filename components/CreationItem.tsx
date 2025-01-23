'use client';

import { Creation } from '@/models/creation';
import Link from 'next/link';
import { abort3dEffect, subtle3dEffect } from '@/lib/subtle3dEffects';

export default function CreationItem({
  creation,
  index,
}: {
  creation: Creation;
  index: number;
}) {
  const dateString = creation.date
    .toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replaceAll('/', '.');

  const titleSpaceRemoved = creation.title.replaceAll(' ', '');

  return (
    <Link
      href={`/about/${creation.id}`}
      className="group relative flex min-w-64 max-w-full cursor-none flex-col place-items-center gap-0 overflow-hidden border border-dashed border-neutral-400 px-20 py-10 transition-all duration-500 hover:z-50 hover:bg-neutral-700 hover:duration-80"
      onMouseMove={subtle3dEffect}
      onMouseLeave={abort3dEffect}
    >
      <div
        className="absolute left-0 top-3.5 flex animate-marquee-left select-none gap-0 whitespace-nowrap text-8xl font-extralight leading-none -tracking-widest text-background duration-500 group-hover:text-neutral-600 group-hover:duration-80"
        style={{
          animationDuration: `${creation.title.length * (5500 + (index % 3) * 500)
          }ms`,
          animationDirection: index % 2 ? 'normal' : 'reverse',
        }}
      >
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={i}>
              <span className="duration-100 group-hover:text-primary group-hover:duration-80">
                {titleSpaceRemoved.charAt(0)}
              </span>
              {titleSpaceRemoved.slice(1)}
            </div>
          ))}
      </div>

      <div className="z-50 whitespace-nowrap text-center transition-colors duration-500 group-hover:text-neutral-50 group-hover:duration-80">
        {creation.title}
      </div>
      <time
        dateTime={creation.date.toISOString()}
        className="z-50 text-sm text-neutral-500 transition-colors duration-500 group-hover:text-neutral-200 group-hover:duration-80"
      >
        {dateString}
      </time>

      <div className="absolute inset-y-0 right-2 flex items-center text-xl opacity-0 duration-500 group-hover:opacity-100 group-hover:duration-80">
        <div className="font-light text-neutral-50">{'->'}</div>
      </div>
    </Link>
  );
}
