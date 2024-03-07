import { credsWrapperCss, nameCss, saiRohitLinkCss } from "@/modules/developer-creds/styles";
import Link from "next/link";

export default function DeveloperCreds() {
  return (
    <div css={credsWrapperCss}>
      <div>
        <span>Developed by</span>
        <Link
          href="https://www.linkedin.com/in/sai-rohit-sanniboyina-7a93aa224/"
          rel="noopener noreferrer"
          target="_blank"
          css={[saiRohitLinkCss, nameCss]}
        >
          Sai Rohit S
        </Link>
      </div>
      <Link href="https://github.com/theSaiRohit" rel="noopener noreferrer" target="_blank" css={saiRohitLinkCss}>
        Github Link{" "}
      </Link>
    </div>
  );
}
