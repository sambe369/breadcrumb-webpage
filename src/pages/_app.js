import '../styles/globals.css'
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Basic meta */}
        <title>Breadcrumb Technologies | Building Digital Futures</title>
        <meta
          name="description"
          content="Breadcrumb Technologies — Simplifying IT navigation with innovative solutions for seamless integration and expertise."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#48A446" />

        {/* Favicon */}
        <link rel="icon" href="/Breadcrumb-logo.png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Breadcrumb Technologies" />
        <meta property="og:title" content="Breadcrumb Technologies | Building Digital Futures" />
        <meta property="og:description" content="Simplifying IT navigation with innovative solutions for seamless integration and expertise." />
        <meta property="og:url" content="https://breadcrumbtechnologies.com.np" />
        <meta property="og:image" content="https://breadcrumbtechnologies.com.np/Breadcrumb-logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Breadcrumb Technologies | Building Digital Futures" />
        <meta name="twitter:description" content="Simplifying IT navigation with innovative solutions for seamless integration and expertise." />
        <meta name="twitter:image" content="https://breadcrumbtechnologies.com.np/Breadcrumb-logo.png" />
      </Head>

      <div className={`${geist.variable} ${geistMono.variable} font-sans`}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}