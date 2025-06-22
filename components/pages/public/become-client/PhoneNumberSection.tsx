import QuestionMarkImage from "@/images/question-mark.jpg";
import Image from "next/image";

export default function PhoneNumberSection() {
    return (
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
    );
}
