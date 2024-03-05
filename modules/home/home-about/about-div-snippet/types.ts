import { SerializedStyles } from "@emotion/react";
import { ReactNode } from "react";

export interface AboutDivPropsType {
  children: ReactNode;
  h3Text: string;
  extraHeaderStyles?: SerializedStyles;
}
