import Image from "next/image";
import BlurArrow from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";
import HeroImage1 from "../../public/assets/screenApollo.svg";
import ReactLogo from "../../public/assets/react-2.svg";
import StrapiLogo from "../../public/assets/strapi-full-logo-dark.svg";
import NextLogo from "../../public/assets/nextjs-13.svg";
import GoogleLogo from "../../public/assets/google-1-1.svg";
import VercelLogo from "../../public/assets/vercel.svg";
import Cnn from "../../public/assets/CNN.svg";
import Cluth from "../../public/assets/Clutch.svg";
import Link from "next/link";
import { colors } from "@/tailwind.config";

const Hero = () => {
  return (
    <>
      <div className="px-5 pt-4 pb-8 lg:container lg:max-w-[846px] lg:m-auto">
        <h1 className="text-info font-medium text-[32px] text-center lg:text-6xl lg:pt-11 lg:pb-6">
        Custom apps and AI-driven frameworks for complete solutions
        </h1>
        <p className="text-primary text-center text-[16px] lg:text-[18px] mt-6">
        Empowering businesses with tailor-made applications and advanced AI frameworks, delivering comprehensive systems from initial concept to final implementation
        </p>
      </div>
      <div className="px-5 pb-2 lg:container flex justify-center items-center gap-x-6 lg:gap-x-10">
        <button className={`bg-[#864DC2] px-8 py-4 text-[18px] font-medium text-white rounded`}>
          Try for free
        </button>

        <Link
          className="flex items-center gap-x-3 font-medium text-[#4328EB] text-[16px] "
          href="#"
        >
          View Pricing <Image src={BlurArrow} alt="BluArrow" />
        </Link>
      </div>
      <div className={`bg-gradient-to-b from-white to-[#546EAB] h-full relative flex justify-center min-h-[350px] sm:min-h-[250px] w-full object-cover`}>
        {/* <Image src={Gradient} className="min-h-[500px] sm:min-h-[600px] md:min-h-[700px] w-full object-cover lg:min-h-[800px]" alt="Gradient" /> */}
        <div className="absolute bottom-8 left-4 right-4 lg:container">
            {/* <Image className="m-auto h-[310px] sm:h-[410px] md:h-[510px] lg:h-[600px]" src={HeroImage1} alt="heroImage" /> */}
            <div className="lg:flex flex-col lg:justify-between lg:items-center lg:pt-[64px]">
                <p className="sm:text-white text-black text-[16px] lg:text-[18px] text-center pt-4 lg:pt-0 sm:pt-6 md:pt-8 my-4">
                  Trusted by these companies
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-8 xl:gap-[96px] justify-center items-center">
                    {/* <Image height={50} src={ReactLogo} alt="React" /> */}
                    <Image height={50} src={NextLogo} alt="NextJS" />
                    <Image height={50} src={StrapiLogo} alt="Strapi" />
                    <Image height={50} src={GoogleLogo} alt="Gmail" />
                    {/* <Image height={50} src={VercelLogo} alt="Vercel" /> */}
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
