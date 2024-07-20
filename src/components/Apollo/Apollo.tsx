import React from "react";
import { useTranslations } from "next-intl";
import TitleCard from "@/src/components/Card";

export default function Apollo() {
  const t = useTranslations("apollo");

  const title = t("title");
  const description = t("description");

  return (
    <div className="px-5 lg:px-0 lg:container pt-14 lg:pt-32" id="apollo">
      <TitleCard title={title} />
      <div className="flex flex-col lg:flex-row lg:gap-x-6">
        <div className="lg:w-2/3">
          <video
            className="w-full h-auto"
            controls
          >
            <source src="/videos/apollo-demo.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>
        <div className="lg:w-1/3">
          <p className="text-[16px] lg:text-[18px] text-argDarkGrey mb-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
