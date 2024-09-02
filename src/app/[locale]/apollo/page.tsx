import { RenderText } from "@/src/app/utils/render-text";
import Card from "@/src/components/Layout/Card";
import TitleCard from "@/src/components/Layout/TitleCard";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ImagenGrafoApollo from "@/public/assets/grafoApolloWork.svg";
import StrapiLogo from "@/public/assets/strapi.png";
import NextLogo from "@/public/assets/next.png";
import RenderLogo from "@/public/assets/render.png";
import VercelLogo from "@/public/assets/vercel.png";
import ReactLogo from "@/public/assets/react.png";
import WorkFlowNormal from "@/public/assets/workflow-normal.svg";
import WorkFlowApollo from "@/public/assets/workflow-apollo.svg";

export default function ApolloPage() {
    const t = useTranslations("apolloPage");
    const title = t("title");
    const subtitle = t("subtitle");
    const description1Title = t("description1.title");
    const description1Part1 = t("description1.part1");
    const description1Part2 = t("description1.part2");
    const description1Part3 = t("description1.part3");

    const description2Title = t("description2.title");
    const description2Part1 = t("description2.part1");
    const description2Part2 = t("description2.part2");

    const description3Title = t("description3.title");
    const description3Part1 = t("description3.part1");
    const description3Part2 = t("description3.part2");
    const description3Part3 = t("description3.part3");
    const description3Part4 = t("description3.part4");
    const description3Part5 = t("description3.part5");
    const description3Part6 = t("description3.part6");

    const description4Title = t("description4.title");
    const description4Part1 = t("description4.part1");
    const description4Part2 = t("description4.part2");
    const description4Part3 = t("description4.part3");
    const description4Part4 = t("description4.part4");
    const description4Part5 = t("description4.part5");

    const description5Title = t("description5.title");
    const description5Part1 = t("description5.part1");
    const description5Part2 = t("description5.part2");
    const description5Part3 = t("description5.part3");
    const description5Part4 = t("description5.part4");
    const description5Part5 = t("description5.part5");

    const description6Title = t("description6.title");
    const description6Part1 = t("description6.part1");

    // blue-500 purple-500
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="px-5 lg:px-0 lg:container pt-4 lg:pt-8">
                <TitleCard
                    title={title}
                    subtitle={subtitle}
                    textColor="argSecondary1"
                    bgColor="argPrimary2"
                />
                {/* Este div debería ser una sección. Lo uso en todos lados, en los componentes, etc. */}
                <Card
                    bgColor="argPrimary1"
                >
                    <TitleCard
                        subtitle={description1Title}
                        textColor="argPrimary1"
                        bgColor="white"
                    />
                    <div className="flex flex-col lg:flex-row lg:gap-x-6">
                        {/* Las secciones deberían tener subsecciones */}
                        <div className="lg:w-1/3 py-4">
                            <Card
                                bgColor="black"
                            >
                                <video
                                    className="w-full h-auto"
                                    controls
                                >
                                    <source src="/videos/apollo1v2.mp4" type="video/mp4" />
                                    Tu navegador no soporta la reproducción de video.
                                </video>
                            </Card>
                        </div>
                        <div className="lg:w-2/3 py-4 flex">
                            <Card
                                textColor="black"
                            >
                                <RenderText>
                                    {description1Part1}
                                </RenderText>
                            </Card>
                        </div>
                    </div>
                </Card>
                <Card
                    bgColor="white"
                >
                    <TitleCard
                        subtitle={description2Title}
                        textColor="argPrimary2"
                        bgColor="argSecondary2"
                    />
                    <div className="flex flex-col lg:flex-row lg:gap-x-6">
                        <div className="lg:w-2/3 py-4">
                            <Card>
                                <RenderText>
                                    {description2Part1}
                                </RenderText>
                                <RenderText>
                                    {description2Part2}
                                </RenderText>
                            </Card>
                        </div>
                        <div className="lg:w-1/3 py-4 flex justify-center align-top">
                            <Image

                                src={ImagenGrafoApollo}
                                alt="grafoApolloWork"
                            />
                        </div>
                    </div>
                </Card>
                <Card
                    bgColor="argPrimary1"
                >
                    <TitleCard
                        subtitle={description3Title}
                        textColor="argPrimary2"
                        bgColor="argSecondary1"
                    />
                    <div className="flex flex-col lg:flex-row lg:gap-x-6">
                        <div className="lg:w-1/3 py-4 flex justify-center">
                            <Card
                                bgColor="argSecondary3"
                            >
                                {/* TODO: Hacer componente con imágenes de teconologías */}
                                <div
                                    className="flex flex-row lg:flex-col justify-around lg:h-full w-full"
                                >
                                    <div className="w-[100px] lg:w-[150px] p-2">
                                        <Image
                                            height={200}
                                            width={100}
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
                            </Card>
                        </div>
                        <div className="lg:w-2/3 py-4">
                            <Card
                                bgColor="argPrimary2"
                                textColor="white"
                            >
                                <RenderText>
                                    {description3Part1}
                                </RenderText>
                                <br />
                                <RenderText>
                                    {description3Part2}
                                </RenderText>
                                <br />
                                <RenderText>
                                    {description3Part3}
                                </RenderText>
                                <br />
                                <RenderText>
                                    {description3Part4}
                                </RenderText>
                                <br />
                                <RenderText>
                                    {description3Part5}
                                </RenderText>
                                <br />
                                <RenderText>
                                    {description3Part6}
                                </RenderText>
                            </Card>
                        </div>
                    </div>
                </Card>
                <Card
                    bgColor="argPrimary2"
                >
                    <TitleCard
                        subtitle={description4Title}
                        textColor="argPrimary1"
                        bgColor="argSecondary4"
                    />
                    <div className="flex flex-col lg:flex-row lg:gap-x-6">
                        <div className="lg:w-3/3 py-4">
                            <Card
                                bgColor="white"
                                textColor="argSecondary3"
                            >
                                <RenderText>
                                    {description4Part1}
                                </RenderText>
                                <br />
                                <RenderText>
                                    {description4Part2}
                                </RenderText>
                                <br />
                                <RenderText>
                                    {description4Part3}
                                </RenderText>
                                <br />
                                <RenderText>
                                    {description4Part4}
                                </RenderText>
                                <br />
                                <RenderText>
                                    {description4Part5}
                                </RenderText>
                            </Card>
                        </div>
                    </div>
                </Card>
                <Card>
                    <TitleCard
                        subtitle={description5Title}
                        textColor="white"
                        bgColor="argPrimary2"
                    />
                    <div className="flex flex-col lg:flex-row lg:gap-x-6">
                        <div className="lg:w-2/3 py-4">
                            <Card
                                bgColor="argPrimary1"
                                textColor="argSecondary4"
                            >
                                <RenderText>
                                    {description5Part1}
                                </RenderText>
                                <br />
                                <RenderText>
                                    {description5Part2}
                                </RenderText>
                                <br />
                                <RenderText>
                                    {description5Part3}
                                </RenderText>
                                <br />
                                <RenderText>
                                    {description5Part4}
                                </RenderText>
                                <br />
                                <RenderText>
                                    {description5Part5}
                                </RenderText>
                            </Card>
                        </div>
                        <div className="lg:w-1/3 py-4 flex">
                            <Card
                                bgColor="white"
                            >
                                <div
                                    className="flex flex-col justify-around h-full"
                                >
                                    <div>
                                        <Image
                                            height={200}
                                            width={200}
                                            layout="responsive"
                                            src={WorkFlowNormal}
                                            alt="Workflow tradicional"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            height={200}
                                            width={500}
                                            layout="responsive"
                                            src={WorkFlowApollo}
                                            alt="Workflow Apollo"
                                        />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Card>
                <Card>
                    <TitleCard
                        subtitle={description6Title}
                        textColor="argSecondary4"
                        bgColor="argSecondary3"
                    />
                    <div className="flex flex-col lg:flex-row lg:gap-x-6">
                        <div className="lg:w-3/3 py-4">
                            <Card
                                bgColor="argSecondary4"
                                textColor="argSecondary3"
                            >
                                <RenderText>
                                    {description6Part1}
                                </RenderText>
                            </Card>
                        </div>
                    </div>
                </Card>
            </div >
        </div >
    );
}