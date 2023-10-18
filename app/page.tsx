import Status from "@/components/status";
import Image from "next/image";

import {
  faBuilding,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faThreads,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import CreationItem from "@/components/creationItem";
import { Creations } from "@/lib/creationsLoader";
import { useEffect, useState } from "react";
import CurrentTimeString from "@/components/currentTimeString";
import InteractiveIcon from "@/components/InteractiveIcon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-32 px-8 sm:px-16 gap-32 max-w-7xl mx-auto">
      <div className="grid gap-24 place-items-center mt-12">
        <div className="mr-6 select-none">
          <InteractiveIcon />
        </div>
        <div className="grid place-items-center gap-4">
          <div className="flex gap-0.5 text-5xl">
            <div className="text-primary font-medium">@</div>
            <h1 className="font-bold">MugiSus</h1>
          </div>
          <ul className="inline text-center leading-8 max-w-4xl">
            <Status icon={faBuilding}>
              Keio University; Department of Environment and Information Studies
            </Status>
            <Status icon={faLocationDot}>
              Sapporo, Hokkaido / Kanagawa, Japan
            </Status>
            <Status icon={faClock}>
              <CurrentTimeString initialDate={new Date()} /> (UTC+09:00)
            </Status>
            <Status icon={faGithub} href="https://github.com/MugiSus">
              MugiSus
            </Status>
            <Status icon={faTwitter} href="https://twitter.com/MugiSus">
              MugiSus
            </Status>
            <Status icon={faThreads} href="https://www.threads.net/@mugisus_">
              mugisus_
            </Status>
            <Status
              icon={faInstagram}
              href="https://www.instagram.com/mugisus_/"
            >
              mugisus_
            </Status>
          </ul>
        </div>
      </div>
      <ul className="list-none flex flex-wrap flex-row gap-6 place-items-center place-content-center max-w-full">
        {Creations.map((creation, index) => (
          <CreationItem creation={creation} index={index} key={index} />
        ))}
      </ul>
      <div className="text-sm tracking-[0.16rem]">
        Copyright ©︎ 2023 MugiSus
      </div>
    </main>
  );
}
