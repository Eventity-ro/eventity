import React from 'react';
import {Button, Input, Dropdown, DropdownMenu, DropdownItem, DropdownTrigger, Textarea} from "@heroui/react";
import FormMultiselectInput from "@/components/FormMultiselectInput";
import Link from "next/link";

const RestaurantVenusPage: React.FC = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold">Restaurant Venus</h1>

            <section className="space-y-4">
                <h2 className="text-lg font-semibold">Informații client</h2>
                <div className="grid grid-cols-1 gap-4">
                    <Input label="Denumire client" placeholder="Restaurant Venus"/>
                    <div className="grid grid-cols-2 gap-4">
                        <Input label="Telefon" placeholder="0755 123 456"/>
                        <Input label="Email" placeholder="venus@contact.com"/>
                        <Input label="Facebook" placeholder="@restaurantvenus"/>
                        <Input label="Instagram" placeholder="@restaurantvenus"/>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-lg font-semibold">Generale</h2>
                <div className="grid grid-cols-2 gap-4">
                    <Input label="Capacitate sala" placeholder="280"/>
                    {/*<Dropdown>*/}
                    {/*    <DropdownTrigger>*/}
                    {/*        <Button>Capacitate sală</Button>*/}
                    {/*    </DropdownTrigger>*/}
                    {/*    <DropdownMenu aria-label="Capacitate">*/}
                    {/*        <DropdownItem key="100">100</DropdownItem>*/}
                    {/*        <DropdownItem key="200">200</DropdownItem>*/}
                    {/*    </DropdownMenu>*/}
                    {/*</Dropdown>*/}
                    <Input label="Preț începând de la (meniul/lei)" placeholder="280"/>
                </div>
                {/*<PictureGrid/>*/}
            </section>

            <section>
                <Textarea label="Alte detalii" placeholder=""/>
            </section>

            <section>
                <FormMultiselectInput/>
            </section>

            {/* Fourth Section */}
            <section className="space-y-4">
                <div className="flex space-x-4">
                    <Link className="bg-[#5C8171] text-white px-6 py-2 rounded mb-5" href={"/admin/services"}>Salveaza</Link>
                    <Link className="bg-[#5C8171] text-white px-6 py-2 rounded mb-5" href={"/admin/services"}>Ieșire</Link>
                </div>
                <Link className="bg-[#5C8171] text-white px-6 py-2 rounded mb-5" href={"/admin/services"}>Stergere permanenta</Link>
            </section>
        </div>
    );
};

export default RestaurantVenusPage;
