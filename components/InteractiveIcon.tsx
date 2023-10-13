"use client";

import Image from "next/image";

export default function InteractiveIcon() {
  return (
    <div className="relative w-80 h-80">
      <Image
        src="oyagisvg_wireframe_all.svg"
        width={300}
        height={300}
        alt="mugisus's icon"
        className="transition-all duration-500 hover:translate-y-1"
      />
    </div>
  );
}
