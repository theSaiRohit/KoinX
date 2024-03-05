import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStylesCss } from "@/styles/global-styles";
import Header from "@/modules/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStylesCss} />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
