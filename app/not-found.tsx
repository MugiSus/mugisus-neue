import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
};

export default function Page() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-6 md:flex-row">
      <h1 className="text-4xl font-thin">!404!</h1>
      <div className="h-px w-24 bg-content md:h-10 md:w-px" />
      <div className="text-center leading-relaxed md:text-left">
        <p>This page could not be found.</p>
        <Link href="/" className="text-neutral-500 hover:underline">
          Go back to the main page -&gt;
        </Link>
      </div>
    </div>
  );
}
