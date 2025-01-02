import React from 'react';
import {Button, Input, Dropdown, DropdownMenu, DropdownItem, DropdownTrigger} from '@nextui-org/react';
import FormMultiselectInput from "@/components/FormMultiselectInput";

const PictureGrid = () => {
    return <div>Picture Grid Component</div>; // Placeholder for your Picture Grid component
};

const AdditionalDetails = () => {
    return <FormMultiselectInput/>; // Placeholder for your existing component
};

const RestaurantVenusPage: React.FC = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold">Restaurant Venus</h1>

            {/* First Section */}
            <section className="space-y-4">
                <h2 className="text-lg font-semibold">Informații client</h2>
                <div className="grid grid-cols-1 gap-4">
                    <Input label="Denumire client" placeholder="Restaurant Venus" />
                    <div className="grid grid-cols-2 gap-4">
                        <Input label="Telefon" placeholder="0755 123 456" />
                        <Input label="Email" placeholder="venus@contact.com" />
                        <Input label="Facebook" placeholder="@restaurantvenus" />
                        <Input label="Instagram" placeholder="@restaurantvenus" />
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section className="space-y-4">
                <h2 className="text-lg font-semibold">Generale</h2>
                <div className="grid grid-cols-2 gap-4">
                    <Input label="Capacitate sala" placeholder="280" />
                    {/*<Dropdown>*/}
                    {/*    <DropdownTrigger>*/}
                    {/*        <Button>Capacitate sală</Button>*/}
                    {/*    </DropdownTrigger>*/}
                    {/*    <DropdownMenu aria-label="Capacitate">*/}
                    {/*        <DropdownItem key="100">100</DropdownItem>*/}
                    {/*        <DropdownItem key="200">200</DropdownItem>*/}
                    {/*    </DropdownMenu>*/}
                    {/*</Dropdown>*/}
                    <Input label="Preț începând de la (meniul/lei)" placeholder="280" />
                </div>
                <PictureGrid />
            </section>

            {/* Third Section */}
            <section>
                <AdditionalDetails />
            </section>

            {/* Fourth Section */}
            <section className="space-y-4">
                <div className="flex space-x-4">
                    <Button>Salvează</Button>
                    <Button>Ieșire</Button>
                </div>
                <Button>Ștergere permanentă</Button>
            </section>
        </div>
    );
};

export default RestaurantVenusPage;
