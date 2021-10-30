import React from "react";
import ReactStars from "react-stars";
 
function RatingStars({ nbStars }) {
  return (
    <div className="App">
      <ReactStars
        count={5}
        value={nbStars}
        edit={false}
        size={25}
        color2="orange"
        color1="gray"
      />
    </div>
  );
}

export default RatingStars;
