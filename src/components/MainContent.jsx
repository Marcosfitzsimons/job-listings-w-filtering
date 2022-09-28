import React from "react";
import Filters from "./Filters";
import Company from "./Company";

const MainContent = ({ companies }) => {
  return (
    <main className="main flex justify-center">
      <div className="main-container w-[85%] container mx-auto py-10">
        <Filters />
        <section className="list-container">
          {companies.map((company) => {
            return <Company key={company.id} company={company} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default MainContent;
