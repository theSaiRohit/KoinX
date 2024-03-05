import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const pieChartWrapperCss = css`
  display: flex;
  align-items: center;
  gap: var(--padding-mid);
  ${mediaQuery.tablet} {
    width: 100%;
    flex-direction: column;
  }
`;

export const pieChartImgCss = css`
  height: 200px;
  aspect-ratio: 1;
  img {
    object-fit: contain;
  }
  ${mediaQuery.mobile} {
    height: 60vw;
    max-height: 200px;
  }
`;

export const pieInfoCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-mid);
  .info-row {
    display: flex;
    gap: var(--padding-small);
    align-items: center;
    .dot-span {
      display: flex;
      height: 15px;
      aspect-ratio: 1;
      border-radius: 50%;
      &.blue {
        background-color: rgb(1, 131, 255);
      }
      &.orange {
        background-color: rgb(250, 160, 1);
      }
    }
  }
`;
