import Head from "next/head";
import { About1, About2, About3, About4 } from "@/components/about us section";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | Breadcrumb Technologies</title>
        <meta
          name="description"
          content="A tight-knit team founded in 2022, focused on quality over quantity — delivering thoughtful, well-engineered software solutions that last."
        />
        <link rel="canonical" href="https://breadcrumbtechnologies.com.np/aboutUs" />

        {/* Open Graph overrides */}
        <meta property="og:title" content="About Us | Breadcrumb Technologies" />
        <meta property="og:description" content="A tight-knit team focused on quality over quantity — delivering thoughtful, well-engineered software solutions that last." />
        <meta property="og:url" content="https://breadcrumbtechnologies.com.np/aboutUs" />
      </Head>

      <main className="w-full min-h-screen">
        <About1 />
        <About2 />
        {/* <About3 /> */}
        <About4 />
      </main>
    </>
  );
}