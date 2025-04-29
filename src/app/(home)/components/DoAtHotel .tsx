"use client";
import {
  Container,
  DoAtHotelCard,
  Heading,
  Paragraph,
  Section,
} from "@/components";
import SliderSwip from "@/components/SliderSwip";
import { NextIcon, PrevIcon } from "@/icons/icons";
import { Navigation, Pagination } from "swiper/modules";

interface IDoAtHotelProps {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
    images: string[];
  }[];
}
const DoAtHotel: React.FC<IDoAtHotelProps> = ({
  title,
  description,
  items,
}) => {
  return (
    <Section className="bg-bgClr ">
      <div className="flex flex-col max-width items-center justify-center gap-4 ">
        <Heading
          level={2}
          className="text-center text-primary capitalize font-medium heading4"
        >
          {title}
        </Heading>
        <Paragraph className="text-center heading3 font-montaga text-white">
          {description}
        </Paragraph>
      </div>
      <div className="w-full relative md:mt-10 mt-6">
        <Container>
          <div
            className="w-full block mt-4 relative shadow-md" 
            id="custom-pagination-fraction"
          >
            <SliderSwip
              data={items}
              modules={[Pagination, Navigation]}
              autoplay={{ delay: 2500 }}
              pagination={{
                el: ".custom-swiper-pagination",
                type: "fraction",
                clickable: true,
                renderFraction: (currentClass: string, totalClass: string) => {
                  return `<span class="${currentClass} font-montaga text-primary"></span> / <span class="${totalClass} text-primary font-montaga"></span>`;
                },
              }}
              navigation={{
                nextEl: ".next",
                prevEl: ".prev",
              }}
              slidesPerView={1}
              spaceBetween={16}
              // breakpoints={{
              //   640: {
              //     slidesPerView: 2,
              //     spaceBetween: 20,
              //   },
              //   768: {
              //     slidesPerView: 2,
              //     spaceBetween: 25,
              //   },
              // }}
              classNameSwiper="w-full shadow-md"
              classNameSwiperSlide="w-full"
            >
              {(item) => (
                <DoAtHotelCard {...item} index={items.indexOf(item)} />
              )}
            </SliderSwip>
            <div className=" flex items-center gap-4  left-0 bottom-0 absolute px-4 z-10">
              <button
                className={`text-primary hover:scale-105 active:scale-95 hover:text-tertiary prev p-2 hover:bg-white rounded-full`}
              >
                <PrevIcon />
              </button>

              <button
                className={`text-primary hover:scale-105 active:scale-95 hover:text-tertiary next p-2 hover:bg-white rounded-full`}
              >
                <NextIcon />
              </button>
              <div className="text-primary font-montaga text-[1.2rem] custom-swiper-pagination">
                <span className="swiper-pagination-current text-primary"></span> /{" "}
                <span className="swiper-pagination-total text-primary"></span>
              </div>
            </div>
          </div>
        </Container>
        <div className="absolute bottom-0 right-0 left-0 top-1/2 w-full md:h-[23rem] font-montaga h-[19.5rem] bg-white"></div>
      </div>
    </Section>
  );
};

export default DoAtHotel;
