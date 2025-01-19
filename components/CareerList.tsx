import { Careers } from '@/lib/careers';
import CareerItem from './CareerItem';

export default function CareerList({ isJapanese }: { isJapanese?: boolean }) {
  return (
    <ul className="flex max-w-full list-none flex-col place-content-center place-items-center gap-4 px-8 lg:flex-row lg:flex-wrap">
      {Careers.map((career, index) => (
        <CareerItem key={index} career={career} isJapanese={isJapanese} />
      ))}
      <CareerItem
        career={{ date: new Date(), titleJa: 'いま', title: 'Now' }}
        isLast
        isJapanese={isJapanese}
      />
    </ul>
  );
}
