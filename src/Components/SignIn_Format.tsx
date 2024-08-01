import { CSSProperties } from "react";
import React, { useRef, RefObject, useEffect, useState } from "react";

import Cookies from 'js-cookie';

function SignIn_Style() {


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


  function formatDateAsZeroes() {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0'); // Get day with leading zero
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Get month with leading zero
    const year = today.getFullYear().toString(); // Get full year
  
    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
  }

  function Login_Communication(){ //Logging in
    const body = document.body;
    const Login_Tab = document.getElementById("Login_Container");
    const Blur_Page = document.getElementById("Blur_Webpage");
    const Help_Container = document.getElementById("Help_Container");

    const success = document.getElementById("Login_1");
    const fail = document.getElementById("Login_0");
    const email_input = document.getElementById("Email_Input") as HTMLInputElement;
    const emailData = email_input.value;
    const pass_input = document.getElementById("Password_Input") as HTMLInputElement;
    const passData = pass_input.value;
    const sign_button = document.getElementById("Password_Input_button");

    if ((emailData == "") && (passData == "")){ //empty input feild
      email_input.style.backgroundColor = "rgb(230, 0, 0, .5)";
      pass_input.style.backgroundColor = "rgb(230, 0, 0, .5)";
      setTimeout(function () {
   
        email_input.style.backgroundColor = "rgb(230, 230, 230)";
        pass_input.style.backgroundColor = "rgb(230, 230, 230)";
      }, 4000);
    } else if(emailData == ""){//empty input feild
      email_input.style.backgroundColor = "rgb(230, 0, 0, .5)"
      setTimeout(function () {
        email_input.style.backgroundColor = "rgb(230, 230, 230)";
      }, 4000);
    }else if(passData == ""){//empty input feild
      pass_input.style.backgroundColor = "rgb(230, 0, 0, .5)"
      setTimeout(function () {
        pass_input.style.backgroundColor = "rgb(230, 230, 230)";
      }, 4000);
    } else{
      if(sign_button) sign_button.textContent = ""; //Express server communication
      if(sign_button) sign_button.textContent = "Signing in...";
      fetch('http://50.18.247.63:5000/api/login', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailData, password : passData }),
    })
        .then(response => {
            if (response.ok) {
                //console.log("From Sign React: Request sent"); //Sent to server
                return response.json(); 
            } else {
                //console.log("From Sign React: Request failed"); //Failed to send server
                return response.json(); 
            }
        })
        .then(data => {
            if (data.success === 1) { //Login successful
              const login_token = data.token;
              //console.log("Token from Sign.tsx: ",login_token);
              Cookies.set('Login_Token', login_token, { path: '/' });
  
              if(pass_input)pass_input.value = "";
              if(email_input)email_input.value = "";
              if(body) body.style.overflowY = "auto";
              if(Login_Tab){ 
                Login_Tab.style.display = "none"; //closes login tab
                Login_Tab.style.zIndex = "0"; 
              }
              if(Blur_Page){ 
                Blur_Page.style.zIndex = "0";
                Blur_Page.style.backdropFilter = "blur(0px) brightness(100%)";
              }
              if(Help_Container) Help_Container.style.display = "none";
              if(sign_button) sign_button.textContent = ""; 
              if(sign_button) sign_button.textContent = "Sign In";
                if (success) success.style.display = "block";
                //console.log("Success in Server");
                setTimeout(function () {
                    if (success) success.style.display = 'none';
                    window.location.reload();
                }, 4000);
            } else if (data.success === 0) { //Login failed
              if(sign_button) sign_button.textContent = ""; 
              if(sign_button) sign_button.textContent = "Sign In";
                if (fail) fail.style.display = "block";
                //console.log("Failed in Server");
                setTimeout(function () {
                    if (fail) fail.style.display = 'none';
                }, 4000);
            }
        })
        .catch(error => { //catch error with response
          if(sign_button) sign_button.textContent = ""; 
              if(sign_button) sign_button.textContent = "Sign In";
            if (fail) fail.style.display = "block";
            //console.error("Server issue: " + error);
            setTimeout(function () {
                if (fail) fail.style.display = 'none';
            }, 4000);
        });
    }

  }


  function Create_Account_Communication(){ //Creating account
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

    const create_account_button = document.getElementById("Create_Account_button");

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
        if(create_account_button)create_account_button.textContent = "";
        if(create_account_button)create_account_button.textContent = "Creating Account..."; //Loading icon
        const formattedDate = formatDateAsZeroes();
        fetch('http://50.18.247.63:5000/api/create_account', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email_create: emailData_c, password_create : passData_c, date_create: formattedDate  }),
        })
        .then(response => {
            if (response.ok) {
                //console.log("From Sign React: Request sent"); //Sent to express server
                return response.json(); 
            } else {
                //console.log("From Sign React: Request failed"); //Failed to send
                return response.json(); 
            }
        })
        .then(data => {
            if (data.message === 1) { //Created account successful

              const login_token = data.token;
              Cookies.set('Login_Token', login_token, { path: '/' });

              if(Repass_input_c) Repass_input_c.value = "";
              if(pass_input_c) pass_input_c.value = "";
              if(email_input_c) email_input_c.value = "";
              if(create_account_button)create_account_button.textContent = "";
              if(create_account_button)create_account_button.textContent = "Create Account";
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
                //console.log("Success in Server");
                setTimeout(function () {
                    if (success_c) success_c.style.display = 'none';
                    window.location.reload();
                }, 4000);
                
            } else if (data.message === 0) { //Create account failed
              if(create_account_button)create_account_button.textContent = "";
              if(create_account_button)create_account_button.textContent = "Create Account";
                if (fail_c) fail_c.style.display = "block";
                //console.log("Failed in Server");
                setTimeout(function () {
                    if (fail_c) fail_c.style.display = 'none';
                }, 4000);
            }else if (data.message === 3) { //Create account failed - Email already associated with another account
              if(create_account_button)create_account_button.textContent = "";
              if(create_account_button)create_account_button.textContent = "Create Account";
              if (  fail_success_c)   fail_success_c.style.display = "block";
              //console.log("Failed in Server");
              setTimeout(function () {
                  if (  fail_success_c)  fail_success_c.style.display = 'none';
              }, 4000);
          }
        })
        .catch(error => { //catch error with response
          if(create_account_button)create_account_button.textContent = "";
          if(create_account_button)create_account_button.textContent = "Create Account";
            if (fail_c) fail_c.style.display = "block";
            //console.error("Server issue: " + error); //Create account failed - server issue
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
    backgroundColor: "rgb(45, 101, 255)",
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
    backgroundColor: "rgb(45, 101, 255)",
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

  const Loading_Spinner_L: CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "45%",
    transform: "translate(-50%, -50%)",
    zIndex: "9",
    display: "none",
   
  };
 
   const Loading_Spinner_C: CSSProperties = {
    top: "230px",
    left: "180px",
    zIndex: "9",
    display: "none",
   
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
        <button placeholder="" style={Login_Button_Style} id="Password_Input_button" onClick={Login_Communication} >Sign In</button>
        <p style={Text_Title_Style_Or} ></p>
        <button placeholder="" style={CreateAcc_Button_Style} id="Password_Input" onClick={toggleDivs} >Create Account</button>
        <div id="Loading_Spinner_L" style={Loading_Spinner_L} className="loading-spinner"></div>
      </div>
      <div id="CreateAcc_Container" style={{ display: isDiv1Visible ? 'none' : 'block' }}>
      <p style={CreateAcc_Title}>Create Account</p>
        <p style={Text_Title_Style_Email} >Email</p>
        <input type="text" placeholder="" style={Input_Box_Style_Email} id="Email_Input_CreateAcc"></input>
        <p style={Text_Title_Style_Pass} >Password</p>
        <input type="password" placeholder="" style={Input_Box_Style_Pass} id="Password_Input_CreateAcc" ></input>
        <p style={Text_Title_Style_RePass_CreateAcc} >Re-enter password</p>
        <input type="password" placeholder="" style={Input_Box_Style_RePass} id="RePassword_Input_CreateAcc" ></input>
        <button placeholder="" style={Login_Button_Style_CreateAcc} id="Create_Account_button" onClick={Create_Account_Communication} >Create Account</button>
        <p style={Login_CreateAcc} onClick={toggleDivs}>Login</p>
        <div id="Loading_Spinner_C" style={Loading_Spinner_C} className="loading-spinner"></div>
      </div>
    </div>
    );
}

export default SignIn_Style;
