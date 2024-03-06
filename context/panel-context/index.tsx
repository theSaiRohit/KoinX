import { PanelContextType } from "@/context/panel-context/types";
import React, { createContext, PropsWithChildren, useState } from "react";

const panelContextInit: PanelContextType = {
  boolVal: false,
  setBoolVal: () => {}
};

export const PanelContextObj = createContext(panelContextInit);

export default function PanelContextProvider({ children }: PropsWithChildren) {
  const [boolVal, setBoolVal] = useState(false);

  const providerValue: PanelContextType = {
    boolVal,
    setBoolVal
  };

  return <PanelContextObj.Provider value={providerValue}>{children}</PanelContextObj.Provider>;
}
