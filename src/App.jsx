import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import SuspenseLoader from "./component/layout/SuspenseLoader";
import "./App.css";

const Home = lazy(() => import("./Pages/Home"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<SuspenseLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
