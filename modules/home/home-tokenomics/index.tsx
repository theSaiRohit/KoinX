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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, earum, dolorum odio nulla reiciendis tempora
        quod pariatur doloremque quisquam quae cumque laborum voluptate iusto mollitia nisi, quam neque? Expedita
        tempore quo totam unde eum doloribus sapiente! Cum officiis ea, corrupti accusamus aperiam fuga, error ipsa
        doloremque est culpa deserunt blanditiis, possimus sed assumenda. Sequi quae voluptatum deleniti nam mollitia
        magnam illo omnis at recusandae porro vel praesentium temporibus vero aspernatur assumenda ut quo, nisi quidem?
        Quis esse laborum sed, voluptatibus a commodi excepturi laudantium nulla doloribus reprehenderit sint ad,
        temporibus mollitia, illum aliquid impedit eligendi unde itaque accusamus obcaecati modi aut magni. Impedit
        nobis necessitatibus perferendis, in, inventore eius corrupti, placeat a molestiae voluptas non consectetur
        dolor vel saepe esse accusantium tempora? Reiciendis, temporibus accusantium voluptas quis dolor officiis
        assumenda commodi enim tenetur. Nulla adipisci facere officia sit veniam minus laudantium consequuntur quae
        molestias, earum expedita incidunt rerum illo dolores deserunt quibusdam aperiam qui soluta blanditiis nostrum
        beatae! Repudiandae architecto voluptatibus cupiditate quisquam repellat soluta eveniet voluptatem odit amet
        voluptates impedit inventore facilis cumque, veritatis beatae quis atque non ratione doloribus dolores? Repellat
        possimus, nisi, quod necessitatibus dolorum nesciunt delectus porro quasi neque commodi rerum fugit fugiat
        ducimus tempora alias.
      </p>
    </section>
  );
}
