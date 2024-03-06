import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const commonSectionContainerCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-mid);
  padding: var(--padding-mid);
  width: 100%;
  background-color: var(--color-bg-white);
  border-radius: var(--bor-rad-small);
  box-shadow: 0 0 7.5px -5px rgba(0, 0, 0, 0.4);

  ${mediaQuery.tablet} {
    padding: var(--padding-small);
    width: 100%;
  }
`;
