



/*Navigation Bar -----------------------------------------------------------*/
window.addEventListener('scroll', function () {
  var navbar = document.getElementById('Main_Nav');
  //var name = document.getElementById('TopText');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var solidThreshold = 10000; // Adjust this value to determine when to make the background solid

  if (scrollTop > solidThreshold) {
    //name.style.color = "white";
    navbar.classList.add('solid');
  } else {
    //name.style.color = "rgb(103, 161, 255)";
    navbar.classList.remove('solid');
  }
});

/*Navigation Bar -----------------------------------------------------------*/





/*Page Scroll Function -----------------------------------------------------------*/

/*
function scrollToTargetDiv(index) {
  const Scroll_Div = document.querySelectorAll('.Scroll_Div');
  if (index < Scroll_Div.length) {
    Scroll_Div[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
 
let Scroll_currentIndex = 0;
 
window.addEventListener('wheel', (event) => {
  if (event.deltaY > 0) {
    scrollToTargetDiv(Scroll_currentIndex);
    Scroll_currentIndex++;
    event.preventDefault();
  } else if (event.deltaY < 0 && Scroll_currentIndex > 0) {
    scrollToTargetDiv(Scroll_currentIndex);
    Scroll_currentIndex--;
    event.preventDefault();
  }
});
 
*/

/*Page Scroll Function -----------------------------------------------------------*/





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

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 1600); // Delay of 300 milliseconds (0.3 seconds)
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
  const targetElement = document.getElementById('homeMarker');
  const Mobile_Menu = document.getElementById('Side_Buttons');
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
    Mobile_Menu.style.display = "none";
  }
}




function Go_Home() {
  const targetElement = document.getElementById('homeMarker');

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
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
  const Account_React = document.getElementById("Account_React");
  const Menu = document.getElementById("Side_Buttons");
  Menu.style.display = "none";
  Blur_Page.style.zIndex = 10;
  Blur_Page.style.backdropFilter = "blur(20px) brightness(80%)";
  Login_Container.style.zIndex = 11;
  Login_Container.style.display = "block";

  const Logged = 1;

  if (Logged == 1) {
    Sign_React.style.display = "none";
    Account_React.style.display = "block";
    Menu.style.display = "none";
    Blur_Page.style.zIndex = 10;
    Blur_Page.style.backdropFilter = "blur(20px) brightness(80%)";
    Login_Container.style.zIndex = 11;
    Login_Container.style.display = "block";

  } else if (Logged == 0) {
    Sign_React.style.display = "block";
    Account_React.style.display = "none";
    Menu.style.display = "none";
    Blur_Page.style.zIndex = 10;
    Blur_Page.style.backdropFilter = "blur(20px) brightness(80%)";
    Login_Container.style.zIndex = 11;
    Login_Container.style.display = "block";


  }

}

function Exit_Login() {
  const Blur_Page = document.getElementById("Blur_Webpage");
  const Login_Container = document.getElementById("Login_Container");
  Blur_Page.style.zIndex = 0;
  Blur_Page.style.backdropFilter = "blur(0px) brightness(100%)";
  Login_Container.style.zIndex = 0;
  Login_Container.style.display = "none";
}



//Function Login-----------------------------------------------------------


//Function Help-----------------------------------------------------------
function Help_Blur() {
  const Blur_Page = document.getElementById("Blur_Webpage");
  const Help_Container = document.getElementById("Help_Container");
  const Menu = document.getElementById("Side_Buttons");
  Menu.style.display = "none";
  Blur_Page.style.zIndex = 10;
  Blur_Page.style.backdropFilter = "blur(20px) brightness(80%)";
  Help_Container.style.zIndex = 11;
  Help_Container.style.display = "block";
}

function Exit_Help() {
  const Blur_Page = document.getElementById("Blur_Webpage");
  const Help_Container = document.getElementById("Help_Container");
  Blur_Page.style.zIndex = 0;
  Blur_Page.style.backdropFilter = "blur(0px) brightness(100%)";
  Help_Container.style.zIndex = 0;
  Help_Container.style.display = "none";

}


//Function Help-----------------------------------------------------------




//Function Photo Search-----------------------------------------------------------

function SearchPhotos() {
  const Blur_Page = document.getElementById("Blur_Webpage");
  const Photo_Search_Container = document.getElementById("Photo_Search_Result");
  const Nav = document.getElementById("Main_Nav");
  const Nav_Mobile = document.getElementById("Mobile_Side_Buttons");
  const Search_Button = document.getElementById("Search_Photos_Button");
  const Body_Style = document.body;

  Search_Button.style.transition = ".3s";
  Search_Button.style.width = "25%";
  Search_Button.style.left = "50px";
  Nav_Mobile.style.zIndex = 9;
  Nav.style.zIndex = 9;
  setTimeout(() => {
    Photo_Search_Container.style.left = "50%";
    Blur_Page.style.zIndex = 10;
    Blur_Page.style.backdropFilter = "blur(20px) brightness(80%)";
    Photo_Search_Container.style.zIndex = 11;
    Body_Style.style.overflowY = "hidden";
  }, 100);


}


function SearchPhotos_Exit() {
  const Blur_Page = document.getElementById("Blur_Webpage");
  const Photo_Search_Container = document.getElementById("Photo_Search_Result");
  const Nav = document.getElementById("Main_Nav");
  const Nav_Mobile = document.getElementById("Mobile_Side_Buttons");
  const Search_Button = document.getElementById("Search_Photos_Button");
  const Search_Img = document.getElementById("Photo_Search_Main");
  const Body_Style = document.body;


  Nav_Mobile.style.zIndex = 20;
  Nav.style.zIndex = 20;
  Blur_Page.style.zIndex = 0;
  Blur_Page.style.backdropFilter = "blur(0px) brightness(100%)";
  Photo_Search_Container.style.zIndex = 0;
  Photo_Search_Container.style.left = "200%";
  Body_Style.style.overflowY = "auto";
  setTimeout(() => {
    Search_Button.style.transition = ".3s";
    Search_Button.style.width = "60%";
    Search_Button.style.left = "50px";
  }, 100);


}


//Function Photo Search-----------------------------------------------------------




//Function Video Search-----------------------------------------------------------

function SearchVideos() {
  const Blur_Page = document.getElementById("Blur_Webpage");
  const Video_Search_Container = document.getElementById("Video_Search_Result");
  const Nav = document.getElementById("Main_Nav");
  const Nav_Mobile = document.getElementById("Mobile_Side_Buttons");
  const Search_Button = document.getElementById("Search_Videos_Button");
  const Search_Img = document.getElementById("Video_Search_Main");
  const Body_Style = document.body;

  Search_Button.style.transition = ".3s";
  Search_Button.style.width = "25%";
  Search_Button.style.left = "50px";
  Nav_Mobile.style.zIndex = 9;
  Nav.style.zIndex = 9;
  setTimeout(() => {
    Video_Search_Container.style.left = "50%";
    Blur_Page.style.zIndex = 10;
    Blur_Page.style.backdropFilter = "blur(20px) brightness(80%)";
    Video_Search_Container.style.zIndex = 11;
    Body_Style.style.overflowY = "hidden";
  }, 100);


}

function SearchVideos_Exit() {
  const Blur_Page = document.getElementById("Blur_Webpage");
  const Video_Search_Container = document.getElementById("Video_Search_Result");
  const Nav = document.getElementById("Main_Nav");
  const Nav_Mobile = document.getElementById("Mobile_Side_Buttons");
  const Search_Button = document.getElementById("Search_Videos_Button");
  const Search_Img = document.getElementById("Video_Search_Main");
  const Body_Style = document.body;

  Nav_Mobile.style.zIndex = 20;
  Nav.style.zIndex = 20;
  Blur_Page.style.zIndex = 0;
  Blur_Page.style.backdropFilter = "blur(0px) brightness(100%)";
  Video_Search_Container.style.zIndex = 0;
  Video_Search_Container.style.left = "200%";
  Body_Style.style.overflowY = "auto";
  setTimeout(() => {
    Search_Button.style.transition = ".3s";
    Search_Button.style.width = "60%";
    Search_Button.style.left = "50px";
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





//Hover Chnage Photo/Video-----------------------------------------------------------------

function Hover_Photo_Video(container, dropdown) {
  const Hover_Container = document.getElementById(container);
  const DropDown = document.getElementById(dropdown);


  Hover_Container.addEventListener('mouseenter', () => {
    Hover_Container.style.background = "rgb(20, 20, 20)";
    DropDown.style.opacity = 1;

    DropDown.addEventListener('mouseenter', () => {
      DropDown.style.opacity = 1;
      Hover_Container.style.background = "rgb(20, 20, 20)";
    });
    DropDown.addEventListener('mouseleave', () => {
      DropDown.style.opacity = 0;
    });

  });

  Hover_Container.addEventListener('mouseleave', () => {
    Hover_Container.style.background = "rgb(30, 30, 30)";
    DropDown.style.opacity = 0;
  });

}




Hover_Photo_Video("Hover_Video", "Video_Dropdown_Change");
Hover_Photo_Video("Hover_Photo", "Photo_Dropdown_Change");
//Hover Chnage Photo/Video-----------------------------------------------------------------





