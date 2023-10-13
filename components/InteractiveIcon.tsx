"use client";

import Image from "next/image";

function ImageFragments({
  src,
  className,
}: {
  src: string;
  className: string;
}) {
  return (
    <Image
      src={src}
      width={320}
      height={320}
      alt="mugisus's icon"
      draggable="false"
      className={`absolute transition-all ${className}`}
    />
  );
}

export default function InteractiveIcon() {
  return (
    <div className="relative w-80 h-80 group">
      <ImageFragments
        src="/oyagi_wireframes/variant=body.svg"
        className="duration-500 group-hover:translate-y-0.5"
      />
      <ImageFragments
        src="/oyagi_wireframes/variant=head.svg"
        className="duration-500 group-hover:translate-y-0.5 group-active:translate-y-[3px]"
      />
      {/* <ImageFragments
        src="/oyagi_wireframes/variant=head-closed.svg"
        className="duration-500 group-hover:translate-y-0.5 group-active:translate-y-[3px]"
      />
      <ImageFragments
        src="/oyagi_wireframes/variant=head-half.svg"
        className="duration-500 group-hover:translate-y-0.5 group-active:translate-y-[3px]"
      /> */}
      <ImageFragments
        src="/oyagi_wireframes/variant=cap.svg"
        className="duration-500 group-hover:translate-y-1 group-active:translate-y-2"
      />
    </div>
  );
}
