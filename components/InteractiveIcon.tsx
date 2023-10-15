"use client";

import { useEffect, useState } from "react";

import OyagiIconCap from "@/public/oyagi_wireframes/variant=cap.svg";
import OyagiIconBody from "@/public/oyagi_wireframes/variant=body.svg";
import OyagiIconHead from "@/public/oyagi_wireframes/variant=head.svg";
import OyagiIconHeadHalf from "@/public/oyagi_wireframes/variant=head-half.svg";
import OyagiIconHeadClosed from "@/public/oyagi_wireframes/variant=head-closed.svg";
import OyagiIconHeadPleased from "@/public/oyagi_wireframes/variant=head-pleased.svg";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function InteractiveIcon() {
  const [isPressed, setIsPressed] = useState(false);
  const [blinkSpliteNumber, setBlinkSpliteNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.random();
      if (random < 0.32) {
        delay(0)
          .then(() => setBlinkSpliteNumber(2))
          .then(() => delay(50))
          .then(() => setBlinkSpliteNumber(1))
          .then(() => delay(50))
          .then(() => setBlinkSpliteNumber(0));

        if (random < 0.08) {
          delay(200)
            .then(() => setBlinkSpliteNumber(2))
            .then(() => delay(50))
            .then(() => setBlinkSpliteNumber(1))
            .then(() => delay(50))
            .then(() => setBlinkSpliteNumber(0));
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="group w-80 h-80"
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
    >
      <OyagiIconBody className="absolute" />
      <div className="duration-300 group-active:translate-y-0.5">
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
      <OyagiIconCap className="absolute duration-300 group-hover:translate-y-1 group-active:translate-y-2" />
    </div>
  );
}
