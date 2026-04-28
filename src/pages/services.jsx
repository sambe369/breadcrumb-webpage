import Head from "next/head";
import { Service1, Service2, Service3, Service4 } from "@/components/services section";

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services | Breadcrumb Technologies</title>
        <meta
          name="description"
          content="Custom software development, AI-enhanced UX/UI design, and API development — tailored solutions for businesses ready to build something meaningful."
        />
        <link rel="canonical" href="https://breadcrumbtechnologies.com.np/services" />

        {/* Open Graph overrides */}
        <meta property="og:title" content="Our Services | Breadcrumb Technologies" />
        <meta property="og:description" content="Custom software, AI-enhanced UX/UI design, and API development — tailored solutions for businesses ready to build." />
        <meta property="og:url" content="https://breadcrumbtechnologies.com.np/services" />
      </Head>

      <main className="w-full min-h-screen">
        <Service1 />
        <Service2 />
        <Service3 />
        <Service4 />
      </main>
    </>
  );
}