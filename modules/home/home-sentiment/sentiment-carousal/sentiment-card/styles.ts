import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const sentimentCardsCss = css`
  border-radius: var(--bor-rad-small);
  background-color: rgb(232, 244, 253);
  display: flex;
  gap: var(--padding-mid);
  width: 70%;
  padding: var(--padding-mid);
  flex-shrink: 0;
  ${mediaQuery.tablet} {
    width: 85%;
    flex-shrink: auto;
    gap: var(--bor-rad-small);
    padding: var(--scrollbar-width);
  }
  ${mediaQuery.mobile} {
    flex-direction: column;
    width: 100%;
  }
`;

export const sentimentCardIconWrapperCss = css`
  display: grid;
  place-items: center;
  border-radius: 50%;
  height: fit-content;
  aspect-ratio: 1;
  padding: var(--padding-small);
  background-color: rgb(0, 130, 255);
  ${mediaQuery.mobile} {
    width: fit-content;
    height: fit-content;
  }
`;

export const cardIconCss = css`
  color: var(--color-bg-white);
  font-size: 1.6rem;
`;

export const sentimentCardTextWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-small);
  word-wrap: break-word;
  .sentiment-card-title {
    font-weight: 600;
  }
`;
