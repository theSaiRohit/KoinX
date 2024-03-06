import ImageWrapper from "@/components/image-wrapper";
import PercentInfo from "@/components/percent-info";
import HomeChart from "@/modules/home/home-coin-data/home-chart";
import {
  coinDataInfoStyles,
  coinDataWrapperCss,
  coinRankCss,
  coinSymbolSpanCss,
  coinVisualInfoContainerCss,
  inrCoinValCss,
  mobileCoinDataWrapperCss,
  usdCoinInfoCss,
  usdCoinPercentInfoCss,
  usdCoinValCss
} from "@/modules/home/home-coin-data/styles";
import { coinImgCss } from "@/modules/home/home-trend/styles";

export default function HomeCoinData({ bitcoinShortData }: any) {
  const { inr, usd, usd_24h_change: percent } = bitcoinShortData;

  return (
    <section css={coinDataWrapperCss}>
      <div css={coinVisualInfoContainerCss}>
        <ImageWrapper src="/images/bitcoin.png" alt="Bitcoin Logo" extraStyles={coinImgCss} title="Bitcoin" />
        <h2>Bitcoin</h2>
        <span css={coinSymbolSpanCss}>BTC</span>
        <span css={coinRankCss}>Rank #1</span>
      </div>
      <div css={mobileCoinDataWrapperCss}>
        <div css={coinDataInfoStyles}>
          <div css={usdCoinInfoCss}>
            <span css={usdCoinValCss}>${usd.toLocaleString("en-US")}</span>
            <PercentInfo percent={percent} extraStyles={usdCoinPercentInfoCss} />
            <span className="faded-helper-text">(24Hr)</span>
          </div>
          <span css={inrCoinValCss}>₹{inr.toLocaleString("en-IN")}</span>
        </div>
        <HomeChart />
      </div>
    </section>
  );
}
