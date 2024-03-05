import { teamData } from "@/common-data";
import ImageWrapper from "@/components/image-wrapper";
import {
  memberInfoShortWrapperCss,
  memberProfileImgCss,
  teamHeaderCss,
  teamMemberCardWrapperCss
} from "@/modules/home/home-team/styles";
import { commonSectionContainerCss } from "@/styles/common-styles";

export default function HomeTeam() {
  const teamMemberMapper = (member: (typeof teamData)[0], index: number) => {
    const { memberDesc, memberName, memberPosition, profileImgSrc } = member;
    return (
      <div key={`team-member-${index}`} css={teamMemberCardWrapperCss}>
        <div css={memberInfoShortWrapperCss}>
          <ImageWrapper
            src={profileImgSrc}
            alt={`Profile Picture of ${memberName} | KoinX`}
            extraStyles={memberProfileImgCss}
          />
          <span className="member-name">{memberName}</span>
          <span className="member-position">{memberPosition}</span>
        </div>
        <p>{memberDesc}</p>
      </div>
    );
  };
  return (
    <section css={commonSectionContainerCss}>
      <h2 css={teamHeaderCss}>Team</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem nostrum aspernatur dolorum perferendis
        repellat quibusdam eaque quod dolores maiores minus temporibus, beatae magni ipsum! Iure iusto harum obcaecati,
        explicabo nulla neque reiciendis vel et doloremque, quisquam nemo eveniet praesentium quam. Omnis dolorem beatae
        illum officiis saepe aliquam placeat consequuntur.
      </p>
      {teamData.map(teamMemberMapper)}
    </section>
  );
}
