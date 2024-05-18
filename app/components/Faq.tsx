"use client";
import * as Accordion from "@radix-ui/react-accordion";
import PlusIcon from "../../public/assets/Plus.svg";
import Image from "next/image";
import Minus from "../../public/assets/Minus.svg";
import React, { useState } from "react";
import { RenderText } from "../utils/render-text";
const items = [
  {
    question: "What solutions does ARGENIA SAS offer?",
    answer: `At ARGENIA SAS we offer three main solutions:

      1- Custom Software Development: We create personalized software for companies in various sectors, using AI to streamline development and reduce costs.

      2- Mobile Application Development: We design and launch innovative mobile applications for iOS and Android, focusing on advanced features and sustainable monetization.

      3- Automatic Framework Generation Platform with AI: Our platform revolutionizes software development by automating the creation of base frameworks, improving efficiency, and reducing repetitive tasks.`,
  },
  {
    question:
      "How does Artificial Intelligence improve software development at ARGENIA SAS?",
    answer:
      "We use large language models (LLMs) to automate many development processes, allowing us to significantly reduce time and costs. This includes automatic generation of base frameworks and minimization of repetitive tasks, increasing agility and efficiency in developing technological solutions.",
  },
  {
    question: "Who are our services aimed at?",
    answer: `Our services are aimed at:

      1- Companies in various sectors that need custom software.

      2- Mobile device users looking for innovative and disruptive applications.

      3- Other software development companies that can benefit from our automatic generation platform to improve their productivity and reduce costs.`,
  },
  {
    question:
      "What technologies does ARGENIA SAS use for developing its solutions?",
    answer: `We offer personalized software solutions for various industries.
      Create and market innovative mobile applications with sustainable monetization models.
      Provide a proprietary platform that automates the generation of frameworks for software development, improving efficiency and reducing operating costs.`,
  },
  {
    question: `How does ARGENIA SAS ensure data protection and intellectual property?`,
    answer:
      "We comply with Law 25.326 on Personal Data Protection and take IT security measures according to the best international practices. Additionally, we register trademarks and developments with the relevant authorities and use confidentiality and rights assignment agreements with employees and contractors to protect intellectual property.",
  },
];
const Faq = () => {
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
    <div className="px-5 lg:px-0 lg:container pt-14 sm:pt-32" id="faq">
      <div className="flex flex-col lg:flex-row lg:gap-x-6">
        <div className="lg:w-1/3">
          <p className="text-[#EB2891] font-medium text-[14px] lg:text[16px] my-4">
            Frequently Asked Questions (F.A.Q.)
          </p>
          <h1 className="text-medium text-info text-[24px] lg:text-[42px] mb-4">
            Do you have more questions? We are here to help!
          </h1>
          <p className="text-[16px] lg:text-[18px] text-[#36485C] mb-6">
            <RenderText
              text={`If you didn't find the answer you were looking for or want to learn more about how our solutions can benefit your company, don't hesitate to contact us. At ARGENIA SAS, we are committed to providing you with the best service and support. Our team of experts is ready to assist you every step of the way.

Contact us today and discover how we can boost your business with cutting-edge artificial intelligence and software development.`}
            ></RenderText>
          </p>
        </div>
        <div className="lg:w-2/3">
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
        </div>
      </div>
    </div>
  );
};

export default Faq;
