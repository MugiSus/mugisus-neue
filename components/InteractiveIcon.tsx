'use client';

import { useEffect, useState } from 'react';

import OyagiIconCap from '@/public/oyagi_wireframes/variant=cap-light.svg';
import OyagiIconBody from '@/public/oyagi_wireframes/variant=body-light.svg';
import OyagiIconHead from '@/public/oyagi_wireframes/variant=head-light.svg';
import OyagiIconHeadHalf from '@/public/oyagi_wireframes/variant=head-half-light.svg';
import OyagiIconHeadClosed from '@/public/oyagi_wireframes/variant=head-closed-light.svg';
import OyagiIconHeadPleased from '@/public/oyagi_wireframes/variant=head-pleased-light.svg';

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
    <div className="no-tap-highlight group relative flex size-[300px] cursor-pointer select-none items-center justify-center bg-background text-primary duration-300">
      <div className="absolute left-0 top-0 size-4 border-l border-t border-dashed border-content" />
      <div className="absolute bottom-0 right-0 size-4 border-b border-r border-dashed border-content" />
      <div className="absolute right-0 top-0 size-4 border-r border-t border-dashed border-content" />
      <div className="absolute bottom-0 left-0 size-4 border-b border-l border-dashed border-content" />

      <div className="relative size-[256px] -translate-x-0.5 -translate-y-2">
        <OyagiIconBody className="absolute" />

        <OyagiIconHeadPleased className="invisible absolute transition-transform duration-300 group-active:visible group-active:translate-y-0.5" />
        {blinkSpliteNumber === 0 && (
          <OyagiIconHead className="absolute transition-transform duration-300 group-active:invisible group-active:translate-y-0.5" />
        )}
        {blinkSpliteNumber === 1 && (
          <OyagiIconHeadHalf className="absolute transition-transform duration-300 group-active:invisible group-active:translate-y-0.5" />
        )}
        {blinkSpliteNumber === 2 && (
          <OyagiIconHeadClosed className="absolute transition-transform duration-300 group-active:invisible group-active:translate-y-0.5" />
        )}

        <OyagiIconCap className="absolute translate-y-1 transition-transform duration-300 group-hover:translate-y-1.5 group-active:translate-y-2.5" />
      </div>
    </div>
  );
}
