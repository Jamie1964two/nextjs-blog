import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Logo from "../components/Logo";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Choucester City Church</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="2xl:max-w-7xl 2xl:mx-auto">
        <Header />
        <section
          className=""
          // style={{ position: "relative", width: "100vw", height: "100vh" }}
        >
          <div className="relative">
            <Image
              src="/images/gloucester_cathedral.jpg"
              // fill
              // object-fit="cover"
              height={2793} // Desired size with correct aspect ratio
              width={3915} // Desired size with correct aspect ratio
              // sizes="(max-width: 768px) 100vw,
              //   (max-width: 1200px) 50vw,
              //   33vw"
              alt="Choucester Church"
            />
            <div className="absolute left-1/2  top-1/2 -translate-x-2/4 animate-ascend">
              <Logo />
            </div>
          </div>
        </section>

        <h1 className="title text-3xl font-bold underline">
          Read <Link href="/posts/first-post">this page!</Link>
          Welcome to <a href="https://nextjs.org">Gloucester City Church</a>
        </h1>

        <Image
          src="/images/china_town.png"
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="china town"
        />
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>
    </>
  );
}
