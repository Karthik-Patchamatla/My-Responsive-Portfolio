import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-darkBlue text-white min-h-screen">
      <Header />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
