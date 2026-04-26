import '../styles/globals.css'
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import Head from "next/head";


export default function App({ Component, pageProps }) {
  return (
    <>
    {/* Default Head for all pages */}
      <Head>
        <title>Breadcrumb Technologies | Building Digital Futures</title>
        <meta
          name="description"
          content="Breadcrumb Technologies — Simplifying IT navigation with innovative solutions for seamless integration and expertise."
        />
        <link rel="icon" href="/Breadcrumb-logo.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}