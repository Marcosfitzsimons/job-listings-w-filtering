import React from "react";

const JobPosting = ({ company, setFilteredTags }) => {
  const handleFilteredTags = (e) => {
    setFilteredTags((prevValue) => {
      const filteredTags = [...prevValue, e.target.textContent];
      return [...new Set(filteredTags)];
      // ...new Set() Set constructor removes duplicate values from an array.
    });
  };

  return (
    <article
      className={
        company.featured
          ? "relative bg-white/95 rounded-md shadow-lg mb-10 border-l-4 border-l-darkCyan"
          : "relative bg-white/95 rounded-md shadow-lg mb-10"
      }
    >
      <div className="px-4 pt-9 pb-4 flex flex-col gap-4 lg:pt-6 lg:pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="first-part flex flex-col lg:flex-row lg:items-center gap-2 pb-4 border-b border-b-darkGrayishCyan lg:border-none lg:pb-0 lg:gap-4">
          <div className="logo-container absolute w-12 top-[-1.5rem] left-4 lg:relative lg:w-20 lg:top-0 lg:left-0">
            <img src={company.logo} alt={company.company} />
          </div>
          <div className="">
            <div className="top flex items-center gap-5 lg:gap-3">
              <h3 className="text-sm lg:text-base font-bold text-darkCyan">
                {company.company}
              </h3>
              <div className="flex gap-2">
                {company.new ? (
                  <p className="flex items-center rounded-2xl bg-darkCyan text-xs text-white/95 pt-[0.2rem] py-[0.1rem] px-2 uppercase font-bold">
                    new!
                  </p>
                ) : (
                  ""
                )}
                {company.featured ? (
                  <p className="flex items-center rounded-2xl bg-veryDarkGrayishCyan text-xs text-white/95 pt-[0.2rem] py-[0.1rem] px-2 uppercase font-bold">
                    featured
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="mid">
              <h4 className="text-sm lg:text-base lg:text-md font-bold cursor-pointer hover:text-darkCyan transition-colors">
                {company.position}
              </h4>
            </div>
            <div className="bottom">
              <ul className="job-info-list flex items-center gap-5 text-sm text-darkGrayishCyan list-disc">
                <li className="list-none">{company.postedAt}</li>
                <li className="job-info__contract">{company.contract}</li>
                <li className="job-info__location">{company.location}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="second-part job-filters">
          <ul className="job-languages-tools flex gap-4 flex-wrap">
            {company.languages.length > 0
              ? company.languages.map((language) => {
                  return (
                    <li
                      className="job-tools shadow-sm shadow-black/30 cursor-pointer  bg-bgFilter py-[.2rem] px-2 rounded-sm font-bold text-darkCyan text-sm hover:bg-darkCyan hover:text-white/95 transition-colors"
                      key={language}
                      onClick={handleFilteredTags}
                    >
                      {language}
                    </li>
                  );
                })
              : ""}
            {company.tools.length > 0
              ? company.tools.map((tool) => {
                  return (
                    <li
                      className="job-tools shadow-sm shadow-black/30 cursor-pointer bg-bgFilter py-[.2rem] px-2 rounded-sm font-bold text-darkCyan text-sm hover:bg-darkCyan hover:text-white/95 transition-colors"
                      key={tool}
                      onClick={handleFilteredTags}
                    >
                      {tool}
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default JobPosting;
