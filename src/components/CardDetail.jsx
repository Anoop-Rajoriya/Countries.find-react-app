import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import CardDetailLoader from "../loaders/CardDetailLoader";

export default function CardDetail() {
  const { countryName } = useParams();
  const { state: countriesData } = useLocation();
  const [countryData, setCountryData] = useState({});

  useEffect(function(){
    setCountryData(
      countriesData.filter((obj) => obj.name.common === countryName)[0]
    );
  },[countryName])

  if (Object.entries(countryData).length) {
    return (
      <div id="card-detail-wraper">
        <button
          onClick={function () {
            history.back();
          }}
          id="back-button"
        >
          Back
        </button>

        <div id="card-detail">
          <div id="img">
            <img src={countryData.flags.svg} alt="" />
          </div>
          <div id="details">
            <p id="name">{countryName}</p>
            <div>
              <p>
                <span>official name:</span>{" "}
                {countryData.name?.official || "no name"}
              </p>
              <p>
                <span>region:</span> {countryData.region || "no region"}
              </p>
              <p>
                <span>subregion:</span>
                {countryData.subregion || "no subregion"}
              </p>
              <p>
                <span>population:</span>{" "}
                {countryData.population?.toLocaleString("en-IN")}
              </p>
              <p>
                <span>capital:</span>{" "}
                {countryData.capital?.join(", ") || "no capital"}
              </p>
              <p>
                <span>languages:</span>{" "}
                {Object.values(countryData.languages || {}).join(", ") ||
                  "no languages"}
              </p>
              <p>
                <span>currencies:</span>
                {Object.values(countryData.currencies || {})
                  .map((val) => val.name)
                  .join(", ") || "no currencies"}
              </p>
              <p>
                <span>top level domain:</span>{" "}
                {countryData.tld?.join(", ") || "no TLD"}
              </p>
            </div>

            <p id="borders">
              <span>Borders: </span>
              {countriesData
                .filter((val) => {
                  return countryData.borders?.includes(val.cca3);
                })
                .map((val) => {
                  return (
                    <Link
                      key={val.cca3}
                      to={`/countries-detail/${val.name.common}`}
                      state={countriesData}
                    >
                      {val.name.common}
                    </Link>
                  );
                })}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return <CardDetailLoader />;
  }
}
