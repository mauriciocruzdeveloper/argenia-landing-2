import React from "react";
import { RenderText } from "../../app/utils/render-text";
import { useTranslations } from "next-intl";
import FaqAccordionItems from "./FaqAccordionItems";
import Image from "next/image";

export default function Faq() {
  const t = useTranslations("faq");

  const faq = t("faq");
  const title = t("title");
  const subtitle = t("subtitle");

  const items = [
    {
      question: t("question1"),
      answer: t("answer1"),
    },
    {
      question: t("question2"),
      answer: t("answer2"),
    },
    {
      question: t("question3"),
      answer: t("answer3"),
    },
    {
      question: t("question4"),
      answer: t("answer4"),
    },
    {
      question: t("question5"),
      answer: t("answer5"),
    },
  ]

  return (
    <div className="flex flex-row px-5 lg:px-0 lg:container pt-14 sm:pt-32" id="faq">
      <div className="flex flex-col lg:flex-row lg:gap-x-6">
        <div className="relative flex flex-col items-center lg:w-1/3">
          <div className="z-5">
            <p className="text-argMagenta font-medium text-[24px] lg:text[42px] my-4">
              {faq}
            </p>
            <h1 className="text-medium text-argCyan text-[16px] lg:text-[18px] mb-4">
              {title}
            </h1>
            <p className="text-[12px] lg:text-[14px] text-argDarkGrey mb-6">
              <RenderText
                text={subtitle}
              ></RenderText>
            </p>
          </div>
          <div className="w-[300px] lg:w-full bottom-0">
            <Image
              className=""
              src="/assets/encantadora-joven-afroamericana-expresion-pensativa-centrada.png"
              width={500}
              height={200}
              alt="Faq"
            />
          </div>
        </div>
        <div className="lg:w-2/3">
          <FaqAccordionItems items={items} />
        </div>
      </div>
    </div>
  );
};
