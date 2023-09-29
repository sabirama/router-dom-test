import { Link, Routes, Route } from "react-router-dom";
import mainroutes from "./routes/mainroutes";

import "./App.css";

function App() {
  return (
    <>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
        <Link to="/page3">Page3</Link>
      </nav>

      <div>
        <Routes>
          {mainroutes.map((route, index) => {
            return <Route key={index} path={route.path} element={route.element} />;
          })}
        </Routes>
      </div>
    </>
  );
}

export default App;
