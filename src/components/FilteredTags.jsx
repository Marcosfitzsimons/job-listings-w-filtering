import React from "react";
import FilteredTag from "./FilteredTag";

const FilteredTags = ({
  filteredTags,
  setFilteredTags,
  clearFilteredTags,
  setJobList,
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
                  tagText={tag.text}
                  setFilteredTags={setFilteredTags}
                  filteredTags={filteredTags}
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
