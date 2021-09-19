import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="container">
      <div className="row g-3">
        <h1 className="text-white">Rest Countries API</h1>
        {countries.map((country) => (
          <Country country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
