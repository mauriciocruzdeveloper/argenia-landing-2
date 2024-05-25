"use client"

import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import { RenderText } from "../../utils/render-text";
import Minus from "../../../../public/assets/Minus.svg";
import PlusIcon from "../../../../public/assets/Plus.svg";
import { useState } from "react";

export interface FaqAccordionItemsProps {
  items: Item[];
}

export interface Item {
  question: string;
  answer: string;
}

export default function FaqAccordionItems({ items }: FaqAccordionItemsProps) {
  const [value, setValue] = useState("item-1");

  const handleTrigger = (item: any) => {
    const itemVal = `item-${item}`;
    if (itemVal === value) {
      setValue("");
    } else {
      setValue(itemVal);
    }
  };
  return (
    <Accordion.Root
      collapsible
      defaultValue="item-1"
      type="single"
      className="flex flex-col gap-y-4"
    >
      {items?.map((item, index) => (
        <div key={index} className="bg-[#E3F1FF] p-4">
          <Accordion.Item value={`item-${index + 1}`}>
            <Accordion.Header onClick={() => handleTrigger(index + 1)}>
              <Accordion.Trigger className="flex justify-between w-full items-center font-medium text-[16px] lg:text-[18px]">
                <p className="text-left">{item.question}</p>
                <span className="font-medium">
                  <Image
                    className="h-6 w-6"
                    src={value === `item-${index + 1}` ? Minus : PlusIcon}
                    alt="plus icon"
                  />
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <p className="mt-2 text-[16px] lg:text-[18px] text-[#36485C]">
                <RenderText text={item.answer} />
              </p>
            </Accordion.Content>
          </Accordion.Item>
        </div>
      ))}
    </Accordion.Root>
  );
}
