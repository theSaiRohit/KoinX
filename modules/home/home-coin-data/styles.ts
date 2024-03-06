import { commonSectionContainerCss } from "@/styles/common-styles";
import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const coinDataWrapperCss = css`
  ${mediaQuery.desktop} {
    ${commonSectionContainerCss}
  }
`;

export const coinVisualInfoContainerCss = css`
  display: flex;
  align-items: center;
  gap: var(--padding-small);
  ${mediaQuery.miniDesktop} {
    margin-bottom: calc(2 * var(--padding-small));
  }
`;

export const coinSymbolSpanCss = css`
  color: rgb(118, 131, 150);
  font-weight: 600;
`;

export const coinRankCss = css`
  border-radius: var(--bor-rad-small);
  background-color: rgb(118, 131, 150);
  color: var(--color-bg-white);
  padding: var(--padding-small);
  font-size: 0.8rem;
  margin-left: var(--padding-mid);
  flex-shrink: 0;
  ${mediaQuery.miniDesktop} {
    border-radius: var(--scrollbar-width);
  }
  ${mediaQuery.mobile} {
    margin-left: var(--scrollbar-width);
  }
`;

export const coinDataInfoStyles = css`
  display: flex;
  flex-direction: column;
  padding-bottom: calc(var(--padding-small) * 2);
  border-bottom: 1px solid var(--color-off-gray);
  gap: var(--padding-small);
`;

export const mobileCoinDataWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-mid);
  ${mediaQuery.miniDesktop} {
    ${commonSectionContainerCss}
  }
`;

export const usdCoinInfoCss = css`
  display: flex;
  align-items: center;
  gap: var(--padding-small);
  .faded-helper-text {
    color: rgb(118, 131, 150);
  }
  @media screen and (width < 320px) {
    gap: 0;
    .faded-helper-text {
      scale: 0.75;
      transform: translateX(-15px);
    }
  }
`;

export const usdCoinPercentInfoCss = css`
  scale: 0.9;
  ${mediaQuery.mobile} {
    scale: 0.8;
  }
`;

export const usdCoinValCss = css`
  font-size: 2rem;
  font-weight: 600;
  margin-right: var(--padding-small);
  ${mediaQuery.mobile} {
    font-size: 1.6rem;
    margin-right: 0;
  }
`;

export const inrCoinValCss = css`
  font-size: 1.2rem;
  font-weight: 600;
  ${mediaQuery.mobile} {
    font-size: 1rem;
  }
`;
