import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #2c3e50, #4ca1af)", // gradient background
        color: "white",
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "center", // horizontal center
        alignItems: "center",     // vertical center
        boxShadow: "0 -2px 8px rgba(0,0,0,0.3)", // top shadow
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        letterSpacing: "2px"
      }}
    >
      <h2 style={{ margin: 0 }}>🌟 FOOTER SECTION 🌟</h2>
    </footer>
  );
}
