import { analystNumData } from "@/common-data";
import InfoHeader from "@/components/info-header";
import {
  analystDataWrapperCss,
  analystEstWrapperCss,
  barGraphContainerCss,
  barGraphInfoWrapperCss,
  barGraphWrapperCss,
  highlightNumWrapperCss
} from "@/modules/home/home-sentiment/sentiment-analysis/styles";

export default function SentimentAnalysis() {
  const analystNumMapper = (data: (typeof analystNumData)[0]) => {
    const { bgColor, percentNum, text } = data;
    return (
      <div css={barGraphWrapperCss} key={`analysis-title-${text}`}>
        <span className="bar-graph-title">{text}</span>
        <div css={barGraphContainerCss(bgColor, percentNum)}>
          <span className="bar-graph-span"></span>
          <span>{percentNum}%</span>
        </div>
      </div>
    );
  };
  return (
    <div css={analystEstWrapperCss}>
      <InfoHeader infoTextHeader="Analyst Estimates" />
      <div css={analystDataWrapperCss}>
        <div css={highlightNumWrapperCss}>
          <span className="estimate-num">76</span>
          <span className="estimate-percent-symbol">%</span>
        </div>
        <div css={barGraphInfoWrapperCss}>{analystNumData.map(analystNumMapper)}</div>
      </div>
    </div>
  );
}
