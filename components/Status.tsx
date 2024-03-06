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
    <>
      <FontAwesomeIcon icon={icon} className="text-primary h-4 inline mr-2" />
      {content}
    </>
  );

  return (
    <li
      className={`inline text-center px-1.5 py-1 duration-500 ease-out hover:duration-0 hover:bg-neutral-600 hover:text-neutral-50`}
    >
      {href ? (
        <Link href={href} rel="noopener noreferrer" target="_blank">
          {element}
        </Link>
      ) : (
        element
      )}
    </li>
  );
}
