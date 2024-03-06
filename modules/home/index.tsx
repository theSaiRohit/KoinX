import CompWrapper from "@/components/comp-wrapper";
import PanelContextProvider, { PanelContextObj } from "@/context/panel-context";
import HomeAbout from "@/modules/home/home-about";
import HomeCoinData from "@/modules/home/home-coin-data";
import HomeCta from "@/modules/home/home-cta";
import HomeMenuPanel from "@/modules/home/home-menu-panel";
import HomePerformance from "@/modules/home/home-performance";
import HomeSentiment from "@/modules/home/home-sentiment";
import HomeTeam from "@/modules/home/home-team";
import HomeTokenomics from "@/modules/home/home-tokenomics";
import HomeTrend from "@/modules/home/home-trend";
import { homeAsideCss, homeCenterCss, homeModuleContainerCss, homeModuleWrapperCss } from "@/modules/home/styles";

export default function HomePageModule(props: any) {
  const { trendingCoins, bitcoinShortData, bitcoinAllData } = props;
  return (
    <CompWrapper
      tag="div"
      page="Home"
      wrapperStyles={homeModuleWrapperCss}
      innerElemExtraStyles={homeModuleContainerCss}
    >
      <div css={homeCenterCss}>
        <PanelContextProvider>
          <HomeMenuPanel />
          <HomePerformance bitcoinAllData={bitcoinAllData} />
        </PanelContextProvider>
        {/* <HomeSentiment /> */}
        <HomeCoinData bitcoinShortData={bitcoinShortData} />
        <HomeAbout />
        <HomeTokenomics />
        <HomeTeam />
      </div>
      <div css={homeAsideCss}>
        <HomeCta />
        <HomeTrend trendingCoins={trendingCoins} />
      </div>
    </CompWrapper>
  );
}
