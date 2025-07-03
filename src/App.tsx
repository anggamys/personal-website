import "./App.css";
import Introduction from "./components/Introduction";
import Background from "./components/Background";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <>
      <Introduction />
      <Background />
      <Skills />
      <Experience />
      <Project />
      <BackToTopButton />
      <Footer />
    </>
  );
}

export default App;
