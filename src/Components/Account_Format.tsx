import { CSSProperties } from "react";
import React, { useRef, RefObject, useEffect, useState } from "react";


function Account_Style() {

    const Main_Style: CSSProperties = {
        position: "relative",
    };

    const Title_Style: CSSProperties = {
        position: "relative",
        top: "-60px",
        textAlign: "center",
        fontFamily: "verdana",
        fontSize: "35px",
    };

    const Button_Style: CSSProperties={
        position: "relative",
        border: "none",
        backgroundColor: "rgb(125, 151, 253)",
        color: "rgb(255, 255, 255)",
        fontFamily: "verdana",
        fontSize: "14px",
        height: "30px",
        width: "75%",
        left: "50%",
        transform: "translate(-50%, 0%)",
        top: "-30px",
        borderRadius: "5px",
        marginTop: "20px",
        marginBottom: "20px",
    };
    
    const Button_Style_Logout: CSSProperties={
        position: "relative",
        border: "none",
        backgroundColor: "rgb(230, 230, 230)",
        color: "rgb(100, 100, 100)",
        fontFamily: "verdana",
        fontSize: "14px",
        height: "30px",
        width: "75%",
        left: "50%",
        transform: "translate(-50%, 0%)",
        top: "-30px",
        borderRadius: "5px",
        marginTop: "20px",
        marginBottom: "20px",
    };



    return(
        <div style={Main_Style} id="Main_Container">
        <p style={Title_Style}>Account</p>
        <button style={Button_Style}>View Account</button>
        <button style={Button_Style}>Saved</button>
        <button style={Button_Style_Logout}>Logout</button>



        </div>
    );
}

export default Account_Style;