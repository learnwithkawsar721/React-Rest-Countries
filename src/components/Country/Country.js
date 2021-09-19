import React from "react";
import "./Country.css";
const Country = (props) => {
  const { name, flag, capital, population, region } = props.country;
  return (
    <div className="country">
      <h1>{name} </h1>
      <img src={flag} alt={name} />
      <h3>Region: {region} </h3>
      <p>
        Capital: {capital} popolation: {population}{" "}
      </p>
    </div>
  );
};

export default Country;
