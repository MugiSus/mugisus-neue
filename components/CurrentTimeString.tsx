"use client";

import { useEffect, useState } from "react";

export default function CurrentTimeString({
  initialDate,
}: {
  initialDate: Date;
}) {
  const [currentTime, setCurrentTime] = useState(initialDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentTimeString = currentTime.toLocaleTimeString("ja-JP", {
    timeZone: "Asia/Tokyo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return <span className="tabular-nums">{currentTimeString} (UTC+09:00)</span>;
}
