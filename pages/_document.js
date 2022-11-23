import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"
          integrity="sha384-GWpeQQCx59oy0AZxNeVcLrX+Nqpg3dhEoBT/ynclm8lAsrgtZfh/GqUAEuOG1gYA"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"
          integrity="sha384-YERp0leS9gec08SXfRcJ7P+5G0R/bOBvRotlUTlI5Oxg2d/egqnOV3Sn4eDcCVjO"
          crossorigin="anonymous"
        ></script> */}

        {/* <script src="../node_modules/tw-elements/dist/js/index.min.js"></script> */}
      </Head>
      <body className="font-sans">
        <Main />
        <NextScript />
        <Script src="./TW-ELEMENTS-PATH/dist/js/index.min.js" />
      </body>
    </Html>
  );
}
