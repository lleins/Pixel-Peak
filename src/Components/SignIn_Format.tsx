import { CSSProperties } from "react";
import React, { useRef, RefObject, useEffect, useState } from "react";

function SignIn_Style() {

  

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
        <button placeholder="" style={Login_Button_Style} id="Password_Input" >Sign In</button>
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
        <button placeholder="" style={Login_Button_Style_CreateAcc} id="Create_Account" >Create Account</button>
        <p style={Login_CreateAcc} onClick={toggleDivs}  >Login</p>
        
      </div>
    </div>
    );
}

export default SignIn_Style;
