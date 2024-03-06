import { chartTimeline } from "@/common-data";
import {
  chartTextContainerCss,
  chartWrapperCss,
  timelineContainerCss,
  timelineTextCss,
  widgetWrapperCss
} from "@/modules/home/home-coin-data/home-chart/styles";
import TradingViewWidget from "@/modules/home/home-coin-data/home-chart/trading-view-widget";

export default function HomeChart() {
  const timelineMapper = (num: string) => {
    return (
      <span css={timelineTextCss} key={`chart-timeline-${num}`}>
        {num}
      </span>
    );
  };
  return (
    <div css={chartWrapperCss}>
      <div css={chartTextContainerCss}>
        <h4>Bitcoin Price Chart (USD)</h4>
        <div css={timelineContainerCss}>{chartTimeline.map(timelineMapper)}</div>
      </div>
      <div css={widgetWrapperCss}>
        <TradingViewWidget />
      </div>
    </div>
  );
}
