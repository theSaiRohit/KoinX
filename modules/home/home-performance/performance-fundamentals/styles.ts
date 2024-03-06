import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const fundamentalsWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-mid);
`;

export const fundDataWrapperCss = css`
  --col-val: 2;
  display: grid;
  grid-template-columns: repeat(var(--col-val), 1fr);
  grid-auto-rows: 1fr;
  column-gap: var(--padding-normal);
  ${mediaQuery.tablet} {
    --col-val: 1;
  }
`;

export const fundGridItemCss = css`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-small) 0;
  border-bottom: 1px solid var(--color-off-gray);
`;

export const gridItemTitleCss = css`
  color: rgb(86, 90, 95);
`;

export const gridItemValueCss = css`
  font-weight: 600;
  text-align: right;
`;

export const valueInfoWrapperCss = css`
  display: flex;
  justify-content: space-between;
`;

export const gridInfoWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--scrollbar-width);
`;

export const gridItemPercentCss = css`
  &.green-percent {
    color: rgb(15, 186, 131);
  }
  &.red-percent {
    color: rgb(249, 114, 132);
  }
`;
