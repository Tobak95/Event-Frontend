import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import SuspenseLoader from "./component/layout/SuspenseLoader";
import NavBarLoggedIn from "./component/layout/NavBarLoggedIn";

import NavBarLoggedOut from "./component/layout/NavBarLoggedOut";
import { useAppContext } from "./Hooks/useAppContext";
import Footer from "./component/layout/Footer";
import "./App.css";
import ScrollToTop from "./component/ScrollToTop";
import ProtectedRoute from "./component/ProtectedRoute";

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
const ChangePassword = lazy(() => import("./Pages/auth/ChangePassword"));
const CheckYourEmail = lazy(() => import("./Pages/auth/CheckYourEmail"));
const CheckOut2 = lazy(() => import("./Pages/CheckOut2"));
const LogoutModal = lazy(() => import("./Pages/auth/modals/LogOutModal"));

const VerificationFromEmail = lazy(() =>
  import("./Pages/ModalPages/VerificationFromEmail")
);
const EventDetails = lazy(() => import("./Pages/EventDetails"));
const CheckoutOne = lazy(() => import("./Pages/CheckoutOne"));
const PaymentSuccess = lazy(() => import("./Pages/PaymentSuccess"));
const FinalizeGoogle = lazy(() => import("./Pages/auth/FinalizeGoogle"));
const ChooseEmail = lazy(() => import("./Pages/auth/ChooseEmail"));

// ✅ Layout wrapper
const Layout = ({ children }) => {
  const location = useLocation();
  const { user } = useAppContext();

  // ✅ Show Navbar & Footer only on selected routes
  const showLayout = ["/", "/about-us", "/contact-us", "/discover"].includes(
    location.pathname
  );
  return (
    <>
      {showLayout && (user ? <NavBarLoggedIn /> : <NavBarLoggedOut />)}

      <main>{children}</main>
      {showLayout && <Footer />}
    </>
  );
};

//Dashboard Routes
import AdminDashboard from "./Pages/admin/dashboard/AdminDashboard";
import Events from "./Pages/admin/events/Events";
import EventsDetail from "./Pages/admin/events/EventsDetail";
import EventAttendees from "./Pages/admin/events/EventAttendees";
import CreateEvents from "./Pages/admin/create events/CreateEvents";
import UserManagements from "./Pages/admin/userManagement/UserManagement";
import Revenue from "./Pages/admin/revenue/Revenue";
import Settings from "./Pages/admin/settings/Settings";

import EditEvent from "./Pages/admin/updateEvent/EditEvent";

function App() {
  return (
    <Router>
      <Suspense fallback={<SuspenseLoader />}>
        <ScrollToTop />
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
          <Route path="/finalize-google" element={<FinalizeGoogle />} />
          <Route path="/choose-email" element={<ChooseEmail />} />
          <Route
            path="/verify-email/:token"
            element={<VerificationFromEmail />}
          />
          <Route path="/eventDetails" element={<EventDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/check-email" element={<CheckYourEmail />} />
          <Route
            path="/verify-email/:token"
            element={<VerificationFromEmail />}
          />
          <Route
            element={
              <ProtectedRoute allowedRoles={["user", "admin", "superAdmin"]} />
            }
          >
            <Route path="/eventDetails/:id" element={<EventDetails />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/checkout1/:id" element={<CheckoutOne />} />
            <Route path="/checkout2/:id" element={<CheckOut2 />} />
            <Route path="/payment-result" element={<PaymentSuccess />} />
          </Route>
          <Route path="/logout" element={<LogoutModal />} />

          {/* DashBoard ROutes */}
          <Route
            element={<ProtectedRoute allowedRoles={["admin", "superAdmin"]} />}
          >
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/dashboard/admin/events" element={<Events />} />
            <Route
              path="/dashboard/admin/events/:id"
              element={<EventsDetail />}
            />
            <Route
              path="/dashboard/admin/events/attendees"
              element={<EventAttendees />}
            />

            <Route
              path="/dashboard/admin/create-events"
              element={<CreateEvents />}
            />
            <Route
              path="/dashboard/admin/events/edit/:id"
              element={<EditEvent />}
            />

            <Route
              path="/dashboard/admin/userManagements"
              element={<UserManagements />}
            />
            <Route element={<ProtectedRoute allowedRoles={["superAdmin"]} />}>
              <Route path="/dashboard/admin/revenue" element={<Revenue />} />{" "}
            </Route>
            <Route path="/dashboard/admin/settings" element={<Settings />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
