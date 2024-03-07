import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const recommendationWrapperCss = css`
  display: grid;
  place-items: center;
  background-color: var(--color-bg-white);
  ${mediaQuery.mobile} {
    width: 100vw;
    overflow-x: hidden;
  }
`;

export const recommendationContainerCss = css`
  max-width: 1440px;
  width: 90%;
  padding: var(--padding-normal) 0;
  ${mediaQuery.tablet} {
    width: 97.5%;
  }
`;

export const recommendationHeaderCss = css`
  margin-bottom: var(--padding-mid);
`;

export const carousalCss = css`
  overflow: hidden;
  width: 100%;
  max-width: 1440px;
  position: relative;
  .carousal-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    color: black;
    background-color: white;
    border-radius: 50%;
    padding: var(--scrollbar-width);
    display: grid;
    place-content: center;
    aspect-ratio: 1;
    cursor: pointer;
    user-select: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    svg {
      font-size: 2rem;
      ${mediaQuery.tablet} {
        font-size: 1.2rem;
      }
    }
    &.btn-inactive {
      display: none;
    }
    &.prev-btn {
      left: 5px;
    }
    &.next-btn {
      right: 5px;
    }
  }
  ${mediaQuery.mobile} {
    width: 90%;
  }
`;

export const trackCss = css`
  --col-num: 4;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc((100% / var(--col-num)));
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    height: 0;
  }
  .carousal-item-wrapper {
    scroll-snap-align: start;
    display: grid;
    place-items: center;
    width: 100%;
    flex-shrink: 1;
  }
  ${mediaQuery.miniDesktop} {
    --col-num: 3;
  }
  ${mediaQuery.tablet} {
    --col-num: 2;
  }
  /* ${mediaQuery.mobile} {
    --col-num: 1;
  } */
`;
