import React from "react";
import {getRestaurants} from "@/lib/api";
import ServicesPage from "@/app/(protected)/admin/services/ServicesPage";

const Service = async () => {

    const restaurants = await getRestaurants();

    return (
        <ServicesPage restaurants={restaurants} />
    );
}

export default Service;
