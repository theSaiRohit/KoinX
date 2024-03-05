import ImageWrapper from "@/components/image-wrapper";
import LinkCtaBtn from "@/components/link-cta-btn";
import { homeCtaContainerCss, homeCtaHeaderCss, homeCtaImgCss } from "@/modules/home/home-cta/styles";

export default function HomeCta() {
  return (
    <section css={homeCtaContainerCss}>
      <h2 css={homeCtaHeaderCss}>Get Started with KoinX for FREE</h2>
      <p>
        With our range of features that you can equip for free, KoinX allow you to be more educated and aware of your
        tax reports.
      </p>
      <ImageWrapper
        src="/images/cta-illustration.png"
        alt="Girl gaining knowledge and growing"
        extraStyles={homeCtaImgCss}
      />
      <LinkCtaBtn link="/" text="Get Started for FREE" />
    </section>
  );
}
