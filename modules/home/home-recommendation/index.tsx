import CompWrapper from "@/components/comp-wrapper";
import RecommendCards from "@/modules/home/home-recommendation/recommends-card";
import {
  carousalCss,
  recommendationContainerCss,
  recommendationHeaderCss,
  recommendationWrapperCss,
  trackCss
} from "@/modules/home/home-recommendation/styles";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function HomeRecommendation(props: any) {
  const { recommendationData, headerText } = props;
  const trackRef = useRef<HTMLDivElement>(null);
  const columnRef = useRef<number>(4);
  const [cardNum, setCardNum] = useState<number>(0);
  const nextBtn = useRef<HTMLSpanElement>(null);
  const prevBtn = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const carousalItems = Array.from(track?.children ?? []);
    const firstItem = carousalItems[0];
    const lastItem = carousalItems[carousalItems.length - 1];

    const obvOptions: IntersectionObserverInit = {
      root: track,
      threshold: 0.7
    };

    const obvCallback: IntersectionObserverCallback = (events) => {
      for (const event of events) {
        if (event.isIntersecting) {
          if (event.target.classList.contains("carousal-item-wrapper-10")) {
            nextBtn.current?.classList.add("btn-inactive");
          }

          if (event.target.classList.contains("carousal-item-wrapper-1")) {
            prevBtn.current?.classList.add("btn-inactive");
          }
        } else {
          prevBtn.current?.classList.remove("btn-inactive");
          nextBtn.current?.classList.remove("btn-inactive");
        }
      }
    };

    const trackObserver: IntersectionObserver = new IntersectionObserver(obvCallback, obvOptions);

    trackObserver.observe(lastItem);
    trackObserver.observe(firstItem);

    const resizeHandler = () => {
      const { innerWidth } = window;
      if (innerWidth >= 768 && innerWidth < 1200) {
        columnRef.current = 3;
      } else if (innerWidth < 768) {
        columnRef.current = 2;
      } else {
        columnRef.current = 4;
      }
    };
    resizeHandler();

    addEventListener("resize", resizeHandler);

    return () => {
      trackObserver.disconnect();
      removeEventListener("resize", resizeHandler);
    };
  }, []);

  const clickHandlerSuperFunc = useCallback(
    (sign: number) => {
      return () => {
        setCardNum((prevCardNum) => prevCardNum + sign * 1);

        const track = trackRef.current;
        if (track) {
          const toScrollX = ((cardNum + sign * 1) * track.getBoundingClientRect().width) / columnRef.current;
          track.scroll({
            left: toScrollX,
            behavior: "smooth"
          });
        }
      };
    },
    [cardNum]
  );
  return (
    <section css={recommendationWrapperCss}>
      <div css={recommendationContainerCss}>
        <h2 css={recommendationHeaderCss}>{headerText}</h2>
        <div className="carousel" css={carousalCss}>
          <span className="prev-btn carousal-btn btn-inactive" onClick={clickHandlerSuperFunc(-1)} ref={prevBtn}>
            <FaAngleLeft />
          </span>
          <div className="track" css={trackCss} ref={trackRef}>
            <RecommendCards recommendationData={recommendationData} />
          </div>
          <span className="next-btn carousal-btn" onClick={clickHandlerSuperFunc(1)} ref={nextBtn}>
            <FaAngleRight />
          </span>
        </div>
      </div>
    </section>
  );
}
