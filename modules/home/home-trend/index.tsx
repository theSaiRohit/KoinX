import ImageWrapper from "@/components/image-wrapper";
import PercentInfo from "@/components/percent-info";
import { coinCardContainerCss, coinImgCss, coinInfoContainerCss } from "@/modules/home/home-trend/styles";
import { commonSectionContainerCss } from "@/styles/common-styles";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export default function HomeTrend({ trendingCoins }: any) {
  const coinmapper = (coin: any) => {
    const { item } = coin;
    const {
      large,
      name,
      symbol,
      data: {
        price_change_percentage_24h: { usd: percent }
      }
    } = item;
    return (
      <div key={`coin-type-${name}`} css={coinCardContainerCss}>
        <div css={coinInfoContainerCss}>
          <ImageWrapper src={large} alt={`Logo of ${name}`} extraStyles={coinImgCss} />
          <span className="crypto-name">
            {name} ({symbol})
          </span>
        </div>
        <PercentInfo percent={percent} />
      </div>
    );
  };
  return (
    <section css={commonSectionContainerCss}>
      <h2>Trending Coins (24hr)</h2>
      {trendingCoins.map(coinmapper)}
    </section>
  );
}
