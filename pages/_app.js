import "../styles/globals.css";
import { useEffect } from "react";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
