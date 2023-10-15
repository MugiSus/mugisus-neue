import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Status({
  icon,
  children,
  href,
}: {
  icon: IconProp;
  children: React.ReactNode;
  href?: string;
}) {
  const content = (
    <li className="place-items-center place-content-center inline text-center">
      <FontAwesomeIcon
        icon={icon}
        className="text-primary h-4 inline mr-2 mb-0.5"
      />
      {children}
    </li>
  );

  return href ? (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="duration-200 hover:-translate-y-0.5"
    >
      {content}
    </Link>
  ) : (
    content
  );
}
