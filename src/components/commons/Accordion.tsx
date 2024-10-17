import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import TextTitle from "../ui/TextTitle";
import { IconChevronDown } from "@tabler/icons-react";

export interface IAccordionData {
  title: string;
  content: string;
  isOpen: boolean;
}

interface IAccordion {
  accordionData: IAccordionData[];
}

export default function Accordion({ accordionData }: IAccordion) {
  const [data, setData] = useState<IAccordionData[]>(accordionData);

  const buttonHandler = (index: number) => {
    setData((prevData) =>
      prevData.map((d, i) =>
        i === index ? { ...d, isOpen: !d.isOpen } : { ...d, isOpen: d.isOpen },
      ),
    );
  };

  useEffect(() => {
    if (accordionData) setData(accordionData);
  }, [accordionData]);

  return (
    <>
      {data.map((item, index) => (
        <Container key={index} className="!gap-0 !p-0">
          <button
            type="button"
            onClick={() => buttonHandler(index)}
            className="flex items-center gap-[18px] p-4"
          >
            <TextTitle className="w-full text-start text-[14px] leading-5">
              {item.title}
            </TextTitle>
            <IconChevronDown
              size={24}
              color="#667085"
              className={`shrink-0 ${item.isOpen ? "rotate-180" : ""} duration-300`}
            />
          </button>

          <div
            className={`leading-5font-normal border-t border-[#EAECF0] px-4 pb-4 pt-4 text-[14px] text-[#1f1f1f] ${item.isOpen ? "block" : "hidden"} `}
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </Container>
      ))}
    </>
  );
}
