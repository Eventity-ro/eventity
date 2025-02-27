'use client'

import HomeCard from "@/components/HomeCard";
import exampleImage1 from "@/images/Example1.jpg"
import exampleImage2 from "@/images/Example2.jpg"
import Toolbar from "@/components/Toolbar";
import {
    Button, useDisclosure
} from "@heroui/react";
import FilterModal from "@/components/FilterModal";
import {useEffect, useState} from "react";

export default function HomePage({initialData}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const [data, setData] = useState(initialData)

    const [filters, setFilters] = useState({})

    const imageList = [exampleImage1, exampleImage2, exampleImage1, exampleImage2, exampleImage1, exampleImage1, exampleImage1, exampleImage1, exampleImage1, exampleImage1, exampleImage1, exampleImage1]

    return (
        <div className="flex-1">
            {/*<Toolbar/>*/}
            <Button color="primary" onPress={onOpen}>
                Open Filters
            </Button>
            <FilterModal isOpen={isOpen} onOpenChange={onOpenChange} setFilters={setFilters}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5">
                {
                    data.map((card, index) => (
                        <HomeCard key={index} title={card.name} location={card.city} startingPrice={card.price} imageList={imageList} rating={card.rating} capacity={card?.capacity}/>
                    ))
                }
            </div>
        </div>
    );
}
