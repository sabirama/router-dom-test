import { Link, Routes, Route } from "react-router-dom";
import page1routes from "../../routes/page1/page1routes";

function Page1() {
  return (
    <div>
      <nav>
        <Link to="page1a">Page1A</Link>
        <Link to="page1b">Page1B</Link>
        <Link to="page1c">Page1C</Link>
      </nav>

      <div>
        <Routes>
          {page1routes.map((route, index) => {
            return <Route key={index} path={route.path} element={route.element} />;
          })}
        </Routes>
      </div>
    </div>
  );
}

export default Page1;
