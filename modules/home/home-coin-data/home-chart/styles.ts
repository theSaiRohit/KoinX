import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const chartWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-mid);
`;

export const chartTextContainerCss = css`
  display: flex;
  justify-content: space-between;
  ${mediaQuery.tablet} {
    flex-direction: column;
    gap: var(--padding-small);
  }
`;

export const timelineContainerCss = css`
  display: flex;
  gap: var(--padding-mid);
  ${mediaQuery.mobile} {
    gap: var(--padding-small);
  }
`;

export const timelineTextCss = css`
  color: rgb(118, 131, 150);
  ${mediaQuery.tablet} {
    font-size: 0.8rem;
  }
`;

export const widgetWrapperCss = css`
  height: 400px;
`;
