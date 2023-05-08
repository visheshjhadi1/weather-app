import "./App.css";
import {useEffect , useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [Location , setLocation] = useState("Mumbai");
  const [Current , setCurrent] = useState();

  //API key = a907bc34abd44f91b1b104432230805
  //q= (location name , or cordinates)
//https://api.weatherapi.com/v1/forecast.json?key=a907bc34abd44f91b1b104432230805&q=London

useEffect(()=>{

  const key = 'a907bc34abd44f91b1b104432230805';
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${Location}`;
  
  fetch(url)
  .then (response => response.json())
  .then(data => console.log(data))

},[Location])

const chooseLocation = (selectLoc) => {
  setLocation(selectLoc);
};



  return (
    <main>
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
