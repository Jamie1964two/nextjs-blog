import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import animationData from "../public/images/miniLogo.json";
import Lottie from "react-lottie";

//import * as LottiePlayer from "@lottiefiles/lottie-player";

const LogoMini = () => {
  // const [lottie, setLottie] = useState(<></>);

  // useEffect(() => {
  //   setLottie(() => {
  //     return (
  //       <Lottie
  //         options={{
  //           loop: false,
  //           autoplay: true,
  //           animationData: animationData,
  //           rendererSettings: {
  //             preserveAspectRatio: "xMinYMin ",
  //           },
  //         }}
  //         height={48}
  //         width={84}
  //       />
  //     );
  //   }, []);
  // });

  return (
    <div className="flex justify-start  lg:flex-1 ">
      {/* <div className="max-w-[30px] max-h-[30px] border-2 border-blue-500"> */}
      <Link href="/">
        {/* <a href="#"> */}
        {/* <span className="sr-only">City Church Choucester</span>
        <div className="bg-myblue rounded-tl-3xl rounded-br-3xl border-2 border-white text-white text-xl font-sans px-4 py-2 hover:opacity-50">
          {/* g-gradient-to-br from-[#5b98b9] via-[#98c8e1] via-[#83adc3]
          to-[#3981a7] */}
        {/* CCC */}
        {/* </div> */}
        {/* </a> */}
        {/* <Lottie
          options={{
            loop: false,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMinYMin ",
            },
          }}
          height={45}
          width={180}
        /> */}
        <Lottie
          options={{
            loop: false,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMinYMin ",
            },
          }}
          height={48}
          width={84}
        />
      </Link>
    </div>
    // </div>
  );
};

export default LogoMini;
