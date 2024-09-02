import React from "react";
import { useTranslations } from "next-intl";
import TitleCard from "@/src/components/Layout/TitleCard";
import { RenderText } from "../../app/utils/render-text";
import Card from '@components/Layout/Card';
import Link from "next/link";

export default function Apollo() {
  const t = useTranslations("apollo");

  const title = t("title");
  const description = t("description");
  const subtitle = t("subtitle");

  return (
    <div id="apollo" className="bg-argPrimary2 pb-4 scroll-mt-12">
      <div className="px-5 lg:px-0 lg:container pt-4 lg:pt-8">
        <TitleCard
          title={title}
          textColor="argPrimary1"
          bgColor="argSecondary1"
        />
        <div className="flex flex-col lg:flex-row lg:gap-x-6">
          <div className="lg:w-2/3 py-4">
            <Card
              bgColor="black"
            >
              <video
                className="w-full h-auto"
                controls
              >
                <source src="/videos/apollo1v2.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </Card>
            <Link href="/apollo">
              <TitleCard
                title="Ver Más"
                textColor="argPrimary1"
                bgColor="argSecondary1"
              />
            </Link>
          </div>
          <div className="lg:w-1/3 py-4">
            <Card
              bgColor="argPrimary1"
              textColor="argSecondary1"
            >
              <p className="text-[18px] lg:text-[20px] font-extrabold mb-6">
                <RenderText>
                  {subtitle}
                </RenderText>
              </p>
              <p className="text-[16px] lg:text-[18px] mb-6">
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
