import OyagiIconCap from "@/public/oyagi_wireframes/variant=cap.svg";
import OyagiIconBody from "@/public/oyagi_wireframes/variant=body.svg";
import OyagiIconHead from "@/public/oyagi_wireframes/variant=head.svg";
import OyagiIconHeadHalf from "@/public/oyagi_wireframes/variant=head-half.svg";
import OyagiIconHeadClosed from "@/public/oyagi_wireframes/variant=head-closed.svg";

export default function InteractiveIcon() {
  return (
    <svg width="300" height="height" viewBox="0 0 300 300">
      <OyagiIconCap className="absolute" />
      <OyagiIconBody className="absolute" />
      <OyagiIconHead className="absolute" />
      {/* <OyagiIconHeadHalf className="absolute" />
      <OyagiIconHeadClosed className="absolute" /> */}
    </svg>
  );
}
