import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <li>
          <NavLink to="/">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/cats">Cats</NavLink>
        </li>
        <li>
          <NavLink to="/sheeps">Sheeps</NavLink>
        </li>
        <li>
          <NavLink to="/goats">Goats</NavLink>
        </li>
      </div>
      <Routes>
        <Route path="/" element={<div>Dogs Page</div>} />
        <Route path="/cats" element={<div>Cats Page</div>} />
        <Route path="/sheeps" element={<div>Sheeps Page</div>} />
        <Route path="/goats" element={<div>Goats Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;