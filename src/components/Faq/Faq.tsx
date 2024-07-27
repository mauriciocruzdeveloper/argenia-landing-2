import React from "react";
import { RenderText } from "../../app/utils/render-text";
import { useTranslations } from "next-intl";
import FaqAccordionItems from "./FaqAccordionItems";
import Image from "next/image";
import TitleCard from "../Layout/TitleCard";

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
    <div className="bg-argSecondary">
      <div className="flex flex-col px-5 lg:px-0 lg:container pt-4 sm:pt-8" id="faq">
        <TitleCard
          title={faq}
          bgColor="bg-argPrimary"
          color="text-argTertiary"
        />
        <div className="flex flex-col lg:flex-row lg:gap-x-6">
          <div className="relative flex flex-col items-center lg:w-1/3 py-4">
            <div className="z-5">
              <h1 className="text-medium text-center text-argTertiary text-[16px] lg:text-[18px] font-extrabold mb-4">
                {title}
              </h1>
              {/* <p className="text-[12px] lg:text-[14px] text-white mb-6">
                <RenderText>
                  {subtitle}
                </RenderText>
              </p> */}
            </div>
            <div className="w-[300px] lg:w-full bottom-0 my-4">
              <Image
                className=""
                src="/assets/encantadora-joven-afroamericana-expresion-pensativa-centrada.png"
                width={500}
                height={200}
                alt="Faq"
              />
            </div>
          </div>
          <div className="lg:w-2/3 py-4">
            <FaqAccordionItems items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};
