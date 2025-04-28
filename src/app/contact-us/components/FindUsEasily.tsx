import { Heading, Paragraph, SectionWithContainer } from "@/components";
import LazyLoadedMap from "@/components/Map/LazyLoadedMap";

const FindUsEasily = () => {
  return (
    <SectionWithContainer sectionClassName="bg-bgClr">
      <div className="flex flex-col items-center justify-center gap-4 pb-8">
        <Heading
          level={2}
          className="text-center text-primary capitalize font-montaga heading2"
        >
          Find us easily
        </Heading>
        <Paragraph className="text-center description1 text-white">
          Conveniently located by Lake Brienz with easy access to major travel
          hubs
        </Paragraph>
        <div className="relative lg:aspect-[4/2] rounded-sm overflow-hidden aspect-square mt-6 w-full">
          <LazyLoadedMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.3361685040213!2d76.34778399999999!3d32.193518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b5227f6ac256d%3A0xd5044daf96399387!2sWhite%20Ridge%20Hotel!5e1!3m2!1sen!2sin!4v1745772454907!5m2!1sen!2sin" />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default FindUsEasily;