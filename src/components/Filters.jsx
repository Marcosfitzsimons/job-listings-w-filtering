import React from "react";

const Filters = () => {
  return (
    <section className="filters hidden">
      <div className="filters-container">
        <li className="filters__item">Frontend</li>
        <li className="filters__item">Css</li>
        <li className="filters__item">Javascript</li>
      </div>
      <button className="filters-button">Clear</button>
    </section>
  );
};

export default Filters;
