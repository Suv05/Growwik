import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ScrollProvider } from "@/lib/ScrollContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="We're a global influencer marketing agency, powered by influencers. We pride ourselves in bringing together data-led performance, real human relationships, expert creative strategy, authentic engaging content, and laser-sharp paid media targeting."
        />
        <meta property="og:title" content="#1 Influencer marketing agency" />
        <meta
          property="og:description"
          content="We're a global influencer marketing agency, powered by influencers. We pride ourselves in bringing together data-led performance, real human relationships, expert creative strategy, authentic engaging content, and laser-sharp paid media targeting."
        />
        <meta property="og:image" content="/Agency-Logo-(Tag).png" />
        <meta property="og:url" content="https://growwik.com" />
        <meta name="twitter:card" content="/Agency-Logo-(Tag).png" />
        <meta name="twitter:title" content="#1 Influencer marketing agency" />
        <meta
          name="twitter:description"
          content="We're a global influencer marketing agency, powered by influencers. We pride ourselves in bringing together data-led performance, real human relationships, expert creative strategy, authentic engaging content, and laser-sharp paid media targeting."
        />
        <meta name="twitter:image" content="/Agency-Logo-(Tag).png" />
        <title>Growwik Media - #1 Influencer marketing Platform</title>
      </head>
      <body className="antialiased">
        <ScrollProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ScrollProvider>
      </body>
    </html>
  );
}
