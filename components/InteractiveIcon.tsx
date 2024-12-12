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
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [blinkSpliteNumber, setBlinkSpliteNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      const rand = Math.random();

      if (rand < 0.32) {
        setBlinkSpliteNumber(2);
        await delay(100);
        setBlinkSpliteNumber(1);
        await delay(100);
        setBlinkSpliteNumber(0);
      }

      if (rand < 0.08) {
        await delay(200);
        setBlinkSpliteNumber(2);
        await delay(100);
        setBlinkSpliteNumber(1);
        await delay(100);
        setBlinkSpliteNumber(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="group w-80 h-80 saturate-0 hover:saturate-100 duration-200"
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <OyagiIconBody className="absolute" />
      <div className={`duration-200 ${isPressed && "translate-y-0.5"}`}>
        {isPressed ? (
          <OyagiIconHeadPleased className="absolute" />
        ) : blinkSpliteNumber === 0 ? (
          <OyagiIconHead className="absolute" />
        ) : blinkSpliteNumber === 1 ? (
          <OyagiIconHeadHalf className="absolute" />
        ) : blinkSpliteNumber === 2 ? (
          <OyagiIconHeadClosed className="absolute" />
        ) : null}
      </div>
      <OyagiIconCap
        className={`absolute duration-200 ${
          isPressed
            ? "translate-y-2"
            : isHovered
            ? "translate-y-1"
            : "translate-y-1"
        }`}
      />
    </div>
  );
}
