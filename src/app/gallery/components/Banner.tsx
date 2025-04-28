import { SectionWithContainer, Heading, Paragraph } from "@/components";
import Image from "next/image";

interface BannerProps {
  title: string;
  description: string;
  src: string;
}
const Banner: React.FC<BannerProps> = ({ title, description, src }) => {
  return (
    <SectionWithContainer sectionClassName="bg-bgClr lg:py-20 py-16">
      <div className="grid lg:grid-cols-3 grid-cols-1 max-md:gap-4 items-center w-full">
        <div className="flex lg:col-span-2 flex-col  gap-4  w-full">
          <Heading
            level={1}
            className="text-primary capitalize font-montaga lg:text-5xl/snug text-2xl max-md:text-center tracking-widest lg:pe-16"
          >
            {title}
          </Heading>
          <Paragraph className="description max-md:text-center max-w-3xl text-white">{description}</Paragraph>
        </div>
        <div className="relative md:aspect-[4/3] aspect-square w-full">
          <Image src={src} alt={title} className="object-cover" fill />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Banner;
