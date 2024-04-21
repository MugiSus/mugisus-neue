import { Creations } from "@/lib/creations";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const creation = Creations.find((creation) => creation.id === params.id);

  if (!creation) {
    return notFound();
  }

  const previousImages = (await parent).openGraph?.images || [];
  const description =
    creation.description && creation.descriptionJa
      ? `${creation.description}\n${creation.descriptionJa}`
      : creation.description || creation.descriptionJa || creation.title;

  return {
    title: creation.title,
    description,
    twitter: {
      title: creation.title,
    },
    openGraph: {
      images: [...(creation.images ?? []), ...previousImages],
      description,
      title: creation.title,
      type: "website",
      url: new URL(params.id, (await parent).metadataBase ?? "").toString(),
    },
  };
}

export default function Page({ params }: Props) {
  const creation = Creations.find((creation) => creation.id === params.id);

  if (!creation) {
    return notFound();
  }

  return (
    <main className="flex flex-col flex-wrap min-h-screen gap-16 px-16 py-32 w-full items-center justify-center md:px-16">
      <div className="text-center">
        <h1 className="text-3xl">{creation.title}</h1>
        <div className="text-md text-neutral-500 ">{creation.id}</div>
      </div>

      <div className="grid grid-cols-1 gap-16 max-w-xl lg:grid-cols-2 lg:max-w-6xl w-full">
        <div className="grid grid-cols-1 gap-4 lg:sticky self-start top-16">
          {creation.images && creation.images.length > 0 ? (
            creation.images.map((image, index) => (
              <Link
                href={creation.href}
                rel="noopener noreferrer"
                target="_blank"
                className=""
                key={index}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={creation.title}
                  className="rounded-md w-full"
                />
              </Link>
            ))
          ) : (
            <Link
              href={creation.href}
              rel="noopener noreferrer"
              target="_blank"
              className=""
            >
              <div className="flex flex-col bg-neutral-200 rounded-md aspect-video lg:sticky self-start top-16 items-center justify-center">
                <FontAwesomeIcon
                  icon={faCameraRetro}
                  className="text-neutral-400 h-12"
                />
              </div>
            </Link>
          )}
        </div>

        <div className="flex flex-col gap-12 sticky self-start top-16">
          <div className="flex flex-col gap-2 text-lg text-neutral-500">
            <Link
              href={creation.href}
              rel="noopener noreferrer"
              target="_blank"
              className="hover:underline"
            >
              <span>Visit -&gt;</span>
            </Link>
            <Link href="/" className="hover:underline text-lg">
              <span>&lt;- Go back</span>
            </Link>
          </div>

          {creation.description && (
            <div className="flex flex-col gap-4 leading-loose">
              {creation.description
                .split("\n")
                .slice(0, -1)
                .map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
            </div>
          )}

          {creation.descriptionJa && (
            <div className="flex flex-col gap-4 leading-loose">
              {creation.descriptionJa
                .split("\n")
                .slice(0, -1)
                .map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
            </div>
          )}

          {!creation.description && !creation.descriptionJa && (
            <div className="flex flex-col gap-4 leading-loose text-neutral-500">
              <p>There is no description available for this creation yet.</p>
              <p>現在この作品に関する説明はありません。</p>
            </div>
          )}

          <div className="text-neutral-500">
            MugiSus{" "}
            <time dateTime={creation.date.toISOString()}>
              {creation.date
                .toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
                .replaceAll("/", ".")}
            </time>
          </div>
        </div>
      </div>
    </main>
  );
}
