import {
  faBuilding,
  faClock,
  faHeart,
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
import CurrentTimeString from "@/components/CurrentTimeString";
import InteractiveIcon from "@/components/InteractiveIcon";

import CareerList from "@/components/CareerList";
import Separator from "@/components/Separator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-48 px-4 mx-auto md:px-16 gap-32">
      <InteractiveIcon />

      <Separator />

      <div className="flex flex-col place-items-center gap-4">
        <div className="text-2xl font-light">MugiSus / ムギスス</div>
        <ul className="inline-block text-center leading-7 max-w-5xl">
          <Status icon={faHeart} content="Programming, UI Designing, Drawing" />
          <Status
            icon={faBuilding}
            content="Keio University; Department of Environment and Information Studies"
          />
          <Status icon={faUser} content="Minato Masayuki / 湊 真之" />
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

      <Separator />

      <ul className="list-none flex flex-wrap flex-row gap-3 place-items-center place-content-center max-w-full">
        {Creations.sort((a, b) => b.date.getTime() - a.date.getTime()).map(
          (creation, index) => (
            <CreationItem creation={creation} index={index} key={index} />
          )
        )}
      </ul>

      <Separator />

      <div className="flex flex-col gap-32 my-8">
        <CareerList />
        <CareerList isJapanese />
      </div>

      <div className="text-sm tracking-widest py-1 px-0.5 hover:-translate-y-0.5 duration-200 mt-8">
        Copyright © {new Date().getFullYear()} MugiSus
      </div>
    </main>
  );
}
