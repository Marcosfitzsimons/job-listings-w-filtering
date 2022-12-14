import React from "react";
import FilteredTags from "./FilteredTags";
import JobList from "./JobList";

const MainContent = ({
  clearFilteredTags,
  setJobList,
  jobList,
  setFilteredTags,
  filteredTags,
  handleDeleteFilter,
}) => {
  return (
    <main className="main flex justify-center">
      <div className="main-container w-[90%] container lg:max-w-[1100px] mx-auto py-10">
        <FilteredTags
          filteredTags={filteredTags}
          clearFilteredTags={clearFilteredTags}
          handleDeleteFilter={handleDeleteFilter}
        />
        <JobList
          jobList={jobList}
          setJobList={setJobList}
          filteredTags={filteredTags}
          setFilteredTags={setFilteredTags}
        />
      </div>
    </main>
  );
};

export default MainContent;
