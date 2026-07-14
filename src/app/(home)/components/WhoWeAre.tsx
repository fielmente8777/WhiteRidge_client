import { SectionWithContainer } from "@/components";
import { Paragraph } from "@/components/TextAndInputComponents";
import Image from "next/image";
import CheckInOutForm from "./CheckInOutForm";
import { MountainIcon, MountainsIcon } from "@/icons/icons";

const WhoWeAre = () => {
  const description = [
    "Welcome to our Abode in Dharamshala, Himachal Pradesh, where authentic experiences blend seamlessly with modern comfort.",

    "Established in 2016, we’ve become a trusted destination for travelers, offering a mix of serene surroundings, top-notch hospitality, and a warm local touch",

    "Whether you're here for business, culture, or adventure, our property offers a perfect base for all kinds of visitors—from families and groups to professionals and event-goers.",

    "Book your next holiday with us in Dharamshala and make your stay memorable.",
  ];
  return (
    <SectionWithContainer>
      <div className="flex flex-col items-center justify-center lg:gap-14 ">
        <div className="flex flex-col gap-1 justify-center">
          <p className="text-primary text-center heading4 uppercase font-medium">
            WHITE RIDGE HOTEL
          </p>
          <h2 className="text-dark heading3 font-medium uppercase text-center ">
            &quot;A View Like No Other&quot;
          </h2>
        </div>

        <div className="w-full lg:grid grid-cols-3 flex items-center justify-center gap-4">
          <div className="w-full h-[1px] bg-[#D9D9D9]" />
          <div className="flex items-center justify-center w-[20rem]  lg:w-full">
            {/* <div className="relative md:aspect-[4/1.5] aspect-[4/4] my-auto w-full">
              <Image
                src={
                  "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Asset1.webp"
                }
                alt="mountain"
                fill
                className="object-contain"
              />
            </div> */}
            <MountainsIcon/>
          </div>
          <div className="w-full h-[1px] bg-[#D9D9D9]" />
        </div>

        <div className="max-w-[66rem] flex flex-col gap-2 items-center justify-center">
          {description.map((item, index) => (
            <Paragraph
              key={index}
              className="text-light text-center description tracking-wider mb-2"
            >
              {item}
            </Paragraph>
          ))}
        </div>

        <CheckInOutForm />
      </div>
    </SectionWithContainer>
  );
};

export default WhoWeAre;
