import React from "react";
import ServicesPage from "@/app/admin/services/ServicesPage";
import {getPartners} from "@/lib/api";

const Services = async () => {

    return (
        <ServicesPage restaurantId={6} />
    );
}

export default Services;