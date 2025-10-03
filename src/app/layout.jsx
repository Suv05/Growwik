import "./globals.css";

//import { Noto_Serif_JP } from "next/font/google";
import { Suspense } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ScrollProvider } from "@/lib/ScrollContext";
import Spinner from "./loading";

// const notoSerifJP = Noto_Serif_JP({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-noto-serif-jp",
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* =========================================== */}
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="We're a global influencer marketing agency, powered by influencers..."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Growwik Media - Influencer Marketing Agency"
        />
        <meta
          property="og:description"
          content="We're a global influencer marketing agency..."
        />
        <meta
          property="og:image"
          content="https://9mz6bxf3klptyi9o.public.blob.vercel-storage.com/Logo-with-tag.svg"
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
          content="We're a global influencer marketing agency..."
        />
        <meta
          name="twitter:image"
          content="https://9mz6bxf3klptyi9o.public.blob.vercel-storage.com/Logo-with-tag.svg"
        />

        {/* Favicon + Logo */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
