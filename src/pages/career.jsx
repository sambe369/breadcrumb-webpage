import Head from "next/head";
import { Career1, Career2, Career3 } from "@/components/career section";

export default function Career() {
  return (
    <>
      <Head>
        <title>Careers | Breadcrumb Technologies</title>
        <meta
          name="description"
          content="Join Breadcrumb Technologies — a small, focused team building thoughtful digital products. Explore open roles and grow with us in Kathmandu."
        />
        <link rel="canonical" href="https://breadcrumbtechnologies.com.np/career" />

        {/* Open Graph overrides */}
        <meta property="og:title" content="Careers | Breadcrumb Technologies" />
        <meta property="og:description" content="Join Breadcrumb Technologies — a small, focused team building thoughtful digital products. Explore open roles and grow with us." />
        <meta property="og:url" content="https://breadcrumbtechnologies.com.np/career" />
      </Head>

      <main className="w-full min-h-screen">
        <Career1 />
        <Career2 />
        <Career3 />
      </main>
    </>
  );
}