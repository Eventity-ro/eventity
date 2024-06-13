import { IoSearchCircle } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";

export default function SearchBarMobile() {
    return (
        <div className="flex border rounded-full p-2 items-center justify-center gap-2">
            <div className="w-12 h-12 p-2 bg-white rounded-full border border-neutral-300 flex justify-center items-center">
                <img src="logo.png" alt="Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="flex-grow h-12 flex items-center bg-white rounded-full border border-neutral-300 px-2">
                <IoSearchCircle type="submit" color="green" size="35" className="mr-2" />
                <input
                    type="text"
                    className="flex-grow h-full px-3 py-1 rounded-full outline-none"
                    placeholder="Search"
                />
            </div>
            <div className="w-12 h-12 p-2 bg-white rounded-full border border-neutral-300 flex justify-center items-center">
                <IoFilter color="black" size="35" />
            </div>
        </div>
    );
}
