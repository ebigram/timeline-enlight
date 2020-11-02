import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { getData } from "./data";

let data
var f = (json) => {

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App data={{json}} />
  </React.StrictMode>,
  rootElement
);
}
getData(f)