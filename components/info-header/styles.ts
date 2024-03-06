import { css } from "@emotion/react";

export const infoTextHeaderWrapperCss = css`
  display: flex;
  gap: var(--padding-small);
  align-items: center;
`;

export const infoIconWrapperCss = css`
  position: relative;
  &::before {
    content: "Instruction text";
    position: absolute;
    height: 100%;
    width: 200px;
    padding: var(--padding-small);
    border-radius: var(--scrollbar-width);
    background-color: #adbfff;
    color: #0f46fa;
    left: 150%;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  &:hover {
    cursor: pointer;
    &::before {
      display: flex;
    }
  }
`;

export const infoHelperIconCss = css`
  color: rgb(124, 126, 140);
`;
