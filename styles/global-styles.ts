import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"]
});

export const globalStylesCss = css`
  :root {
    --font-default: ${inter.style.fontFamily};

    --header-height: 8vh;
    --max-width: 1440px;
    --font-size-default: 1rem;
    --bor-rad-small: 10px;
    --padding-mid: 25px;
    --padding-small: 10px;
    --scrollbar-width: 5px;
    --bor-rad-normal: 25px;
    --aside-width: 400px;
    --padding-normal: 50px;

    --color-bg: #eff2f5;
    --color-bg-white: #ffffff;
    --color-text-default: #111111;
    --color-off-gray: hsla(0, 0%, 63%, 0.25);
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  #__next {
    font-family: var(--font-default);
    color: var(--color-text-default);
    ${mediaQuery.mobileLandscape} {
      --header-height: 17.5vh;
    }
    p {
      line-height: var(--bor-rad-normal);
    }
    h2,
    h3,
    h4 {
      font-weight: 600;
    }
  }
  body {
    background-color: var(--color-bg);
  }
  ::-webkit-scrollbar {
    width: var(--scrollbar-width);
    background-color: var(--color-bg);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: var(--bor-rad-normal);
    background-color: rgb(0, 82, 254);
  }
`;
