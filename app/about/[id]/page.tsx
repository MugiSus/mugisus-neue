import { Creations } from "@/lib/creations";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = (await params).id;

  const creation = Creations.find((creation) => creation.id === id);

  if (!creation) {
    return notFound();
  }

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
      images: creation.images
        ? creation.images
        : (await parent).openGraph?.images,
      description,
      title: creation.title,
      type: "article",
      url: new URL(id, (await parent).metadataBase ?? "").toString(),
      publishedTime: creation.date.toISOString(),
    },
  };
}

export default async function Page({ params }: Props) {
  const id = (await params).id;

  const creation = Creations.find((creation) => creation.id === id);

  if (!creation) {
    return notFound();
  }

  return (
    <main className="flex min-h-screen w-full flex-col flex-wrap items-center justify-center gap-16 px-8 py-32 md:px-16">
      <div className="text-center">
        <h1 className="text-3xl">{creation.title}</h1>
        <div className="text-neutral-500">{creation.id}</div>
      </div>

      <div className="grid w-full max-w-xl grid-cols-1 gap-16 lg:max-w-6xl lg:grid-cols-2">
        <div className="top-16 flex flex-col gap-4 self-start lg:sticky">
          {creation.images && creation.images.length > 0 ? (
            creation.images.map((image, index) => (
              <Link
                href={creation.href || ""}
                rel="noopener noreferrer"
                target="_blank"
                key={index}
              >
                <Image
                  width={1024}
                  height={1024}
                  src={image}
                  alt={creation.title}
                  className="w-full rounded-md"
                />
              </Link>
            ))
          ) : (
            <Link
              href={creation.href || ""}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="top-16 flex aspect-video flex-col items-center justify-center self-start rounded-md bg-neutral-200 lg:sticky">
                <FontAwesomeIcon
                  icon={faCameraRetro}
                  className="h-12 text-neutral-400"
                />
              </div>
            </Link>
          )}
        </div>

        <div className="sticky top-16 flex flex-col gap-8 self-start">
          <div className="mb-8 flex flex-col pr-2 text-lg text-neutral-500">
            {creation.href && (
              <Link
                href={creation.href}
                rel="noopener noreferrer"
                target="_blank"
                className="hover-inverse group p-1 py-2"
              >
                {"---> "}
                <span className="group-hover:underline">Visit</span>
              </Link>
            )}
            <Link href="/" className="hover-inverse group p-1">
              {"<- "}
              <span className="group-hover:underline">Go back</span>
            </Link>
          </div>

          {creation.description && (
            <div className="flex flex-col gap-4 p-1 leading-loose">
              {creation.description
                .split("\n")
                .slice(0, -1)
                .map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
            </div>
          )}

          {creation.links && (
            <div className="flex flex-col pr-2">
              {creation.links.map((link, index) => (
                <Link
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hover-inverse group p-1 text-neutral-500"
                  key={index}
                >
                  {"-> "}
                  <span className="group-hover:underline">{link.text}</span>
                </Link>
              ))}
            </div>
          )}

          {creation.descriptionJa && (
            <div className="flex flex-col gap-4 p-1 leading-loose">
              {creation.descriptionJa
                .split("\n")
                .slice(0, -1)
                .map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
            </div>
          )}

          {creation.linksJa && (
            <div className="flex flex-col pr-2">
              {creation.linksJa.map((link, index) => (
                <Link
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hover-inverse group p-1 text-neutral-500"
                  key={index}
                >
                  {"-> "}
                  <span className="group-hover:underline">{link.text}</span>
                </Link>
              ))}
            </div>
          )}

          {!creation.description && !creation.descriptionJa && (
            <div className="flex flex-col gap-4 leading-loose text-neutral-500">
              <p>There is no description available for this creation yet.</p>
              <p>現在この作品に関する説明はありません。</p>
            </div>
          )}

          <div className="mt-12 flex gap-1 px-1 text-neutral-500">
            <p>Copyright ©︎</p>
            <time dateTime={creation.date.toISOString()}>
              {creation.date
                .toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
                .replaceAll("/", ".")}
            </time>{" "}
            <p>MugiSus</p>
          </div>
        </div>
      </div>
    </main>
  );
}
