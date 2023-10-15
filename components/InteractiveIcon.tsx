"use client";

import { useEffect, useState } from "react";

import OyagiIconCap from "@/public/oyagi_wireframes/variant=cap.svg";
import OyagiIconBody from "@/public/oyagi_wireframes/variant=body.svg";
import OyagiIconHead from "@/public/oyagi_wireframes/variant=head.svg";
import OyagiIconHeadHalf from "@/public/oyagi_wireframes/variant=head-half.svg";
import OyagiIconHeadClosed from "@/public/oyagi_wireframes/variant=head-closed.svg";
import OyagiIconHeadPleased from "@/public/oyagi_wireframes/variant=head-pleased.svg";

export default function InteractiveIcon() {
  const [blink, setBlink] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const loop = () => {
      const rand = Math.random();

      if (rand < 0.003) setBlink(12);

      setBlink((blink) => Math.max(blink - 1, 0));
      requestAnimationFrame(loop);
    };

    loop();
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
        ) : blink === 0 ? (
          <OyagiIconHead className="absolute" />
        ) : blink <= 6 ? (
          <OyagiIconHeadHalf className="absolute" />
        ) : (
          <OyagiIconHeadClosed className="absolute" />
        )}
      </div>
      <OyagiIconCap className="absolute duration-300 group-hover:translate-y-0.5 group-active:translate-y-1.5" />
    </div>
  );
}
