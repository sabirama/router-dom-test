import { Link, Routes, Route } from "react-router-dom";
import page3routes from "../../routes/page3/page3routes";

function Page3() {
  return (
    <div>
      <nav>
        <Link to="page3a">Page3A</Link>
        <Link to="page3b">Page3B</Link>
        <Link to="page3c">Page3C</Link>
      </nav>

      <div>
        <Routes>
          {page3routes.map((route, index) => {
            return <Route key={index} path={route.path} element={route.element} />;
          })}
        </Routes>
      </div>
    </div>
  );
}

export default Page3;
