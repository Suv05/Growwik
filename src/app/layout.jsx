import "./globals.css";

import { Suspense } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ScrollProvider } from "@/lib/ScrollContext";
import Spinner from "./loading";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* =========================================== */}
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="We're a global influencer marketing agency, powered by influencers... helping brands connect authentically with audiences through impactful digital campaigns and creator-driven storytelling."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Growwik Media - Influencer Marketing Agency"
        />
        <meta
          property="og:description"
          content="We're a global influencer marketing agency, powered by influencers... helping brands connect authentically with audiences through impactful digital campaigns and creator-driven storytelling."
        />
        <meta
          property="og:image"
          content="https://growwik.com/growwik-preview-img.png"
        />
        <meta property="og:url" content="https://growwik.com" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Growwik Media - Influencer Marketing Agency"
        />
        <meta
          name="twitter:description"
          content="We're a global influencer marketing agency, powered by influencers... helping brands connect authentically with audiences through impactful digital campaigns and creator-driven storytelling."
        />
        <meta
          name="twitter:image"
          content="https://growwik.com/growwik-preview-img.png"
        />

        {/* Favicon + Logo */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content="Growwik" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200..900&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data */}
        <script type="application/ld+json">{`
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Growwik Media",
    "url": "https://growwik.com",
    "logo": "https://9mz6bxf3klptyi9o.public.blob.vercel-storage.com/Logo-with-tag.svg",
    "sameAs": [
      "https://www.linkedin.com/company/growwik?originalSubdomain=in",
      "https://www.instagram.com/growwikmedia/",
    ]
  }
  `}</script>

        <title>Growwik Media - Influencer Marketing Agency</title>
      </head>

      {/* ============================================ */}
      <body className={`antialiased`}>
        <Suspense fallback={<Spinner />}>
          <ScrollProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </ScrollProvider>
        </Suspense>
      </body>
    </html>
  );
}
