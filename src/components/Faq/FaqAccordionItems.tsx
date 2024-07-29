"use client"

import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import { RenderText } from "../../app/utils/render-text";
import Minus from "../../../public/assets/Minus.svg";
import PlusIcon from "../../../public/assets/Plus.svg";
import { useState } from "react";
import { SystemColors } from "@/src/definitions/definitions";

export interface FaqAccordionItemsProps {
  items: Item[];
  textColor?: SystemColors,
  bgColor?: SystemColors,
}

export interface Item {
  question: string;
  answer: string;
}

export default function FaqAccordionItems({
  items,
  textColor = "argPrimary1",
  bgColor = "argSecondary1",
}: FaqAccordionItemsProps) {
  const [value, setValue] = useState("item-1");

  const handleTrigger = (item: any) => {
    const itemVal = `item-${item}`;
    if (itemVal === value) {
      setValue("");
    } else {
      setValue(itemVal);
    }
  };

  const textColorClass = `text-${textColor}`;
  const bgColorClass = `bg-${bgColor}`;

  return (
    <Accordion.Root
      collapsible
      defaultValue="item-1"
      type="single"
      className="flex flex-col gap-y-4"
    >
      {items?.map((item, index) => (
        <div key={index} className={`${bgColorClass} p-4 rounded-2xl`}>
          <Accordion.Item value={`item-${index + 1}`}>
            <Accordion.Header onClick={() => handleTrigger(index + 1)}>
              <Accordion.Trigger className="flex justify-between w-full items-center font-medium text-[16px] lg:text-[18px]">
                <p className={`text-left font-extrabold ${textColorClass}`}>{item.question}</p>
                <span className="font-medium min-w-6">
                  <Image
                    className="h-6 w-6"
                    style={{
                      color: "red", // TODO: No funciona. Ver.
                    }}
                    src={value === `item-${index + 1}` ? Minus : PlusIcon}
                    alt="plus icon"
                  />
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <p className={`mt-2 text-[16px] lg:text-[18px] ${textColorClass}`}>
                <RenderText>
                  {item.answer}
                </RenderText>
              </p>
            </Accordion.Content>
          </Accordion.Item>
        </div>
      ))}
    </Accordion.Root>
  );
}
