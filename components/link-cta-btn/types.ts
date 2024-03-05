import { SerializedStyles } from "@emotion/react";
import { ReactNode } from "react";

export interface LinkCtaBtnProp {
  link: string;
  text: string;
  extraStyles?: SerializedStyles;
}
