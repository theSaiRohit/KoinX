import { API_KEY, apiUrl } from "@/common-data";
import HomePageModule from "@/modules/home";
import axios from "axios";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  try {
    const trendingCoinsRes = await axios.get(apiUrl + "/search/trending", {
      headers: {
        "Content-Type": "application/json",
        "X-CoinGecko-Api-Key": API_KEY
      }
    });
    const bitcoinAllDataRes = await axios.get(
      apiUrl +
        "/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en",
      {
        headers: {
          "Content-Type": "application/json",
          "X-CoinGecko-Api-Key": API_KEY
        }
      }
    );
    const bitcoinRes = await axios.get(
      apiUrl + "/simple/price?ids=bitcoin&vs_currencies=usd%2Cinr&include_24hr_change=true",
      {
        headers: {
          "Content-Type": "application/json",
          "X-CoinGecko-Api-Key": API_KEY
        }
      }
    );
    const trendingCoins = trendingCoinsRes.data.coins.slice(0, 3);
    const recommendationData = trendingCoinsRes.data.coins.slice(0, 10);
    const bitcoinShortData = bitcoinRes.data.bitcoin;
    const bitcoinAllData = bitcoinAllDataRes.data;
    return {
      props: {
        trendingCoins: trendingCoins,
        recommendationData: recommendationData,
        bitcoinShortData: bitcoinShortData,
        bitcoinAllData: bitcoinAllData
      },
      revalidate: 6 * 60 * 60
    };
  } catch (error) {
    console.log("Error fetching data : ", error);
    return {
      props: {}
    };
  }
};

export default function Home(props: any) {
  return <HomePageModule {...props} />;
}
