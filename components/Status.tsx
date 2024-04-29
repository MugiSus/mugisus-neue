import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Status({
  icon,
  content,
  href,
}: {
  icon: IconProp;
  content: string | JSX.Element;
  href?: string;
}) {
  const element = (
    <div className="text-center px-1.5">
      <FontAwesomeIcon icon={icon} className="text-primary h-4 inline mr-1.5" />
      {content}
    </div>
  );

  return (
    <li className="inline-block">
      {href ? (
        <Link
          href={href}
          rel="noopener noreferrer"
          target="_blank"
          className="inline-block hover-inverse hover-inverse"
        >
          {element}
        </Link>
      ) : (
        element
      )}
    </li>
  );
}
