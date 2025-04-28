import { Button, Heading, Paragraph, SectionWithContainer } from "@/components";
import Link from "next/link";

interface BannerProps {
  title: string;
  description: string;
  link: { href: string; label: string }[];
}
const Banner: React.FC<BannerProps> = ({ title, description, link }) => {
  return (
    <SectionWithContainer sectionClassName="bg-bgClr py-[4rem]">
      <div className="flex flex-col items-center justify-center gap-6 lg:max-w-xl w-full mx-auto">
        <Heading
          className="text-center text-primary capitalize font-montaga heading2 lg:px-20"
        >
          {title}
        </Heading>
        <Paragraph className="text-center description1 text-white">
          {description}
        </Paragraph>
        <div className="grid grid-cols-2 items-center justify-center gap-4 mt=8">
          <Link
            href={link[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="capitalize border-primary bg-primary 
           border py-3 px-6 max-md:text-[0.75rem] text-white  text-base  flex items-center justify-center description1 rounded-sm font-medium hover:bg-transparent hover:text-primary hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"
          >
            {link[0].label}
          </Link>
          <Button
            href={link[1].href}
            label={link[1].label}
            newTabe={true}
            className="capitalize border-primary bg-transparent text-primary hover:text-white hover:bg-primary 
           border py-3 px-6 max-md:text-[0.75rem]"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Banner;
