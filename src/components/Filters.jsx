import React from "react";
import { IoCloseSharp } from "react-icons/io5";
const Filters = ({ filteredTags, setFilteredTags }) => {
  const handleSetFilteredTags = () => {
    setFilteredTags([]);
  };
  return (
    <>
      {filteredTags.length > 0 ? (
        <section className="relative bg-white/95 rounded-md shadow-lg mb-10 flex items-center justify-between gap-1 px-4 py-4 lg:py-6 lg:px-10">
          <ul className="filters-container flex flex-wrap gap-3">
            {filteredTags.map((tag, index) => {
              return (
                <li
                  className="flex items-center shadow-sm shadow-black/30 cursor-pointer bg-bgFilter px-2 rounded-md font-bold text-darkCyan text-sm lg:text-base rounded-r-md"
                  key={index}
                >
                  {tag}
                  <IoCloseSharp className="text-white/95 bg-darkCyan h-full py-[.2rem] relative left-2 text-2xl rounded-r-md hover:bg-veryDarkGrayishCyan" />
                </li>
              );
            })}
          </ul>
          <button
            className="filters-button text-darkGrayishCyan font-bold text-sm hover:text-darkCyan hover:underline transition-colors lg:text-base"
            onClick={handleSetFilteredTags}
          >
            Clear
          </button>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Filters;
