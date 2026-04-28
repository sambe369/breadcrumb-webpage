import Head from "next/head";
import { Contact1, Contact2 } from "@/components/contact section";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Breadcrumb Technologies</title>
        <meta
          name="description"
          content="Have a project in mind? Get in touch with Breadcrumb Technologies. Email us, call us, or visit us in Kathmandu — let's bring your idea to life."
        />
        <link rel="canonical" href="https://breadcrumbtechnologies.com.np/contact" />

        {/* Open Graph overrides */}
        <meta property="og:title" content="Contact Us | Breadcrumb Technologies" />
        <meta property="og:description" content="Have a project in mind? Get in touch with Breadcrumb Technologies and let's bring your idea to life." />
        <meta property="og:url" content="https://breadcrumbtechnologies.com.np/contact" />
      </Head>

      <main className="w-full min-h-screen">
        <Contact1 />
        <Contact2 />
      </main>
    </>
  );
}