import {
  faBuilding,
  faClock,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faThreads,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Status from "@/components/Status";
import CreationItem from "@/components/CreationItem";
import { Creations } from "@/lib/creations";
import { Careers } from "@/lib/careers";
import CurrentTimeString from "@/components/CurrentTimeString";
import InteractiveIcon from "@/components/InteractiveIcon";
import MugiSus from "@/public/mugisus.svg";

import Separator from "@/public/separator.svg";
import CareerItem from "@/components/CareerItem";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-48 px-8 gap-24 mx-auto md:px-16">
      <div className="mr-2 select-none md:mr-6">
        <InteractiveIcon />
      </div>
      <Separator />
      <div className="flex flex-col place-items-center gap-12">
        <MugiSus className="hover-inverse fill-content hover:fill-neutral-50" />
        <ul className="inline-block text-center leading-7 max-w-2xl mx-4">
          <Status
            icon={faBuilding}
            content="Keio University; Department of Environment and Information Studies"
          />
          <Status icon={faUser} content="Minato Masayuki" />
          <Status icon={faLocationDot} content="Hokkaido / Kanagawa, Japan" />
          <Status
            icon={faClock}
            content={<CurrentTimeString initialDate={new Date()} />}
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

      <Separator className="rotate-180" />

      <ul className="list-none flex flex-wrap flex-row gap-4 place-items-center place-content-center max-w-full my-8">
        {Creations.sort((a, b) => b.date.getTime() - a.date.getTime()).map(
          (creation, index) => (
            <CreationItem creation={creation} index={index} key={index} />
          )
        )}
      </ul>

      <Separator />

      <ul className="list-none flex flex-col md:flex-wrap md:flex-row gap-4 gap-x-6 gap-y-6 place-items-center place-content-center max-w-full my-8 px-8">
        {Careers.sort((a, b) => a.date.getTime() - b.date.getTime()).map(
          (career, index) => (
            <CareerItem career={career} key={index} />
          )
        )}
        <CareerItem career={{ date: new Date(), title: "いま" }} isLast />
      </ul>

      <div className="text-sm tracking-widest hover-inverse py-1 px-0.5">
        Copyright ©︎ 2024 MugiSus
      </div>
    </main>
  );
}
