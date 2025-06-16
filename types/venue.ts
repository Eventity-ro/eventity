interface Venue {
    restaurant_id: number;
    venueId?: number;
    name?: string;
    address?: string;
    city?: string;
    price: number;
    discount: number;
    rating: number;
    minCapacity: number;
    maxCapacity: number;
}

export default Venue;