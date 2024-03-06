import ImageWrapper from "@/components/image-wrapper";
import { pieChartImgCss, pieChartWrapperCss, pieInfoCss } from "@/modules/home/home-tokenomics/styles";
import { commonSectionContainerCss } from "@/styles/common-styles";

export default function HomeTokenomics() {
  return (
    <section css={commonSectionContainerCss}>
      <h2>Tokenomics</h2>
      <h3>Initial Distribution</h3>
      <div css={pieChartWrapperCss}>
        <ImageWrapper src="/images/pie.png" alt="Pie chart of tokenomics" extraStyles={pieChartImgCss} />
        <div css={pieInfoCss}>
          <div className="info-row">
            <span className="dot-span blue"></span>
            <span>Crowdsale investors: 80%</span>
          </div>
          <div className="info-row">
            <span className="dot-span orange"></span>
            <span>Foundation: 20%</span>
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio eaque in at consequatur sunt commodi quidem
        omnis id. Officia maxime a debitis in labore natus, deserunt nemo dignissimos consequuntur officiis unde
        reprehenderit pariatur facilis inventore dicta. Sapiente molestias nam odio tempora esse doloremque tenetur vero
        illo pariatur! Ratione fugit odit cum odio aspernatur nesciunt excepturi quisquam doloremque quo! Facilis ipsum
        culpa blanditiis! A, similique autem dicta totam rem reiciendis nostrum eum voluptate perferendis velit
        necessitatibus? Hic sit deserunt saepe ratione fugiat optio mollitia soluta, quos distinctio rerum temporibus
        minima molestiae architecto. Dolorum quas nesciunt cupiditate architecto ducimus doloribus omnis adipisci?
      </p>
    </section>
  );
}
