import Introduction from "./components/Introduction";
import Background from "./components/Background";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Project";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
// import ModeToggle from "./components/ModeToggle";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <main className="bg-[#e8f1f2] dark:bg-[#202a2d] text-[#292929] dark:text-[#e8f1f2] font-sans min-h-screen transition-colors duration-200">
          {/* <ModeToggle /> */}
          <Introduction />
          <Background />
          <Skills />
          <Experience />
          <Projects />
          <BackToTopButton />
          <Footer />
        </main>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
