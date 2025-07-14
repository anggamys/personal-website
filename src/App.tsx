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
    <main className="bg-[#e8f1f2] text-[#292929] font-sans min-h-screen">
      <Introduction />
      <Background />
      <Skills />
      <Experience />
      <Project />
      <BackToTopButton />
      <Footer />
    </main>
  );
}

export default App;
