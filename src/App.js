import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Link, Router, Routes, Route } from "react-router-dom";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";

const App = () => {
  return (
    <div>
      <h1> This Will Be The Home Page of Whatever</h1>
      <nav>
        <li>
          <Link to="/PageOne" className="nav-bar">
            Page One
          </Link>
        </li>
        <li>
          <Link to="/PageTwo" className="nav-bar">
            Page Two
          </Link>
        </li>
        <li>
          <Link to="/PageThree" className="nav-bar">
            Page Three
          </Link>
        </li>
      </nav>

      {/* <Router>
        <Routes>
          <Route path="/PageTwo" element={<PageTwo />}></Route>
        </Routes>
      </Router> */}
    </div>
  );
};

export default App;
