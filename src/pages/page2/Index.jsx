import { Link, Routes, Route } from "react-router-dom";
import page2routes from "../../routes/page2/page2routes";

function Page2() {
  return (
    <div>
      <nav>
        <Link to="page2a">Page2A</Link>
        <Link to="page2b">Page2B</Link>
        <Link to="page2c">Page2C</Link>
      </nav>

      <div>
        <Routes>
          {page2routes.map((route, index) => {
            return <Route key={index} path={route.path} element={route.element} />;
          })}
        </Routes>
      </div>
    </div>
  );
}

export default Page2;
