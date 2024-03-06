import { menuPanels } from "@/common-data";
import { PanelContextObj } from "@/context/panel-context";
import { menuPanelListCss, menuPanelWrapperCss } from "@/modules/home/home-menu-panel/styles";
import { MouseEventHandler, useContext, useRef, useState } from "react";

export default function HomeMenuPanel() {
  const panelRef = useRef<HTMLUListElement>(null);
  const { setBoolVal } = useContext(PanelContextObj);
  const clickHandler: MouseEventHandler<HTMLLIElement> = (event) => {
    const target = event.target as HTMLElement;
    const panelListArray = Array.from(panelRef.current?.childNodes ?? []);
    for (const list of panelListArray) {
      (list as HTMLElement).classList.remove("panel-list-active");
    }
    if (target === panelListArray[0]) {
      setBoolVal(false);
    } else {
      setBoolVal(true);
    }
    target.classList.add("panel-list-active");
  };
  const menuPanelMapper = (menu: string, index: number) => {
    return (
      <li
        key={`menu-key-${index}`}
        css={menuPanelListCss}
        onClick={clickHandler}
        className={index === 0 ? "panel-list-active" : ""}
      >
        {menu}
      </li>
    );
  };
  return (
    <ul css={menuPanelWrapperCss} ref={panelRef}>
      {menuPanels.map(menuPanelMapper)}
    </ul>
  );
}
