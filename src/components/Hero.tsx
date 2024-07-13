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
          className="absolute top-0"
          src="/assets/hero-1.jpg" // Replace with your actual image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <Image
          className="absolute z-10 top-32 max-w-400 p-4"
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
            <div className="flex flex-row flex-wrap gap-x-8 gap-y-8 xl:gap-[96px] justify-center items-center">
              <div className="w-[100px] lg:w-[150px] p-2">
                <Image
                  height={200}
                  width={200}
                  layout="responsive"
                  src={RenderLogo}
                  alt="Render"
                />
              </div>
              <div className="w-[100px] lg:w-[150px] p-2">
                <Image
                  height={200}
                  width={200}
                  layout="responsive"
                  src={StrapiLogo}
                  alt="Strapi"
                />
              </div>
              <div className="w-[100px] lg:w-[150px] p-2">
                <Image
                  height={200}
                  width={200}
                  layout="responsive"
                  src={NextLogo}
                  alt="NextJS"
                />
              </div>
              <div className="w-[100px] lg:w-[150px] p-2">
                <Image
                  height={200}
                  width={200}
                  layout="responsive"
                  src={ReactLogo}
                  alt="React"
                />
              </div>
              <div className="w-[100px] lg:w-[150px] p-2">
                <Image
                  height={200}
                  width={200}
                  layout="responsive"
                  src={VercelLogo}
                  alt="Vercel"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#546EAB]/70 to-[#864DC2]/70 mix-blend-multiply"></div>
      </div>
    </div>
  );
}
