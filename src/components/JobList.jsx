import React from "react";
import Job from "./Job";

const JobList = ({ setJobList, jobList, filteredTags, setFilteredTags }) => {
  return (
    <section className="list-container">
      {jobList.map((job) => {
        return (
          <Job
            key={job.id}
            job={job}
            setJobList={setJobList}
            filteredTags={filteredTags}
            setFilteredTags={setFilteredTags}
          />
        );
      })}
    </section>
  );
};

export default JobList;
