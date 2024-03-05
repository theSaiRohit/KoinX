import { homeAboutDivHeaderCss, homeAboutDivSnippetCss } from "@/modules/home/home-about/about-div-snippet/styles";
import { AboutDivPropsType } from "@/modules/home/home-about/about-div-snippet/types";

export default function AboutDivSnippet(props: AboutDivPropsType) {
  const { children, h3Text, extraHeaderStyles } = props;
  return (
    <div css={homeAboutDivSnippetCss}>
      <h3 css={[homeAboutDivHeaderCss, extraHeaderStyles]}>{h3Text}</h3>
      {children}
    </div>
  );
}
