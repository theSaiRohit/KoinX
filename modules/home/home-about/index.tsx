import { bitcoinCardData } from "@/common-data";
import ImageWrapper from "@/components/image-wrapper";
import LinkCtaBtn from "@/components/link-cta-btn";
import AboutDivSnippet from "@/modules/home/home-about/about-div-snippet";
import {
  aboutCardsContainerCss,
  aboutCardsContainerHeaderCss,
  bitcoinCardCss,
  bitcoinCardHeaderCss,
  bitcoinCardImgCss,
  bitcoinTextWrapperCss,
  snippetParaCss
} from "@/modules/home/home-about/styles";
import { commonSectionContainerCss } from "@/styles/common-styles";

export default function HomeAbout() {
  const bitcoinMapper = (bitcoinCard: (typeof bitcoinCardData)[0], index: number) => {
    const { imgSrc, text, bgClass } = bitcoinCard;
    return (
      <div key={`bitcoin-card-${index}`} css={bitcoinCardCss} className={bgClass}>
        <ImageWrapper src={imgSrc} alt="Stock Market images" extraStyles={bitcoinCardImgCss} />
        <div css={bitcoinTextWrapperCss}>
          <h4 css={bitcoinCardHeaderCss}>{text}</h4>
          <LinkCtaBtn link="/" text="Check Now" />
        </div>
      </div>
    );
  };

  const paraMapper = (_: unknown, index: number) => {
    return (
      <p key={index} css={snippetParaCss}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias inventore reiciendis, ex accusantium architecto
        provident sit maiores suscipit impedit, velit veniam? Sunt ea odio unde doloremque dolore sed pariatur officia
        hic ullam rerum! Officia reiciendis molestiae magni deleniti sit provident quis, nihil quam dolor? Doloremque
        recusandae amet cum eaque fuga?
      </p>
    );
  };

  return (
    <section css={[commonSectionContainerCss]}>
      <h2>About Bitcoin</h2>
      <AboutDivSnippet h3Text="What is Bitcoin?">
        <p>
          Bitcoin is a decentralized digital currency, often referred to as cryptocurrency. It operates on a
          peer-to-peer network, meaning transactions occur directly between users without the need for a central
          authority, such as a bank or government. Bitcoin transactions are verified by network nodes through
          cryptography and recorded on a public ledger called a blockchain.
        </p>
      </AboutDivSnippet>
      <AboutDivSnippet h3Text="Lorem ipsum dolor sit amet">{[...Array(3)].map(paraMapper)}</AboutDivSnippet>
      <AboutDivSnippet h3Text="Already Holding Bitcoin?" extraHeaderStyles={aboutCardsContainerHeaderCss}>
        <div css={aboutCardsContainerCss}>{bitcoinCardData.map(bitcoinMapper)}</div>
      </AboutDivSnippet>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quaerat corporis beatae repudiandae consequuntur
        numquam repellendus voluptates, quisquam, dignissimos reiciendis, nihil cupiditate nemo quam tempore!
      </p>
    </section>
  );
}
