import Cookies from "js-cookie";
import Saved from "./models/Saved";

//For Checking LoginToken validity--------------------------------------

function Login_Blur() {
    const test = document.getElementById("test");
    const Blur_Page = document.getElementById("Blur_Webpage");
    const Login_Container = document.getElementById("Login_Container");
    const Sign_React = document.getElementById("SignIn_React");
    const Account_React = document.getElementById("Account_Dashboard");
    const Menu = document.getElementById("Side_Buttons");
    const body = document.body;
  
    if (Menu) {
      Menu.style.display = "none";
    }
    if (Blur_Page) {
      Blur_Page.style.zIndex = "10";
      Blur_Page.style.backdropFilter = "blur(20px) brightness(80%)";
    }
    if (Login_Container) {
      Login_Container.style.zIndex = "11";
      Login_Container.style.display = "block";
    }
    if (body) {
      body.style.overflowY = "hidden";
    }
    if (Sign_React) {
      Sign_React.style.display = "none";
    }
    if (Account_React) {
      Account_React.style.display = "none";
    }
    const Logged = Cookies.get("Login_Token");
  
    console.log("From Login_Blur", Logged);
  
    if (Logged !== undefined) {
      if (Sign_React) {
        Sign_React.style.display = "none";
      }
      if (Account_React) {
        Account_React.style.display = "block";
      }
      if (Menu) {
        Menu.style.display = "none";
      }
      if (Blur_Page) {
        Blur_Page.style.zIndex = "10";
        Blur_Page.style.backdropFilter = "blur(20px) brightness(80%)";
      }
      if (Login_Container) {
        Login_Container.style.zIndex = "11";
        Login_Container.style.display = "block";
      }
    } else {
      if (Logged === undefined) {
        if (Sign_React) {
          Sign_React.style.display = "block";
        }
        if (Account_React) {
          Account_React.style.display = "none";
        }
        if (Menu) {
          Menu.style.display = "none";
        }
        if (Blur_Page) {
          Blur_Page.style.zIndex = "10";
          Blur_Page.style.backdropFilter = "blur(20px) brightness(80%)";
        }
        if (Login_Container) {
          Login_Container.style.zIndex = "11";
          Login_Container.style.display = "block";
        }
      } else {
        if (test) {
          test.textContent = "help";
        }
      }
    }
}

function Logout() { 
    const LogoutFail = document.getElementById("Logout_0");
    const LogoutSuccess = document.getElementById("Logout_1");
    const Blur_Page = document.getElementById("Blur_Webpage");
    const Login_Container = document.getElementById("Login_Container");
    const Help_Container = document.getElementById("Help_Container");
    const body = document.body as HTMLBodyElement;

    const check_cookie = Cookies.remove('Login_Token'); //Removes Login Cookie

    if(check_cookie !== undefined){
        if (LogoutFail) LogoutFail.style.display = "block";
        setTimeout(function () {
            if (LogoutFail) LogoutFail.style.display = 'none';
        }, 4000);
    }else if(check_cookie === undefined){
        if (LogoutSuccess) LogoutSuccess.style.display = "block";
        setTimeout(function () {
            if (LogoutSuccess) LogoutSuccess.style.display = 'none';
        }, 4000);
        if (Blur_Page) {
            Blur_Page.style.zIndex = "0";
            Blur_Page.style.backdropFilter = "blur(0px) brightness(100%)";
          }
        
          if (Login_Container) {
            Login_Container.style.zIndex = "0";
            Login_Container.style.display = "none";
          }
        
          if (Help_Container) {
            Help_Container.style.display = "none";
          }
        
          if (body) {
            body.style.overflowY = "auto";
          }
    }
}






const LoginImage = document.getElementById("Account");
if (LoginImage) {
    LoginImage.addEventListener("click", () => {  //Listens for Account click
    
    Login_Blur();
  });
}


const LogoutButton = document.getElementById("Logout_Acc_Btn");

if (LogoutButton) {
    LogoutButton.addEventListener("click", () => {
    
    Logout();
  });
}



function Deleted_Saved() {
  const Check_Delete_Cookie = Cookies.get("Deleted_Saved");
  const Account_btn =  document.getElementById("Account");
  const Saved_btn = document.getElementById("Saved_Acc_Btn");
  if (Check_Delete_Cookie === undefined) {
    ""
  } else if (Check_Delete_Cookie !== undefined) {
    if(Saved_btn)Saved_btn.click();
    if(Account_btn)Account_btn.click();
    Cookies.remove('Deleted_Saved');


  }

}
Deleted_Saved();