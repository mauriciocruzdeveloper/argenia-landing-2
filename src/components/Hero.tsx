import Image from "next/image";
import StrapiLogo from "../../public/assets/strapi.png";
import NextLogo from "../../public/assets/next.png";
import RenderLogo from "../../public/assets/render.png";
import VercelLogo from "../../public/assets/vercel.png";
import ReactLogo from "../../public/assets/react.png";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  const companies = t("companies");

  return (
    <div>
      <div className="relative min-h-screen min-w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/hero-1.jpg" // Replace with your actual image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <Image
          className="absolute z-10 top-0 max-w-400 p-4"
          src="/assets/LOGOblanco.png" // Replace with your actual image path
          alt="LogoArgenia"
          width={400}
          height={300}
          quality={100}
          priority
        />
        <div className="z-10 absolute bottom-8 left-4 right-4 lg:container">
          {/* <Image className="m-auto h-[310px] sm:h-[410px] md:h-[510px] lg:h-[600px]" src={HeroImage1} alt="heroImage" /> */}
          <div className="lg:flex flex-col lg:justify-between lg:items-center lg:pt-[64px]">
            <p className="text-white text-[16px] lg:text-[18px] text-center pt-4 lg:pt-0 sm:pt-6 md:pt-8 my-4">
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#546EAB]/70 to-[#864DC2]/70 mix-blend-multiply"></div>
      </div>
    </div>
  );
}
