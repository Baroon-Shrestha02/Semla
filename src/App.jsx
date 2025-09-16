import { Route, Router, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import Gallery from "./Pages/Gallery";
import ContactPage from "./Pages/ContactPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FAQ from "./Pages/FAQ";
import ScrollToTop from "./Components/HelperComponents/ScrollToTop";
import { Toaster } from "react-hot-toast";
import LanguageSwitcher from "./Components/HelperComponents/LanguageSwitcher";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <LanguageSwitcher />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
