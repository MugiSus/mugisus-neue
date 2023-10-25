import Status from "@/components/status";

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
          <h1 className="text-5xl">
            <span className="text-primary font-medium tracking-wide">@</span>
            <span className="font-bold">MugiSus</span>
          </h1>
          <ul className="inline text-center leading-8 max-w-4xl">
            <Status
              icon={faBuilding}
              content="Keio University; Department of Environment and Information Studies"
            />
            <Status
              icon={faLocationDot}
              content="Sapporo, Hokkaido / Kanagawa, Japan"
            />
            <Status
              icon={faClock}
              content={
                <>
                  <CurrentTimeString initialDate={new Date()} /> (UTC+09:00)
                </>
              }
            />
            <Status
              icon={faGithub}
              href="https://github.com/MugiSus"
              content="MugiSus"
            />
            <Status
              icon={faTwitter}
              href="https://twitter.com/MugiSus"
              content="MugiSus"
            />
            <Status
              icon={faThreads}
              href="https://www.threads.net/@mugisus_"
              content="mugisus_"
            />
            <Status
              icon={faInstagram}
              href="https://www.instagram.com/mugisus_/"
              content="mugisus_"
            />
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
