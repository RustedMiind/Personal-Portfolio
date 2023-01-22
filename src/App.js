import NavBar from "./Components/navbar/NavBar";
import "./App.css";
import Home from "./Components/home/Homse";
import Projects from "./Components/projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
