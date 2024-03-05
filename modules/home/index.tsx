import CompWrapper from "@/components/comp-wrapper";
import HomeAbout from "@/modules/home/home-about";
import HomeCta from "@/modules/home/home-cta";
import HomeTeam from "@/modules/home/home-team";
import HomeTokenomics from "@/modules/home/home-tokenomics";
import HomeTrend from "@/modules/home/home-trend";
import { homeAsideCss, homeCenterCss, homeModuleContainerCss, homeModuleWrapperCss } from "@/modules/home/styles";

export default function HomePageModule() {
  return (
    <CompWrapper
      tag="div"
      page="Home"
      wrapperStyles={homeModuleWrapperCss}
      innerElemExtraStyles={homeModuleContainerCss}
    >
      <div css={homeCenterCss}>
        <HomeAbout />
        <HomeTokenomics />
        <HomeTeam />
      </div>
      <div css={homeAsideCss}>
        <HomeCta />
        <HomeTrend />
      </div>
    </CompWrapper>
  );
}
