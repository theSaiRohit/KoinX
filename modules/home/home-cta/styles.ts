import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const homeCtaContainerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  background-color: #0052fe;
  padding: calc(1.75 * var(--padding-mid)) var(--padding-mid);
  gap: var(--padding-mid);
  border-radius: var(--bor-rad-normal);
  color: var(--color-bg-white);
  ${mediaQuery.mobile} {
    border-radius: var(--bor-rad-small);
  }
`;

export const homeCtaHeaderCss = css`
  line-height: 2em;
`;

export const homeCtaImgCss = css`
  width: 70%;
  aspect-ratio: 1;
  img {
    object-fit: contain;
  }
`;
