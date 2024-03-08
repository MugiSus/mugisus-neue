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

import Status from "@/components/Status";
import CreationItem from "@/components/CreationItem";
import { Creations } from "@/lib/creationsLoader";
import CurrentTimeString from "@/components/CurrentTimeString";
import InteractiveIcon from "@/components/InteractiveIcon";
import HomeTitle from "@/components/HomeTitle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-40 px-8 gap-32 mx-auto md:px-16">
      <div className="flex flex-col gap-24 place-items-center mt-12">
        {/* <div className="flex flex-col font-regular tracking-more-widest text-sm gap-1 items-center text-center mx-4">
          <div>ものをつくり、デザインし、命懸けで働き口を探しています。</div>
          <div>I create, design, and look for a job or death.</div>
        </div> */}
        <div className="mr-6 select-none">
          <InteractiveIcon />
        </div>
        <div className="flex flex-col place-items-center gap-4">
          <div className="flex flex-col text-5xl gap-1 items-end">
            <HomeTitle />
            {/* <div className="flex flex-col font-regular tracking-more-widest text-sm gap-1 items-end">
              <div>湊　真之</div>
              <div>MINATO MASAYUKI</div>
            </div> */}
          </div>
          <ul className="inline-block text-center leading-7 max-w-2xl mx-4">
            <Status
              icon={faBuilding}
              content="Keio University; Department of Environment and Information Studies"
            />
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
      </div>
      <ul className="list-none flex flex-wrap flex-row gap-6 place-items-center place-content-center max-w-full">
        {Creations.map((creation, index) => (
          <CreationItem creation={creation} index={index} key={index} />
        ))}
      </ul>
      <div className="text-sm tracking-widest hover-inverse py-1 px-2">
        Copyright ©︎ 2024 MugiSus
      </div>
    </main>
  );
}
