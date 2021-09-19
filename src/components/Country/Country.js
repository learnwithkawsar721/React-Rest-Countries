import React from "react";

const Country = (props) => {
  const { name, flag } = props.country;
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
      <div className="card h-100 rounded-3">
        <img src={flag} className="card-img-top w-100 h-50" alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
