import React from "react";
import Image from "next/image";
import Head from "next/head";
import serve from "../../public/images/serve.jpg";
import cathedral from "../../public/images/cathedral.jpg";
import ContactButton from "../../components/ContactButton";
// import { createClient } from "next-sanity";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit("max").auto("format")}
        />
      );
    },
  },
};
const defaultValues = {
  headerImage: null,
  title: null,
  subTitle: null,
  mainImage: null,
  body: null,
};

const SpecialEvent = ({ post = defaultValues }) => {
  console.log("slug page" + post.headerImage);
  return (
    <>
      <Head>
        <title>{post.title + "| CityChurch Choucester"}</title>
        <meta
          name="description"
          content="Answers to all your questions about what to expect at our Sunday meetings."
        />
      </Head>
      <div className="mb-24">
        <div className="relative  md:w-full  overflow-hidden">
          <img
            className="h-[50vh] w-full object-cover"
            src={urlFor(post.headerImage).url() || cathedral}
          />
        </div>

        <div className="m-4 sm:m-8 mt-6 sm:mt-12">
          {!post.title && (
            <h1 className="mb-2 sm:mb-6 text-4xl sm:text-6xl font-bold text-myblue tracking-tight">
              Page not found.
            </h1>
          )}
          {post.title && (
            <>
              <h1 className="mb-2 sm:mb-6 text-4xl sm:text-6xl font-bold text-myblue tracking-tight">
                {post.title}
              </h1>

              <h2 className="mb-4 text-gray-700 inline-block text-2xl sm:text-4xl font-medium">
                {post.subheading}
              </h2>
              <div className="mb-4 sm:text-lg">
                <PortableText value={post.body} components={ptComponents} />
              </div>

              <ContactButton />
              <div className="relative mt-8 w-full flex justify-center">
                <img
                  className="w-full object-cover"
                  src={urlFor(post.mainImage).url()}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SpecialEvent;

// const client = createClient({
//   projectId: "565dv1ol",
//   dataset: "production",
//   apiVersion: "2022-12-28",
//   useCdn: false,
// });

// export async function getStaticProps() {
//   const pages = await client.fetch(`*[_type == "post"]`);

//   console.log(JSON.stringify(pages));
//   console.log(pages[0].body);

//   return {
//     props: {
//       pages,
//     },
//   };
// }

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]
  `,
    { slug }
  );

  return {
    props: {
      post,
    },
  };
}

//export default Post
