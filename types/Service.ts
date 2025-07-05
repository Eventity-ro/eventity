interface Service {
    id: number;
    name: string;
    restaurantId: number;
    price: number;
    discount: number;
    rating: number;
    minCapacity: number;
    maxCapacity: number;
    // Restaurant fields
    city: string;
    address: string;

}

export default Service;