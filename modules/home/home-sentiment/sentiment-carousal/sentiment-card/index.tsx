import {
  cardIconCss,
  sentimentCardIconWrapperCss,
  sentimentCardTextWrapperCss,
  sentimentCardsCss
} from "@/modules/home/home-sentiment/sentiment-carousal/sentiment-card/styles";
import { FaBattleNet } from "react-icons/fa";

export default function SentimentCard() {
  return (
    <div css={sentimentCardsCss}>
      <span css={sentimentCardIconWrapperCss}>
        <FaBattleNet css={cardIconCss} />
      </span>
      <div css={sentimentCardTextWrapperCss}>
        <p className="sentiment-card-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit vero reprehenderit alias necessitatibus
          harum!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita aut autem error deserunt nemo explicabo,
          cupiditate rerum, aperiam tempore consequuntur ipsa sequi placeat perferendis in ratione reprehenderit,
          laborum quis. Assumenda iusto eaque eligendi nemo, alias, quo eum, labore consequatur ipsa voluptatum
          quisquam? Quia dolorem commodi excepturi molestias id dolore enim.
        </p>
      </div>
    </div>
  );
}
