import React from "react";
import Job from "./Job";

const JobList = ({ jobList, setFilteredTags }) => {
  return (
    <section className="list-container">
      {jobList.map((job) => {
        return <Job key={job.id} job={job} setFilteredTags={setFilteredTags} />;
      })}
    </section>
  );
};

export default JobList;
