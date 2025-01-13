import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="mx-auto">
          <About />
          <Skills />
          <WorkExperience />
          <Education />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
