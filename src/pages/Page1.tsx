import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1</h1>
      <Link to="/page1/detail1">Page1DetailsA</Link>
      <br />
      <Link to="/page1/detail2">Page1DetailsB</Link>
    </div>
  );
};
