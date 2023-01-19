import React from "react";
import { AnimatePresence } from "framer-motion";
import Job from "./Job";

const JobList = ({ setJobList, jobList, filteredTags, setFilteredTags }) => {
  return (
    <section className="list-container">
      <AnimatePresence>
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
      </AnimatePresence>
    </section>
  );
};

export default JobList;
