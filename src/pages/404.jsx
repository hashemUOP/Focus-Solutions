import React from "react";
import { useNavigate } from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();

  return (
    <div style={{
      height:'100vh',
      width:'100vw',
      backgroundColor:'lightgrey',
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
    }}>
      <h1>404 page not found</h1>
      <p
        style={{
          textDecoration:"underline",
          textUnderlineOffset:3,
          cursor:"pointer"
        }}
        onClick={() => navigate("/home")}
      >
        return home
      </p>
    </div>
  );
}
