import {
  gradientBarCss,
  gradientBarWrapperCss,
  gradientScaleInfo,
  scaleEndPtsInfoCss,
  scaleWrapperCss
} from "@/modules/home/home-performance/performance-scale/styles";
import { useEffect, useRef, useState } from "react";
import { FaCaretUp } from "react-icons/fa6";

export default function PerformanceScale({ bitcoinAllData, pointer }: any) {
  const { high_24h: high, low_24h: low, current_price: cp } = bitcoinAllData[0];
  const [pos, setPos] = useState<number>(50);
  useEffect(() => {
    setPos((100 * cp) / (high + low));
  }, [cp, low, high]);

  return (
    <div css={scaleWrapperCss}>
      <div css={scaleEndPtsInfoCss}>
        <span className="scale-title">Today Low</span>
        <span className="scale-end-value">${low.toLocaleString("en-US")}</span>
      </div>
      <div css={gradientBarWrapperCss}>
        <span css={gradientBarCss}></span>
        {pointer ? (
          <div css={gradientScaleInfo(pos)}>
            <FaCaretUp />
            <span>${cp.toLocaleString("en-US")}</span>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div css={scaleEndPtsInfoCss}>
        <span className="scale-title">Today High</span>
        <span className="scale-end-value">${high.toLocaleString("en-US")}</span>
      </div>
    </div>
  );
}
