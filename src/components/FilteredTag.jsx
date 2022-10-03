import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const FilteredTag = ({ tag, tagText, setFilteredTags, filteredTags }) => {
  const handleDelete = () => {
    setFilteredTags(filteredTags.filter((item) => item.id !== tag.id));
  };
  return (
    <li className="flex items-center shadow-sm shadow-black/30 cursor-pointer bg-bgFilter px-2 rounded-md font-bold text-darkCyan text-sm lg:text-base rounded-r-md">
      {tagText}
      <IoCloseSharp
        className="text-white/95 bg-darkCyan h-full py-[.2rem] relative left-2 text-2xl rounded-r-md hover:bg-veryDarkGrayishCyan"
        onClick={handleDelete}
      />
    </li>
  );
};

export default FilteredTag;
