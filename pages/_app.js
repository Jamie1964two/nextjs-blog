import "../styles/globals.css";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Head from "next/head";

// import { Quicksand } from "@next/font/google";

// const quicksand = Quicksand({
//   weight: ["400", "500", "600", "700", "800"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
// });

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);
  return (
    <>
      {/* <style jsx global>{`
        html {
          font-family: ${quicksand.style.fontFamily};
        }
      `}</style> */}
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta charset="UTF-8"></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
