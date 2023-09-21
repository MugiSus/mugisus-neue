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
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-8 max-w-5xl mx-auto">
      <div className="grid gap-16 place-items-center">
        <div className="mr-8 px-4">
          <Image
            src="oyagisvg_wireframe_all.svg"
            width={300}
            height={300}
            alt="mugisus's icon"
          />
        </div>
        <div className="grid place-items-center gap-6">
          <div className="flex gap-1 text-5xl">
            <div className="text-primary mb-4 leading-10 font-medium">@</div>
            <h1>MugiSus</h1>
          </div>
          <ul className="flex gap-x-16 gap-y-2 list-none flex-wrap justify-center">
            <Status icon={faBuilding}>
              Keio University; Department of Environment and Information Studies
            </Status>
            <Status icon={faLocationDot}>Sapporo / Kanagawa, Japan</Status>
            <Status icon={faClock}>
              {new Date().toLocaleTimeString("ja-JP", {
                timeZone: "Asia/Tokyo",
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              (UTC+09:00)
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
          </ul>
        </div>
      </div>
    </main>
  );
}
