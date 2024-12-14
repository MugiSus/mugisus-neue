"use client";

import { useEffect, useState } from "react";

import OyagiIconCap from "@/public/oyagi_wireframes/variant=cap-light.svg";
import OyagiIconBody from "@/public/oyagi_wireframes/variant=body-light.svg";
import OyagiIconHead from "@/public/oyagi_wireframes/variant=head-light.svg";
import OyagiIconHeadHalf from "@/public/oyagi_wireframes/variant=head-half-light.svg";
import OyagiIconHeadClosed from "@/public/oyagi_wireframes/variant=head-closed-light.svg";
import OyagiIconHeadPleased from "@/public/oyagi_wireframes/variant=head-pleased-light.svg";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function InteractiveIcon() {
  const [blinkSpliteNumber, setBlinkSpliteNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      const rand = Math.random();

      if (rand < 0.32) {
        setBlinkSpliteNumber(2);
        await delay(66);
        setBlinkSpliteNumber(1);
        await delay(66);
        setBlinkSpliteNumber(0);
      }

      if (rand < 0.08) {
        await delay(133);
        setBlinkSpliteNumber(2);
        await delay(66);
        setBlinkSpliteNumber(1);
        await delay(66);
        setBlinkSpliteNumber(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center w-[300px] h-[300px] saturate-0 hover:saturate-100 duration-300 group select-none">
      <div className="absolute top-0 left-0 w-6 h-6 border-l border-t border-dashed border-content" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-dashed border-content" />
      <div className="absolute top-0 right-0 w-6 h-6 border-r border-t border-dashed border-content" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-l border-b border-dashed border-content" />

      <div className="relative w-[256px] h-[256px] -translate-y-2 -translate-x-0.5">
        <OyagiIconBody className="absolute" />

        <OyagiIconHeadPleased className="invisible group-active:visible absolute group-active:translate-y-0.5 duration-300 transition-transform" />
        {blinkSpliteNumber === 0 && (
          <OyagiIconHead className="group-active:invisible absolute group-active:translate-y-0.5 duration-300 transition-transform" />
        )}
        {blinkSpliteNumber === 1 && (
          <OyagiIconHeadHalf className="group-active:invisible absolute group-active:translate-y-0.5 duration-300 transition-transform" />
        )}
        {blinkSpliteNumber === 2 && (
          <OyagiIconHeadClosed className="group-active:invisible absolute group-active:translate-y-0.5 duration-300 transition-transform" />
        )}

        <OyagiIconCap className="absolute duration-300 translate-y-1 group-active:translate-y-2.5 group-hover:translate-y-1.5" />
      </div>
    </div>
  );
}
