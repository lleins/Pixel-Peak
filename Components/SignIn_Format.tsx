import { CSSProperties } from "react";
import React, { useRef, RefObject, useEffect, useState } from "react";
import mongoose, { ConnectOptions } from 'mongoose';

function SignIn_Style() {

  function Login_Communication(){
    
    const success = document.getElementById("Login_1");
    const fail = document.getElementById("Login_0");
    const email_input = document.getElementById("Email_Input") as HTMLInputElement;
    const emailData = email_input.value;
    const pass_input = document.getElementById("Password_Input") as HTMLInputElement;
    const passData = pass_input.value;

    if ((emailData == "") && (passData == "")){
      email_input.style.backgroundColor = "rgb(230, 0, 0, .5)";
      pass_input.style.backgroundColor = "rgb(230, 0, 0, .5)";
      setTimeout(function () {
   
        email_input.style.backgroundColor = "rgb(230, 230, 230)";
        pass_input.style.backgroundColor = "rgb(230, 230, 230)";
      }, 4000);
    } else if(emailData == ""){
      email_input.style.backgroundColor = "rgb(230, 0, 0, .5)"
      setTimeout(function () {
        email_input.style.backgroundColor = "rgb(230, 230, 230)";
      }, 4000);
    }else if(passData == ""){
      pass_input.style.backgroundColor = "rgb(230, 0, 0, .5)"
      setTimeout(function () {
        pass_input.style.backgroundColor = "rgb(230, 230, 230)";
      }, 4000);
    } else{
      fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailData, password : passData }),
    })
        .then(response => {
            if (response.ok) {
                console.log("From Sign React: Request sent");
                return response.json(); // This returns a promise
            } else {
                console.log("From Sign React: Request failed");
                return response.json(); // This also returns a promise
            }
        })
        .then(data => {
            if (data.success === 1) {
                if (success) success.style.display = "block";
                console.log("Success in Server");
                setTimeout(function () {
                    if (success) success.style.display = 'none';
                }, 4000);
            } else if (data.success === 0) {
                if (fail) fail.style.display = "block";
                console.log("Failed in Server");
                setTimeout(function () {
                    if (fail) fail.style.display = 'none';
                }, 4000);
            }
        })
        .catch(error => {
            if (fail) fail.style.display = "block";
            console.error("Server issue: " + error);
            setTimeout(function () {
                if (fail) fail.style.display = 'none';
            }, 4000);
        });
    }

  }


  function Create_Account_Communication(){
    const body = document.body;
    const Login_Tab = document.getElementById("Login_Container");
    const Blur_Page = document.getElementById("Blur_Webpage");
    const Help_Container = document.getElementById("Help_Container");
    const success_c = document.getElementById("Account_1");
    const fail_success_c = document.getElementById("Account_01");
    const fail_c = document.getElementById("Account_0");
    const email_input_c = document.getElementById("Email_Input_CreateAcc") as HTMLInputElement;
    const emailData_c = email_input_c.value;
    const pass_input_c = document.getElementById("Password_Input_CreateAcc") as HTMLInputElement;
    const passData_c = pass_input_c.value;
    const Repass_input_c = document.getElementById("RePassword_Input_CreateAcc") as HTMLInputElement;
    const RepassData_c = Repass_input_c.value;

    if ((emailData_c == "") && (passData_c == "") && (RepassData_c == "") ){ //Re-enter Password, Password, and email Feild Empty
      email_input_c.style.backgroundColor = "rgb(230, 0, 0, .5)";
      pass_input_c.style.backgroundColor = "rgb(230, 0, 0, .5)";
      Repass_input_c.style.backgroundColor = "rgb(230, 0, 0, .5)";
      setTimeout(function () {
   
        email_input_c.style.backgroundColor = "rgb(230, 230, 230)";
        pass_input_c.style.backgroundColor = "rgb(230, 230, 230)";
        Repass_input_c.style.backgroundColor = "rgb(230, 230, 230)";
      }, 4000);
    } else if(emailData_c == ""){//Email Feild Empty
      email_input_c.style.backgroundColor = "rgb(230, 0, 0, .5)"
      setTimeout(function () {
        email_input_c.style.backgroundColor = "rgb(230, 230, 230)";
      }, 4000);
    }else if(passData_c == ""){//Password Feild Empty
      pass_input_c.style.backgroundColor = "rgb(230, 0, 0, .5)"
      setTimeout(function () {
        pass_input_c.style.backgroundColor = "rgb(230, 230, 230)";
      }, 4000);
    } else if(RepassData_c == ""){//Re-enter Password Feild Empty
      Repass_input_c.style.backgroundColor = "rgb(230, 0, 0, .5)"
      setTimeout(function () {
        Repass_input_c.style.backgroundColor = "rgb(230, 230, 230)";
      }, 4000);
    }else if((emailData_c == "") && (RepassData_c == "")){ //Re-enter Password and Email Feild Empty
      Repass_input_c.style.backgroundColor = "rgb(230, 0, 0, .5)"
      email_input_c.style.backgroundColor = "rgb(230, 0, 0, .5)"
      setTimeout(function () {
        Repass_input_c.style.backgroundColor = "rgb(230, 230, 230)";
        email_input_c.style.backgroundColor = "rgb(230, 230, 230)";
      }, 4000);
    }else if((emailData_c == "") && (passData_c == "")){ //Password and Email Feild Empty
      pass_input_c.style.backgroundColor = "rgb(230, 0, 0, .5)"
      email_input_c.style.backgroundColor = "rgb(230, 0, 0, .5)"
      setTimeout(function () {
        pass_input_c.style.backgroundColor = "rgb(230, 230, 230)";
        email_input_c.style.backgroundColor = "rgb(230, 230, 230)";
      }, 4000);
    }else if((RepassData_c == "") && (passData_c == "")){ //Password and Re-enter Password feild empty
      Repass_input_c.style.backgroundColor = "rgb(230, 0, 0, .5)"
      pass_input_c.style.backgroundColor = "rgb(230, 0, 0, .5)"
      setTimeout(function () {
        Repass_input_c.style.backgroundColor = "rgb(230, 230, 230)";
        pass_input_c.style.backgroundColor = "rgb(230, 230, 230)";
      }, 4000);
    }else{ //If all feilds are entered
      if(RepassData_c != passData_c){ //If Passwords don't match
        Repass_input_c.style.backgroundColor = "rgb(230, 0, 0, .5)"
        pass_input_c.style.backgroundColor = "rgb(230, 0, 0, .5)"
        setTimeout(function () {
          Repass_input_c.style.backgroundColor = "rgb(230, 230, 230)";
          pass_input_c.style.backgroundColor = "rgb(230, 230, 230)";
      }, 4000);
      }else if(RepassData_c == passData_c){ //If Passwords match
        fetch('http://localhost:5000/api/create_account', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email_create: emailData_c, password_create : passData_c }),
        })
        .then(response => {
            if (response.ok) {
                console.log("From Sign React: Request sent");
                return response.json(); // This returns a promise
            } else {
                console.log("From Sign React: Request failed");
                return response.json(); // This also returns a promise
            }
        })
        .then(data => {
            if (data.message === 1) { //Created account
              if(body) body.style.overflowY = "auto";
              if(Login_Tab){ 
                Login_Tab.style.display = "none";
                Login_Tab.style.zIndex = "0";
              }
              if(Blur_Page){ 
                Blur_Page.style.zIndex = "0";
                Blur_Page.style.backdropFilter = "blur(0px) brightness(100%)";
              }
              if(Help_Container) Help_Container.style.display = "none";
                if (success_c) success_c.style.display = "block";
                console.log("Success in Server");
                setTimeout(function () {
                    if (success_c) success_c.style.display = 'none';
                }, 4000);
            } else if (data.message === 0) { //Create account failed
                if (fail_c) fail_c.style.display = "block";
                console.log("Failed in Server");
                setTimeout(function () {
                    if (fail_c) fail_c.style.display = 'none';
                }, 4000);
            }else if (data.message === 3) { //Create account failed - Email already associated with another account
              if (  fail_success_c)   fail_success_c.style.display = "block";
              console.log("Failed in Server");
              setTimeout(function () {
                  if (  fail_success_c)  fail_success_c.style.display = 'none';
              }, 4000);
          }
        })
        .catch(error => {
            if (fail_c) fail_c.style.display = "block";
            console.error("Server issue: " + error); //Create account failed - server issue
            setTimeout(function () {
                if (fail_c) fail_c.style.display = 'none';
            }, 4000);
        });
    }
      }
  }


  const MainContainer: CSSProperties={
    position: "relative",
  }

  const LoginStyle: CSSProperties={
    display: "block",
    height: "330px",
  };
  
  const SignIn_Title: CSSProperties={
    position: "relative",
    color: "rgb(10, 10, 10)",
    fontFamily: "verdana",
    fontSize: "35px",
    marginTop: "-90px",
    marginLeft: "20px",
    width: "100px",
  };

  const Text_Title_Style_Email: CSSProperties={
    position: "relative",
    color: "rgb(100, 100, 100)",
    fontFamily: "verdana",
    fontSize: "14px",
    left: "13%",
    top: "10px",
  };

  const Text_Title_Style_Pass: CSSProperties={
    position: "relative",
    color: "rgb(100, 100, 100)",
    fontFamily: "verdana",
    fontSize: "14px",
    left: "13%",
    top: "30px",
  };

  const Input_Box_Style_Email: CSSProperties={
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
    top: "0px",
    borderRadius: "5px",
    transition: ".1s",
  };


  const Input_Box_Style_Pass: CSSProperties={
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
    top: "20px",
    borderRadius: "5px",
    transition: ".1s",
  };


  
  const Login_Button_Style: CSSProperties={
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
    top: "60px",
    borderRadius: "5px",
  };

  const Text_Title_Style_Or: CSSProperties={
    position: "relative",
    color: "rgb(100, 100, 100)",
    fontFamily: "verdana",
    fontSize: "14px",
    top: "85px",
    left: "13%",
    width: "74%",
    borderTop: "1px solid rgb(200, 200, 200)"
  };


  const CreateAcc_Button_Style: CSSProperties={
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
    top: "90px",
    borderRadius: "5px",
  };

  const CreateStyle: CSSProperties={
    display: "none",
  };

  const CreateAcc_Title: CSSProperties={
    position: "relative",
    color: "rgb(10, 10, 10)",
    fontFamily: "verdana",
    fontSize: "35px",
    marginTop: "-70px",
    marginLeft: "20px",
    width: "300px",
  };

  const Login_Button_Style_CreateAcc: CSSProperties={
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
    top: "90px",
    borderRadius: "5px",
  };

  const Text_Title_Style_RePass_CreateAcc: CSSProperties={
    position: "relative",
    color: "rgb(100, 100, 100)",
    fontFamily: "verdana",
    fontSize: "14px",
    left: "13%",
    top: "60px",
  };

  const Login_CreateAcc: CSSProperties={
    position: "relative",
    color: "rgb(100, 100, 100)",
    fontFamily: "verdana",
    fontSize: "14px",
    textAlign: "center",
    top: "100px",
    textDecoration: "underline",
    cursor: "pointer",
    };


  const Input_Box_Style_RePass: CSSProperties={
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
    top: "50px",
    borderRadius: "5px",
  };


  const [isDiv1Visible, setIsDiv1Visible] = useState(true);

  const toggleDivs = () => {
    setIsDiv1Visible((prev) => !prev);
  };



  return (
    <div id="Main_Container" style={MainContainer}>
      <div id="Login_Container" style={{ display: isDiv1Visible ? 'block' : 'none', height: "330px", }}>
        <p style={SignIn_Title}>Login</p>
        <p style={Text_Title_Style_Email} >Email</p>
        <input type="text" placeholder="" style={Input_Box_Style_Email} id="Email_Input" ></input>
        <p style={Text_Title_Style_Pass} >Password</p>
        <input type="password" placeholder="" style={Input_Box_Style_Pass} id="Password_Input" ></input>
        <button placeholder="" style={Login_Button_Style} id="Password_Input" onClick={Login_Communication} >Sign In</button>
        <p style={Text_Title_Style_Or} ></p>
        <button placeholder="" style={CreateAcc_Button_Style} id="Password_Input" onClick={toggleDivs} >Create Account</button>
      </div>
      <div id="CreateAcc_Container" style={{ display: isDiv1Visible ? 'none' : 'block' }}>
      <p style={CreateAcc_Title}>Create Account</p>
        <p style={Text_Title_Style_Email} >Email</p>
        <input type="text" placeholder="" style={Input_Box_Style_Email} id="Email_Input_CreateAcc"></input>
        <p style={Text_Title_Style_Pass} >Password</p>
        <input type="password" placeholder="" style={Input_Box_Style_Pass} id="Password_Input_CreateAcc" ></input>
        <p style={Text_Title_Style_RePass_CreateAcc} >Re-enter password</p>
        <input type="password" placeholder="" style={Input_Box_Style_RePass} id="RePassword_Input_CreateAcc" ></input>
        <button placeholder="" style={Login_Button_Style_CreateAcc} id="Create_Account" onClick={Create_Account_Communication} >Create Account</button>
        <p style={Login_CreateAcc} onClick={toggleDivs}  >Login</p>
        
      </div>
    </div>
    );
}

export default SignIn_Style;
