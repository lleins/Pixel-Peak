import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import SignIn_Style from "./Components/SignIn_Format";
import Account_Style from "./Components/Account_Format";
import Photo_Search_Style from "./Components/Photo_Search";
import Videos_Search_Style from "./Components/Videos_Search";
import Saved_Style from "./Components/Saved_Format";
import Home_Style from "./Components/Home_Format";

ReactDOM.createRoot(
  document.getElementById("SignIn_React") as HTMLElement
).render(
  <React.StrictMode>
    <SignIn_Style />
  </React.StrictMode>
);

ReactDOM.createRoot(
  document.getElementById("Account_React") as HTMLElement
).render(
  <React.StrictMode>
    <Account_Style />
  </React.StrictMode>
);

ReactDOM.createRoot(
  document.getElementById("Saved_React") as HTMLElement
).render(
  <React.StrictMode>
    <Saved_Style />
  </React.StrictMode>
);


ReactDOM.createRoot(
  document.getElementById("Photo_Search_React") as HTMLElement
).render(
  <React.StrictMode>
    <Photo_Search_Style />
  </React.StrictMode>
);

ReactDOM.createRoot(
  document.getElementById("Video_Search_React") as HTMLElement
).render(
  <React.StrictMode>
    <Videos_Search_Style />
  </React.StrictMode>
);



ReactDOM.createRoot(
  document.getElementById("Home_React") as HTMLElement
).render(
  <React.StrictMode>
    <Home_Style />
  </React.StrictMode>
);


