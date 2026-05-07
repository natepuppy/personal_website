import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Skills from "./pages/Skills";
import WhyMe from "./pages/WhyMe";
import Contact from "./pages/Contact";
import Research from "./pages/Research";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <ScrollToTop />
      <main className="flex-1">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/why-me" element={<WhyMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
