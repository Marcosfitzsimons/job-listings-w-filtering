import React, { useEffect } from "react";

const FilteredTag = ({ tag, handleDeleteFilter }) => {
  return (
    <li className="flex items-center shadow-sm shadow-black/30 cursor-pointer bg-bgFilter px-2 pt-1 py-[.2rem] lg:pt-[.3rem] lg:py-[.1rem] rounded-md font-bold text-darkCyan text-sm lg:text-base rounded-r-md">
      <button onClick={handleDeleteFilter}>{tag.text}</button>
    </li>
  );
};

export default FilteredTag;
