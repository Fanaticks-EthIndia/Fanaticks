// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import CreateEvent from "./pages/CreateEvent";
import Footer from "./components/Footer";
import { AnonAadhaarProvider } from "anon-aadhaar-react";

const app_id = '820447064610190777556340711364689044793307693056';

const App = () => {
  return (
    <AnonAadhaarProvider _appId={app_id}>
      <div className="flex flex-col ">
        <Router>
          <NavBar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/create-event" element={<CreateEvent />} />
            </Routes>
          </div>
        </Router>
        <Footer />
      </div>
    </AnonAadhaarProvider>
  );
};

export default App;