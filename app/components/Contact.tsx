"use client";
import Image from "next/image";
import WhatsAppIcon from "../../public/assets/whatsapp-3.svg"; // Asegúrate de tener el ícono de WhatsApp en la carpeta adecuada
import EmailIcon from "../../public/assets/gmail-icon.svg"; // Asegúrate de tener el ícono de Email en la carpeta adecuada
import React from "react";
import { RenderText } from "../utils/render-text";

const Contact = () => {
  return (
    <div className="px-5 lg:px-0 lg:container pt-14 sm:pt-32" id="contact">
      <div className="flex flex-col lg:flex-row lg:gap-x-6">
        <div className="lg:w-1/3">
          <h1 className="text-medium text-info text-[24px] lg:text-[42px] mb-4">
            Contact Us
          </h1>
          <p className="text-[16px] lg:text-[18px] text-[#36485C] mb-6">
            <RenderText
              text={`If you have any questions or need further assistance, feel free to reach out to us via WhatsApp or email. Our team is ready to help you with any inquiries you might have about our services and solutions.

We look forward to hearing from you!`}
            ></RenderText>
          </p>
        </div>
        <div className="lg:w-2/3 flex flex-col gap-y-4">
          <div className="bg-[#E3F1FF] p-4 flex items-center">
            <Image className="h-6 w-6" src={WhatsAppIcon} alt="WhatsApp icon" />
            <p className="ml-4 text-[16px] lg:text-[18px] text-[#36485C]">
              <RenderText
                text={`Contact us on WhatsApp: `}
              />
              <a
                href="https://wa.me/+5493416559834" // Reemplaza con el número de WhatsApp real
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                +54 9 341 6559834
              </a>
            </p>
          </div>
          <div className="bg-[#E3F1FF] p-4 flex items-center">
            <Image className="h-6 w-6" src={EmailIcon} alt="Email icon" />
            <p className="ml-4 text-[16px] lg:text-[18px] text-[#36485C]">
              <RenderText
                text={`Email us at: `}
              />
              <a
                href="mailto:argenia.sas@gmail.com" // Reemplaza con la dirección de email real
                className="text-blue-600"
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

export default Contact;
