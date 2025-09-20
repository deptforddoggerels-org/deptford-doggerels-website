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
  title: "Deptford Doggerels",
  description: "Community poetry night in the heart of Deptford",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${pirataOne.variable} ${lora.variable} antialiased font-lora`}>
        <Navbar />
        <ClientOnly>
          <ModalProvider>
            {children}
            <SignupModal />
          </ModalProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
