import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <div className="Main-header">
      <img src={logo} alt="App logo" />
      <div className="search-container">
        <input type="text" placeholder="Search location here" className="searchBar"/>
        <button className="SearchBtn" id="SearchBtn">Search</button>
      </div>
    </div>
  );
}
