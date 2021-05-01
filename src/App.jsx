/*const youtuber = "shubham";
const fav = "reactjs";

function myname() {
  let name = "vinod";
  return name;
}

export default youtuber;

export { fav, myname };  */

import React from "react";
import "./styles.css";
import Heading from "./Heading";
//import myfav, { fav, myname } from "./App";
import * as appp from "./App";
import Card from "./Cards";
import Sdata from "./sdata";
// pure js
//var h2=document.createElement("h2");
//h2.innerHTML="shubham";
//document.getElementById("root").appendChild(h2);

// jsx
const youtuber = "shubham";
const fav = "reactjs";

function myname() {
  let name = "vinod";
  return name;
}

export default youtuber;

const fname = "shubahm";
const sty = { color: "#fa0000", textAlign: "center" };
const lname = "shukla";
const cdate = new Date().toLocaleDateString();
const linkp = "https://loremipsum.io/";
const linkof =
  "https://loremipsum.io/assets/images/lorem-ipsum-generator-cicero-engraving.png";
const oldarray = ["shubham", "kumar", "shukla"];
console.log(oldarray[1]);
console.log(oldarray[0]);

const newarr = oldarray.map(function (cvalue, i, arr) {
  return i + ":" + cvalue + "newww:--- : " + "map apply on which array" + arr;
});

console.log(newarr);

console.log(oldarray);

const aray = [
  { id: 1, name: "shubham" },
  { id: 2, name: "sumit" }
];
const newaray = aray.map((cvalue) => {
  return `my name is ${cvalue.name}`;
});
console.log(newaray);
//document.getElementById("showarraydata").innerHTML = newaray;
// nothing changes in old array
const mystyle = {
  weigth: "50%",
  height: "50%"
};
//[
//<h1> shubham </h1>,
//<p> hi </p>
// ],                // you can use array style
//<React.Fragment>
//<h1> hi you are learning frangment </h1>,
//<p> paragrapg </p>

// </React.Fragment>,
function ncard(val) {
  return (
    <Card
      series={val.series}
      name={val.name}
      watch={val.watch}
      imgsrc={val.imgsrc}
    />
  );
}
const favseries = "netflix";
const Favs = () => {
  if (favseries === "netflix_not") {
    return (
      <Card
        series={Sdata[0].series}
        name={Sdata[0].name}
        watch={Sdata[0].watch}
        imgsrc={Sdata[0].imgsrc}
      />
    );
  } else {
    return (
      <Card
        series={Sdata[1].series}
        name={Sdata[1].name}
        watch={Sdata[1].watch}
        imgsrc={Sdata[1].imgsrc}
      />
    );
  }
};
function App() {
  return (
    <>
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
      <Favs />
    </>
  );
}
export { fav, myname, App };
//ReactDOM.render(
// React.createElement("h1", null, "hello"),
//document.getElementById("root")
//);
