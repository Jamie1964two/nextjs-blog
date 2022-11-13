import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        {/* <script src="../node_modules/tw-elements/dist/js/index.min.js"></script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="./TW-ELEMENTS-PATH/dist/js/index.min.js" />
      </body>
    </Html>
  );
}
