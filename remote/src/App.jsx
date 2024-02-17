import React from "react";
import ReactDOM from "react-dom";
import MyButton from "./MyButton"
import "./index.scss";



const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remote</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <MyButton />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
