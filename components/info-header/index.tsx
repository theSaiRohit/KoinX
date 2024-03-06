import { infoHelperIconCss, infoIconWrapperCss, infoTextHeaderWrapperCss } from "@/components/info-header/styles";
import { InfoHeaderPropsType } from "@/components/info-header/types";
import { FaCircleInfo } from "react-icons/fa6";

export default function InfoHeader(props: InfoHeaderPropsType) {
  const { infoTextHeader } = props;
  return (
    <div css={infoTextHeaderWrapperCss}>
      <h3>{infoTextHeader}</h3>
      <div css={infoIconWrapperCss}>
        <FaCircleInfo css={infoHelperIconCss} />
      </div>
    </div>
  );
}
