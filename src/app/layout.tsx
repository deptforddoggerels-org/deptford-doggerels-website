import type { Metadata } from "next";
import { Pirata_One, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import SignupModal from "@/components/SignupModal";

const pirataOne = Pirata_One({
  variable: "--font-pirata-one",
  subsets: ['latin'],
  weight: '400'
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Deptford Doggerels",
  description: "Community poetry night in the heart of Deptford",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${pirataOne.variable} ${lora.variable} antialiased font-lora`}
      >
        <Navbar />
        {children}
        <footer className="text-center py-4">
          <footer className="text-center py-4 text-sm text-gray-600">
            
            <div>
              Contact: <a href="mailto:deptforddoggerels@gmail.com" className="underline hover:text-black">deptforddoggerels@gmail.com</a>
            </div>
            <div className="font-pirata">
              All RIGHTS RESERVED © 2025
            </div>
          </footer>
        </footer>
        <SignupModal />

      </body>

    </html>
  );
}
