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
  border-radius: 50%;
  overflow: hidden;
  img {
    object-fit: cover;
  }
`;
