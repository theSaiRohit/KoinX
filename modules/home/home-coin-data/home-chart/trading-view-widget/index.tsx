// TradingViewWidget.jsx
import { widgetContainerCss, widgetCss } from "@/modules/home/home-coin-data/home-chart/trading-view-widget/styles";
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "gridColor": "rgba(101, 101, 101, 0.06)",
          "hide_top_toolbar": true,
          "hide_legend": true,
          "range": "12M",
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    if (container.current) {
      container.current.appendChild(script);
    }
  });

  return (
    <div className="tradingview-widget-container" ref={container} css={widgetContainerCss}>
      <div className="tradingview-widget-container__widget" css={widgetCss}></div>
    </div>
  );
}

export default memo(TradingViewWidget);
