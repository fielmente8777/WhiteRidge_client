"use client";
import React, { useEffect, useState } from "react";
import { Heading } from "./TextAndInputComponents";
import { DropDownIcon  } from "@/icons/icons";
import { AccordionProps } from "@/@types/types";

const Accordion: React.FC<AccordionProps> = ({ title, content, id }) => {
  const [isOpen, setIsOpen] = useState<null | number>(null);

  const toggleAccordion = (id: number) => {
    setIsOpen(isOpen === id ? null : id);
  };
  useEffect(() => {
    setIsOpen(1);
  }, []);

  return (
    <div
      className={`accordion overflow-hidden h-max group group-opacity-100 ease-linear transition-all duration-700  bg-bgClr`}
      onClick={() => toggleAccordion(id)}
      onMouseEnter={() => setIsOpen(id)}
      onMouseLeave={() => setIsOpen(null)}
    >
      <div className="accordion-header">
        <Heading
          level={3}
          className={`heading4 text-white`}
        >
          {title}
        </Heading>
        <span
          className={`${isOpen === id ? "text-primary rotate-180" : "text-white"} pointer-events-none transition-all duration-300 ease-linear flex items-center justify-center w-8 h-8 `}
        >
          <span className="h-10 w-10 flex justify-center items-center"><DropDownIcon /></span>
        </span>
      </div>
      <div
        className={`${isOpen === id ? "max-h-[500px] opacity-100" : " opacity-0 hidden max-h-[-1px]"} text-white overflow-hidden ease-linear transition-all duration-700`}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
