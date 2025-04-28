import {
  Heading,
  Paragraph,
  SectionWithContainer,
} from "@/components";
import Image from "next/image";

const Banner = ({
  title,
  description,
  src,
}: {
  title: string;
  description: string;
  src: string;
  videoSrc: string;
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-bgClr ">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <Heading className="text-center text-primary capitalize font-montaga heading2">
          {title}
        </Heading>
        <Paragraph className="text-center description1 text-white">
          {description}
        </Paragraph>
      </div>
      <div className="mt-8 w-full aspect-video relative">
        <Image src={src} alt="banner" fill className="object-cover" />
      </div>
    </SectionWithContainer>
  );
};

export default Banner;
