import { companyName, navList } from "@/common-data";
import { hamburgerCss, headerCss, headerWrapperCss, logoCss, navCss, navItemCss } from "@/modules/header/styles";
import Link from "next/link";
import CompWrapper from "@/components/comp-wrapper";
import { useRef } from "react";
import ImageWrapper from "@/components/image-wrapper";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const clickHandler = () => {
    const hamburger = hamburgerRef.current;
    const nav = navRef.current;
    if (nav && hamburger) {
      nav.classList.toggle("nav-active");
      hamburger.classList.toggle("hamburger-active");
    }
  };

  const navListMapper = (navItem: (typeof navList)[0], index: number) => {
    const { link, navItemName } = navItem;
    return (
      <Link
        href={link}
        key={`nav-item-${index}`}
        css={navItemCss}
        onClick={clickHandler}
        className={(index + 1) / navList.length === 1 ? "nav-btn" : ""}
      >
        {navItemName}
      </Link>
    );
  };

  return (
    <CompWrapper tag="header" innerElemExtraStyles={headerCss} wrapperStyles={headerWrapperCss} ref={headerRef}>
      <ImageWrapper alt="Logo | KoinX" src="/images/logo.png" extraStyles={logoCss} link="/" title={companyName} />
      <div css={hamburgerCss} onClick={clickHandler} ref={hamburgerRef}>
        <div className="hamburger-lines"></div>
        <div className="hamburger-lines"></div>
        <div className="hamburger-lines"></div>
      </div>
      <nav css={navCss} ref={navRef}>
        {navList.map(navListMapper)}
      </nav>
    </CompWrapper>
  );
}
