import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const recomCardCss = css`
  border: 2px solid var(--color-off-gray);
  border-radius: var(--bor-rad-small);
  display: flex;
  flex-direction: column;
  padding: var(--padding-mid);
  gap: var(--padding-small);
  width: 95%;
  ${mediaQuery.miniDesktop} {
    --padding-mid: 15px;
  }
`;

export const recomCardInfoCss = css`
  display: flex;
  align-items: center;
  gap: 5px;
  ${mediaQuery.tablet} {
    flex-direction: column;
    width: 5px;
  }
`;

export const recomCardLogoCss = css`
  height: 25px;
  border-radius: 50%;
  display: grid;
  width: 25px;
  overflow: hidden;
  img {
    object-fit: contain;
  }
  ${mediaQuery.mobile} {
    display: none;
  }
`;

export const recomCardNameCss = css`
  width: 5px;
`;

export const recomCardPercentCss = css`
  font-size: 0.8rem;
  text-align: right;
  display: none;
  padding: var(--scrollbar-width);
  svg {
    font-size: 1rem;
  }
  ${mediaQuery.desktop} {
    width: fit-content;
    display: block;
  }
`;

export const recomCardPriceCss = css`
  font-size: 1.6rem;
  font-weight: 600;
  width: 0px;
  ${mediaQuery.tablet} {
    font-size: 1rem;
  }
`;

export const recomCardGraphCss = css`
  height: 100px;
  img {
    object-fit: contain;
  }
`;
