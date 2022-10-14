import React from "react";
import FilteredTag from "./FilteredTag";

const FilteredTags = ({
  handleDeleteFilter,
  filteredTags,
  clearFilteredTags,
}) => {
  return (
    <>
      {filteredTags.length > 0 && (
        <section className="relative bg-white/95 rounded-md shadow-lg mb-10 flex items-center justify-between gap-1 px-4 py-4 lg:py-6 lg:px-10">
          <ul className="filters-container flex flex-wrap gap-3">
            {filteredTags.map((tag) => {
              return (
                <FilteredTag
                  key={tag.id}
                  tag={tag}
                  handleDeleteFilter={handleDeleteFilter}
                />
              );
            })}
          </ul>
          <button
            className="filters-button text-darkGrayishCyan font-bold text-sm hover:text-darkCyan hover:underline transition-colors lg:text-base"
            onClick={clearFilteredTags}
          >
            Clear
          </button>
        </section>
      )}
    </>
  );
};

export default FilteredTags;
