import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Header from "./components/Header";
import UseScrollToTop from "./hooks/useScrollToTop";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <UseScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
