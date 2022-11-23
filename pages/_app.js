import "../styles/globals.css";
import { useEffect } from "react";
import Layout from "../components/Layout";

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
