import { css } from "@emotion/react";

export const coinCardContainerCss = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const coinInfoContainerCss = css`
  display: flex;
  align-items: center;
  gap: var(--padding-small);
  .crypto-name {
    font-weight: 600;
  }
`;

export const coinImgCss = css`
  height: 30px;
  aspect-ratio: 1;
  img {
    object-fit: cover;
  }
`;

export const growthNumContainerCss = css`
  border-radius: var(--scrollbar-width);
  display: flex;
  align-items: center;
  padding: var(--scrollbar-width) var(--padding-small);
  gap: var(--scrollbar-width);
  background-color: rgb(235, 249, 244);
  color: rgb(20, 176, 121);
  font-weight: 600;
`;

export const growthNumSvgCss = css`
  font-size: 1.5rem;
`;
