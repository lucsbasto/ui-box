import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "Ui Box",
  description: "A box with your favorite UI components",
};

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={poppins.variable}>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
