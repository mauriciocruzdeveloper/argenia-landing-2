import React from "react";
import { useTranslations } from "next-intl";
import TitleCard from "@/src/components/Layout/TitleCard";
import { RenderText } from "../../app/utils/render-text";
import Card from '@components/Layout/Card';

export default function Apollo() {
  const t = useTranslations("apollo");

  const title = t("title");
  const description = t("description");
  const subtitle = t("subtitle");

  return (
    <div className="bg-argPrimary pb-4">
      <div className="px-5 lg:px-0 lg:container pt-4 lg:pt-8" id="apollo">
        <TitleCard
          title={title}
          color="text-argSecondary"
          bgColor="bg-white"
        />
        <div className="flex flex-col lg:flex-row lg:gap-x-6">
          <div className="lg:w-2/3 py-4">
            <Card
              bgColor="bg-black"
            >
              <video
                className="w-full h-auto"
                controls
              >
                <source src="/videos/apollo-demo.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </Card>
          </div>
          <div className="lg:w-1/3 py-4">
            <Card
              bgColor="bg-argSecondary"
              color="text-argTertiary"
            >
              <p className="text-[18px] lg:text-[20px] font-extrabold text-argTertiary mb-6">
                <RenderText>
                  {subtitle}
                </RenderText>
              </p>
              <p className="text-[16px] lg:text-[18px] text-white mb-6">
                <RenderText>
                  {description}
                </RenderText>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
