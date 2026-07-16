import { aboutPageData } from "@/data/pagesData";
import { Banner, OurHotel } from "./components";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Us | White Ridge Hotel Dharamshala",
  description: "Established in 2016, White Ridge Hotel blends authentic Himachali hospitality with modern comfort. Discover our story in the hills of Dharamshala.",
  metadataBase: new URL("https://www.whiteridgehotels.com/about-us"),
  alternates: {
    canonical: "https://www.whiteridgehotels.com/about-us",
  },
  openGraph: {
    title: "About Us | White Ridge Hotel Dharamshala",
    description: "Established in 2016, White Ridge Hotel blends authentic Himachali hospitality with modern comfort. Discover our story in the hills of Dharamshala.",
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

export default function Home() {
  return (
    <main className="margin">
      <Banner {...aboutPageData.bannerData} />
      <OurHotel {...aboutPageData.section2} />
      {/* <OurJourney {...aboutPageData.ourJourney} /> */}
    </main>
  );
}
