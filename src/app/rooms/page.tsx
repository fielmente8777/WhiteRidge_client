import { Faq, SectionWithContainer } from "@/components";
import TwoColGridCard from "@/components/TwoColGridCard";
import { homePageData, roomsPageData } from "@/data/pagesData";
import { Banner } from "./components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms & Suites | White Ridge Hotel Dharamshala",
  description: "Choose from Valley View, Mount View, Executive Suite & Standard rooms — all with AC, mini-bar & scenic views. Starting from ₹3,500/night.",
  metadataBase: new URL("https://www.whiteridgehotels.com/rooms"),
  alternates: {
    canonical: "https://www.whiteridgehotels.com/rooms",
  },
  openGraph: {
    title: "Rooms & Suites | White Ridge Hotel Dharamshala",
    description: "Choose from Valley View, Mount View, Executive Suite & Standard rooms — all with AC, mini-bar & scenic views. Starting from ₹3,500/night.",
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
      <Banner {...roomsPageData.bannerData} />
      <SectionWithContainer>
        {roomsPageData.roomcard.map((room, index) => (
          <TwoColGridCard key={index} index={index} {...room} />
        ))}
      </SectionWithContainer>
      <Faq {...homePageData.faq} />
    </main>
  );
}
