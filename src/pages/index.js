import Head from "next/head";
import { Section1, Section2, Section3, Section4 } from "@/components/home section";

export default function Home() {
  return (
    <>
      <Head>
        <title>Breadcrumb Technologies | Custom Software, AI Design & API Development</title>
        <meta
          name="description"
          content="A digital agency crafting custom software, AI-enhanced UX/UI design, and robust APIs. Featured projects include Email Love, On the Case, and R.I.S.E."
        />
        <link rel="canonical" href="https://breadcrumbtechnologies.com.np" />

        {/* Open Graph overrides for homepage */}
        <meta property="og:title" content="Breadcrumb Technologies | Custom Software, AI Design & API Development" />
        <meta property="og:description" content="A digital agency crafting custom software, AI-enhanced UX/UI design, and robust APIs." />
        <meta property="og:url" content="https://breadcrumbtechnologies.com.np" />

        {/* Structured data — tells Google you're an organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Breadcrumb Technologies",
              url: "https://breadcrumbtechnologies.com.np",
              logo: "https://breadcrumbtechnologies.com.np/Breadcrumb-logo.png",
              description: "A digital agency crafting custom software, AI-enhanced UX/UI design, and robust APIs.",
              foundingDate: "2022",
              address: {
                "@type": "PostalAddress",
                addressCountry: "NP",
              },
              sameAs: [
                // Add your social media URLs here once you have them, e.g.:
                "https://np.linkedin.com/company/breadcrumbtechnologies"                
              ],
            }),
          }}
        />
      </Head>

      <main className="w-full min-h-screen">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
    </>
  );
}