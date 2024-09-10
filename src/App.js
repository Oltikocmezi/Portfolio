import "./App.css";
import About from "./sections/About";
import Contact from "./sections/Contact";
import NavBar from "./components/NavBar";
import Header from "./sections/Header";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="App min-w-80">
      <Header />
      <About />
      <Projects />
      <Contact />
      <NavBar />
    </div>
  );
}

export default App;
