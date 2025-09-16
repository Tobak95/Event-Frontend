import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import SuspenseLoader from "./component/layout/SuspenseLoader";
import NavBar from "./component/layout/NavBar";
import Footer from "./component/layout/Footer";
import "./App.css";

const Home = lazy(() => import("./Pages/Home"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const Discover = lazy(() => import("./Pages/Discover"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<SuspenseLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/discover" element={<Discover />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
