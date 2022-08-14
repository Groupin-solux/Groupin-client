import React from 'react';

function Button({ text }) {
    return (
        <button
            style={{
                backgroundColor: "#F9EDDE",
                color: "brown",
                fontSize: "15px",
                fontWeight: "bold",
                padding: "2px 3px",
                borderRadius: 10,
                borderColor: "brown",
                fontFamily: 'Maplestroy-B',
                width: "80px",
            }}
        >
            {text}

        </button>
        
    );
}

export default Button;