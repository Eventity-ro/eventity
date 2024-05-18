import Image from 'next/image'

interface HomeCardProps {
    title: string;
    description: string;
    image: any;
}

export default function HomeCard({ title, description, image }: HomeCardProps) {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg">
            <Image src={image} alt="Example Image"/>
            <div className="flex flex-col justify-center p-2 bg-gray-100 flex-grow">
                <h3 className="text-lg font-bold mb-1">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}