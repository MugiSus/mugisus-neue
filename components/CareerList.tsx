import { Careers } from "@/lib/careers";
import CareerItem from "./CareerItem";

export default function CareerList({ isJapanese }: { isJapanese?: boolean }) {
  return (
    <ul className="list-none flex flex-col lg:flex-wrap lg:flex-row gap-4 gap-x-6 gap-y-6 place-items-center place-content-center max-w-full px-8">
      {Careers.map((career, index) => (
        <CareerItem key={index} career={career} isJapanese={isJapanese} />
      ))}
      <CareerItem
        career={{ date: new Date(), titleJa: "いま", title: "Now" }}
        isLast
        isJapanese={isJapanese}
      />
    </ul>
  );
}
