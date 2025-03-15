import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";
import Hero from "./Hero";
import SignUp from "./SignUp";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Feed from "./Feed.jsx";
import Connections from "./Connections.jsx";
import Requests from "./Requests.jsx";

// Import newly created pages
import AboutUs from "./AboutUs";
import Contact from "./Contact";

import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";
import RefundPolicy from "./RefundPolicy";
import FAQs from "./FAQs";
import Premium from "./Pricing.jsx";
import Pricing from "./Pricing.jsx";
import ShippingAndDelivery from "./ShippingAndDelivery.jsx";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Hero />} />
            <Route path="/login" element={<Login />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Requests />} />

            {/* New Pages */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/shippinganddelivery" element={<ShippingAndDelivery/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
