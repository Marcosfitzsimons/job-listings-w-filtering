import React, { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Job = ({ setJobList, job, filteredTags, setFilteredTags }) => {
  const {
    logo,
    company,
    featured,
    position,
    postedAt,
    contract,
    location,
    languages,
    level,
    role,
    tools,
  } = job;

  let tags = [role, level, ...tools, ...languages];

  const handleFilteredTags = (e) => {
    setFilteredTags((prevValue) => {
      const filteredTags = [
        ...prevValue,
        {
          id: uuidv4(),
          text: e.target.textContent,
        },
      ];
      const uniqueFilteredTags = filteredTags.filter(
        (v, i, a) =>
          a.findIndex((v2) => ["text"].every((k) => v2[k] === v[k])) === i
      );
      return uniqueFilteredTags;
    });
  };

  // ...new Set() Set constructor removes duplicate values from an array.

  return (
    <article
      className={
        featured
          ? "relative bg-white/95 rounded-md shadow-lg shadow-darkCyan/20 mb-10 border-l-4 border-l-darkCyan pb-2"
          : "relative bg-white/95 rounded-md shadow-lg shadow-darkCyan/20 mb-10 pb-2"
      }
    >
      <div className="px-4 pt-9 pb-4 flex flex-col gap-4 lg:px-10 lg:pt-6 lg:pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="first-part flex flex-col lg:flex-row lg:items-center gap-2 pb-4 border-b border-b-darkGrayishCyan/80 lg:border-none lg:pb-0 lg:gap-4">
          <div className="inline-block overflow-hidden logo-container absolute w-12 top-[-1.5rem] left-4 lg:relative lg:w-20 lg:top-0 lg:left-0 rounded-full">
            <img
              src={logo}
              alt={company}
              className="origin-center hover:origin-bottom hover:scale-105 transition-all duration-200 z-90 align-middle rounded-full"
            />
          </div>
          <div className="flex flex-col lg:gap-1">
            <div className="top flex items-center gap-5 lg:gap-3">
              <h3 className="text-base lg:text-lg font-bold text-darkCyan">
                {company}
              </h3>
              <div className="flex gap-2">
                {job.new && (
                  <p className="flex items-center rounded-2xl bg-darkCyan text-xs text-white/95 pt-[0.3rem] py-[0.1rem] px-2 uppercase font-semibold">
                    new!
                  </p>
                )}
                {featured && (
                  <p className="flex items-center rounded-2xl bg-veryDarkGrayishCyan text-xs text-white/95 pt-[0.3rem] py-[0.1rem] px-2 uppercase font-semibold">
                    featured
                  </p>
                )}
              </div>
            </div>
            <div className="mid">
              <h4 className="text-base lg:text-base lg:text-md font-bold cursor-pointer hover:text-darkCyan transition-colors">
                {position}
              </h4>
            </div>
            <div className="bottom">
              <ul className="job-info-list flex items-center gap-5 text-[.95rem] text-darkGrayishCyan/90 list-disc">
                <li className="list-none">{postedAt}</li>
                <li className="job-info__contract">{contract}</li>
                <li className="job-info__location">{location}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="second-part job-filters">
          <ul className="tag-list flex w-[85%] lg:w-full gap-4 flex-wrap">
            {tags.map((tag, index) => {
              return (
                <li
                  key={index}
                  onClick={handleFilteredTags}
                  className="tag transition-all duration-200 hover:-translate-y-[2px] hover:-translate-x-[2px] shadow-sm shadow-black/30 cursor-pointer bg-bgFilter pt-1 py-[.2rem] lg:pt-[.3rem] lg:py-[.1rem] px-2 rounded-md font-bold text-darkCyan text-sm lg:text-base hover:bg-darkCyan hover:text-white/95"
                >
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Job;
