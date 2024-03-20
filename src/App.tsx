import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Page1 } from "./pages/Page1";
import { Page2 } from "./pages/Page2";
import { Page1Detail1 } from "./pages/Page1Detail1";
import { Page1Detail2 } from "./pages/Page1Detail2";

export const App = () => {
  return (
    <>
      <Link to="/">HOME</Link>
      <br />
      <Link to="page1">PAGE1</Link>
      <br />
      <Link to="page2">PAGE2</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />}>
          <Route index={true} element={<Page1 />} />
          <Route path="/page1/detail1" element={<Page1Detail1 />} />
          <Route path="/page1/detail2" element={<Page1Detail2 />} />
        </Route>
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </>
  );
};
