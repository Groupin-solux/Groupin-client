import React, { useState } from "react";
import './CSS/Now.css';

function Now({ text, bgcolor, changeValue }) {
  return (
    <button
      onClick={changeValue}
      style={{
        color: bgcolor ? "red" : "blue",
        backgroundColor: "transparent",
        color: "dimgray",
        fontSize: "20px",
        fontWeight: "bold",
        padding: "5px",
        border: 0,
        borderRadius: 10,
      }}
    >
      {text}
    </button>
  );
};

export default Now;
