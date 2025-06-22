import { MdDone } from "react-icons/md";
import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className="flex justify-center min-h-screen">
            <div className="flex pt-10 max-w-5xl flex-col items-center">
                <div
                    className="w-full mx-auto gap-4 mt-8 bg-white p-6 py-12 rounded-lg shadow-2xl flex justify-center items-center flex-col">
                    <div className="bg-[#5C8171] rounded-full p-2">
                        <MdDone className="text-3xl text-white"/>
                    </div>
                    <h2 className="text-xl font-bold mb-2">Cererea de inregistrare a fost trimisa</h2>
                    <p className="text-gray-600">
                        Vă mulțumim pentru interesul dumneavoastră!
                    </p>
                    <p className="text-gray-600">
                        Veți primi un link de inregistrare prin e-mail în urmatorele
                    </p>
                    <p className="text-gray-600">
                        24 de ore.
                    </p>
                    <Link href="/" className="text-blue-600">
                        Ecranul principal
                    </Link>
                </div>
            </div>
        </div>
    );
}
