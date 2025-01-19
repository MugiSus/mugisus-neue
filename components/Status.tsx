import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Status({
  icon,
  content,
  href,
}: {
  icon: IconProp;
  content: string | React.ReactNode;
  href?: string;
}) {
  const element = (
    <div className="inline px-1 text-center">
      <FontAwesomeIcon
        icon={icon}
        className="mr-1.5 inline h-4 text-neutral-400"
      />
      {content}
    </div>
  );

  return (
    <li className="inline">
      {href ? (
        <Link
          href={href}
          rel="noopener noreferrer"
          target="_blank"
          className="hover-inverse hover:underline"
        >
          {element}
        </Link>
      ) : (
        element
      )}
    </li>
  );
}
