import Introduction from "./components/Introduction";
import Background from "./components/Background";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Project";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
// import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <main className="bg-[#e8f1f2] dark:bg-[#202a2d] text-[#292929] dark:text-[#e8f1f2] font-sans min-h-screen">
      {/* <DarkModeToggle /> */}
      <Introduction />
      <Background />
      <Skills />
      <Experience />
      <Projects />
      <BackToTopButton />
      <Footer />
    </main>
  );
}

export default App;
