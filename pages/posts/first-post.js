import React from "react";
import Link from "next/link";
import Head from "next/Head";
import Layout from "../../components/Layout";

const firstpost = (props) => {
  return (
    <>
      <Head>
        <title>About us</title>
      </Head>
      <Layout>
        <h1>Hi there all</h1>
        <p>
          Go back <Link href="/">HOME</Link>
        </p>
      </Layout>
    </>
  );
};

export default firstpost;
