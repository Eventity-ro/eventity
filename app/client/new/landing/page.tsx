// pages/landing.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Landing: React.FC = () => {
    return (
        <div className="bg-white text-neutral-700">
            {/* Hero Section */}

            <section
                className="relative flex items-center justify-start bg-cover bg-center h-[560px] text-white px-8 lg:px-20"
                style={{backgroundImage: 'url("../../../hero-image.png")'}}
            >
                <div className="max-w-lg">
                    <h1 className="text-5xl font-semibold mb-28">
                        Intră în cea mai mare platformă de evenimente din România!
                    </h1>
                    <Link href="/register"
                          className="inline-block bg-[#5c8171] text-white py-3 px-8 rounded-full font-bold text-lg">
                        ÎNREGISTREAZĂ-TE ACUM
                    </Link>
                </div>
            </section>


            {/* Advantages Section */}
            <section className="py-16 px-8 lg:px-32 max-w-7xl mx-auto divide-y divide-gray-300">
                <div>
                    <h2 className="text-4xl font-semibold text-center mb-12">
                        Avantaje să fii client Eventity
                    </h2>
                    <div className="grid grid-cols-3 items-center text-lg font-semibold mb-6">
                        <div></div>
                        <div className="text-center">Eventity</div>
                        <div className="text-center">Alți competitori</div>
                    </div>
                </div>
                <div className="divide-y divide-gray-300">
                    {/* Advantage 1 */}
                    <div className="grid grid-cols-3 items-start gap-4 py-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Toți prestatorii de servicii evenimente într-un
                                singur loc</h3>
                            <p>
                                Este extrem de important să se regăsească toți prestatorii de servicii pentru evenimente
                                într-un singur loc, unde poți să citești detalii despre serviciile oferite, poze,
                                reviews etc.
                            </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="text-green-600 text-3xl font-bold">✓</span>
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="text-red-600 text-3xl font-bold">✗</span>
                        </div>
                    </div>

                    {/* Advantage 2 */}
                    <div className="grid grid-cols-3 items-start gap-4 py-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Filtrare după dată și locație</h3>
                            <p>
                                Prin procesul de filtrare după dată și locație, utilizatorul poate să descopere rapid
                                dacă sunteți disponibili în data selectată fără a mai fi nevoit să vă sune.
                            </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="text-green-600 text-3xl font-bold">✓</span>
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="text-red-600 text-3xl font-bold">✗</span>
                        </div>
                    </div>

                    {/* Advantage 3 */}
                    <div className="grid grid-cols-3 items-start gap-4 py-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Agendă virtuală</h3>
                            <p>
                                O agendă virtuală pentru programarea evenimentelor este avantajoasă pentru a avea
                                accesibilitate facilă.
                            </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="text-green-600 text-3xl font-bold">✓</span>
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="text-red-600 text-3xl font-bold">✗</span>
                        </div>
                    </div>

                    {/* Advantage 4 */}
                    <div className="grid grid-cols-3 items-start gap-4 py-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Administrare calendar rezervări</h3>
                            <p>
                                Administrarea unui calendar de rezervări pentru evenimente este importantă pentru a
                                asigura o gestionare eficientă a evenimentelor.
                            </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="text-green-600 text-3xl font-bold">✓</span>
                        </div>
                        <div className="flex justify-center items-center">
                            <span className="text-red-600 text-3xl font-bold">✗</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="flex flex-col relative bg-cover bg-center py-20 text-center h-[500px] justify-center"
                     style={{backgroundImage: 'url("../../../hero-image2.png")'}}>
                <div>
                    <h2 className="text-4xl font-semibold text-white mb-6">
                        Ai toate avantajele într-un singur loc!
                    </h2>
                </div>
                <div>
                    <Link href="/register"
                          className="inline-block bg-green-600 text-white py-4 px-10 rounded-full font-bold text-lg">
                        ÎNREGISTREAZĂ-TE ACUM
                    </Link>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-8 lg:px-32">
                <h2 className="text-4xl font-semibold text-center mb-8">Întrebări frecvente</h2>
                <div className="space-y-6">
                    <details className="p-4 bg-gray-100 rounded-lg">
                        <summary className="text-2xl font-semibold">Cât costă abonamentul pentru platforma de admin?
                        </summary>
                        <p className="mt-2">Detalii despre costurile abonamentului...</p>
                    </details>
                    <details className="p-4 bg-gray-100 rounded-lg">
                        <summary className="text-2xl font-semibold">Pot să înregistrez mai multe servicii sub același
                            cont?
                        </summary>
                        <p className="mt-2">Detalii despre înregistrarea mai multor servicii...</p>
                    </details>
                    <details className="p-4 bg-gray-100 rounded-lg">
                        <summary className="text-2xl font-semibold">Poate un utilizator sa rezerve direct din
                            aplicație?
                        </summary>
                        <p className="mt-2">Detalii despre rezervările din aplicație...</p>
                    </details>
                </div>
            </section>

            {/* Contact Section */}
            <section
                className="flex flex-col lg:flex-row items-center lg:items-start gap-8 bg-white rounded-xl shadow-md mt-12 p-8">
                <img src="../../../question.png" alt="Question mark"
                     className="w-full max-w-xs lg:max-w-sm rounded-lg"/>
                <div className="flex-1 bg-yellow-50">
                    <h3 className="text-2xl font-semibold mb-4">Vrei să știi mai multe detalii?</h3>
                    <p className="text-lg">Nu ezita să ne contactezi la numărul de telefon +40 755123 456</p>
                </div>
            </section>
        </div>
    );
};

export default Landing;
