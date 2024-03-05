import { css } from "@emotion/react";

export const snippetParaCss = css`
  margin-bottom: var(--padding-mid);
  &:nth-of-type(3) {
    margin-bottom: 0;
  }
`;

export const aboutCardsContainerCss = css`
  display: flex;
  gap: var(--padding-mid);
`;

export const aboutCardsContainerHeaderCss = css`
  font-size: 1.6rem;
`;

export const bitcoinCardCss = css`
  width: 50%;
  border-radius: var(--bor-rad-small);
  display: flex;
  align-items: center;
  gap: var(--padding-mid);
  color: var(--color-bg-white);
  padding: calc(var(--padding-small) + var(--scrollbar-width));
  &.blue-bitcoin-card {
    background: linear-gradient(-45deg, rgb(16, 95, 173), rgb(118, 236, 164));
  }
  &.orange-bitcoin-card {
    background: linear-gradient(-45deg, rgb(241, 60, 55), rgb(255, 150, 100));
  }
`;

export const bitcoinCardImgCss = css`
  height: 200px;
  width: 40%;
  border-radius: var(--bor-rad-small);
  overflow: hidden;
  img {
    object-fit: cover;
  }
`;

export const bitcoinTextWrapperCss = css`
  display: flex;
  flex-direction: column;
  min-height: 125px;
  justify-content: space-between;
`;

export const bitcoinCardHeaderCss = css`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2rem;
`;
