import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Status({
  icon,
  children,
}: {
  icon: IconProp;
  children: React.ReactNode;
}) {
  return (
    <li className="flex place-items-center flex-row gap-2">
      <FontAwesomeIcon icon={icon} className="text-primary h-4" />
      <div className="text-center font-medium">{children}</div>
    </li>
  );
}
