import React from "react";

function Gate(props) {
  return <p>Gate is {props.isOpen === true ? "open" : "close"}</p>;
}

export default Gate;
