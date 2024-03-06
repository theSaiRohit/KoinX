import InfoHeader from "@/components/info-header";
import SentimentCard from "@/modules/home/home-sentiment/sentiment-carousal/sentiment-card";
import { carousalWrapperCss, keyEventsWrapperCss } from "@/modules/home/home-sentiment/sentiment-carousal/styles";

export default function SentimentCarousal() {
  return (
    <div css={keyEventsWrapperCss}>
      <InfoHeader infoTextHeader="Key Events" />
      <div css={{ overflow: "scroll" }}>
        <div css={carousalWrapperCss}>
          <SentimentCard />
          <SentimentCard />
        </div>
      </div>
    </div>
  );
}
