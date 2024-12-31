import HomeCard from "@/components/HomeCard";
import exampleImage1 from "@/images/Example1.jpg"
import exampleImage2 from "@/images/Example2.jpg"
import Link from "next/link";
import React from "react";

export default function Services() {
    const cards = [
        {
            title: "Example1",
            location: "Bucuresti",
            startingPrice: 60,
            imageList: [exampleImage1, exampleImage2, exampleImage1, exampleImage2, exampleImage1, exampleImage1, exampleImage1, exampleImage1, exampleImage1, exampleImage1, exampleImage1, exampleImage1],
            rating: 5,
            capacity: "100-200"
        },
        {
            title: "Example2",
            location: "Bucuresti",
            startingPrice: 50,
            imageList: [exampleImage1, exampleImage2],
            rating: 4.5
        },
        {
            title: "Example3",
            location: "Bucuresti",
            startingPrice: 30,
            imageList: [exampleImage1, exampleImage2],
            rating: 3.5
        }
    ]

    return (
        <div className="flex-1 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Servicii</h2>

            <button className="bg-[#5C8171] text-white px-6 py-2 rounded mb-5">
                Adaugă eveniment nou
            </button>

            <h2 className="text-2xl font-bold mb-4">Serviciile Mele</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m y-5">
                {
                    cards.map((card, index) => (
                        <div>
                            <HomeCard key={index} title={card.title} location={card.location}
                                      startingPrice={card.startingPrice} imageList={card.imageList} rating={card.rating}
                                      capacity={card?.capacity}/>
                            <Link className="bg-[#5C8171] text-white px-6 py-2 rounded mb-5" href={"/admin/services/new"}>
                                Editeaza
                            </Link>
                        </div>
                    ))
                }
            </div>

            <h2 className="text-2xl font-bold mb-4">Partenerii Mei</h2>

            <button className="bg-[#5C8171] text-white px-6 py-2 rounded mb-5">
                Adaugă parteneri
            </button>

        </div>
    );
}
