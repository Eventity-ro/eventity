import { FiSearch } from "react-icons/fi";

export default function MobileSearchBar() {
    return (
        <div className="flex border max-w-2xl rounded-full py-2 pl-3 pr-1.5 items-center justify-center">
            <FiSearch  type="submit" color="black" size="40"/>
            <input type="text" name="query" placeholder="Search..."
                   className="w-full rounded-full h-10 text-gray-700 pl-3 focus:outline-none"/>
        </div>
    );
}
