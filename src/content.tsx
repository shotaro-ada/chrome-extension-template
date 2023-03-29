import React from "react";
import ReactDOM from "react-dom";

const Main = () => {
  return <div style={{ backgroundColor: "red" }}>This is React</div>;
};

const body = document.body;
const app = document.createElement("body");
const head = document.querySelector('head');

body.remove();


ReactDOM.render(<Main />, app);

head?.after(app);

