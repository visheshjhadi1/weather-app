import { useState } from "react";
import logo from "../assets/logo.svg";

// eslint-disable-next-line react/prop-types
export default function Header({ chooseLocation }) {

const [SearchedLocation , setSearchedLocation] = useState("");

const handleChange = (e) => {
    setSearchedLocation(e.target.value)
}



  return (
    <div className="Main-header">
      <img src={logo} alt="App logo" />
      <div className="search-container">
        <input type="text" placeholder="Search location here" className="searchBar" onChange={handleChange}/>
        <button className="SearchBtn" id="SearchBtn" onClick={() => chooseLocation(SearchedLocation)}>Search</button>
      </div>
    </div>
  );
}
