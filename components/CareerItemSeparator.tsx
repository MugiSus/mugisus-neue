interface CareerItemSeparatorProps {
  className?: string;
}

export default function CareerItemSeparator({
  className,
}: CareerItemSeparatorProps) {
  return <div className={className}>{"->"}</div>;
}
