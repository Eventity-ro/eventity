import { IoSearchCircle } from "react-icons/io5";

export default function SearchBar() {
    return (
        <div className="flex border rounded-full p-2 items-center justify-center">
                    <input type="text" name="query" placeholder="Search..."
                           className="flex-grow rounded-full h-10 text-gray-700 border px-2"/>
                    <IoSearchCircle type="submit" color="#5C8171" size="47"/>
        </div>
    );
}
