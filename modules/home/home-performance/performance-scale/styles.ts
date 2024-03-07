import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const scaleWrapperCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--padding-normal);
  margin: var(--padding-mid) 0;
  ${mediaQuery.mobile} {
    gap: var(--padding-small);
  }
`;

export const scaleEndPtsInfoCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-small);
  flex-shrink: 0;
  &:nth-of-type(1) {
    .scale-end-value {
      text-align: left;
    }
  }
  .scale-end-value {
    text-align: right;
    font-weight: 600;
  }
`;

export const gradientBarWrapperCss = css`
  position: relative;
  width: 100%;
`;

export const gradientBarCss = css`
  display: flex;
  height: 5px;
  width: 100%;
  border-radius: 0.15rem;
  background: linear-gradient(to right, rgb(255, 74, 71), rgb(18, 235, 104));
`;

export const gradientScaleInfo = (pos: number) => css`
  position: absolute;
  top: 100%;
  left: ${pos}%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
