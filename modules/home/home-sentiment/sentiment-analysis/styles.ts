import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const analystEstWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-mid);
`;

export const analystDataWrapperCss = css`
  display: flex;
  align-items: center;
  gap: var(--padding-normal);
  ${mediaQuery.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const highlightNumWrapperCss = css`
  border-radius: 50%;
  height: 125px;
  aspect-ratio: 1;
  background-color: rgb(235, 249, 244);
  color: rgb(15, 186, 131);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  gap: var(--scrollbar-width);
  .estimate-num {
    font-size: 2.4rem;
  }
`;

export const barGraphInfoWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-small);
`;

export const barGraphWrapperCss = css`
  display: flex;
  .bar-graph-title {
    width: 50px;
  }
`;

export const barGraphContainerCss = (col: string, width: number) => css`
  display: flex;
  align-items: center;
  gap: var(--padding-small);
  width: 350px;
  .bar-graph-span {
    display: flex;
    height: 7.5px;
    background-color: ${col};
    width: ${width}%;
    border-radius: 0.15rem;
  }
  ${mediaQuery.tablet} {
    width: 70vw;
  }
`;
