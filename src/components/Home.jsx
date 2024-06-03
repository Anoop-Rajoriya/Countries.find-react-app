import { useEffect, useState } from "react";
import Card from "./Card";
import Nav from "./Nav";
import CardLoader from "../loaders/CardLoader";

export default function Main() {
  const [mainData, setMainData] = useState([]);
  const [countriesData, setCountriesData] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    if (selectValue) {
      setCountriesData(
        mainData.filter((value) => {
          return value.continents
            .map((val) => val.toLowerCase())
            .includes(selectValue.toLowerCase());
        })
      );
      return;
    }

    setCountriesData(
      mainData.filter((value) => {
        return (
          value.name.common.toLowerCase().includes(userInput.toLowerCase()) ||
          value.region.toLowerCase().includes(userInput.toLowerCase())
        );
      })
    );
  }, [userInput, mainData, selectValue]);

  useEffect(function () {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(function (data) {
        setMainData(data);
      });
  }, []);

  if (!countriesData.length) {
    const cardLoader = [];
    for (let count = 0; count < 22; count++) {
      cardLoader.push(<CardLoader key={count} />);
    }
    return <div id="main">{cardLoader}</div>;
  }

  return (
    <>
      <Nav set={setUserInput} filter={[selectValue, setSelectValue]} />
      <div id="main">
        {countriesData.map((value) => {
          return (
            <Card
              key={value.cca3}
              data={countriesData}
              url={value.flags.svg}
              name={value.name.common}
              population={value.population.toLocaleString("en-IN")}
              region={value.region}
              capital={value.capital?.join(", ") || "no capital"}
            />
          );
        })}
      </div>
    </>
  );
}
