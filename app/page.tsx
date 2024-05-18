'use client'

import HomeCard from "@/components/HomeCard";
import exampleImage from "../images/Example1.jpg"

export default function Home() {
    const cards = [
        {
            title: "Example1",
            description: "Description1",
            image: exampleImage,
            rating: 5
        },
        {
            title: "Example2",
            description: "Description2",
            image: exampleImage,
            rating: 4.5
        },
        {
            title: "Example3",
            description: "Description3",
            image: exampleImage,
            rating: 3.5
        },
        {
            title: "Example4",
            description: "Description4",
            image: exampleImage,
            rating: 4.9
        },
        {
            title: "Example5",
            description: "Description5",
            image: exampleImage,
            rating: 5
        }
    ]

  return (
      <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5">
              {
                  cards.map((card, index) => (
                      <HomeCard key={index} title={card.title} description={card.description} image={card.image} rating={card.rating} />
                  ))
              }
          </div>
      </div>
  );
}
