import React from "react";
import ReactDOM from "react-dom";

const Main = () => {
  return <div style={{ backgroundColor: "red" }}>This is React</div>;
};

const app = document.createElement("div");
const head = document.querySelector('head');

ReactDOM.render(<Main />, app);
head?.after(app);

