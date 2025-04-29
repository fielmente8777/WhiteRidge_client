"use client";
import { useState } from "react";
import { SectionWithContainer } from "@/components";
import { Heading, Paragraph } from "@/components/TextAndInputComponents";
import { Arrow1 } from "@/icons/icons";
import Image from "next/image";
import Link from "next/link";
import FullScreenImageViewPopUP from "@/components/FullScreenImageViewPopUP";

interface GalleryProps {
  title: string;
  description: string;
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ title, description, images }) => {
  // const [isHovered, setIsHovered] = useState<null | number>(null);
  const [showModal, setShowModal] = useState(false);
  // const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const gridPattern = [
    "lg:col-span-4 col-span-4 row-span-2 lg:row-span-6",
    "lg:col-span-2 col-span-4 row-span-4 lg:row-span-3",
    "lg:col-span-2 col-span-4 row-span-2 lg:row-span-3",
    "lg:col-span-4 col-span-8 row-span-3 lg:row-span-3",
    // "lg:col-span-2 col-span-4 row-span-2 lg:row-span-4",
    // "lg:col-span-2 col-span-4 lg:row-span-4 row-span-3",
    // "lg:col-span-2 col-span-3 row-span-3",
  ];

  

  const [selectedImage, setSelectedImage] = useState("");
  const [imageArray, setImageArray] = useState<string[]>([]);

  const handleModal = (image: string, imageArray: string[]) => {
    setShowModal(true);
    setSelectedImage(image);
    setImageArray([...imageArray, image]);
  };

  return (
    <SectionWithContainer sectionClassName="bg-[#2B2118]">
      <div className="flex flex-col items-center justify-center lg:gap-14 gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <Heading
            level={2}
            className="text-center text-primary uppercase font-medium  heading4"
          >
            {title}
          </Heading>
          <Paragraph className="text-white text-center heading3 font-montaga">
            {description}
          </Paragraph>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-8 lg:auto-rows-[6rem] group auto-rows-[3rem] lg:gap-3 gap-1 w-full h-full rounded-sm">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${
                gridPattern[index % gridPattern.length]
              } relative w-full aspect-auto rounded-sm cursor-pointer `}
              // transition-all duration-500 ease-in-out  ${isHovered === index ? "lg:hover:scale-100 filter brightness-100 blur-0" : "lg:group-hover:scale-[0.99] lg:group-hover:filter lg:group-hover:brightness-90 lg:group-hover:blur-sm"}`}
              onClick={() =>
                handleModal(
                  images[index],
                  images.map((image) => image)
                )
              }
              // onMouseEnter={() => setIsHovered(index)}
              // onMouseLeave={() => setIsHovered(null)}
            >
              <Image
                src={image}
                alt={title}
                className="w-full object-cover"
                fill
              />
              {/* <div className="absolute inset-0 z-10 w-full h-full bg-gradient-to-b from-white/20 to-black/40 to-95%">
                <Heading
                  level={3}
                  className="text-white text-center text-[0.75rem] capitalize lg:text-base w-full absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  {image.alt}
                </Heading>
              </div> */}
            </div>
          ))}
        </div>
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-white lg:text-center lg:description1 text-[0.85rem]"
        >
          <span className="border-white border-b-2 capitalize">
            view all photos
          </span>
          <span className="text-white">
            <Arrow1 />
          </span>
        </Link>
      </div>
      {showModal && (
        <FullScreenImageViewPopUP
          setShowModal={setShowModal}
          src={selectedImage}
          showModal={showModal}
          imageArray={imageArray}
        />
      )}
    </SectionWithContainer>
  );
};

export default Gallery;
