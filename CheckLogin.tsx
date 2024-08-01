import Cookies from "js-cookie";
import Saved from "./models/Saved";

//For Checking LoginToken validity--------------------------------------

function Login_Blur() {
    const test = document.getElementById("test");
    const Blur_Page = document.getElementById("Blur_Webpage");
    const help_page = document.getElementById("Help_Container");
    const Login_Container = document.getElementById("Login_Container");
    const Sign_React = document.getElementById("SignIn_React");
    const Account_React = document.getElementById("Account_Dashboard");
    const Menu = document.getElementById("Side_Buttons");
    const account = document.getElementById("Account_React");
    const saved = document.getElementById("Saved_React");
    const body = document.body;

    if(help_page)help_page.style.display = "none";
    
    if(saved)saved.style.display = "none";
    if(account)account.style.display = "none";

    if (Menu) {
      Menu.style.display = "none";
    }
    if (Blur_Page) {
      Blur_Page.style.zIndex = "100";
      Blur_Page.style.backdropFilter = "blur(20px) brightness(80%)";
    }
    if (Login_Container) {
      Login_Container.style.zIndex = "110";
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
  
    //console.log("From Login_Blur", Logged);
  
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
        Blur_Page.style.zIndex = "100";
        Blur_Page.style.backdropFilter = "blur(20px) brightness(80%)";
      }
      if (Login_Container) {
        Login_Container.style.zIndex = "110";
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
          Blur_Page.style.zIndex = "100";
          Blur_Page.style.backdropFilter = "blur(20px) brightness(80%)";
        }
        if (Login_Container) {
          Login_Container.style.zIndex = "110";
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



const Mobile_LoginImage = document.getElementById("Account_Mobile");
if (Mobile_LoginImage) {
  Mobile_LoginImage.addEventListener("click", () => {  //Listens for Account click
    
    Login_Blur();
  });
}

const Mobile_LoginImage_2 = document.getElementById("account_mobile_img");
if (Mobile_LoginImage_2) {
  Mobile_LoginImage_2.addEventListener("click", () => {  //Listens for Account click
    
    Login_Blur();
  });
}

const LogoutButton = document.getElementById("Logout_Acc_Btn");

if (LogoutButton) {
    LogoutButton.addEventListener("click", () => {
    
    Logout();
  });
}



function ViewSaved() {
  Cookies.set('Open_Saved', "1" , { path: '/' });
  window.location.reload();

}
const View_Saved_items = document.getElementById("Saved_Acc_Btn");
if (View_Saved_items) {
    View_Saved_items.addEventListener("click", () => {  //Listens for Account click
    
    ViewSaved();
  });
}



function Deleted_Saved() {
  const Check_Delete_Cookie = Cookies.get("Deleted_Saved");
  const Account_btn =  document.getElementById("Account");
  const Saved_btn = document.getElementById("Saved_Acc_Btn");
  const nav = document.getElementById("Main_Nav");
  const Account_React = document.getElementById("Saved_React");
  const Account_Container = document.getElementById("Login_Container");
  if (Check_Delete_Cookie === undefined) {
    ""
  } else if (Check_Delete_Cookie !== undefined) {
    if(Account_btn)Account_btn.click();
    if(Account_React)Account_React.style.display = "block";
    if(Account_Container)Account_Container.style.visibility = "hidden";
    if(nav)nav.style.display="none";
    Cookies.remove('Deleted_Saved');


  }

}
Deleted_Saved();

function Open_Saved() {
  const Check_Delete_Cookie = Cookies.get("Open_Saved");
  const Account_btn =  document.getElementById("Account");
  const Saved_btn = document.getElementById("Saved_Acc_Btn");
  const Account_React = document.getElementById("Saved_React");
  const Account_Container = document.getElementById("Login_Container");
  const nav = document.getElementById("Main_Nav");
  if (Check_Delete_Cookie === undefined) {
    ""
  } else if (Check_Delete_Cookie !== undefined) {
    if(Account_btn)Account_btn.click();
    if(Account_React)Account_React.style.display = "block";
    if(Account_Container)Account_Container.style.visibility = "hidden";
    if(nav)nav.style.display="none";
    Cookies.remove('Open_Saved');

  }

}
Open_Saved();






const Login_Link = document.getElementById("Login_Link");
if (Login_Link) {
  Login_Link.addEventListener("click", () => {  //Listens for Account click
    
    Login_Blur();
  });
}


const Login_Link_p = document.getElementById("Login_Link_p");
if (Login_Link_p) {
  Login_Link_p.addEventListener("click", () => {  //Listens for Account click
    
    Login_Blur();
  });
}

function HelpBlur(){
  const loginContainer = document.getElementById("Login_Container");
  const blurPage = document.getElementById("Blur_Webpage");
  const helpContainer = document.getElementById("Help_Container");
  const menu = document.getElementById("Side_Buttons");
  const body = document.body;

  if (loginContainer && blurPage && helpContainer && menu && body) {
    loginContainer.style.display = "none";
    menu.style.display = "none";
    blurPage.style.zIndex = "100";
    blurPage.style.backdropFilter = "blur(20px) brightness(80%)";
    helpContainer.style.zIndex = "110";
    helpContainer.style.display = "block";
    body.style.overflowY = "hidden";
  } else {
    //error("One or more elements not found");
  }
}


const Info_Link = document.getElementById("Info_Link");
if (Info_Link) {
  Info_Link.addEventListener("click", () => {  //Listens for Account click
    
    HelpBlur();
  });
}


const Info_Link_p = document.getElementById("Info_Link_p");
if (Info_Link_p) {
  Info_Link_p.addEventListener("click", () => {  //Listens for Account click
    HelpBlur();
  });
}





function SearchPhotos() {
  const blurPage = document.getElementById("Blur_Webpage");
  const photoSearchContainer = document.getElementById("Photo_Search_Result");
  const videoSearchContainer = document.getElementById("Video_Search_Result");
  const nav = document.getElementById("Main_Nav");
  const menu = document.getElementById("Side_Buttons");

  if (menu) {
    menu.style.display = "none";
  }

  const navMobile = document.getElementById("Mobile_Side_Buttons");
  const bodyStyle = document.body;
  const mainContainer = document.getElementById("Account_React");
  const accountContainer = document.getElementById("Login_Container");
  const helpContainer = document.getElementById("Help_Container");

  if (helpContainer) {
    helpContainer.style.display = "none";
  }

  if (accountContainer) {
    accountContainer.style.display = "none";
    accountContainer.style.visibility = "visible";
  }

  if (mainContainer) {
    mainContainer.style.display = "none";
  }

  if (videoSearchContainer) {
    videoSearchContainer.style.display = "none";
  }

  if (navMobile) {
    navMobile.style.zIndex = "99999";
  }

  if (nav) {
    nav.style.zIndex = "99999";
  }

  setTimeout(() => {
    if (photoSearchContainer && blurPage) {
      photoSearchContainer.style.display = "block";
      blurPage.style.zIndex = "10";
      blurPage.style.backdropFilter = "blur(20px) brightness(80%)";
      photoSearchContainer.style.zIndex = "11";
      bodyStyle.style.overflowY = "hidden";
      if (photoSearchContainer) {
        photoSearchContainer.scrollIntoView({ behavior: "instant", block: "start" });
      }
    }
  }, 100);
}


const Photos_Link_p = document.getElementById("Photos_Link_p");
if (Photos_Link_p) {
  Photos_Link_p.addEventListener("click", () => {  //Listens for Account click
    SearchPhotos();
  });
}

const Photos_Link = document.getElementById("Photos_Link");
if (Photos_Link) {
  Photos_Link.addEventListener("click", () => {  //Listens for Account click
    SearchPhotos();
  });
}





function SearchVideos() {
  const mainContainer = document.getElementById("Account_React");
  const accountContainer = document.getElementById("Login_Container");

  if (mainContainer) {
    mainContainer.style.display = "none";
  }

  if (accountContainer) {
    accountContainer.style.visibility = "visible";
    accountContainer.style.display = "none";
  }

  const blurPage = document.getElementById("Blur_Webpage");
  const videoSearchContainer = document.getElementById("Video_Search_Result");
  const photoSearchContainer = document.getElementById("Photo_Search_Result");
  const nav = document.getElementById("Main_Nav");
  const menu = document.getElementById("Side_Buttons");

  if (menu) {
    menu.style.display = "none";
  }

  const navMobile = document.getElementById("Mobile_Side_Buttons");
  const helpContainer = document.getElementById("Help_Container");

  if (helpContainer) {
    helpContainer.style.display = "none";
  }

  const bodyStyle = document.body;

  if (photoSearchContainer) {
    photoSearchContainer.style.display = "none";
  }

  if (navMobile) {
    navMobile.style.zIndex = "99999";
  }

  if (nav) {
    nav.style.zIndex = "99999";
  }

  setTimeout(() => {
    if (videoSearchContainer && blurPage) {
      videoSearchContainer.style.display = "block";
      blurPage.style.zIndex = "10";
      blurPage.style.backdropFilter = "blur(20px) brightness(80%)";
      videoSearchContainer.style.zIndex = "11";
      bodyStyle.style.overflowY = "hidden";
      if (videoSearchContainer) {
        videoSearchContainer.scrollIntoView({ behavior: "instant", block: "start" });
      }
    }
  }, 100);
}




const Videos_Link_p = document.getElementById("Videos_Link_p");
if (Videos_Link_p) {
  Videos_Link_p.addEventListener("click", () => { 
    SearchVideos();
  });
}

const Videos_Link = document.getElementById("Videos_Link");
if (Videos_Link) {
  Videos_Link.addEventListener("click", () => {  
    SearchVideos();
  });
}





//Check home video search
const check_video_search =  Cookies.get("Home_Search_Videos");
if(check_video_search === undefined){

}else if(check_video_search !== undefined){
  SearchVideos();
}


const check_photo_search =  Cookies.get("Home_Search_Photos");
if(check_photo_search === undefined){

}else if(check_photo_search !== undefined){
  SearchPhotos();
}






const check_change_to_videos =  Cookies.get("Go_to_Videos_fromP");
if(check_change_to_videos === undefined){

}else if(check_change_to_videos !== undefined){
  SearchVideos();
  Cookies.remove("Go_to_Videos_fromP");
}



const check_change_to_photos =  Cookies.get("Go_to_Photos_fromV");
if(check_change_to_photos === undefined){

}else if(check_change_to_photos !== undefined){
  SearchPhotos();
  Cookies.remove("Go_to_Photos_fromV");
}







