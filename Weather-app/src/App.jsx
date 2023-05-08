import "./App.css";
import {useEffect , useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [Location , setLocation] = useState();
  const [Current , setCurrent] = useState();
  const [DataLoc , setDataLoc] = useState();
  const[Forecast , setForecast] = useState();

  //API key = a907bc34abd44f91b1b104432230805
  //q= (location name , or cordinates)
//https://api.weatherapi.com/v1/forecast.json?key=a907bc34abd44f91b1b104432230805&q=London

useEffect(()=>{

  const key = 'a907bc34abd44f91b1b104432230805';
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${Location}`;
  
  fetch(url)
  .then (response => response.json())
  .then(data => {
    setCurrent(data.current)
    setDataLoc(data.location)
    setForecast(data.forecast)
  })

},[Location])

const chooseLocation = (selectLoc) => {
  setLocation(selectLoc);
};

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } 
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}


console.log(Location,Current,DataLoc,Forecast)

  return (
    <main>
      <h1></h1>
      <section className="Content-section">
        <Header chooseLocation={chooseLocation} />
        <Main />
      </section>
      <section className="Content-Sidebar">
        <Sidebar />
      </section>
    </main>
  );
}

export default App;
