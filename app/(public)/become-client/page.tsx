import AdvantageSection from "@/components/pages/public/become-client/AdvantageSection";
import FAQSection from "@/components/pages/public/become-client/FAQSection";
import PhoneNumberSection from "@/components/pages/public/become-client/PhoneNumberSection";
import PageHeaderSection from "@/components/pages/public/become-client/PageHeaderSection";
import MiddlePageSection from "@/components/pages/public/become-client/MiddlePageSection";
export default function BecomeClient() {
    return (
        <div className="text-gray-800 min-w-[375px]">
            <PageHeaderSection/>

            <AdvantageSection/>

            <MiddlePageSection/>

            <FAQSection/>

            <PhoneNumberSection/>
        </div>
    );
}
