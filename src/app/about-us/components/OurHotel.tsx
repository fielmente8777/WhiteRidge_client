import { Heading, Paragraph, SectionWithContainer } from "@/components";
import Image from "next/image";

const OurHotel = ({
  title,
  description,
  src,
}: {
  title: string;
  description: string[];
  src: string;
}) => {
  return (
    <SectionWithContainer sectionClassName="!pb-0 relative">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <Heading
          level={2}
          className="text-center text-primary capitalize font-montaga heading2"
        >
          {title}
        </Heading>
        {description.slice(0, 2).map((item, index) => (
          <Paragraph
            className="text-center description1 text-dark"
            key={index}
          >
            {item}
          </Paragraph>
        ))}
        <div className="relative md:aspect-[4/2] rounded-sm overflow-hidden aspect-square  w-full">
          <Image src={src} alt={title} fill className="object-cover" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 py-16">
        {description.slice(2, description.length).map((item, index) => (
          <Paragraph
            className="text-center description1 text-white"
            key={index}
          >
            {item}
          </Paragraph>
        ))}
      </div>
      <div className="absolute  bottom-0 left-0 w-full h-[400px] bg-bgClr z-[-1]"></div>
    </SectionWithContainer>
  );
};

export default OurHotel;
