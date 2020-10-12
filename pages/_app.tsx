import { Global, css } from "@emotion/core";
import emotionReset from "emotion-reset";
import { AppProps } from "next/app";
import React, { FunctionComponent } from "react";

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Global
      styles={css`
        ${emotionReset}
      `}
    />
    <Component {...pageProps} />
  </>
);

export default MyApp;
