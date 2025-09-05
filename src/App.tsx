import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Project from "./components/Projects/Project";
import { useState, useEffect } from "react";

function App() {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollUp(true); // Show button when scrolled past the first section
      } else {
        setShowScrollUp(false); // Hide button when in the first section
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="md:px-8 lg:px-16 xl:px-32 2xl:px-48 min-h-screen">
      <Navbar />
      <About />
      <Project />
      <Contact />
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-black text-white p-3 rounded-full shadow-lg hover:bg-black transition duration-300"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
