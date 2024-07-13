import Link from "next/link";
import Insta from "../../public/assets/insta.png";
import X from "../../public/assets/x.png";
import Linkedin from "../../public/assets/link.png";
import Whatsapp from "../../public/assets/whats.png";
import Image from "next/image";

export default function Footer () {
  return (
    <div className="px-4 lg:px-0 lg:container">
      <div className="flex flex-col lg:flex-row justify-between items-center py-6 gap-y-6 lg:gap-y-6">
        <p className="text-[#5F7896] text-[16px] font-medium text-center lg:text-left">© Copyright 2024. ARGENIA. All rights reserved.</p>
        <p className="text-[#5F7896] text-[16px] font-medium text-center lg:text-left">argenia.ar - argenia.sas@gmail.com</p>
        <div className="flex items-center gap-x-14">
          <Link href="#">
            <Image width={30} src={X} alt="X" />
          </Link>
          <Link href="#">
            <Image width={30} src={Insta} alt="Instagram" />
          </Link>
          <Link href="https://www.linkedin.com/in/ArGenIA">
            <Image width={30} src={Linkedin} alt="Linkedin" />
          </Link>
          <Link href="#">
            <Image width={30} src={Whatsapp} alt="Whatsapp" />
          </Link>
        </div>
      </div>
    </div>
  );
};
