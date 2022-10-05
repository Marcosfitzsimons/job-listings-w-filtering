import React from "react";

const FilteredTag = ({ tag, tagText, setFilteredTags, filteredTags }) => {
  return (
    <li className="flex items-center shadow-sm shadow-black/30 cursor-pointer bg-bgFilter px-2 pt-1 py-[.2rem] lg:pt-[.3rem] lg:py-[.1rem] rounded-md font-bold text-darkCyan text-sm lg:text-base rounded-r-md">
      {tagText}
    </li>
  );
};

export default FilteredTag;
