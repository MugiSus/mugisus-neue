import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
};

export default function Page() {
  return (
    <div className="flex gap-6 min-h-screen items-center w-full justify-center">
      <h1 className="text-4xl font-thin">404</h1>
      <div className="h-10 w-px bg-content" />
      <div className="leading-relaxed">
        <p>This page could not be found.</p>
        <Link href="/" className="text-neutral-500 hover:underline">
          Go back to the main page -&gt;
        </Link>
      </div>
    </div>
  );
}
