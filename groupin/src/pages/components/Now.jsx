import React, { useState } from "react";
import './Now.css';

function Now({ text, bgcolor, changeValue }) {
  return (
    <button
      onClick={changeValue}
      style={{
        color: bgcolor ? "red" : "blue",
        color: "blue",
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
