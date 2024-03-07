import InfoHeader from "@/components/info-header";
import SentimentCard from "@/modules/home/home-sentiment/sentiment-carousal/sentiment-card";
import {
  keyEventsWrapperCss,
  sentimentCarousalTrack,
  sentimentCarousalWrapperCss
} from "@/modules/home/home-sentiment/sentiment-carousal/styles";
import { useCallback, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function SentimentCarousal() {
  const sentimentTrackRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLSpanElement>(null);
  const rightRef = useRef<HTMLSpanElement>(null);
  const clickHandlerSuperFunc = useCallback((sign: number) => {
    return () => {
      const track = sentimentTrackRef.current;
      const trackWidth = track?.getBoundingClientRect().width;
      if (sign > 0) {
        rightRef.current?.classList.add("btn-inactive");
        leftRef.current?.classList.remove("btn-inactive");
      } else {
        leftRef.current?.classList.add("btn-inactive");
        rightRef.current?.classList.remove("btn-inactive");
      }
      track?.scroll({
        behavior: "smooth",
        left: sign * (2 * (trackWidth ?? 0))
      });
    };
  }, []);
  return (
    <div css={keyEventsWrapperCss}>
      <InfoHeader infoTextHeader="Key Events" />
      <div css={sentimentCarousalWrapperCss}>
        <span
          className="sentiment-carousal-btn sent-btn-left btn-inactive"
          onClick={clickHandlerSuperFunc(-1)}
          ref={leftRef}
        >
          <FaAngleLeft />
        </span>
        <div css={sentimentCarousalTrack} ref={sentimentTrackRef}>
          <SentimentCard />
          <SentimentCard />
        </div>
        <span className="sentiment-carousal-btn sent-btn-right" onClick={clickHandlerSuperFunc(1)} ref={rightRef}>
          <FaAngleRight />
        </span>
      </div>
    </div>
  );
}
