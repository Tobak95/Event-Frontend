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
const Login = lazy(() => import("./Pages/auth/Login"));
const Register = lazy(() => import("./Pages/auth/Register"));
const ResetPassword = lazy(() => import("./Pages/auth/ResetPassword"));
const VerifyEmail = lazy(() => import("./Pages/ModalPages/VerifyEmail"));
const VerificationFromEmail = lazy(() =>
  import("./Pages/ModalPages/VerificationFromEmail")
);

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
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/verify" element={<VerifyEmail />} />
            <Route
              path="/verify-email/:token"
              element={<VerificationFromEmail />}
            />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
