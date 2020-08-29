import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Hi(props) {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.fname}! {props.lname}
      </h1>
      <strong>Hello arsalan!</strong>
      <h1>Today i'm learning React</h1>
      <h2>Fruits</h2>
      <ul>
        <li>Apple</li>
        <li>Oranges</li>
        <li>Mango</li>
      </ul>

      <h3>5 + 10 = {5 + 10}</h3>
    </div>
  );
}

ReactDOM.render(
  <Hi fname="arsalan" lname="manzoor" />,
  document.querySelector("#root")
);
