"use client"

import Image from "next/image";
import Logo from "../../public/assets/LOGO1.svg";
import UserImage from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/src/intl/navigation";
import { Session } from "next-auth";

export interface NavbarProps {
  session: Session | null;
  signOut: () => void;
}

export default function Navbar ({ session, signOut }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const t = useTranslations("navbar");

  console.log('!!!Navbar session', session);

  const user = session?.user;


  const features = t("features");
  const faq = t("faq");
  const pricing = t("pricing");
  const contact = t("contact");
  const login = t("login");
  const register = t("register");

  const navLinks = [
    { name: features, link: "#features" },
    { name: faq, link: "#faq" },
    { name: pricing, link: "#pricing" },
    { name: contact, link: "#contact" },
  ];

  return (
    <nav className="px-5 py-4 lg:px-0 lg:container flex justify-between items-center">
      <div className="flex items-center gap-20">
        <Image width={70} src={Logo} alt="Logo" />
        <ul className="hidden lg:flex gap-x-14">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                className="font-medium text-base text-primary"
                href={item.link}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* mobile menu */}
      {open && (
        <div className="lg:hidden fixed top-20 left-4 right-4 z-10 py-8 bg-white drop-shadow-md">
          <div className="flex flex-col items-center space-y-6 font-bold">
            {navLinks.map((item, index) => (
              <Link
                onClick={()=> setOpen(!open)}
                key={index}
                className="font-medium text-base text-primary"
                href={item.link}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      {/* mobile menu */}
      <div className="flex justify-between items-center gap-x-5 lg:gap-x-14">
        <Link
          className="hidden lg:block font-medium text-[16px]"
          href="/register"
        >
          {register}
        </Link>


        <div className="hidden lg:flex justify-between items-center gap-x-3">
          <img width={30} src={user?.image ?? UserImage} alt="user" />
          {
            session ? (
              <button
                onClick={() => signOut()}
                className="font-medium text-[16px]"
              >
                {t("logout")}
              </button>
            ) : (
              <Link className="font-medium text-[16px]" href="/login">
                {login}
              </Link>
            )
          }
        </div>
        
        <Image
          className="lg:hidden"
          src={UserImage}
          width="32"
          height="32"
          alt="user"
        />
        <Image
          onClick={()=> setOpen(!open)}
          className="lg:hidden"
          src={Menu}
          width="32"
          height="32"
          alt="menu"
        />
      </div>
    </nav>
  );
};
