import Head from "next/head";
import {
  BackgroundImages,
  Header,
  Navigation,
  About,
  Portfolio,
  Services,
  Testimonial,
  Clients,
  Resume,
  Blog,
  Connect,
  Map,
} from "@/components";
import { mainData } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>{mainData.websiteTitle}</title>
        <meta name="description" content={mainData.description} />
        <meta name="keywords" content={mainData.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={mainData.siteUrl} />
        <meta property="og:title" content={mainData.websiteTitle} />
        <meta property="og:description" content={mainData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={mainData.siteUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={mainData.websiteTitle} />
        <meta name="twitter:description" content={mainData.description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shourya Verma",
              jobTitle: "Software Developer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Noida",
                addressRegion: "Uttar Pradesh",
                addressCountry: "IN",
              },
              email: "mailto:shouryaverma2728@gmail.com",
              telephone: "+91-8266855865",
              url: mainData.siteUrl,
              sameAs: [
                "https://www.linkedin.com/in/rjshouryaverma",
                "https://github.com/shouryaverma",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "NestJS",
                "MongoDB",
                "AWS",
                "Model Context Protocol",
                "Agentic AI",
              ],
            }),
          }}
        />
      </Head>
      <div className="container">
        {/* Header */}
        <Header />
        {/* Main row */}
        <div className="row g-4 g-lg-5">
          <div className="col-12 col-lg-4 col-xl-3">
            <Navigation />
          </div>
          <div className="col-12 col-lg-8 col-xl-9">
            <div className="sections-wrapper">
              {/* About Section */}
              <About />
              <Resume />
              {/* Portfolio Section */}
              <Portfolio />
              {/* Services Section */}
              <Services />
              {/* Testimonial Section */}
              {/* <Testimonial /> */}
              {/* Resume Section */}
              {/* Clients Section */}
              {/* <Clients /> */}
              {/* Blog Section */}
              <Blog />
              {/* Connect Section */}
              <Connect />
              {/* Map Section */}
              <Map />
            </div>
          </div>
        </div>{" "}
        {/* end main row */}
        {/* <bout */}
        {/*Background Vertical lines  */}
        <BackgroundImages />
      </div>
    </>
  );
}
