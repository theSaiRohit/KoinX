import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStylesCss } from "@/styles/global-styles";
import Header from "@/modules/header";
import DeveloperCreds from "@/modules/developer-creds";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStylesCss} />
      <Header />
      <Component {...pageProps} />
      <DeveloperCreds />
    </>
  );
}
