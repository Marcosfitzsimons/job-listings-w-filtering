import React from "react";
import { motion } from "framer-motion";

const tagVariants = {
  hidden: {
    y: -10,
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
  exit: {
    y: -10,
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

const FilteredTag = ({ tag, handleDeleteFilter }) => {
  return (
    <motion.li
      variants={tagVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex items-center shadow-sm shadow-black/30 cursor-pointer bg-bgFilter px-2 pt-1 py-[.2rem] lg:pt-[.3rem] lg:py-[.1rem] rounded-md font-bold text-darkCyan text-sm lg:text-base rounded-r-md"
    >
      <button onClick={handleDeleteFilter}>{tag.text}</button>
    </motion.li>
  );
};

export default FilteredTag;
