import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import * as apps from "./App";
ReactDOM.render(
  <apps.App />,
  document.getElementById("root")

  /* <>
    <Heading />
    <h1 contentEditable="true">
      {" "}
      {appp.default} {appp.fav} {appp.myname()} learning frangment my name
      {fname}
    </h1>
    <p style={{ color: "#fa0000", textAlign: "center" }}> paragrapg </p>
    <h2 style={sty}> {`this is literals of ${fname} ${lname}`} </h2>
    <h3 className="date"> current dats is : {cdate} </h3>
    <a href={linkp} target="_blank">
      <img src={linkof} alt="myimage" />
    </a>
    {Sdata.map(ncard)}
  </> ,document.getElementById("root")  */
);

//ReactDOM.render(
// React.createElement("h1", null, "hello"),
//document.getElementById("root")
//);
