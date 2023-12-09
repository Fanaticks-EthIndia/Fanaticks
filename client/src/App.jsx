// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import CreateEvent from "./pages/CreateEvent";
import Footer from "./components/Footer";

const App = () => {
  return (
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
  );
};

export default App;
