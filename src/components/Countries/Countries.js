import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="">
      <h1>Hello Form Countries Component:{countries.length}</h1>
      <div className="countries">
        {countries.map((country, index) => (
          <Country country={country} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
