import {
  faBuilding,
  faClock,
  faHeart,
  faLocationDot,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faGithub,
  faThreads,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import Status from '@/components/Status';
import CreationItem from '@/components/CreationItem';
import { Creations } from '@/lib/creations';
import CurrentTimeString from '@/components/CurrentTimeString';
import InteractiveIcon from '@/components/InteractiveIcon';

import CareerList from '@/components/CareerList';
import Separator from '@/components/Separator';

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-[2048px] flex-col items-center justify-center gap-32 px-8 py-48 md:px-16">
      <InteractiveIcon />

      <Separator />

      <div className="flex flex-col place-items-center gap-8">
        <div className="text-2xl font-light">mugisus / ムギスス</div>
        <ul className="mx-8 max-w-2xl text-center leading-7" style={{ wordBreak: 'break-all' }}>
          <Status icon={faHeart} content="Programming, UI Designing, Drawing" />
          <Status
            icon={faBuilding}
            content="Keio University; Department of Environment and Information Studies"
          />
          <Status icon={faUser} content="湊 真之 / Minato Masayuki" />
          <Status icon={faLocationDot} content="Shonan, Japan" />
          <Status
            icon={faClock}
            content={<CurrentTimeString initialDate={new Date()} />}
          />
          <Status
            icon={faGithub}
            href="https://github.com/mugisus"
            content="mugisus"
          />
          <Status
            icon={faTwitter}
            href="https://twitter.com/mugisus"
            content="mugisus"
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

      <ul className="flex max-w-full list-none flex-row flex-wrap place-content-center place-items-center gap-3">
        {Creations.sort((a, b) => b.date.getTime() - a.date.getTime()).map(
          (creation, index) => (
            <li key={index}>
              <CreationItem creation={creation} index={index} />
            </li>
          ),
        )}
      </ul>

      <Separator />

      <CareerList />

      <Separator />

      <div className="px-0.5 py-1 text-sm tracking-widest duration-200 hover:-translate-y-0.5">
        Copyright © {new Date().getFullYear()} mugisus
      </div>
    </main>
  );
}
