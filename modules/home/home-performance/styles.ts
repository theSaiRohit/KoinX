import { css } from "@emotion/react";

export const psuedoElemCss = css`
  position: relative;
  overflow: hidden;
  &.psuedo-active {
    &::before {
      position: absolute;
      content: "No Data Available";
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: var(--color-bg-white);
      z-index: 1;
      display: grid;
      place-items: center;
      font-weight: 600;
      color: rgb(0, 82, 254);
    }
  }
`;
