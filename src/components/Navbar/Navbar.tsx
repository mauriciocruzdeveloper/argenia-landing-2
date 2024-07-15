"use client"

import Image from "next/image";
import LogoAzul from "@/public/assets/LOGazul.png";
import LogoMagenta from "@/public/assets/LOGmagenta.png";
import UserImage from "@/public/assets/User.svg";
import Menu from "@/public/assets/Menu.svg";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/src/intl/navigation";
import { Session } from "next-auth";
import { AppIcon } from "./AppIcon";

export interface NavbarProps {
  session: Session | null;
  signOut: () => void;
}

export default function Navbar({ session, signOut }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const t = useTranslations("navbar");

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
    <nav
      onScroll={() => setOpen(false)}
      className="h-16 fixed bg-white z-20 px-4 py-4 w-full flex justify-between items-center"
    >
      <Link href={'#'}>
        <div
          onClick={() => setOpen(false)}

        >
          <AppIcon
            image={LogoAzul}
            imageHover={LogoMagenta}
          />
        </div>
      </Link>
      <ul className="hidden lg:flex gap-x-14">
        {navLinks.map((item, index) => (
          <li key={index}>
            <Link
              className="text-argCyan hover:text-argMagenta font-medium text-base"
              href={item.link}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* mobile menu */}
      {open && (
        <div className="fixed lg:hidden fixed top-20 left-4 right-4 z-10 py-8 bg-white drop-shadow-md">
          <div className="flex flex-col items-center space-y-6 font-bold">
            {navLinks.map((item, index) => (
              <Link
                onClick={() => setOpen(!open)}
                key={index}
                className="font-medium text-base text-argCyan hover:text-argMagenta"
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
        <div className="flex justify-between items-center gap-x-3">
          <Image
            style={{ stroke: "green" }}
            className="rounded-full"
            width={30}
            height={30}
            src={user?.image ?? UserImage}
            alt="user"
          />
          {
            session ? (
              <button
                onClick={() => signOut()}
                className="font-medium text-[16px]"
              >
                {t("logout")}
              </button>
            ) : (
              <Link className="font-medium text-[16px] text-argCyan hover:text-argMagenta" href="/login">
                {login}
              </Link>
            )
          }
        </div>
        <Image
          onClick={() => setOpen(!open)}
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
