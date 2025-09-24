import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
const Tickets = lazy(() => import("./Pages/Tickets"));
const ForgotPassword = lazy(() => import("./Pages/auth/ForgotPassword"));
const CheckYourEmail = lazy(() => import("./Pages/auth/CheckYourEmail"));
const VerificationFromEmail = lazy(() =>
  import("./Pages/ModalPages/VerificationFromEmail")
);
const EventDetails = lazy(() => import("./Pages/EventDetails"));

// ✅ Layout wrapper
const Layout = ({ children }) => {
  const location = useLocation();

  // ✅ Show Navbar & Footer only on selected routes
  const showLayout = ["/", "/about-us", "/contact-us", "/discover"].includes(
    location.pathname
  );

  return (
    <>
      {showLayout && <NavBar />}
      <main>{children}</main>
      {showLayout && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <Suspense fallback={<SuspenseLoader />}>
        <Routes>
          {/* ✅ Wrap pages with Layout individually */}
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about-us"
            element={
              <Layout>
                <AboutUs />
              </Layout>
            }
          />
          <Route
            path="/contact-us"
            element={
              <Layout>
                <ContactUs />
              </Layout>
            }
          />
          <Route
            path="/discover"
            element={
              <Layout>
                <Discover />
              </Layout>
            }
          />

          {/* Auth & other routes (NO NAVBAR/FOOTER) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/check-email" element={<CheckYourEmail />} />
          <Route
            path="/verify-email/:token"
            element={<VerificationFromEmail />}
          />
          <Route path="/eventDetails" element={<EventDetails />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
