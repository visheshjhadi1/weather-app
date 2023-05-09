import "./App.css";
import {useEffect , useState} from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
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

useEffect(() => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      const userLocation = `${position.coords.latitude},${position.coords.longitude}`;
      setLocation(userLocation);
    }, error => {
      console.error(`Error getting location: ${error.message}`);
    });
  } else {
    console.error('Geolocation is not supported by your browser');
  }
}, []);


const chooseLocation = (selectLoc) => {
  setLocation(selectLoc);
};

console.log(Current)
return (
  <main>
    {Location ? (
      <>
        <section className="Content-section">
          <Header chooseLocation={chooseLocation} />
          <MainBody Weather = {{...Current}}/>
        </section>
        <section className="Content-Sidebar">
          <Sidebar Location = {{...DataLoc}} Current = {{...Current}} Forecast = {{...Forecast}}/>
        </section>
      </>
    ) : (
      <p>Loading...</p>
    )}
  </main>
);
}

export default App;
