import Image from "next/image";
import BecomeClientImage from "@/images/become-client.jpg";
import FlowersImage from "@/images/flowers.jpg";
import QuestionMarkImage from "@/images/question-mark.jpg";
import Advantage from "@/components/pages/public/become-client/Advantage";
import AdvantageSection from "@/components/pages/public/become-client/AdvantageSection";



export default function BecomeClient() {
    return (
        <div className="text-gray-800 min-w-[375px]">
            {/* Hero Section */}
            <div className="relative min-w-[375px] w-full h-[80vh] md:h-[70vh]">
                <Image src={BecomeClientImage} alt="Hero" fill className="object-cover"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-left text-left p-10 md:p-24">
                    <h1 className="text-white text-6xl md:text-7xl font-bold max-w-[700px]">
                        Intră în cea mai mare platformă de evenimente din România!
                    </h1>
                    <div className="flex flex-1 flex-col justify-end">
                        <button
                            className="mt-6 bg-[#5c8171] text-white font-semibold px-6 py-2 rounded-full hover:bg-green-800 transition h-[64px] w-[295px]">
                            Înregistrează-te acum
                        </button>
                    </div>
                </div>
            </div>

            <AdvantageSection/>

            <section className="relative w-full h-[50vh] md:h-[50vh] flex flex-row">
                <Image src={FlowersImage} alt="Hero" fill className="object-cover"/>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-left text-left p-12">
                    <h1 className="text-white text-4xl md:text-5xl font-bold max-w-[700px] ml-[40%]">
                        Ai toate avantajele într-un singur loc!
                    </h1>
                    <button
                        className="mt-6 sm:ml-[40%] bg-[#5c8171] text-white font-semibold px-6 py-2 rounded-full hover:bg-green-800 transition h-[64px] sm:w-[295px] w-full">
                        Înregistrează-te acum
                    </button>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Întrebări frecvente</h2>
                {[
                    "Cât costă abonamentul pentru platforma de admin?",
                    "Pot să înregistrez mai multe servicii sub același cont?",
                    "Poate un utilizator să rezerve direct din aplicație?"
                ].map((question, idx) => (
                    <details key={idx} className="mb-4 border-b">
                        <summary className="cursor-pointer px-4 py-3 font-medium">
                            {question}
                        </summary>
                        <div className="px-4 py-2 text-sm text-gray-600">Răspunsul va fi completat aici.</div>
                    </details>
                ))}
            </section>

            {/* Contact Section */}
            <section className="py-12 mb-10 px-6 max-w-7xl mx-auto">
                {/* Mobile: imagine ca background */}
                <div
                    className="flex flex-col items-center justify-center bg-cover bg-center rounded-l text-white p-6 md:hidden h-80"
                    style={{backgroundImage: `url(${QuestionMarkImage.src})`}}
                >
                    <div className="bg-black bg-opacity-60 p-6 rounded">
                        <h3 className="text-xl font-bold mb-2">Vrei să știi mai multe detalii?</h3>
                        <p>Nu ezita să ne contactezi la numărul de telefon:</p>
                        <p>+40 755123 456</p>
                    </div>
                </div>

                {/* Desktop: imagine în stânga */}
                <div className="hidden md:flex flex-row items-center bg-white rounded-l gap-6">
                    <Image
                        src={QuestionMarkImage}
                        alt="Question"
                        height={300}
                        width={400}
                        className="object-cover"
                    />
                    <div className="text-left">
                        <h3 className="text-xl font-bold mb-2">Vrei să știi mai multe detalii?</h3>
                        <p>Nu ezita să ne contactezi la numărul de telefon:</p>
                        <p>+40 755123 456</p>
                    </div>
                </div>
            </section>

        </div>
    );
}
