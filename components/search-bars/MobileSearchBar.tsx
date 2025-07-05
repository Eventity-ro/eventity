import { FiSearch } from "react-icons/fi";

export default function MobileSearchBar() {
    return (
        <div
            className="
        flex
        items-center
        w-full
        h-10
        border
        border-gray-300
        rounded-full
        px-4
      "
        >
            <FiSearch
                className="flex-shrink-0 mr-3 text-gray-500"
                size={20}
            />
            <input
                type="text"
                name="query"
                placeholder="Caută..."
                className="
          flex-grow
          h-full
          bg-transparent    /* input-ul moștenește background-ul container-ului */
          border-none
          text-gray-700
          placeholder-gray-400
          focus:outline-none
        "
            />
        </div>
    );
}
