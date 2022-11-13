import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Choucester City Church</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="2xl:max-w-7xl 2xl:mx-auto">
        <section className="relative h-[100vh] w-full">
          <Header className="absolute" />
          <div className="relative">
            <Carousel />
            <div className="absolute  left-1/2  top-[35%] -translate-x-2/4 animate-ascend">
              <h2 className="text-neutral-100 m-2 text-xl font-medium md:text-xl lg:text-2xl">
                Welcome
              </h2>
              <Logo />
            </div>
            <div className=" absolute  left-1/2  bottom-[10%] md:bottom-[15%] lg:bottom-[20%] -translate-x-2/4 animate-ascend text-center  bg-gradient-to-br from-neutral-300 via-neutral-100 to-neutral-300 rounded-lg">
              <h3 className=" text-neutral-800 p-4  lg:text-xl">
                Join us this Sunday 10:30am in the Chapel
              </h3>
            </div>
          </div>
        </section>

        <section className="relative w-full ">
          <div className="m-2 overflow-clip ">
            <div className="relative h-[30vh]">
              <Image
                src="/images/students.jpg"
                alt="Choucester Church"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  position: "absolute",
                }}
                // className="animate-fadein1"
              />
            </div>
            <div className="h-[100%] absolute top-0 right-0 w-[40%] bg-white opacity-95"></div>
            <div className="mt-2 font-sans absolute bottom-4 right-4 text-right w-1/3 p-2 space-y-2">
              <h4 className="font-semibold font-sans tracking-wide text-lg text-neutral-600">
                Love Jesus
              </h4>
              <p className="text-neutral-600 tracking-tight">
                We're a community of people who love God and each other.
              </p>
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
