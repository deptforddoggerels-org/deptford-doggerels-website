import type { Metadata } from "next";
import { Pirata_One, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import SignupModal from "@/components/SignupModal";
import { ModalProvider } from "@/components/ModalProvider"
import ClientOnly from "@/components/ClientOnly";

const pirataOne = Pirata_One({
  variable: "--font-pirata-one",
  subsets: ["latin"],
  weight: "400",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deptforddoggerels.com"),
  title: {
    default: "Deptford Doggerels | Poetry & Spoken Word in Deptford",
    template: "%s | Deptford Doggerels",
  },
  description:
    "Deptford Doggerels is a monthly poetry and spoken word night in Deptford, London.",
  keywords: [
    "Deptford poetry",
    "London poetry night",
    "spoken word London",
    "open mic Deptford",
    "poetry events London",
  ],
  openGraph: {
    title: "Deptford Doggerels",
    description:
      "A monthly poetry and spoken word night in Deptford, London.",
    url: "https://deptforddoggerels.com",
    siteName: "Deptford Doggerels",
    images: [
      {
        url: "/images/openGraph/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Deptford Doggerels poetry night",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${pirataOne.variable} ${lora.variable} antialiased font-lora text-black bg-parchment-light bg-[url('/noise.png')]`}>
        <Navbar />
        <ClientOnly>
          <ModalProvider>
            {children}
            <footer className="text-center py-4 bg-parchment-light bg-[url('/noise.png')]">
              <div className="text-black">
                Contact:{" "}
                <a
                  href="mailto:info@deptforddoggerels.com"
                  className="underline hover:text-black"
                >
                  info@deptforddoggerels.com
                </a>
              </div>
              <div className="font-pirata">ALL RIGHTS RESERVED © 2025</div>
            </footer>
            <SignupModal />
          </ModalProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
