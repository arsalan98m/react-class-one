import React from "react";
import "./App.css";
import Dinner from "./dinner";

function App() {
  return (
    <div className="App">
      <Dinner dishName="nihari" sweets="custer" />

      <hr />

      <Dinner dishName="chicken karhai" sweets="kheer" />
    </div>
  );
}

export default App;
