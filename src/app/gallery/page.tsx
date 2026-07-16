import { Faq } from "@/components";
import { galleryPageData, homePageData } from "@/data/pagesData";
import { Banner, CircleSlider, ImageSlider } from "./components";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Photo Gallery | White Ridge Hotel Dharamshala",
  description: "Take a visual tour of White Ridge Hotel — terrace, reception, restaurant & bar lounge — set against the stunning Dhauladhar mountain backdrop.",
  metadataBase: new URL("https://www.whiteridgehotels.com/gallery"),
  alternates: {
    canonical: "https://www.whiteridgehotels.com/gallery",
  },
  openGraph: {
    title: "Photo Gallery | White Ridge Hotel Dharamshala",
    description: "Take a visual tour of White Ridge Hotel — terrace, reception, restaurant & bar lounge — set against the stunning Dhauladhar mountain backdrop.",
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
      <Banner {...galleryPageData.bannerData} />
      <ImageSlider items={galleryPageData.galleryData} />
      <CircleSlider items={galleryPageData.galleryData} />
      <Faq {...homePageData.faq} />
    </main>
  );
}
