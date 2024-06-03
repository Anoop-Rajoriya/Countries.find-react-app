// import React from "react";
import { Link } from "react-router-dom";

export default function Card({
  url,
  name,
  population,
  region,
  capital,
  data,
}) {
  return (
    <Link to={`countries-detail/${name}`} state={data} id="card">
      <div id="img">
        <img src={url} alt="" />
      </div>
      <div id="details">
        <p id="name">{name}</p>
        <p id="population">
          <span>population:</span>
          {population}
        </p>
        <p id="region">
          <span>regions:</span> {region}
        </p>
        <p id="capital">
          <span>capitals:</span>
          {capital}
        </p>
      </div>
    </Link>
  );
}