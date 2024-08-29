import { RenderText } from "@/src/app/utils/render-text";
import Card from "@/src/components/Layout/Card";
import { useTranslations } from "next-intl";

export default function ApolloPage() {
    const t = useTranslations("dashboard");
    const title = t("title");
    const subtitle = t("subtitle");
    const description = t("description");

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm">
                <h1 className="text-center text-2xl font-bold mb-6">{title}</h1>
                <p className="text-center text-gray-600 mb-6">{subtitle}</p>
                <Card>
                    <RenderText>
                        {description}
                    </RenderText>
                </Card>
            </div>
        </div>
    );
}