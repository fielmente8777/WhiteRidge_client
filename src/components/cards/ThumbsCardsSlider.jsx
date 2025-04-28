"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import { NextIcon, PrevIcon } from "@/icons/icons";

const ThumbsCardsSlider = ({ images, index }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full relative thumbs">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#000",
        }}
        spaceBetween={10}
        navigation={{
          nextEl: ".thumbs-next" + index,
          prevEl: ".thumbs-prev" + index,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        pagination={{
          type: "fraction",
          el: ".thumbs-pagination" + index,
          renderFraction: (currentClass, totalClass) => {
            return `<span class="${currentClass} font-montaga "></span> / <span class="${totalClass} font-montaga"></span>`;
          },
        }}
        className="mySwiper2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative aspect-[4/3] w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex mt-6 items-center justify-between">
        <button
          className={`disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:active:scale-100 thumbs-prev${index} text-primary hover:scale-105 active:scale-95 w-8 aspect-square flex items-center justify-center`}
        >
          <PrevIcon />
        </button>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={images?.length}
          // slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className=" !ml-0 w-full"
        >
          {images?.map((image, index) => (
            <SwiperSlide
              key={index}
              className="relative aspect-[4/3] !w-[3.5rem] !h-[4rem] border"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={`thumbs-pagination${index} font-montaga w-max text-[#262626]`}
        >
          <span className="swiper-pagination-current"></span> /{" "}
          <span className="swiper-pagination-total"></span>
        </div>
        <button
          className={`disabled:opacity-50 thumbs-next${index} text-primary hover:scale-105 w-8 aspect-square active:scale-95 flex items-center justify-center`}
        >
          <NextIcon />
        </button>
      </div>
    </div>
  );
};

export default ThumbsCardsSlider;
