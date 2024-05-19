'use client'

import HomeCard from "@/components/HomeCard";
import exampleImage from "../images/Example1.jpg"

export default function Home() {
    const cards = [
        {
            title: "Example1",
            location: "Bucuresti",
            startingPrice: 60,
            image: exampleImage,
            rating: 5,
            capacity: "100-200"
        },
        {
            title: "Example2",
            location: "Bucuresti",
            startingPrice: 50,
            image: exampleImage,
            rating: 4.5
        },
        {
            title: "Example3",
            location: "Bucuresti",
            startingPrice: 30,
            image: exampleImage,
            rating: 3.5
        },
        {
            title: "Example4",
            location: "Bucuresti",
            startingPrice: 20,
            image: exampleImage,
            rating: 4.9
        },
        {
            title: "Example5",
            location: "Bucuresti",
            startingPrice: 10,
            image: exampleImage,
            rating: 5
        }
    ]

  return (
      <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5">
              {
                  cards.map((card, index) => (
                      <HomeCard key={index} title={card.title} location={card.location} startingPrice={card.startingPrice} image={card.image} rating={card.rating} capacity={card?.capacity}/>
                  ))
              }
          </div>
      </div>
  );
}
