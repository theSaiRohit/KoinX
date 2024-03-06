import InfoHeader from "@/components/info-header";
import {
  fundDataWrapperCss,
  fundGridItemCss,
  fundamentalsWrapperCss,
  gridInfoWrapperCss,
  gridItemPercentCss,
  gridItemTitleCss,
  gridItemValueCss,
  valueInfoWrapperCss
} from "@/modules/home/home-performance/performance-fundamentals/styles";

export default function PerformanceFundamentals({ bitcoinAllData }: any) {
  const {
    current_price,
    market_cap,
    high_24h,
    low_24h,
    market_cap_rank,
    market_cap_change_percentage_24h,
    total_volume,
    ath,
    atl,
    atl_change_percentage,
    ath_change_percentage
  } = bitcoinAllData[0];
  const performanceFundamentalsData = [
    {
      title: "Bitcoin Price",
      value: "$" + current_price.toLocaleString("en-Us")
    },
    {
      title: "Market Cap",
      value: "$" + market_cap.toLocaleString("en-Us")
    },

    {
      title: "24h Low / 24h High",
      value: "$" + low_24h.toLocaleString("en-Us") + " / $" + high_24h.toLocaleString("en-Us")
    },
    {
      title: "Market Cap Dominance",
      value: "38.343%"
    },
    {
      title: "7h Low / 7h High",
      value: "$16,411.46 / $16,789.12"
    },
    {
      title: "Volume / Market Cap",
      value: "" + market_cap_change_percentage_24h.toFixed(3)
    },
    {
      title: "Trading Volume",
      value: "$" + total_volume.toLocaleString("en-Us")
    },

    {
      title: "All-Time High",
      value: "",
      info: {
        value: "$" + ath.toLocaleString("en-Us"),
        percentVal: ath_change_percentage.toFixed(2),
        time: "Jul 06, 2013 (over 9 years)"
      }
    },
    {
      title: "Market Cap Rank",
      value: "#" + market_cap_rank
    },
    {
      title: "All-Time Low",
      value: "",
      info: {
        value: "$" + atl,
        percentVal: atl_change_percentage.toFixed(2),
        time: "Jul 06, 2013 (over 9 years)"
      }
    }
  ];
  const mapper = (data: (typeof performanceFundamentalsData)[10], index: number) => {
    const { title, value, info } = data;
    return (
      <div key={`per-fund-${index}`} css={fundGridItemCss}>
        <span css={gridItemTitleCss}>{title}</span>
        {value.length > 0 ? (
          <span css={gridItemValueCss}>{value}</span>
        ) : (
          <div css={gridInfoWrapperCss}>
            <div css={valueInfoWrapperCss}>
              <span css={gridItemValueCss}>{info?.value}</span>
              <span
                className={(info?.percentVal as number) > 0 ? "green-percent" : "red-percent"}
                css={gridItemPercentCss}
              >
                {info?.percentVal}%
              </span>
            </div>
            <span>{info?.time}</span>
          </div>
        )}
      </div>
    );
  };
  return (
    <div css={fundamentalsWrapperCss}>
      <InfoHeader infoTextHeader="Fundamentals" />
      <div css={fundDataWrapperCss}>{performanceFundamentalsData.map(mapper)}</div>
    </div>
  );
}
