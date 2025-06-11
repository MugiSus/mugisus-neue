import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { ReactNode } from 'react';

interface StatusProps {
  icon: IconProp;
  content: string | ReactNode;
  href?: string;
}

interface StatusContentProps {
  icon: IconProp;
  content: string | ReactNode;
}

const StatusContent = ({ icon, content }: StatusContentProps) => (
  <div className="inline px-1 text-center">
    <FontAwesomeIcon
      icon={icon}
      className="mr-1.5 inline h-4"
      aria-hidden="true"
    />
    {content}
  </div>
);

const Status = ({ icon, content, href }: StatusProps) => {
  const statusContent = <StatusContent icon={icon} content={content} />;

  return (
    <li className="inline">
      {href ? (
        <Link
          href={href}
          rel="noopener noreferrer"
          target="_blank"
          className="hover-inverse hover:underline"
          aria-label={typeof content === 'string' ? content : 'ステータスリンク'}
        >
          {statusContent}
        </Link>
      ) : (
        statusContent
      )}
    </li>
  );
};

export default Status;
