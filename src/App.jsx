import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./dummy.css";
import { useState } from "react";

function App() {
  const [isValid, setIsValid] = useState(false);

  function toggleNav() {
    setIsValid(!isValid);
  }

  function HandleNavClose() {
    if (isValid) {
      setIsValid(!isValid);
    }
  }

  return (
    <div>
      <Nav isValid={isValid} toggleNav={toggleNav} />
      <Header onNavClose={HandleNavClose} />
      <About />

      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
