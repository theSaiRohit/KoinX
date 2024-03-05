import { trendingCoinsData } from "@/common-data";
import ImageWrapper from "@/components/image-wrapper";
import {
  coinCardContainerCss,
  coinImgCss,
  coinInfoContainerCss,
  growthNumContainerCss,
  growthNumSvgCss
} from "@/modules/home/home-trend/styles";
import { commonSectionContainerCss } from "@/styles/common-styles";
import { FaCaretUp } from "react-icons/fa";

export default function HomeTrend() {
  const coinmapper = (coin: (typeof trendingCoinsData)[0]) => {
    const { growthNum, imgSrc, name } = coin;
    return (
      <div key={`coin-type-${name}`} css={coinCardContainerCss}>
        <div css={coinInfoContainerCss}>
          <ImageWrapper src={imgSrc} alt={`Logo of ${name}`} extraStyles={coinImgCss} />
          <span className="crypto-name">{name}</span>
        </div>
        <div css={growthNumContainerCss}>
          <FaCaretUp css={growthNumSvgCss} />
          <span>{growthNum}%</span>
        </div>
      </div>
    );
  };
  return (
    <section css={commonSectionContainerCss}>
      <h2>Trending Coins {`(24hr)`}</h2>
      {trendingCoinsData.map(coinmapper)}
    </section>
  );
}
