import { contactPageData } from "@/data/pagesData";
import { Banner, ReachUs } from "./components";
import FindUsEasily from "./components/FindUsEasily";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact Us | White Ridge Hotel Dharamshala",
  description: "Get in touch with White Ridge Hotel for bookings & inquiries. Located in Sidhpur, Dharamshala, Himachal Pradesh. Call, WhatsApp or visit us.",
  metadataBase: new URL("https://www.whiteridgehotels.com/contact-us"),
  alternates: {
    canonical: "https://www.whiteridgehotels.com/contact-us",
  },
  openGraph: {
    title: "Contact Us | White Ridge Hotel Dharamshala",
    description: "Get in touch with White Ridge Hotel for bookings & inquiries. Located in Sidhpur, Dharamshala, Himachal Pradesh. Call, WhatsApp or visit us.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  }
};

export default function page() {
  return (
    <main className="margin">
      <Banner {...contactPageData.bannerData}/>
      <ReachUs {...contactPageData.reachUsDate}/>
      <FindUsEasily />
    </main>
  );
}
