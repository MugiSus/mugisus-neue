import { Career } from '@/models/career';

export default function CareerItem({
  career,
  isLast,
}: {
  career: Career;
  isLast?: boolean;
}) {
  const dateString = career.date
    .toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replaceAll('/', '.');

  return (
    <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-4">
      <div className="flex flex-col items-center gap-2 duration-200">
        <time
          dateTime={career.date.toISOString()}
          className="text-xs text-neutral-500"
        >
          {dateString}
        </time>

        <div className="flex flex-col items-center gap-1">
          <p className="px-0.5 text-center text-sm">
            {career.title}
          </p>
          <p className="px-0.5 text-center">
            {career.titleJa}
          </p>
        </div>
      </div>
      {!isLast && (
        <div className="rotate-90 text-base font-thin text-content lg:rotate-0">
          {'->'}
        </div>
      )}
    </div>
  );
}
