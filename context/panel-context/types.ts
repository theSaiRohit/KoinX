import { Dispatch, SetStateAction } from "react";

export interface PanelContextType {
  boolVal: boolean;
  setBoolVal: Dispatch<SetStateAction<boolean>>;
}
