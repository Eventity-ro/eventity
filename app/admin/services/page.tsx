import React from "react";
import ServicesPage from "@/app/admin/services/ServicesPage";
import {getRestaurants} from "@/lib/api";

const Services = async () => {

    const restaurants = await getRestaurants();

    return (
        <ServicesPage restaurants={restaurants} />
    );
}

export default Services;