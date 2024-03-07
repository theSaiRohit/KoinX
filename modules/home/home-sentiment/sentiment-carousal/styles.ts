import { mediaQuery } from "@/styles/media-query";
import { css } from "@emotion/react";

export const keyEventsWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-mid);
`;

export const sentimentCarousalWrapperCss = css`
  overflow: hidden;
  max-width: 1440px;
  width: 100%;
  position: relative;
  .sentiment-carousal-btn {
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
    &.sent-btn-left {
      left: 5px;
    }
    &.sent-btn-right {
      right: 5px;
    }
  }
`;

export const sentimentCarousalTrack = css`
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  gap: var(--padding-normal);
  width: 100%;
  &::-webkit-scrollbar {
    height: 0;
  }
`;
