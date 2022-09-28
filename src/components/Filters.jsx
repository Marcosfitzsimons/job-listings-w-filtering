import React from "react";

const Filters = ({ filteredTags, setFilteredTags }) => {
  const handleSetFilteredTags = () => {
    setFilteredTags([]);
  };
  return (
    <>
      {filteredTags.length > 0 ? (
        <section className="relative bg-white/95 rounded-md shadow-lg mb-10 flex items-center justify-between gap-1 px-3 py-4">
          <ul className="filters-container flex flex-wrap gap-3">
            {filteredTags.map((tag, index) => {
              return (
                <li
                  className="job-tools shadow-sm shadow-black/30 cursor-pointer  bg-bgFilter py-[.2rem] px-2 rounded-sm font-bold text-darkCyan text-sm"
                  key={index}
                >
                  {tag}
                </li>
              );
            })}
          </ul>
          <button
            className="filters-button text-darkGrayishCyan font-bold text-sm"
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
