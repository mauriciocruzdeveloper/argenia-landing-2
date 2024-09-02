import Image from "next/image";
import ImagenChica from "@/public/assets/chica-jugando-tablet.png"; // Asegúrate de tener la imagen del hombre en la carpeta adecuada
import WhatsAppIcon from "@/public/assets/whats.png"; // Asegúrate de tener el ícono de WhatsApp en la carpeta adecuada
import EmailIcon from "@/public/assets/email.png"; // Asegúrate de tener el ícono de Email en la carpeta adecuada
import React from "react";
import { RenderText } from "@/src/app/utils/render-text";
import { useTranslations } from "next-intl";
import TitleCard from "./Layout/TitleCard";
import Card from "@components/Layout/Card";

export default function Contact() {
  const t = useTranslations("contact");

  const title = t("title");
  const subtitle = t("subtitle");
  const whatsapp = t("whatsapp");
  const email = t("email");

  return (
    <div id="contact" className="bg-argSecondary1 scroll-mt-12">
      <div className="px-5 lg:px-0 lg:container pt-4 lg:pt-8">
        <TitleCard
          title={title}
          textColor="white"
          bgColor="argPrimary1"
        />
        <div className="flex flex-col lg:flex-row lg:gap-x-6 lg:justify-between">
          <div className="h-full">
            <Card
              textColor="argPrimary2"
            >
              <p className="text-[16px] lg:text-[18px] mb-6">
                <RenderText>
                  {subtitle}
                </RenderText>
              </p>
            </Card>
            <div className="bg-argSecondary4 p-4 flex items-center my-4 rounded-2xl">
              <Image className="h-10 w-10" src={WhatsAppIcon} alt="WhatsApp icon" />
              <p className="ml-4 text-[16px] lg:text-[18px] text-argPrimary1">
                <RenderText>
                  {whatsapp}
                </RenderText>
                <a
                  href="https://wa.me/+5493416559834" // Reemplaza con el número de WhatsApp real
                  className="text-argPrimary1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +54 9 341 6559834
                </a>
              </p>
            </div>
            <div className="bg-argSecondary4 p-4 flex items-center my-4 rounded-2xl">
              <Image className="h-10 w-10" src={EmailIcon} alt="Email icon" />
              <p className="ml-4 text-[16px] lg:text-[18px] text-argPrimary1">
                <RenderText>
                  {email}
                </RenderText>
                <a
                  className="text-argPrimary1"
                  href="mailto:argenia.sas@gmail.com" // Reemplaza con la dirección de email real
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  contact@argenia.com
                </a>
              </p>
            </div>
          </div>
          <Image
            src={ImagenChica}
            width={500}
            height={200}
            alt="Hombre"
          />
        </div>
      </div>
    </div>
  );
};
