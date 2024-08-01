import { CSSProperties } from "react";
import React, { useRef, RefObject, useEffect, useState } from "react";
import Cookies from 'js-cookie';

function Account_Style() {


    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    
      useEffect(() => {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        // Cleanup function to remove the event listener when component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); 
   

    function Account_Information() {
        const Login_Cookie = Cookies.get("Login_Token"); //Getting Login Token
        if(Login_Cookie === null){

        }else if(Login_Cookie !== null){
            const emailData = Login_Cookie;

            //console.log("Cookie from Account_Format.tsx : ", emailData);
    
            fetch('http://50.18.247.63:5000/api/account_information', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: emailData }), //sends login token to server.js
            })
            .then((response) => {
                if (response.ok) {
                //console.log("From Account React: Request sent"); // Sent to the server
                return response.json();
                } else {
                //console.log("From Account React: Request failed"); // Failed to send to the server
                return response.json();
                }
            })
            .then((data) => {
                if (data.success === 1) {
    
                    const Date = document.getElementById("Account_Creation"); //writes email and date accordingly 
                    if(Date) Date.textContent = data.date;
                    const Email = document.getElementById("Email");
                    if(Email) Email.textContent = data.email;
    
                    //console.log("From Account, Success token: ",data.email);
                    //console.log("From Account, Success token: ",data.date);
                } else if (data.success === 0) {
                // Login failed
                }
            });
        }
        
    }

  Account_Information();



    function Toggle_Delete_Account(){
        const Confirm_Delete_Account_Container = document.getElementById("Delete_Account_Confirm");
        if(Confirm_Delete_Account_Container) Confirm_Delete_Account_Container.style.display = "block";
    }

    function Delete_Account_Deny(){
        const Confirm_Delete_Account_Container = document.getElementById("Delete_Account_Confirm");
        if(Confirm_Delete_Account_Container) Confirm_Delete_Account_Container.style.display = "none";
    }



    function Delete_Account_Confirm(){
        const Loader = document.getElementById("Loading_Spinner_Delete"); //Loading Animation
        if(Loader){ 
            Loader.style.display = "block";
            const Get_Email = document.getElementById("Email");
            if(Get_Email){
            const Email = Get_Email.textContent;
            //console.log("Email from textContent: ",Email); //Text from email feild, previously verified


            
            fetch('http://50.18.247.63:5000/api/delete_saved_pics_vids', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: Email }), //sends login token to server.js
                })
                .then((response) => {
                if (response.ok) {
                    //console.log("request from delete saved pics and vids sent");
                    return response.json();
                } else {
                    //console.log("request from delete saved pics and vids did not send");
                    return response.json();
            
                }
                })
                .then((data) => {
                if (data.success === 1) { //Accounts Deleted
                    //console.log("Accounts in saved deleted");
                } else if (data.success === 0) {
                    //console.log("none were found or something went wrong");
                } else {
                    //console.log("something went wrong");
                }
            
            });

            fetch('http://50.18.247.63:5000/api/delete_account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: Email }), //sends login token to server.js
                })
                .then((response) => {
                    if (response.ok) {
                    //console.log("From Delete Account: Request sent"); // Sent to the server
                    return response.json();
                    } else {
                        const Delete_Fail = document.getElementById("Deleted_Account_0");
                        if (Delete_Fail) Delete_Fail.style.display = "block";
                        setTimeout(function () {
                            if (Delete_Fail) Delete_Fail.style.display = 'none';
                        }, 4000);
                    //console.log("From Delete Account: Request failed"); // Failed to send to the server
                    return response.json();
                    
                    }
                })
                .then((data) => {
                    if (data.success === 1) { //Account Deleted
                        const Confirm_Delete = document.getElementById("Delete_Account_Confirm");
                        const Loading_Spinner_D = document.getElementById("Loading_Spinner_Delete");
                        const Account_Tab = document.getElementById("Account_React");
                        const Delete_Success = document.getElementById("Deleted_Account_1");

                        const Blur_Page_d = document.getElementById("Blur_Webpage");
                        const Login_Container_d  = document.getElementById("Login_Container");
                        const Help_Container_d  = document.getElementById("Help_Container");
                        const body_d = document.body;
                        if (Blur_Page_d) Blur_Page_d .style.zIndex = "0";
                        if (Blur_Page_d) Blur_Page_d.style.backdropFilter = "blur(0px) brightness(100%)";
                        if (Login_Container_d) Login_Container_d .style.zIndex = "0";
                        if (Login_Container_d) Login_Container_d .style.visibility = "visible";
                        if (Help_Container_d) Help_Container_d .style.display = "none";
                        if (body_d) body_d.style.overflowY = "auto";
                        if (Delete_Success) Delete_Success.style.display = "block";
                        if(Account_Tab) Account_Tab.style.left = "200%";
                        if(Loading_Spinner_D) Loading_Spinner_D.style.display = "none";
                        if(Confirm_Delete) Confirm_Delete.style.display = "none";
                        setTimeout(function () {
                            if (Delete_Success) Delete_Success.style.display = 'none';
                        }, 4000);
                        //console.log("Deleted");
                        Cookies.remove('Login_Token');
                    } else if (data.success === 0) {
                        const Delete_Fail = document.getElementById("Deleted_Account_0");
                        if (Delete_Fail) Delete_Fail.style.display = "block";
                        setTimeout(function () {
                            if (Delete_Fail) Delete_Fail.style.display = 'none';
                        }, 4000);
                        //console.log("Failed");
                    }else{
                        const Delete_Fail = document.getElementById("Deleted_Account_0");
                        if (Delete_Fail) Delete_Fail.style.display = "block";
                        setTimeout(function () {
                            if (Delete_Fail) Delete_Fail.style.display = 'none';
                        }, 4000);
                        //console.log("Something happened");
                    }
                
                });



            }
        }
    }


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
        const nav = document.getElementById("Main_Nav");
        if(MainContainer) MainContainer.style.display = "none";
        if(Account_Container) Account_Container.style.visibility = "visible";
        if(nav)nav.style.display = "flex";
        
    }


    const Main_Style: CSSProperties = {
        position: "relative",
        top: "60px",
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
        color: "rgb(255, 255, 255)",
        textAlign: "center",
        position: "relative",
        top: "5px",
        zIndex: "9",
    };
    
    const Created_Title: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "18px",
        color: "rgb(200, 200, 200)",
        position: "absolute",
        top: "70px",
        left: "10%",
    };

     
    const Created_Date: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "16px",
        color: "rgb(255, 255, 255)",
        position: "absolute",
        top: "100px",
        left: "10%",
    };

    const Saved_Title: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "18px",
        color: "rgb(200, 200, 200)",
        position: "absolute",
        top: "70px",
        left: "40%",
    };

     
    const Saved_Date: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "16px",
        color: "rgb(255, 255, 255)",
        position: "absolute",
        top: "100px",
        left: "40%",
    };

    
    const Line: CSSProperties = {
       position: "absolute",
       top: "170px",
       width: "80%",
       borderTop: "1px solid rgb(200, 200, 200)",
       left: "50%",
       transform: "translate(-50%, 0%)",
    };

    
    const Security_Style: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "25px",
        color: "rgb(255, 255, 255)",
        left: "10%",
        position: "absolute",
        top: "220px",
        zIndex: "9",
    };

    const Email_Title: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "18px",
        color: "rgb(200, 200, 200)",
        position: "absolute",
        top: "300px",
        left: "10%",
    };

     
    const Email_Data: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "16px",
        color: "rgb(255, 255, 255)",
        position: "absolute",
        top: "330px",
        left: "10%",
    };  

    const Edit_Email: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "16px",
        color: "rgb(200, 200, 200)",
        position: "absolute",
        top: "360px",
        left: "10%",
        textDecoration: "underline",
        cursor: "pointer",
    };  


    const Pass_Title: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "18px",
        color: "rgb(200, 200, 200)",
        position: "absolute",
        top: "300px",
        left: "40%",
    };

     
    const Pass_Data: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "16px",
        color: "rgb(255, 255, 255)",
        position: "absolute",
        top: "330px",
        left: "40%",
    };  

    const Edit_Pass: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "16px",
        color: "rgb(200, 200, 200)",
        position: "absolute",
        top: "360px",
        left: "40%",
        textDecoration: "underline",
        cursor: "pointer",
    };  


    const Delete_Account: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "16px",
        color: "rgb(200, 200, 200)",
        position: "absolute",
        top: "460px",
        left: "10%",
        textDecoration: "underline",
        cursor: "pointer",
    };  

    const Delete_Account_Confirm_Style: CSSProperties = {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, 100%)",
        width: "300px",
        height: "180px",
        backgroundColor: "rgb(40, 40, 40)",
        zIndex: "100",
        borderRadius: "5px",
        display: "none",
    }; 

    const Delete_Account_Title: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "16px",
        color: "white",
        position: "relative",
        textAlign: "center",
        marginLeft: "8px",
        marginRight: "8px", 
        top: "15px", 
    }; 

    const Confirmation_Text: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "13px",
        color: "white",
        position: "relative",
        textAlign: "center",
        marginLeft: "8px",
        marginRight: "8px", 
        top: "10px", 
    }; 

    const No_Button: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "13px",
        color: "rgb(100, 100, 100)",
        backgroundColor: "rgb(230, 230, 230)",
        position: "absolute",
        textAlign: "center",
        border: "none",
        borderRadius: "5px",
        width: "40%",
        height: "25px",
        left: "25px",
        bottom: "25px",
    }; 

    const Yes_Button: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "13px",
        color: "white",
        position: "absolute",
        backgroundColor: "rgb(125, 151, 253)",
        textAlign: "center",
        right: "25px",
        border: "none",
        borderRadius: "5px",
        width: "40%",
        height: "25px",
        bottom: "25px",
    }; 

    
  const Loading_Spinner_Delete: CSSProperties = {
    top: "70px",
    left: "43%",
    display: "none",
   
  };

  const Back_style: CSSProperties ={
    position: "absolute",
    left: "10%",
    color: "rgb(200, 200, 200)",
    fontSize: "15px",
    top: "5px",
    fontFamily: "verdana",
    textDecoration: "underline",
    zIndex: "10",
    cursor: "pointer",
  };

  const footerStyle: CSSProperties = {
    borderTop: '1px solid rgba(255, 255, 255, 1)',
    position: 'absolute',
    top: "800px",
    backgroundColor: 'rgb(15, 15, 15)',
    width: '80%',
    left: "50%",
    transform: "translate(-50%, 0%)",
    height: '180px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(1, 1fr)',

  };

  const titleStyle: CSSProperties = {
    position: 'relative',
    top: '50px',
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const linkStyle: CSSProperties = {
    position: 'relative',
    top: '50px',
    color: 'rgb(220, 220, 220)',
    fontFamily: 'Helvetica',
    fontSize: '12px',
    cursor: 'pointer',
    transition: 'transform 0.1s',
    textAlign: 'center',
  };

  const copyrightStyle: CSSProperties = {
    position: 'absolute',
    top: '65px',
    left: '15px',
    textAlign: 'left',
    color: "rgb(200, 200, 200)",
  };

  const Footer_Title: CSSProperties = {
    position: "absolute",
    color: "rgb(255, 255, 255)",
    fontFamily: "arial",
    letterSpacing: "1px",
    fontSize: "25px",
    fontVariant: "small-caps",
    fontWeight: "bold",
    left: "15px",
    top: "15px",
  };

    updateStyles_Account();

    return(
        <div style={Main_Style} id="Main_Container">

            <div style={Delete_Account_Confirm_Style} id="Delete_Account_Confirm">
                <p style={Delete_Account_Title}>Delete Account</p>
                <p style={Confirmation_Text}>Are you sure you want to delete your account? All your saved pictures and videos will be gone.</p>
                <button style={No_Button} onClick={Delete_Account_Deny}>No</button>
                <button style={Yes_Button} onClick={Delete_Account_Confirm}>Yes</button>
                <div id="Loading_Spinner_Delete" style={Loading_Spinner_Delete} className="loading-spinner"></div>
            </div>
            

            <h1 style={Title_Style}>Account Details</h1>
            <p style={Back_style} onClick={closeTab}>Back</p>
            <p style={Created_Title}>Created</p>
            <p style={Created_Date} id="Account_Creation"></p>

            <p style={Line}></p>

            <h1 style={Security_Style}>Security</h1>

            <p style={Email_Title}>Email</p>
            <p style={Email_Data} id="Email"></p>

            <p style={Pass_Title}>Password</p>
            <p style={Pass_Data} id="Password">Hidden</p>

            <p style={Delete_Account} onClick={Toggle_Delete_Account}>Delete Account</p>
            
            <div id="Footer" className="Scroll_Div" style={footerStyle}>
                    <p style={Footer_Title}>Pixel Peak</p>
                    {/*
                        <div id="Account">
                        <p id="Acc_Title" className="Title_Class_Footer" style={titleStyle}>Account</p>
                        <p className="Footer_Link" id="Login_Link_p" style={linkStyle}>Login</p>
                        </div>

                        <div id="QuickLinks">
                        <p id="Quic_Title" className="Title_Class_Footer" style={titleStyle}>Quick Links</p>
                        <p className="Footer_Link" id="Videos_Link_p" style={linkStyle}>Videos</p>
                        <p className="Footer_Link" id="Photos_Link_p" style={linkStyle}>Photos</p>
                        </div>

                        <div id="About">
                        <p id="Abt_Title" className="Title_Class_Footer" style={titleStyle}>About</p>
                        <p className="Footer_Link" id="Info_Link_p" style={linkStyle}>Information</p>
                        </div>
                        */}
                        <p id="CopyWright" style={copyrightStyle}>
                        Copyright © 2024 Pixel Peak. All Rights Reserved. User Agreement, Privacy,
                        Payments Terms of Use, Cookies and AdChoice. Made By Lukas Leins
                        </p>
            </div>

        </div>
    );
}

export default Account_Style;