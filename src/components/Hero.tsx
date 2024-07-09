import Image from "next/image";
import BlurArrow from "../../public/assets/blue-button.svg";
import StrapiLogo from "../../public/assets/strapi.png";
import NextLogo from "../../public/assets/next.png";
import RenderLogo from "../../public/assets/render.png";
import VercelLogo from "../../public/assets/vercel.png";
import ReactLogo from "../../public/assets/react.png";
import Link from "next/link";
import { colors } from "@/tailwind.config";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  const title = t("title");
  const subtitle = t("subtitle");
  const buttonGetStarted = t("buttonGetStarted");
  const linkPricing = t("linkPricing");
  const companies = t("companies");

  return (
    <div>
      <div style={{ position: "relative" }}>
        <Image
          className="w-full object-cover"
          height={500}
          width={500}
          layout="responsive"
          src="/assets/hero-image.jpg"
          alt="Hero Image"
        />
        <div
          style={{
            position: "absolute",
            margin: "auto",
            top: 0,
            left: 0,
            zIndex: 1, // Asegura que el contenido esté encima de la imagen
          }}
        >
          <div className="flex flex-col justify-between px-5 pt-4 pb-8 lg:container m-auto align-middle">
            <h1 className="text-info font-medium text-[32px] text-center lg:text-6xl lg:pt-11 lg:pb-6">
              {title}
            </h1>
            <p className="text-primary text-center text-[16px] lg:text-[18px] mt-6">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
      <div className="px-5 pb-2 lg:container flex justify-center items-center gap-x-6 lg:gap-x-10">
        <button
          className={`bg-[#864DC2] px-8 py-4 text-[18px] font-medium text-white rounded`}
        >
          <Link href="#contact">{buttonGetStarted}</Link>
        </button>
        {/* <Link
          className="flex items-center gap-x-3 font-medium text-[#4328EB] text-[16px] "
          href="#"
        >
          {linkPricing} <Image src={BlurArrow} alt="BluArrow" />
        </Link> */}
      </div>
      <div
        className={`bg-gradient-to-b from-white to-[#546EAB] h-full relative flex justify-center min-h-[450px] lg:min-h-[150px] w-full object-cover`}
      >
        {/* <Image src={Gradient} className="min-h-[500px] sm:min-h-[600px] md:min-h-[700px] w-full object-cover lg:min-h-[800px]" alt="Gradient" /> */}
        <div className="absolute bottom-8 left-4 right-4 lg:container">
          {/* <Image className="m-auto h-[310px] sm:h-[410px] md:h-[510px] lg:h-[600px]" src={HeroImage1} alt="heroImage" /> */}
          <div className="lg:flex flex-col lg:justify-between lg:items-center lg:pt-[64px]">
            <p className="sm:text-white text-black text-[16px] lg:text-[18px] text-center pt-4 lg:pt-0 sm:pt-6 md:pt-8 my-4">
              {companies}
            </p>
            <div className="flex flex-col lg:flex-row flex-wrap gap-x-8 gap-y-8 xl:gap-[96px] justify-center items-center">
              {/* <Image height={50} src={ReactLogo} alt="React" /> */}
              <Image height={30} src={RenderLogo} alt="Render" />
              <Image height={30} src={StrapiLogo} alt="Strapi" />
              <Image height={30} src={NextLogo} alt="NextJS" />
              <Image height={30} src={ReactLogo} alt="React" />
              <Image height={30} src={VercelLogo} alt="Vercel" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
