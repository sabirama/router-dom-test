import Page1 from "../pages/page1";
import Page2 from "../pages/page2";
import Page3 from "../pages/page3";

const mainroutes = [
  {
    name: "Page1",
    path: "/page1/*",
    element: <Page1 />,
  },
  {
    name: "Page2",
    path: "/page2/*",
    element: <Page2 />,
  },
  {
    name: "Page1",
    path: "/page3/*",
    element: <Page3 />,
  },
];

export default mainroutes;
