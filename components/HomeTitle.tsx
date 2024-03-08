"use client";

import { abort3dEffect, subtle3dEffect } from "@/lib/subtle3dEffects";

export default function HomeTitle() {
  return (
    <h1
      className="pb-2 px-1 hover-inverse"
      onMouseMove={subtle3dEffect}
      onMouseLeave={abort3dEffect}
    >
      <span className="text-primary font-medium tracking-wide">@</span>
      <span className="font-bold">MugiSus</span>
    </h1>
  );
}
