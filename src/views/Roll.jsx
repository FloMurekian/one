import React from "react";

export default function Roll() {

function getRandomInteger(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomInteger(1, 1080);
console.log(randomNumber);

  const [rNumber, setRandomNumber] = React.useState(getRandomInteger(1, 1080));

  const [hover, setHover] = React.useState(false);

  const handleRoll = () => {
    setRandomNumber(getRandomInteger(1, 1080));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h2 style={{ color: "black", fontWeight: "bold", fontSize: "34px", fontFamily: "Arial", justifyContent: "center", display: "flex" }}>Roll my Dice</h2>

<div style={{ color: "black", fontWeight: "bold", fontSize: "64px", fontFamily: "Arial", justifyContent: "center", display: "flex" }}>{rNumber}</div>

      <button
        style={{ backgroundColor: hover ? "grey" : "black", color: "white", fontWeight: "bold", fontSize: "24px", fontFamily: "Arial", padding: "10px 20px", border: "none", borderRadius: "5px", marginTop: "20px", cursor: "pointer"}}

        onClick={handleRoll}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Roll
      </button>
    </div>
  )
}
