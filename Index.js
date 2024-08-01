


/*Navigation Bar -----------------------------------------------------------*/
window.addEventListener('scroll', function () {
  var navbar = document.getElementById('Main_Nav');
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 1)";
  } else {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0)";
  }
});

/*Navigation Bar -----------------------------------------------------------*/





/*page Loading Animation -----------------------------------------------------------*/
const items = document.querySelectorAll('.Load_Item');

function staggeredLoad() {
  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = 1;

    }, (index + 1) * 250); // 1000 milliseconds (1 second) delay between each item
  });
}

/*page Loading Animation -----------------------------------------------------------*/




/*Main Buttons Movement -----------------------------------------------------------*/
staggeredLoad();

const Page_Loading_Animation = document.getElementById("Page_Loading_Animation");

document.addEventListener('DOMContentLoaded', () => {

  setTimeout(() => {
    Page_Loading_Animation.style.opacity = "0";
    setTimeout(() => {
      Page_Loading_Animation.style.display = "none";
    }, 200);
  }, 2000); 
});

/*Main Buttons Movement -----------------------------------------------------------*/



/*Function for Mobile Menu -----------------------------------------------------------*/

function Open_Mobile_Menu() {
  const Menu = document.getElementById("Side_Buttons");
  Menu.style.display = "block";
  Menu.style.opacity = 1;
}

function Close_Mobile_Menu() {
  const Menu = document.getElementById("Side_Buttons");
  Menu.style.display = "none";
}
/*Function for Mobile Menu -----------------------------------------------------------*/




//Function to go to new pages-----------------------------------------------------------


function Go_Home_Mobile() {
  const Photo_Search_Container = document.getElementById("Photo_Search_Result");
  const Video_Search_Container = document.getElementById("Video_Search_Result");
  const targetElement = document.getElementById('homeMarker');
  const Mobile_Menu = document.getElementById('Side_Buttons');
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
    Mobile_Menu.style.display = "none";
  }

  Video_Search_Container.style.display = "none";
  Photo_Search_Container.style.display = "none";
}




function Go_Home() {
  const Photo_Search_Container = document.getElementById("Photo_Search_Result");
  const Video_Search_Container = document.getElementById("Video_Search_Result");
  const targetElement = document.getElementById('homeMarker');

  Video_Search_Container.style.display = "none";
  Photo_Search_Container.style.display = "none";

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
  const title = document.getElementById("Title");
  const screenWidth = window.innerWidth;
  const Blur_Page = document.getElementById("Blur_Webpage");
  const Nav = document.getElementById("Main_Nav");
  const nav_imgs_class = document.getElementsByClassName('Nav_Imgs');
  const nav_text_class = document.getElementsByClassName('Nav_Style');
  const Nav_Mobile = document.getElementById("Mobile_Side_Buttons");
  const Search_Button = document.getElementById("Search_Photos_Button");
  const Search_Img = document.getElementById("Photo_Search_Main");
  const Body_Style = document.body;
  Account_Container.style.display = "none";
  const MainContainer = document.getElementById("Account_React");
  const Account_Container = document.getElementById("Login_Container");
  MainContainer.style.display = "none";
  Account_Container.style.visibility = "visible";

  title.style.color = "rgb(255, 255, 255)";
  nav_text_class[0].style.color = "rgb(255, 255, 255)";
  nav_text_class[1].style.color = "rgb(255, 255, 255)";
  nav_text_class[2].style.color = "rgb(255, 255, 255)";
  Nav_Mobile.style.zIndex = 20;
  Nav.style.zIndex = 20;
  Nav.style.backgroundColor = "rgb(0, 0, 0, 0)";
  Blur_Page.style.zIndex = 0;
  Blur_Page.style.backdropFilter = "blur(0px) brightness(100%)";
  Photo_Search_Container.style.zIndex = 0;
  Video_Search_Container.style.zIndex = 0;
  Body_Style.style.overflowY = "auto";
  setTimeout(() => {
    Search_Button.style.transition = ".3s";
    if (screenWidth <= 550) {
      Search_Button.style.width = "89%";
    } else {
      Search_Button.style.width = "60%";
    }

  }, 100);

  nav_imgs_class[0].style.filter = "brightness(100%)";
  nav_imgs_class[1].style.filter = "brightness(100%)";

  nav_imgs_class[0].addEventListener('mouseenter', function () {
    nav_imgs_class[0].style.backgroundColor = "rgb(150, 150, 150, .3)";
    nav_imgs_class[0].style.backdropFilter = "blur(2px)";
  });

  nav_imgs_class[0].addEventListener('mouseleave', function () {
    nav_imgs_class[0].style.backgroundColor = "rgb(150, 150, 150, 0)";
    nav_imgs_class[0].style.backdropFilter = "blur(0px)";
  });

  nav_imgs_class[1].addEventListener('mouseenter', function () {
    nav_imgs_class[1].style.backgroundColor = "rgb(150, 150, 150, .3)";
    nav_imgs_class[1].style.backdropFilter = "blur(2px)";
  });

  nav_imgs_class[1].addEventListener('mouseleave', function () {
    nav_imgs_class[1].style.backgroundColor = "rgb(150, 150, 150, 0)";
    nav_imgs_class[1].style.backdropFilter = "blur(0px)";
  });
}

function Go_Photos() {
  const targetElement = document.getElementById('Photos_Tab');

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}

function Go_Videos() {
  const targetElement = document.getElementById('Videos_Tab');

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}
//Function to go to new pages-----------------------------------------------------------







//Function Login-----------------------------------------------------------

function Login_Blur() {
  const Blur_Page = document.getElementById("Blur_Webpage");
  const Login_Container = document.getElementById("Login_Container");
  const Sign_React = document.getElementById("SignIn_React");
  const Account_React = document.getElementById("Account_Dashboard");
  const Menu = document.getElementById("Side_Buttons");

  const body = document.body;
  Menu.style.display = "none";
  Blur_Page.style.zIndex = 10;
  Blur_Page.style.backdropFilter = "blur(20px) brightness(80%)";
  Login_Container.style.zIndex = 11;
  Login_Container.style.display = "block";
  body.style.overflowY = "hidden";
  Sign_React.style.display = "none";
  Account_React.style.display = "none";

  const Logged = undefined;

  if (Logged !== undefined) {
    Sign_React.style.display = "none";
    Account_React.style.display = "block";
    Menu.style.display = "none";
    Blur_Page.style.zIndex = 10;
    Blur_Page.style.backdropFilter = "blur(20px) brightness(80%)";
    Login_Container.style.zIndex = 11;
    Login_Container.style.display = "block";

  } else if (Logged === undefined) {
    Sign_React.style.display = "block";
    Account_React.style.display = "none";
    Menu.style.display = "none";
    Blur_Page.style.zIndex = 10;
    Blur_Page.style.backdropFilter = "blur(20px) brightness(80%)";
    Login_Container.style.zIndex = 11;
    Login_Container.style.display = "block";

  } else {

  }

}



function Exit_Login() {
  const Blur_Page = document.getElementById("Blur_Webpage");
  const Login_Container = document.getElementById("Login_Container");
  const Help_Container = document.getElementById("Help_Container");
  const body = document.body;
  Blur_Page.style.zIndex = 0;
  Blur_Page.style.backdropFilter = "blur(0px) brightness(100%)";
  Login_Container.style.zIndex = 0;
  Login_Container.style.display = "none";
  Help_Container.style.display = "none";
  body.style.overflowY = "auto";
}



//Function Login-----------------------------------------------------------





//Cookies-----------------------------------------------------------
function Accept_Cookies() {
  const Cokies_Container = document.getElementById("Cookies_Confirmation_Container");
  if (Cokies_Container) {
    Cokies_Container.style.opacity = "0";
    Cokies_Container.style.bottom = "-600px";
  }
}
//Cookies-----------------------------------------------------------



//Cookies for Deleting Saved-----------------------------------------------------------




//Cookies for Deleting Saved-----------------------------------------------------------




//Function Account-----------------------------------------------------------

function ViewAccount() {
  const Account_React = document.getElementById("Account_React");
  const Account_Container = document.getElementById("Login_Container");
  const nav = document.getElementById("Main_Nav");
  nav.style.display = "none";
  Account_React.style.display = "block";
  Account_Container.style.visibility = "hidden";
}


//Function Account-----------------------------------------------------------





//Function Help-----------------------------------------------------------
function Help_Blur() {
  const login_container = document.getElementById("Login_Container")
  const Blur_Page = document.getElementById("Blur_Webpage");
  const Help_Container = document.getElementById("Help_Container");
  const Menu = document.getElementById("Side_Buttons");
  const body = document.body;
  login_container.style.display = "none";
  Menu.style.display = "none";
  Blur_Page.style.zIndex = 100;
  Blur_Page.style.backdropFilter = "blur(20px) brightness(80%)";
  Help_Container.style.zIndex = 110;
  Help_Container.style.display = "block";
  body.style.overflowY = "hidden"
}

function Exit_Help() {
  const Blur_Page = document.getElementById("Blur_Webpage");
  const Help_Container = document.getElementById("Help_Container");
  const Login_Container = document.getElementById("Login_Container");
  const body = document.body;
  Blur_Page.style.zIndex = 0;
  Blur_Page.style.backdropFilter = "blur(0px) brightness(100%)";
  Help_Container.style.zIndex = 0;
  Help_Container.style.display = "none";
  Login_Container.style.display = "none";
  body.style.overflowY = "auto"

}


//Function Help-----------------------------------------------------------




//Function Photo Search-----------------------------------------------------------

function SearchPhotos() {
  const Blur_Page = document.getElementById("Blur_Webpage");
  const Photo_Search_Container = document.getElementById("Photo_Search_Result");
  const Video_Search_Container = document.getElementById("Video_Search_Result");
  const Home_Container = document.getElementById("Home_Container");
  const Nav = document.getElementById("Main_Nav");
  const Menu = document.getElementById("Side_Buttons");
  Menu.style.display = "none";
  const Nav_Mobile = document.getElementById("Mobile_Side_Buttons");
  Home_Container.style.display = "none";
  const Body_Style = document.body;
  const MainContainer = document.getElementById("Account_React");
  const Account_Container = document.getElementById("Login_Container");
  const help_container = document.getElementById("Help_Container");
  help_container.style.display = "none";
  Account_Container.style.display = "none";
  MainContainer.style.display = "none";
  Account_Container.style.visibility = "visible";
  Video_Search_Container.style.display = "none";
  Nav_Mobile.style.zIndex = 99999;
  Nav.style.zIndex = 99999;

  setTimeout(() => {
    Photo_Search_Container.style.display = "block";
    Blur_Page.style.zIndex = 10;
    Blur_Page.style.backdropFilter = "blur(20px) brightness(80%)";
    Photo_Search_Container.style.zIndex = 11;
    Body_Style.style.overflowY = "hidden";
  }, 100);

}


function SearchPhotos_Exit() {
  const screenWidth = window.innerWidth;
  const Blur_Page = document.getElementById("Blur_Webpage");
  const Photo_Search_Container = document.getElementById("Photo_Search_Result");
  const Nav = document.getElementById("Main_Nav");
  const Nav_Mobile = document.getElementById("Mobile_Side_Buttons");
  const Search_Button = document.getElementById("Search_Photos_Button");
  const Body_Style = document.body;


  Nav_Mobile.style.zIndex = 20;
  Nav.style.zIndex = 20;
  Blur_Page.style.zIndex = 0;
  Blur_Page.style.backdropFilter = "blur(0px) brightness(100%)";
  Photo_Search_Container.style.zIndex = 0;
  Photo_Search_Container.style.display = "none";
  Body_Style.style.overflowY = "hidden";
  setTimeout(() => {
    Search_Button.style.transition = ".3s";
    if (screenWidth <= 550) {
      Search_Button.style.width = "89%";
    } else {
      Search_Button.style.width = "60%";
    }

  }, 100);


}


//Function Photo Search-----------------------------------------------------------


//Function Video Search-----------------------------------------------------------

function SearchVideos() {
  const MainContainer = document.getElementById("Account_React");
  const Account_Container = document.getElementById("Login_Container");
  MainContainer.style.display = "none";
  Account_Container.style.visibility = "visible";
  Account_Container.style.display = "none";
  const Blur_Page = document.getElementById("Blur_Webpage");
  const Home_Container = document.getElementById("Home_Container");
  const Video_Search_Container = document.getElementById("Video_Search_Result");
  const Photo_Search_Container = document.getElementById("Photo_Search_Result");
  const Nav = document.getElementById("Main_Nav");
  const Menu = document.getElementById("Side_Buttons");
  Menu.style.display = "none";
  const Nav_Mobile = document.getElementById("Mobile_Side_Buttons");

  const help_container = document.getElementById("Help_Container");
  help_container.style.display = "none";
  const Body_Style = document.body;

  Photo_Search_Container.style.display = "none";

  Home_Container.style.display = "none";

  Nav_Mobile.style.zIndex = 99999;
  Nav.style.zIndex = 99999;
  setTimeout(() => {
    Video_Search_Container.style.display = "block";
    Blur_Page.style.zIndex = 10;
    Blur_Page.style.backdropFilter = "blur(20px) brightness(80%)";
    Video_Search_Container.style.zIndex = 11;
    Body_Style.style.overflowY = "hidden";
  }, 100);


}

function SearchVideos_Exit() {

  const screenWidth = window.innerWidth;
  const Blur_Page = document.getElementById("Blur_Webpage");
  const Video_Search_Container = document.getElementById("Video_Search_Result");
  const Nav = document.getElementById("Main_Nav");

  const Nav_Mobile = document.getElementById("Mobile_Side_Buttons");
  const Search_Button = document.getElementById("Search_Videos_Button");

  const Body_Style = document.body;

  Nav_Mobile.style.zIndex = 20;
  Nav.style.zIndex = 20;
  Blur_Page.style.zIndex = 0;
  Blur_Page.style.backdropFilter = "blur(0px) brightness(100%)";
  Video_Search_Container.style.zIndex = 0;
  Video_Search_Container.style.display = "none";
  Body_Style.style.overflowY = "hidden";
  setTimeout(() => {
    Search_Button.style.transition = ".3s";
    if (screenWidth <= 550) {
      Search_Button.style.width = "89%";
    } else {
      Search_Button.style.width = "60%";
    }

  }, 100);

}




function Home_Page() {
  const MainContainer = document.getElementById("Account_React");
  const Account_Container = document.getElementById("Login_Container");
  MainContainer.style.display = "none";
  Account_Container.style.visibility = "visible";
  Account_Container.style.display = "none";
  const Blur_Page = document.getElementById("Blur_Webpage");
  const Video_Search_Container = document.getElementById("Video_Search_Result");
  const Home_Container = document.getElementById("Home_Container");
  const Photo_Search_Container = document.getElementById("Photo_Search_Result");
  const Nav = document.getElementById("Main_Nav");
  const Menu = document.getElementById("Side_Buttons");
  Menu.style.display = "none";
  const Nav_Mobile = document.getElementById("Mobile_Side_Buttons");

  const help_container = document.getElementById("Help_Container");
  help_container.style.display = "none";
  const Body_Style = document.body;

  Photo_Search_Container.style.display = "none";
  Video_Search_Container.style.display = "none";


  Nav_Mobile.style.zIndex = 99999;
  Nav.style.zIndex = 99999;
  setTimeout(() => {
    Home_Container.style.display = "block";
    Blur_Page.style.zIndex = 10;
    Blur_Page.style.backdropFilter = "blur(20px) brightness(80%)";
    Home_Container.style.zIndex = 11;
    Body_Style.style.overflowY = "hidden";
  }, 100);


}

//Function Video Search-----------------------------------------------------------


//Notification Function-----------------------------------------------------------
function hideSuccess(id) {
  const container = document.getElementById(id);
  container.style.display = 'none';
}

function Notif(id) {
  const TimetoHide = 5000;
  const container = document.getElementById(id);
  container.style.display = 'block';

  setTimeout(function () {
    hideSuccess(id);
  }, TimetoHide);
}




//Notification Function-----------------------------------------------------------




//Search Bars------------------------------------------------------------------
const handleKeyPress_Photo = (event) => {
  if (event.key === 'Enter') {
    const searchButton = document.getElementById('Photo_Search_Main');
    if (searchButton) {
      searchButton.click();
    }
  }
};

const handleKeyPress_Video = (event) => {
  if (event.key === 'Enter') {
    const searchButton = document.getElementById('Video_Search_Main');
    if (searchButton) {
      searchButton.click();
    }
  }
};


//Search Bars------------------------------------------------------------------



//Switch Between Photos and Video-----------------------------------------------------------------

function Switch_to_Photo_Video(id_block, id_none) {
  const container_block = document.getElementById(id_block);
  const container_none = document.getElementById(id_none);

  container_block.style.display = "block";
  container_none.style.display = "none";

  if (container_block) {
    container_block.scrollIntoView({ behavior: 'smooth' });
  }

}

function Switch_to_Photo_Video_Mobile(id_block, id_none, Side_Button) {
  const container_block = document.getElementById(id_block);
  const container_none = document.getElementById(id_none);
  const Mobile_Buttons = document.getElementById(Side_Button);


  container_block.style.display = "block";
  container_none.style.display = "none";

  if (container_block) {
    container_block.scrollIntoView({ behavior: 'smooth' });
    Mobile_Buttons.style.display = "none";
  }

}

//Switch Between Photos and Video-----------------------------------------------------------------






