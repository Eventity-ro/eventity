import QuestionMarkImage from "@/images/question-mark.jpg";
import Image from "next/image";
import BecomeClientImage from "@/images/become-client.jpg";
import Link from "next/link";

export default function PageHeaderSection() {
    return (
        <section className="relative min-w-[375px] w-full h-[60vh] md:h-[70vh]">
            <Image src={BecomeClientImage} alt="Hero" fill className="object-cover"/>
            <div
                className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-left text-left p-10 md:p-24">
                <h1 className="text-white text-6xl md:text-7xl font-bold max-w-[700px]">
                    Intră în cea mai mare platformă de evenimente din România!
                </h1>
                <div className="flex flex-1 flex-col justify-end">
                    <Link href="/client/new"
                          className="mt-6 bg-[#5c8171] flex items-center justify-center text-white font-semibold px-6 py-2 rounded-full hover:bg-green-800 transition h-[64px] w-[295px]">
                        Înregistrează-te acum
                    </Link>
                </div>
            </div>
        </section>
    );
}
