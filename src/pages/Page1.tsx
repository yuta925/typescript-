import { Link, useNavigate } from "react-router-dom";

export const Page1 = () => {
  // const arr = ["hoge", "fuga", "piyo"];
  const navigate = useNavigate();
  return (
    <div>
      <h1>Page1</h1>
      <button onClick={() => navigate("/page1/detail1")}>Detail1</button>
      {/* <Link to="/page1/detail1" state={arr}>
        Page1Detail1
      </Link> */}
      <br />
      <Link to="/page1/detail2">Page1Detail2</Link>
    </div>
  );
};
