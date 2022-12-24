import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import "./App.css";

const App = () => {
  return (
    <div>
      <header>
        <nav className="nav-bar">
          <li className="li-tag">
            <Link to="/"> Home </Link>
          </li>
          <li className="li-tag">
            <Link to="/PageOne"> Page One </Link>
          </li>
          <li className="li-tag">
            <Link to="/PageTwo"> Page Two </Link>
          </li>
          <li className="li-tag">
            <Link to="/PageThree"> Page Three </Link>
          </li>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/PageOne" element={<PageOne />}></Route>
        <Route path="/PageTwo" element={<PageTwo />}></Route>
        <Route path="/PageThree" element={<PageThree />}></Route>
      </Routes>

      <h1> Nav Bar Time </h1>
    </div>
  );
};

export default App;
