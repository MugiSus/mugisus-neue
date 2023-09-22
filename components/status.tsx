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
    <li className="flex place-items-center place-content-center flex-row gap-x-2 gap-y-1 flex-wrap">
      <div className="h-4">
        <FontAwesomeIcon icon={icon} className="text-primary h-4" />
      </div>
      <div className="text-center">{children}</div>
    </li>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
