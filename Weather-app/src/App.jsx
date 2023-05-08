import "./App.css";
import {useEffect , useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [Location , setLocation] = useState("");
  





  return (
    <main>
      <section className="Content-section">
        <Header />
        <Main />
      </section>
      <section className="Content-Sidebar">
        <Sidebar />
      </section>
    </main>
  );
}

export default App;
