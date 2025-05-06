import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { Call, Footer, GreetingCard, Navbar, Whatsapp } from "@/components";
import RenderChatBot from "@/components/chatbot/RenderChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "White Ridge Hotel",
  description: "A place to relax and unwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <RenderChatBot />
        <Navbar />
        {children}
        <GreetingCard />
        <Footer />
        <Whatsapp />
        <Call callNumber="+919816091658" />
      </body>
    </html>
  );
}
