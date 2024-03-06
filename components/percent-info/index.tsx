import { growthNumContainerCss, growthNumSvgCss } from "@/components/percent-info/styles";
import { PercentInfoType } from "@/components/percent-info/types";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export default function PercentInfo(props: PercentInfoType) {
  const { percent, extraStyles } = props;
  return percent > 0 ? (
    <div css={[growthNumContainerCss, extraStyles]} className="green-percent">
      <FaCaretUp css={growthNumSvgCss} />
      <span>{percent.toFixed(2)}%</span>
    </div>
  ) : (
    <div css={[growthNumContainerCss, extraStyles]} className="red-percent">
      <FaCaretDown css={growthNumSvgCss} />
      <span>{Math.abs(parseFloat(percent.toFixed(2)))}%</span>
    </div>
  );
}
