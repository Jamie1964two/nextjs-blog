import React from "react";
import Image from "next/image";
import Head from "next/head";
import bible from "../public/images/bible.jpg";

const StatementOfFaith = () => {
  return (
    <>
      <Head>
        <title>Statement of Faith | CityChurch Choucester</title>
        <meta
          name="description"
          content="Read CityChurch Choucester's Statement of Faith, a description of the truths we stand on."
        />
      </Head>
      <div className="mb-24">
        <div className="relative  md:w-full h-[50vh]">
          <Image
            src={bible}
            alt="Bible"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              position: "absolute",
            }}
            // className="animate-fadein1"
          />
        </div>
        {/* <div className="absolute bottom-4 right-4 w-[5vw]">
        <Logo />
      </div> */}
        <div className="m-4 sm:m-8 mt-6 sm:mt-12 sm:max-w-md sm:mx-auto">
          <div className="">
            <h1 className="mb-2 text-4xl sm:text-6xl font-bold text-myblue tracking-tight">
              Statement of Faith.
            </h1>
            {/* <h1 className="mr-4 text-gray-500 inline-block text-4xl font-medium">
          For the City.
        </h1>*/}

            <h2 className="mt-4 sm:mt-8 mb-1 sm:mb-2 text-gray-700 inline-block text-xl sm:text-2xl  font-semibold">
              We believe in
            </h2>
            <ul className="sm:text-lg list-disc ml-4 space-y-2 sm:space-y-4">
              <li>
                The one true God who lives eternally in three persons-the
                Father, the Son and the Holy Spirit.
              </li>
              <li>
                The love, grace and sovereignty of God in creating, sustaining,
                ruling, redeeming and judging the world.
              </li>
              <li>
                The divine inspiration and supreme authority of the Old and New
                Testament Scriptures, which are the written Word of God-fully
                trustworthy for faith and conduct.
              </li>
              <li>
                The dignity of all people, made male and female in God’s image
                to love, be holy and care for creation, yet corrupted by sin,
                which incurs divine wrath and judgement.
              </li>
              <li>
                The incarnation of God’s eternal Son, the Lord Jesus Christ-born
                of the virgin Mary; truly divine and truly human, yet without
                sin.
              </li>
              <li>
                The atoning sacrifice of Christ on the cross: dying in our
                place, paying the price of sin and defeating evil, so
                reconciling us with God.
              </li>
              <li>
                The bodily resurrection of Christ, the first fruits of our
                resurrection; his ascension to the Father, and his reign and
                mediation as the only Saviour of the world.
              </li>
              <li>
                The justification of sinners solely by the grace of God through
                faith in Christ.
              </li>
              <li>
                The ministry of God the Holy Spirit, who leads us to repentance,
                unites us with Christ through new birth, empowers our
                discipleship and enables our witness.
              </li>
              <li>
                The Church, the body of Christ both local and universal, the
                priesthood of all believers-given life by the Spirit and endowed
                with the Spirit’s gifts to worship God and proclaim the gospel,
                promoting justice and love.
              </li>
              <li>
                The personal and visible return of Jesus Christ to fulfil the
                purposes of God, who will raise all people to judgement, bring
                eternal life to the redeemed and eternal condemnation to the
                lost, and establish a new heaven and new earth.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatementOfFaith;
