import { IoSearchCircle } from "react-icons/io5";

export default function SearchBar() {
    return (
        <div className="flex border rounded-full py-2 pl-3 pr-1.5 items-center justify-center
                    w-full min-w-[200px] max-w-[400px]">
                    <input type="text" name="query" placeholder="Search..."
                           className="w-full rounded-full h-10 text-gray-700 border pl-4 focus:outline-none"/>
                    <IoSearchCircle type="submit" color="#5C8171" size="50"/>
        </div>
    );
}
