import { CSSProperties } from "react";
import Resize_Saved from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\ResizeImg.png";
import Exit_Saved from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\Images\\Exit.png";
import React, { useRef, RefObject, useEffect, useState } from "react";


function Account_Style() {

    function updateStyles_Account(){
        const screenWidth_Acc = window.innerWidth;
       
        const Small_Pass_Title: CSSProperties = {
            left: "10%",
            top: "440px",
        };

        const Small_Pass_Text: CSSProperties = {
            left: "10%",
            top: "470px",
        };

        const Small_Pass_Edit: CSSProperties = {
            left: "10%",
            top: "500px",
        };

        const Small_Delete_Acc: CSSProperties = {
            top: "580px",
            paddingBottom: "50px",
        };
    
        if(screenWidth_Acc <= 900){
            Object.assign(Pass_Title, Small_Pass_Title);
            Object.assign(Pass_Data, Small_Pass_Text);
            Object.assign(Edit_Pass, Small_Pass_Edit);
            Object.assign(Delete_Account, Small_Delete_Acc);
        };

    }

    
    function closeTab(){
        const MainContainer = document.getElementById("Account_React");
        const Account_Container = document.getElementById("Login_Container");
        if(MainContainer) MainContainer.style.left = "200%";
        if(Account_Container) Account_Container.style.visibility = "visible";
    }


    const Main_Style: CSSProperties = {
        position: "relative",
    };

    const Exit_Img_Style: CSSProperties = {
        position: "absolute",
        right: "5px",
        top: "2px",
        cursor: "pointer",
        zIndex: "10",

    };

    const Title_Style: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "25px",
        color: "rgb(10, 10, 10)",
        textAlign: "center",
        position: "relative",
        top: "5px",
        zIndex: "9",
    };
    
    const Created_Title: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "18px",
        color: "rgb(80, 80, 80)",
        position: "absolute",
        top: "70px",
        left: "10%",
    };

     
    const Created_Date: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "16px",
        color: "rgb(10, 10, 10)",
        position: "absolute",
        top: "100px",
        left: "10%",
    };

    const Saved_Title: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "18px",
        color: "rgb(80, 80, 80)",
        position: "absolute",
        top: "70px",
        left: "40%",
    };

     
    const Saved_Date: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "16px",
        color: "rgb(10, 10, 10)",
        position: "absolute",
        top: "100px",
        left: "40%",
    };

    
    const Line: CSSProperties = {
       position: "absolute",
       top: "170px",
       width: "90%",
       borderTop: "1px solid rgb(80, 80, 80)",
       left: "50%",
       transform: "translate(-50%, 0%)",
    };

    
    const Security_Style: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "25px",
        color: "rgb(10, 10, 10)",
        left: "10%",
        position: "absolute",
        top: "220px",
        zIndex: "9",
    };

    const Email_Title: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "18px",
        color: "rgb(80, 80, 80)",
        position: "absolute",
        top: "300px",
        left: "10%",
    };

     
    const Email_Data: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "16px",
        color: "rgb(10, 10, 10)",
        position: "absolute",
        top: "330px",
        left: "10%",
    };  

    const Edit_Email: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "16px",
        color: "rgb(80, 80, 80)",
        position: "absolute",
        top: "360px",
        left: "10%",
        textDecoration: "underline",
        cursor: "pointer",
    };  


    const Pass_Title: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "18px",
        color: "rgb(80, 80, 80)",
        position: "absolute",
        top: "300px",
        left: "40%",
    };

     
    const Pass_Data: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "16px",
        color: "rgb(10, 10, 10)",
        position: "absolute",
        top: "330px",
        left: "40%",
    };  

    const Edit_Pass: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "16px",
        color: "rgb(80, 80, 80)",
        position: "absolute",
        top: "360px",
        left: "40%",
        textDecoration: "underline",
        cursor: "pointer",
    };  


    const Delete_Account: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "16px",
        color: "rgb(80, 80, 80)",
        position: "absolute",
        top: "460px",
        left: "10%",
        textDecoration: "underline",
        cursor: "pointer",
    };  

    updateStyles_Account();

    return(
        <div style={Main_Style} id="Main_Container">
        <img src={Exit_Saved} style={Exit_Img_Style} onClick={closeTab}/>
        <h1 style={Title_Style}>Account Details</h1>
        <p style={Created_Title}>Created</p>
        <p style={Created_Date} id="Account_Creation"></p>

        <p style={Saved_Title}>Saved</p>
        <p style={Saved_Date} id="Saved_Number"></p>

        <p style={Line}></p>

        <h1 style={Security_Style}>Security</h1>

        <p style={Email_Title}>Email</p>
        <p style={Email_Data} id="Email"></p>
        <p style={Edit_Email}>Edit</p>

        <p style={Pass_Title}>Password</p>
        <p style={Pass_Data} id="Password"></p>
        <p style={Edit_Pass}>Edit</p>

        <p style={Delete_Account}>Delete Account</p>
        </div>
    );
}

export default Account_Style;