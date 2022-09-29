import React from "react";
import Filters from "./Filters";
import Company from "./Company";

const MainContent = ({ companies, setFilteredTags, filteredTags }) => {
  return (
    <main className="main flex justify-center">
      <div className="main-container w-[90%] container lg:max-w-[1100px] mx-auto py-10">
        <Filters
          filteredTags={filteredTags}
          setFilteredTags={setFilteredTags}
        />
        <section className="list-container">
          {companies.map((company) => {
            return (
              <Company
                key={company.id}
                company={company}
                setFilteredTags={setFilteredTags}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default MainContent;
