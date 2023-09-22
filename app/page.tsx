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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-40 px-8 sm:px-16 gap-32 max-w-7xl mx-auto">
      <div className="grid gap-24 place-items-center">
        <div className="mr-8 px-4">
          <Image
            src="oyagisvg_wireframe_all.svg"
            width={300}
            height={300}
            alt="mugisus's icon"
            className="transition-all duration-500 hover:translate-y-1"
          />
        </div>
        <div className="grid place-items-center gap-8">
          <div className="flex gap-1 text-5xl font-medium">
            <div className="text-primary leading-10">@</div>
            <h1>MugiSus</h1>
          </div>
          <ul className="flex gap-x-16 gap-y-2 list-none flex-wrap justify-center">
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
