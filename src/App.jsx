import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import { BubblyContainer } from "react-bubbly-transitions";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { useEffect } from "react";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import MarketPlace from "./pages/Dashboard/MarketPlace";
import NftDetails from "./pages/Dashboard/NftDetails";
import Settings from "./pages/Dashboard/Settings";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import PasswordReset from "./pages/PasswordReset/PasswordReset";
import EmailVerification from "./pages/EmailVerification/EmailVerification";
import NewPassword from "./pages/NewPassword/NewPassword";
import NftProfile from "./pages/Dashboard/NftProfile";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 80,
      once: true,
      easing: "ease",
    });
  }, []);

  const [dataFromChildRout, setDataFromChildRout] = useState(null);
  const handleChildData = (childData) => {
    setDataFromChildRout(childData);
  };
  return (
    <>
      <BubblyContainer />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/EmailVerification" element={<EmailVerification />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/NewPassword" element={<NewPassword />} />
        <Route path="/PasswordReset" element={<PasswordReset />} />
        <Route
          path="/Dashboard"
          element={<Dashboard setDataFromParent={handleChildData} />}
        >
          <Route index element={<DashboardHome Anmol={dataFromChildRout} />} />
          <Route path="NftProfile" element={<NftProfile />} />
          <Route path="Settings" element={<Settings />} />
        </Route>
        <Route path="/MarketPlace" element={<MarketPlace />} />
        <Route path="MarketPlace/:id" element={<NftDetails />} />
      </Routes>
    </>
  );
}

export default App;
