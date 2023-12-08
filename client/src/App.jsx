// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Discover from "./pages/Discover";
import CreateEvent from "./pages/CreateEvent";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/create-event" element={<CreateEvent />} />
          </Routes>
        </div>
      </Router>
      {/* <Footer /> add this */}
    </div>
  );
};

export default App;
