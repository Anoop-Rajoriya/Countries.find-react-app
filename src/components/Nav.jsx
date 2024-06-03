import  { useState } from "react";
import searchicon from "../assets/search-icon.svg";
import downArrow from "../assets/down-arrow.svg";
export default function Nav({ set, filter }) {
  const [isFilterClick, setIsFilterClick] = useState(false);
  const [selectValue, setSelectValue] = filter;
  const filterList = [
    "Asia",
    "Europe",
    "North America",
    "South America",
    "Africa",
    "Antarctica",
    "Oceania",
  ];

  function inputHandler(event) {
    set(event.target.value);
  }

  function filterHandler() {
    setIsFilterClick(!isFilterClick);
  }

  function optionHandler(event) {
    setSelectValue(event.currentTarget.innerText);
    setIsFilterClick(!isFilterClick);
  }

  return (
    <div id="nav">
      <div id="search">
        <div id="search-logo">
          <img src={searchicon} alt="" />
        </div>
        <input type="search" onChange={inputHandler} />
      </div>
      <div id="filter">
        <div id="select" onClick={filterHandler}>
          <span>{selectValue || "filter countries"}</span>
          <img src={downArrow} alt="" />
        </div>
        <div id="options" className={isFilterClick ? "option-visible" : ""}>
          {filterList.map((option, index) => (
            <p key={index} onClick={optionHandler}>
              {option}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
