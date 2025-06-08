'use client'

import HomeCard from "@/components/HomeCard";
import exampleImage1 from "@/images/Example1.jpg"
import exampleImage2 from "@/images/Example2.jpg"
import { BiFilter } from "react-icons/bi";
import {
    Button, useDisclosure
} from "@heroui/react";
import FilterModal from "@/components/modals/FilterModal";
import {useEffect, useState} from "react";
import Venue from "@/types/venue"

interface Filters {
    city?: string;
    min_capacity?: number;
    max_capacity?: number;
}

export default function HomePage({initialData}: {initialData: Venue[]}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const [data, setData] = useState<Venue[]>(initialData)

    const [filteredData, setFilteredData] = useState<Venue[]>([])

    const [filtersApplied, setFiltersApplied] = useState(false)

    const [filters, setFilters] = useState<Filters>({})

    const imageList = [exampleImage1, exampleImage2, exampleImage1, exampleImage2, exampleImage1, exampleImage1, exampleImage1, exampleImage1, exampleImage1, exampleImage1, exampleImage1, exampleImage1]

    const filterData = (filters: Filters, restaurants: Venue[]) => {
        return restaurants.filter(restaurant => {
            // Check city if provided
            if (filters.city && restaurant.city !== filters.city) {
                return false;
            }

            // If a minimum capacity filter is provided,
            // ensure the restaurant's capacity range can accommodate that number.
            if (filters.min_capacity) {
                // The restaurant should allow a group of size filters.min_capacity,
                // meaning: restaurant.min_capacity <= filters.min_capacity <= restaurant.max_capacity
                if (
                    filters.min_capacity < restaurant.minCapacity ||
                    filters.min_capacity > restaurant.maxCapacity
                ) {
                    return false;
                }
            }

            // If a maximum capacity filter is provided,
            // ensure the restaurant's capacity range can accommodate that number.
            if (filters.max_capacity) {
                // The restaurant should allow a group of size filters.max_capacity,
                // meaning: restaurant.min_capacity <= filters.max_capacity <= restaurant.max_capacity
                if (
                    filters.max_capacity < restaurant.minCapacity ||
                    filters.max_capacity > restaurant.maxCapacity
                ) {
                    return false;
                }
            }

            // If all provided criteria pass, include this restaurant
            return true;
        });
    }

    useEffect(() => {
        if (filters) {
            const newFilteredData = filterData(filters, data)
            setFilteredData(newFilteredData)
            setFiltersApplied(true)
        }
        else {
            setFilteredData([])
        }
    }, [filters]);

    const ButtonList = () => {
        // Here are the labels for each button
        const buttonLabels = [
            'Sali evenimente',
            'Muzică',
            'Foto',
            'Video',
            'Cocktail bar',
            'Prajituri',
            'Aranjamente florale',
            'Băuturi',
        ];

        return (
            <div className='flex justify-between flex-nowrap whitespace-nowrap py-4'>
                <div className="flex overflow-x-auto flex-nowrap whitespace-nowrap gap-x-3 mr-4">
                    <Button className="bg-[#5C8171]" color="primary" radius='full' onPress={() => setFiltersApplied(false)}>
                        Toate
                    </Button>
                    <div className="flex gap-x-3">
                        {buttonLabels.map((label) => (
                            <Button
                                className="bg-white text-black border border-[#D4D4D4]"
                                key={label}
                                color="primary"
                                radius='full'
                            >
                                {label}
                            </Button>
                        ))}
                    </div>
                </div>
                <Button className="bg-[#5C8171]" color="primary" onPress={onOpen} radius='full'>
                    Filtre
                    <BiFilter color="white" size="20" />
                </Button>
            </div>

        );
    };

    const displayData = filtersApplied ? filteredData : data;

    return (
        <div className="flex-1 px-10 flex-grow">
            <ButtonList />
            <FilterModal isOpen={isOpen} onOpenChange={onOpenChange} setFilters={setFilters}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {
                    displayData.map((card, index) => (
                        <HomeCard key={index} restaurantId={card.restaurant_id} name={card.name} location={card.city} startingPrice={card.price} imageList={imageList} rating={card.rating} minCapacity={card.minCapacity} maxCapacity={card.maxCapacity}/>
                    ))
                }
            </div>
        </div>
    );
}
