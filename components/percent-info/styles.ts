import { css } from "@emotion/react";

export const growthNumContainerCss = css`
  border-radius: var(--scrollbar-width);
  width: fit-content;
  display: flex;
  align-items: center;
  padding: var(--scrollbar-width) var(--padding-small);
  gap: var(--scrollbar-width);
  font-weight: 600;
  &.green-percent {
    background-color: rgb(235, 249, 244);
    color: rgb(20, 176, 121);
  }
  &.red-percent {
    background-color: rgb(249, 235, 235);
    color: rgb(176, 20, 20);
  }
`;

export const growthNumSvgCss = css`
  font-size: 1.5rem;
`;
