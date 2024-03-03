import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import SearchSelectBox from "./components/SearchSelectBox";
import SearchMultiSelectBox from "./components/SearchMultiSelectBox";
import Artisttest from "./feature/ArtistInfo";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SearchSelectBox />
    <SearchMultiSelectBox />
    <Artisttest />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
