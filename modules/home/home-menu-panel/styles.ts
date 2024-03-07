import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const menuPanelWrapperCss = css`
  ${mediaQuery.tablet} {
    width: 90vw;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      height: 0;
    }
  }
`;

export const menuPanelContainerCss = css`
  display: flex;
  gap: var(--padding-mid);
  border-bottom: 1px solid var(--color-off-gray);
`;

export const menuPanelListCss = css`
  list-style: none;
  padding-bottom: var(--padding-small);
  flex-shrink: 0;
  cursor: pointer;
  &.panel-list-active {
    position: relative;
    color: rgb(0, 82, 254);
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 3px;
      background-color: rgb(0, 82, 254);
    }
  }
`;
