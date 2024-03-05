import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const teamHeaderCss = css`
  /* font-size: var(--font-size-small); */
`;

export const teamMemberCardWrapperCss = css`
  background-color: rgb(232, 244, 253);
  border-radius: var(--bor-rad-small);
  display: flex;
  align-items: center;
  padding: var(--padding-mid);
  gap: var(--padding-mid);
  ${mediaQuery.tablet} {
    flex-direction: column;
    padding: var(--padding-mid) var(--padding-small);
  }
`;

export const memberInfoShortWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--scrollbar-width);
  align-items: center;
  .member-name {
    font-weight: 600;
  }

  .member-position {
    color: #788f9b;
  }
`;

export const memberProfileImgCss = css`
  height: 150px;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: var(--bor-rad-small);
  img {
    object-fit: cover;
  }
`;
