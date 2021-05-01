import React from "react";
import Images from "./images";
import "./styles.css";
function Card(props) {
  var st = {
    height: "50px",
    width: "100px",
    marginLeft: "50px",
    backgroundColor: "#22aa58",
    borderRadius: "100px",
    textShadowColor: "yellow",
    fontSize: "20px"
  };

  return (
    <>
      <div
        className="box-shadow"
        style={{
          backgroundColor: "slateblue",
          borderRadius: "20px",
          height: "50%",
          margin: "15px"
        }}
      >
        <div>
          <img
            src={props.imgsrc}
            alt="shubham"
            //className="card_img"
            style={{
              height: "200px",
              marginTop: "10px",
              width: "200px",
              borderRadius: "30px",
              boxShadow: "1px 5px 10px 1px #050101",
              margin: "10px"
            }}
          />
          <Images src1={props.imgsrc} />
          <div
            //className="card_info"
            style={{
              backgroundColor: "darkmagenta",
              borderRadius: "20px",
              marginRight: "170px",
              marginLeft: "15px",
              marginTop: "15px",
              marginBottom: "10px",
              marginLeft: "10px",
              width: "222px",
              boxShadow: "1px 10px 12px 1px #050101"
            }}
          >
            <span
              //className="card_category"
              style={{
                backgroundColor: "red",
                fontSize: "20px",
                textAlign: "centre",
                margin: "8px",
                borderInlineWidth: "6PX",
                color: "#FFFFFF",
                fontFamily: "Times New Roman",
                paddingLeft: 5,
                paddingRight: 0,
                textShadowColor: "#585858",
                textShadowOffset: { width: 5, height: 5 },
                textShadowRadius: 5,
                borderRadius: "5px"
              }}
            >
              {" "}
              {props.series}{" "}
            </span>
            <h3
              // className="card_title"
              style={{
                marginLeft: "70px",
                backgroundColor: "non",
                borderRadius: "5px",
                marginRight: "250px",
                fontFamily: "sans-serif"
              }}
            >
              {" "}
              <h4 style={{ color: "white" }}>{props.name}</h4>{" "}
            </h3>

            <a
              href="https://www.netflix.com/in/title/80990668?source=35"
              target="_blank"
            >
              <button style={st}> {props.watch} </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
