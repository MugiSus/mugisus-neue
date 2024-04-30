import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-6 min-h-screen items-center w-full justify-center md:flex-row">
      <h1 className="text-4xl font-thin">!404!</h1>
      <div className="w-24 h-px md:h-10 md:w-px bg-content" />
      <div className="leading-relaxed text-center md:text-left">
        <p>This page could not be found.</p>
        <Link href="/" className="text-neutral-500 hover:underline">
          Go back to the main page -&gt;
        </Link>
      </div>
    </div>
  );
}
