// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Discover from "./pages/Discover";
import CreateEvent from "./pages/CreateEvent";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/create-event" element={<CreateEvent />} />
          </Routes>
        </>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
