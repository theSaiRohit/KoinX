import ImageWrapper from "@/components/image-wrapper";
import PercentInfo from "@/components/percent-info";
import {
  recomCardCss,
  recomCardGraphCss,
  recomCardInfoCss,
  recomCardLogoCss,
  recomCardNameCss,
  recomCardPercentCss,
  recomCardPriceCss
} from "@/modules/home/home-recommendation/recommends-card/styles";

export default function RecommendCards(props: any) {
  const { recommendationData } = props;
  const recommendCardMapper = (cardData: any, index: number) => {
    const { name, small, data } = cardData.item;
    const { price, sparkline, price_change_percentage_24h } = data;
    return (
      <div key={`recommendation-card` + index} className={`carousal-item-wrapper carousal-item-wrapper-${index + 1}`}>
        <div css={recomCardCss}>
          <div css={recomCardInfoCss}>
            <ImageWrapper src={small} alt={`Logo of ${name}`} extraStyles={recomCardLogoCss} />
            <span css={recomCardNameCss}>{name.split(/[ -]/)[0]}</span>
          </div>
          <PercentInfo percent={price_change_percentage_24h.usd} extraStyles={recomCardPercentCss} />
          <span css={recomCardPriceCss}>{price}</span>
          <ImageWrapper src={sparkline} alt={`Graph of ${name}`} extraStyles={recomCardGraphCss} />
        </div>
      </div>
    );
  };
  return <>{(recommendationData as Array<any>).map(recommendCardMapper)}</>;
}
