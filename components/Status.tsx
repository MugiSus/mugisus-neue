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
    <li className="inline text-center mx-1">
      <FontAwesomeIcon
        icon={icon}
        className="text-primary h-4 inline mx-2 mb-0.5"
      />
      {content}
    </li>
  );

  return href ? (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="duration-200 hover:-translate-y-0.5"
    >
      {element}
    </Link>
  ) : (
    element
  );
}
