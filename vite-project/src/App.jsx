import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-darkBlue text-white min-h-screen">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
