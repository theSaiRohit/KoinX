import { PanelContextObj } from "@/context/panel-context";
import PerformanceFundamentals from "@/modules/home/home-performance/performance-fundamentals";
import PerformanceScale from "@/modules/home/home-performance/performance-scale";
import { psuedoElemCss } from "@/modules/home/home-performance/styles";
import { commonSectionContainerCss } from "@/styles/common-styles";
import { useContext, useState } from "react";

export default function HomePerformance({ bitcoinAllData }: any) {
  const { boolVal } = useContext(PanelContextObj);
  return (
    <section css={[commonSectionContainerCss, psuedoElemCss]} className={boolVal ? "psuedo-active" : ""}>
      <h2>Performance</h2>
      <PerformanceScale bitcoinAllData={bitcoinAllData} pointer="true" />
      <PerformanceScale bitcoinAllData={bitcoinAllData} />
      <PerformanceFundamentals bitcoinAllData={bitcoinAllData} />
    </section>
  );
}
