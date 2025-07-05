import { FaCheck, FaTimes } from "react-icons/fa";

interface AdvantageProps {
    title: string;
    description: string;
    eventity: boolean;
    competitors: boolean;
}

export default function Advantage({ title, description, eventity, competitors }: AdvantageProps) {
    return (
        <div className="border-t p-6 bg-white flex flex-col md:flex-row gap-3">
            <div className="flex flex-col sm:w-1/2">
                <p className="font-bold text-lg">{title}</p>
                <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>
            <div className="flex md:w-1/4 flex-row justify-center gap-2">
                    <span className="font-semibold text-gray-700 lg:hidden">Eventity:</span>
                    {eventity ? <FaCheck className="text-green-600"/> : <FaTimes className="text-red-600"/>}
            </div>
            <div className="flex md:w-1/4 flex-row justify-center gap-2">
                    <span className="font-semibold text-gray-700 lg:hidden">Alți competitori:</span>
                    {competitors ? <FaCheck className="text-green-600"/> : <FaTimes className="text-red-600"/>}
            </div>
        </div>
    );
}
