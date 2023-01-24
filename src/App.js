import NavBar from "./Components/navbar/NavBar";
import "./App.css";
import Home from "./Components/home/Home";
import Projects from "./Components/projects/Projects";
import About from "./Components/about/About";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
