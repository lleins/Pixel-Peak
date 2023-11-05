import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import Video_Style from "./Components/Video_Format";
import Photos_Style from "./Components/Photos_Format";
import SignIn_Style from "./Components/SignIn_Format";
import Account_Style from "./Components/Account_Format";
import Photo_Search_Style from "./Components/Photo_Search";
import Videos_Search_Style from "./Components/Videos_Search";
import Saved_Style from "./Components/Saved_Format";

ReactDOM.createRoot(
  document.getElementById("Video_React") as HTMLElement
).render(
  <React.StrictMode>
    <Video_Style />
  </React.StrictMode>
);

ReactDOM.createRoot(
  document.getElementById("Photos_React") as HTMLElement
).render(
  <React.StrictMode>
    <Photos_Style />
  </React.StrictMode>
);

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


