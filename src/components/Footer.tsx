import Insta from "../../public/assets/insta.png";
import X from "../../public/assets/x.png";
import Linkedin from "../../public/assets/link.png";
import Whatsapp from "../../public/assets/whats.png";
import Mail from "../../public/assets/email.png";
import Image from "next/image";

export default function Footer () {
  return (
    <div className="px-4 lg:px-0 lg:container">
      <div className="flex flex-col lg:flex-row justify-between items-center py-6 gap-y-6 lg:gap-y-6">
        <p className="text-[#5F7896] text-[16px] font-medium text-center lg:text-left">© Copyright 2024. ARGENIA. All rights reserved.</p>
        <p className="text-[#5F7896] text-[16px] font-medium text-center lg:text-left">argenia.ar - argenia.sas@gmail.com</p>
        <div className="flex items-center gap-x-14">
          <a href="https://x.com/ArgeniaSas" target="_blank">
            <Image width={30} src={X} alt="X" />
          </a>
          <a href="https://www.instagram.com/argenia.sas/" target="_blank">
            <Image width={30} src={Insta} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/ArGenIA" target="_blank">
            <Image width={30} src={Linkedin} alt="Linkedin" />
          </a>
          <a href="https://wa.me/qr/XKCFZCPRV5CJI1" target="_blank">
            <Image width={30} src={Whatsapp} alt="Whatsapp" />
          </a>
          <a href="mailto:argenia.sas@gmail.com" target="_blank">
            <Image width={30} src={Mail} alt="e-mail" />
          </a>
        </div>
      </div>
    </div>
  );
};
