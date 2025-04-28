"use client";
import Image from "next/image";
import Section from "../../../components/SectionComponents/Section";
import Container from "../../../components/SectionComponents/Container";
import { Heading, Paragraph } from "../../../components/TextAndInputComponents";
import { navButtons } from "@/data/navData";
import { useEffect, useState } from "react";
import CheckInOutForm from "./CheckInOutForm";
// import { CalendarIcon, DownArrow } from "@/icons/icons";
interface HomeBannerProps {
  images: string[];
  title: string;
  description: string;
}
const HomeBanner: React.FC<HomeBannerProps> = ({
  images,
  title,
  description,
}) => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Section className="!py-0">
      <div className="w-full relative lg:aspect-[4/1.9] aspect-[4/5.5]">
        <Image
          src={images[0]}
          alt="banner"
          fill
          className="object-cover object-center"
        />

        <div className="absolute top-0 left-0 z-10 w-full h-full pb-4 bg-gradient-to-t from-black/60">
          <div className="lg:mt-32 mt-20 h-4/5">
            <Container className="h-full">
              <div className="flex flex-col items-center justify-between w-full h-full">
                <div
                  className={` relative aspect-square h-[168px] ${navbar ? "opacity-0" : "opacity-100"}`}
                >
                  <Image
                    src="/logo.png"
                    alt="white ridge"
                    fill
                    className="object-contain hidden lg:block z-10"
                  />
                </div>
                <div className="flex lg:hidden items-center gap-4">
                  {navButtons.map((button) => (
                    <button
                      key={button.id}
                      className={`flex ${button.class} items-center text-white  gap-2 border transition-all duration-500 ease-in-out disabled:border-white disabled:border-opacity-100 border-opacity-0 border-transparent p-1`}
                    >
                      {button.icon}
                    </button>
                  ))}
                </div>
                <div className="flex flex-col items-center max-md:mt-1 justify-center gap-6 ">
                  <Heading
                    level={1}
                    className="md:text-[3.5rem]/[4rem] text-2xl font-montaga text-center text-white capitalize "
                  >
                    {title}
                  </Heading>
                  <Paragraph className="description md:text-[1.38rem] max-w-2xl font-medium text-center text-white capitalize">
                    {description}
                  </Paragraph>
                </div>
                <CheckInOutForm />
              </div>
            </Container>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HomeBanner;
