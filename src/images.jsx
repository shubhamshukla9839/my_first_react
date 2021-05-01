import React from "react";

const Images = (props) => {
  return (
    <img
      src={props.src1}
      alt="shubham"
      style={{
        height: "200px",
        marginTop: "10px",
        width: "200px",
        borderRadius: "30px",
        boxShadow: "1px 5px 10px 1px #050101",
        margin: "10px"
      }}
    />
  );
};
export default Images;
