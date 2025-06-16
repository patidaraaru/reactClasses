import "./App.css";
import About from "./Component/Context/About";
import BioProvider from "./Component/Context/BioProvider";
import Home from "./Component/Context/Home";

function App() {
  return (
    <div className="App">
      <BioProvider>
        <Home/>
        <About/>
      </BioProvider>
    </div>
  );
}

export default App;
