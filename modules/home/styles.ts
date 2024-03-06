import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const homeModuleWrapperCss = css`
  margin-top: calc(var(--header-height) + 5vh);
  border-top: 1px solid black;
`;

export const homeModuleContainerCss = css`
  display: flex;
  gap: var(--padding-mid);
  ${mediaQuery.miniDesktop} {
    flex-direction: column;
  }
`;

export const homeCenterCss = css`
  display: flex;
  flex-direction: column;
  width: calc(100% - var(--aside-width));
  gap: var(--padding-mid);
  ${mediaQuery.miniDesktop} {
    width: 100%;
  }
`;

export const homeAsideCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-mid);
  width: var(--aside-width);
  flex-shrink: 0;
  ${mediaQuery.miniDesktop} {
    width: 100%;
  }
`;
