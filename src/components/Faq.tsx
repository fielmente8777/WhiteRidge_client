import { FaqProps } from "@/@types/types";
import Accordion from "./Accordion";
import SectionWithContainer from "./SectionComponents/SectionWithContainer";
import { Paragraph, Heading } from "./TextAndInputComponents";

const Faq: React.FC<FaqProps> = ({ title, description, item }) => {
  return (
    <SectionWithContainer sectionClassName="bg-bgClr">
      <div className="flex flex-col gap-4 items-center justify-center">
        <Heading
          level={2}
          className="text-center text-primary font-montaga uppercase heading2"
        >
          {title}
        </Heading>
        <Paragraph className="text-center capitalize description1 text-white">
          {description}
        </Paragraph>
        <div className="w-full md:mt-6">
          {item.map((data) => (
            <div
              className={`${item.length - data.id ? "border-t" : "border-b border-t"} border-light w-full p-6`}
              key={data.id}
            >
              <Accordion {...data} />
            </div>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Faq;
