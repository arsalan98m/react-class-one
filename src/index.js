import React from "react";
import ReactDOM from "react-dom";
import MediaCard from "./mediacard";
import Gate from "./gate";
import "./index.css";
import "./App.css";

function Hi(props) {
  console.log(props);
  return (
    <div className="App">
      <h1>Exercise # 1</h1>
      <h1>
        Hello {props.fname} {props.lname} !
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
      <hr />

      <MediaCard
        title="Exercise # 2"
        body="quick brown fox jumps over the lazy dog"
        imageUrl="https://img.etimg.com/thumb/msid-72081976,width-640,resizemode-4,imgsize-35648/elva-mclarens-latest-sports-car.jpg"
      />

      <hr />

      <Gate isOpen={false} />
    </div>
  );
}

ReactDOM.render(
  <Hi fname="arsalan" lname="manzoor" />,

  document.querySelector("#root")
);
