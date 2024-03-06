import SentimentAnalysis from "@/modules/home/home-sentiment/sentiment-analysis";
import SentimentCarousal from "@/modules/home/home-sentiment/sentiment-carousal";

import { commonSectionContainerCss } from "@/styles/common-styles";

export default function HomeSentiment() {
  return (
    <section css={commonSectionContainerCss}>
      <h2>Sentiment</h2>
      <SentimentCarousal />
      <SentimentAnalysis />
    </section>
  );
}
