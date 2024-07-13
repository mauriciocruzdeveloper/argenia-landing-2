import Image from "next/image";
import WhatsAppIcon from "../../public/assets/whats1.png"; // Asegúrate de tener el ícono de WhatsApp en la carpeta adecuada
import EmailIcon from "../../public/assets/email1.png"; // Asegúrate de tener el ícono de Email en la carpeta adecuada
import React from "react";
import { RenderText } from "../app/utils/render-text";
import { useTranslations } from "next-intl";

export default function Contact () {
  const t = useTranslations("contact");

  const title = t("title");
  const subtitle = t("subtitle");
  const whatsapp = t("whatsapp");
  const email = t("email");

  return (
    <div className="px-5 lg:px-0 lg:container pt-14 sm:pt-32" id="contact">
      <div className="flex flex-col lg:flex-row lg:gap-x-6">
        <div className="lg:w-1/3">
          <h1 className="text-medium text-argMagenta text-[24px] lg:text-[42px] mb-4">
            {title}
          </h1>
          <p className="text-[16px] lg:text-[18px] text-argDarkGrey mb-6">
            <RenderText
              text={subtitle}
            ></RenderText>
          </p>
        </div>
        <div className="lg:w-2/3 flex flex-col gap-y-4">
          <div className="bg-argCyan p-4 flex items-center">
            <Image className="h-10 w-10" src={WhatsAppIcon} alt="WhatsApp icon" />
            <p className="ml-4 text-[16px] lg:text-[18px] text-white">
              <RenderText
                text={whatsapp}
              />
              <a
                href="https://wa.me/+5493416559834" // Reemplaza con el número de WhatsApp real
                className="text-argBeige"
                target="_blank"
                rel="noopener noreferrer"
              >
                +54 9 341 6559834
              </a>
            </p>
          </div>
          <div className="bg-argCyan p-4 flex items-center">
            <Image className="h-10 w-10" src={EmailIcon} alt="Email icon" />
            <p className="ml-4 text-[16px] lg:text-[18px] text-white">
              <RenderText
                text={email}
              />
              <a
                href="mailto:argenia.sas@gmail.com" // Reemplaza con la dirección de email real
                className="text-argBeige"
                target="_blank"
                rel="noopener noreferrer"
              >
                contact@argenia.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
