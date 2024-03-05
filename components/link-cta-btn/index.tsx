import { linkCtaBtnCss } from "@/components/link-cta-btn/styles";
import { LinkCtaBtnProp } from "@/components/link-cta-btn/types";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function LinkCtaBtn(props: LinkCtaBtnProp) {
  const { link, extraStyles, text } = props;
  return (
    <Link href={`${link}`} css={[linkCtaBtnCss, extraStyles]}>
      <span>{text}</span>
      <FaArrowRight />
    </Link>
  );
}
