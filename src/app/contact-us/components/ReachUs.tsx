import { Form, Heading, Paragraph, SectionWithContainer } from "@/components";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  src: string;
  items: {
    title: string;
    icon: React.ReactNode;
    address?: string;
    src?: string;
    newTab?: boolean;
    links?: {
      label: string;
      href: string;
    }[];
  }[];
}

const ReachUs: React.FC<Props> = ({ title, description, items }) => {
  return (
    <SectionWithContainer>
      <div className="lg:grid flex flex-col-reverse grid-cols-2 gap-12 w-full mt-8 items-center">
        <div className="flex flex-col gap-4 w-full">
          <Heading
            level={2}
            className=" text-primary capitalize font-montaga heading2"
          >
            {title}
          </Heading>
          <Paragraph className=" description1 text-dark">
            {description}
          </Paragraph>
          <div className="w-full md:mt-6">
            <Form />
          </div>
        </div>
        <div className="flax md:justify-items-end w-full">
          <div className="flex flex-col gap-8 w-full max-w-[347px]">
            {items.map((item, index) => (
              <div key={index} className="flex  gap-3 w-full">
                <div className="text-primary">{item.icon}</div>
                <div className="flex flex-col gap-3 w-full">
                  <Heading level={3} className="heading4 text-dark font-medium">
                    {item.title}
                  </Heading>
                  {item.address && (
                    <Link
                      href={item.src || "#"}
                      target={item.newTab ? "_blank" : "_self"}
                      className="description1  hover:text-[#FFCD42] transition-all duration-300 ease-in-out  !text-[#848484]"
                    >
                      {item.address}
                    </Link>
                  )}
                  {item.links && (
                    <div className="flex flex-col gap-1">
                      {item.links.map((link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          target="_blank"
                          className="description1  hover:text-[#FFCD42] transition-all duration-300 ease-in-out  !text-[#848484]"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ReachUs;
