import React, { useRef, RefObject, useEffect, useState } from "react";
import { CSSProperties } from "react";
import RightArrowImage from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\Right_Arrow.png";
import LeftArrowImage from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\Left_Arrow.png";
import Pic_Img from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\PicImg.png";
import Heart_Img from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\Heart.png";
import Cookies from 'js-cookie';

function Photos_Style() {
  {
    /*API Call, PEXELS-------------------------------------------------------------*/
  }
  const apiKey = "GTKZGX1qr6cVxMS1Dl88v1xUVe2edF3qaozGZMucbID3XTPE3Z2fSdbh";
  const [searchQuery, setSearchQuery] = useState('nature');
  const apiUrl = `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=10`;

  interface Photo {
    src: {
      large: string;
    };
  }

  interface URL {
    url: {
      url: string;
    };
  }

  const [photoArray, setPhotoArray] = useState([]);
  const [urlArray, seturlArray] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: apiKey,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const urls = data.photos.map((photo: Photo) =>
          photo.src.large.toString()
        );
        setPhotoArray(urls);

        const urls_Link = data.photos.map((photo: URL) => photo.url.toString());
        seturlArray(urls_Link);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchPhotos();
  }, [apiKey, apiUrl]);

  const handleQueryChange = (newQuery: string) => {
    setSearchQuery(newQuery);
  };

  {
    /*API Call, PEXELS-------------------------------------------------------------*/
  }

  function TriggerLink(i: number) {
    const url = urlArray[i];

    window.open(url, "_blank");
  }

  interface HoverImgProps {
    containerId: string;
    sourceTextId: string;
    ImgId: string;
    HeartId: string;
  }

  function HoverImg({ containerId, sourceTextId, ImgId, HeartId }: HoverImgProps) {
    useEffect(() => {
      const sourceTextActual = document.getElementById(sourceTextId);
      const containerActual = document.getElementById(containerId);
      const ImageActual = document.getElementById(ImgId);
      const HeartActual = document.getElementById(HeartId);

      const handleMouseOver = () => {
        if (sourceTextActual) sourceTextActual.style.opacity = "0";
        if (sourceTextActual) sourceTextActual.style.top = "175px";
        if (ImageActual) ImageActual.style.opacity = "0";
        if (ImageActual) ImageActual.style.top = "10px";
        if (containerActual) containerActual.style.transform = "scale(1.1)";
        if (HeartActual) HeartActual.style.opacity = "1";
      };

      const handleMouseOut = () => {
        if (sourceTextActual) sourceTextActual.style.opacity = "1";
        if (sourceTextActual) sourceTextActual.style.top = "175px";
        if (ImageActual) ImageActual.style.opacity = "1";
        if (ImageActual) ImageActual.style.top = "10px";
        if (containerActual) containerActual.style.transform = "scale(1)";
        if (HeartActual) HeartActual.style.opacity = "1";
      };

      if (containerActual) {
        containerActual.addEventListener("mouseover", handleMouseOver);
        containerActual.addEventListener("mouseout", handleMouseOut);
      }

      return () => {
        if (containerActual) {
          containerActual.removeEventListener("mouseover", handleMouseOver);
          containerActual.removeEventListener("mouseout", handleMouseOut);
        }
      };
    }, [containerId, sourceTextId, ImgId, HeartId]);

    return null;
  }


  interface HoverHeartProps {
    Heard_Id: string;
  }

  function Heart_Hover ({ Heard_Id }: HoverHeartProps) {
    useEffect(() => {
      const Heart_Actual = document.getElementById(Heard_Id);
    

      const handleMouseOver = () => {
        if(Heart_Actual) Heart_Actual.style.transform = "scale(.95)";
      };

      const handleMouseOut = () => {
        if(Heart_Actual) Heart_Actual.style.transform = "scale(.9)";
      };

      if (Heart_Actual) {
        Heart_Actual.addEventListener("mouseover", handleMouseOver);
        Heart_Actual.addEventListener("mouseout", handleMouseOut);
      }

      return () => {
        if (Heart_Actual) {
          Heart_Actual.removeEventListener("mouseover", handleMouseOver);
          Heart_Actual.removeEventListener("mouseout", handleMouseOut);
        }
      };
    }, [Heard_Id]);

    return null;
  }



  const style_MainContainer: CSSProperties = {
    position: "relative",
  };

  const scrollContainerRef: RefObject<HTMLDivElement> = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const newScrollLeft = scrollContainerRef.current.scrollLeft - 390;
      requestAnimationFrame(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft = newScrollLeft;
        }
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 390;
      requestAnimationFrame(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft = newScrollLeft;
        }
      });
    }
  };

  function ButtonClicked(a: string, b: string, c: string, d: string): any {
    const Main_Button = document.getElementById(a);

    const Button1 = document.getElementById(b);
    const Button2 = document.getElementById(c);
    const Button3 = document.getElementById(d);
    
    const load_spinner_p = document.getElementById("Loading_Spinner");
    if(load_spinner_p) load_spinner_p.style.display = "block";
    setTimeout(() => {
      const load_spinner_p = document.getElementById("Loading_Spinner");
      if(load_spinner_p) load_spinner_p.style.display = "none";
      handleQueryChange(a);

    }, 1500); 

    
    
    if(Main_Button){
      Main_Button.style.color = "white";
      Main_Button.style.backgroundColor = "rgb(10, 10, 10)";
    }
    if(Button1){
      Button1.style.color = "rgb(10, 10, 10)";
      Button1.style.backgroundColor = "white";
    }
    if(Button2){
      Button2.style.color = "rgb(10, 10, 10)";
      Button2.style.backgroundColor = "white";
    }
    if(Button3){
      Button3.style.color = "rgb(10, 10, 10)";
      Button3.style.backgroundColor = "white";
    }
  
  }


  interface Save_Pic_Ids{
    id_Heart_p: string;
    src: string;
    url: string;
  }

  function Save_Photo({ id_Heart_p, src, url }: Save_Pic_Ids) : void {
    const HeartImg = document.getElementById(id_Heart_p);

    const Check_Login = Cookies.get("Login_Token"); //Checks Login Token
    if(Check_Login !== undefined){

      if (HeartImg) {
        const HeartStyle = getComputedStyle(HeartImg);
        if (HeartStyle.filter === "brightness(5)") { //checks Heart color
          
          fetch('http://localhost:5000/api/save', { //fetch to /save endpoint in Server.js
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email_data: Check_Login, src_data : src.toString(), url_data: url.toString(), type_data: "P"  }),
            })
            .then(response => {
                if (response.ok) { //request sent
                  
                    console.log("From Sign React: Request sent"); //Sent to express server
                    return response.json(); 
                } else {
                  const Success_Notif = document.getElementById("Saved_0"); //request did not send
                  if(Success_Notif) Success_Notif.style.display = "block";
                  setTimeout(() => {
                    if(Success_Notif) Success_Notif.style.display = "none";
                    
                  }, 2000);
                    console.log("From Sign React: Request failed"); //Failed to send
                    return response.json(); 
                }
            })
            .then(data => {
                if (data.message === 1) { //successfully saved
                  HeartImg.style.filter = "brightness(100%)";
                  console.log("Saved in Photos_Format");
                  const Success_Notif = document.getElementById("Saved_1"); //changes heart color and display notif
                  if(Success_Notif) Success_Notif.style.display = "block";
                  setTimeout(() => {
                    if(Success_Notif) Success_Notif.style.display = "none";
                    
                  }, 2000);
                    
                } else if (data.message === 0) { //failed to save
                  console.log("Didnt Save in Photos_Format 0");
                  const Success_Notif = document.getElementById("Saved_0"); //displays notif
                  if(Success_Notif) Success_Notif.style.display = "block";
                  setTimeout(() => {
                    if(Success_Notif) Success_Notif.style.display = "none";
                    
                  }, 2000);
                }else if (data.message === 3) { //fail in server
                  console.log("Didnt Save in Photos_Format 3");
                  const Success_Notif = document.getElementById("Max_Saved_0");
                  if(Success_Notif) Success_Notif.style.display = "block";
                  setTimeout(() => {
                    if(Success_Notif) Success_Notif.style.display = "none";
                    
                  }, 2000);
                }
            })
            .catch(error => { //catch error with response
              
            });

        } else if (HeartStyle.filter === "brightness(1)") { //checks heart color
          const Check_Cookie = Cookies.get("Login_Token");
          fetch('http://localhost:5000/api/delete_saved', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email_data: Check_Cookie, url_data: url }), //sends login token and url to server.js delete save endpoint
          })
            .then((response) => {
              if (response.ok) {
                return response.json(); //request is sent
              } else {
                
                return { success: 0 }; //request is not sent
              }
            })
            .then((data) => {
              if (data.success === 1) { // saved is deleted
                HeartImg.style.filter = "brightness(500%)";
                console.log("Removed in Photos_Format 1");
                  const Success_Notif = document.getElementById("Saved_10"); //changes heart color and displays notif
                  if(Success_Notif) Success_Notif.style.display = "block";
                  setTimeout(() => {
                    if(Success_Notif) Success_Notif.style.display = "none";
                    
                  }, 2000);

              } else if (data.success === 0) { //did not delete save
                console.log("Didnt Remove in Photos_Format 0");
                const Success_Notif = document.getElementById("Saved_0"); //displays notif
                if(Success_Notif) Success_Notif.style.display = "block";
                setTimeout(() => {
                  if(Success_Notif) Success_Notif.style.display = "none";
                  
                }, 2000);
              } else {
                console.log("Didnt Remove in Photos_Format 4");
                  const Success_Notif = document.getElementById("Saved_0");
                  if(Success_Notif) Success_Notif.style.display = "block";
                  setTimeout(() => {
                    if(Success_Notif) Success_Notif.style.display = "none";
                    
                  }, 2000);
              }
            })
            .catch((error) => {
              // Handle any error that occurred during the fetch.
              console.error('Fetch error:', error);
            });

          
        }
      }
    } else if(Check_Login === undefined){
      const Login_Notif = document.getElementById("Login_Request_0");
      if(Login_Notif) Login_Notif.style.display = "block";
      setTimeout(function () {
        if (Login_Notif) Login_Notif.style.display = 'none';
      }, 4000);
    }

    
  }



  const Arrows_Style_Right: CSSProperties = {
    transform: "scale(.8)",
    position: "absolute",
    right: "0%",
    top: "574px",
    zIndex: "1",
    cursor: "pointer",
  };

  const Arrows_Style_Left: CSSProperties = {
    transform: "scale(.8)",
    position: "absolute",
    left: "0%",
    top: "574px",
    zIndex: "1",
    cursor: "pointer",
  };

  
  const Trending_SearchTitle: CSSProperties = {
    position: "absolute",
    left: "6%",
    top: "280px",
    color: "white",
    fontFamily: "verdana",
    fontSize: "25px",
    fontVariant: "small-caps",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    zIndex: "9",
  };

  const style_Main: CSSProperties = {
    backgroundColor: "rgb(30, 30, 30)",
    scrollBehavior: "smooth",
    display: "grid",
    position: "absolute",
    gridTemplateColumns: "repeat(10, 1fr)",
    gridTemplateRows: "repeat(1, 1fr)",
    left: "50%",
    transform: "translate(-50%, 0%)",
    height: "500px",
    width: "101%",
    top: "244px",
    overflowX: "auto",
    paddingLeft: "15px",
    paddingTop: "30px",
    backdropFilter: "blur(0px)",
    borderRadius: "5px",
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0)",
    overflowY: "hidden",
  };


  const style_Item: CSSProperties = {
    width: "350px",
    height: "225px",
    marginLeft: "20px",
    marginRight: "20px",
    backgroundColor: "rgb(30, 30, 30)",
    borderRadius: "5px",
    cursor: "pointer",
    transform: ".3s",
    transition: ".3s",
    marginTop: "200px",
    display: "none",
  };

  const Style_ButtonsContainer: CSSProperties = {
    position: "absolute",
    left: "55%",
    transform: "translate(-50%, 0%)",
    top: "340px",
    zIndex: "9",
    width: "100%",
  };

  const Style_Buttons: CSSProperties = {
    position: "relative",
    width: "100px",
    height: "40px",
    borderRadius: "5px",
    backgroundColor: "rgb(255, 255, 255)",
    opacity: ".8",
    color: "rgb(10, 10, 10)",
    fontFamily: "verdana",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "10px",
    marginBottom: "10px",
  };  

  const Style_Buttons_Current: CSSProperties = {
    position: "relative",
    width: "100px",
    height: "40px",
    borderRadius: "5px",
    color: "rgb(255, 255, 255)",
    opacity: ".8",
    backgroundColor: "rgb(10, 10, 10)",
    fontFamily: "verdana",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "10px",
    marginBottom: "10px",
  };

  const Image_Style: CSSProperties = {
    position: "relative",
    objectFit: "cover",
    backgroundRepeat: "no-repeat",
    width: "350px",
    height: "225px",
    borderRadius: "5px",
  };

  const Source_Text_Style: CSSProperties = {
    position: "absolute",
    color: "rgb(240, 240, 240)",
    fontFamily: "verdana",
    fontSize: "12px",
    top: "405px",
    marginLeft: "0px",
    background:
      "linear-gradient(to top, rgb(10, 10, 10, 1), rgb(10, 10, 10, 0))",
    width: "350px",
    height: "50px",
    display: "flex",
    alignItems: "flex-end",
    opacity: "1",
    transition: ".3s",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const Actual_Source_Text: CSSProperties = {
    color: "rgb(82, 156, 253)",
    cursor: "pointer",
    textDecoration: "underline",
  };

  const Pic_Img_Style: CSSProperties = {
    position: "absolute",
    top: "240px",
    marginLeft: "-339px",
    transform: "scale(.7)",
    opacity: "1",
    transition: ".3s",
  };

  const Loading_Spinner: CSSProperties = {
   top: "550px",
   zIndex: "9",
   display: "block",
  };

  const Heart_Style: CSSProperties = {
    top: "-215px",
    position: "relative",
    transform: "scale(.9)",
    left: "305px",
    filter: "brightness(500%)",
    opacity: "1",
    transition: ".3s",
  }

  const Large_ScreenSize: CSSProperties = {
    width: "2500px",
  };

  const Arrows_Small: CSSProperties = {
    top: "630px",
  };

  const screenWidth = window.innerWidth;
  if (screenWidth >= 2500) {
    Object.assign(style_Main, Large_ScreenSize);
  }

  const Small_ScreenSize_Title: CSSProperties = {
    top: "300px",
  }

  const Small_ScreenSize: CSSProperties = {
    top: "300px",
  };
  if (screenWidth <= 550) {
    Object.assign(style_Main, Small_ScreenSize);
    Object.assign(Trending_SearchTitle, Small_ScreenSize_Title);
  }

  if (screenWidth <= 550) {
    Object.assign(Arrows_Style_Right, Arrows_Small);
    Object.assign(Arrows_Style_Left, Arrows_Small);
  }

  useEffect(() => {
    setTimeout(() => {
      const load_spinner = document.getElementById("Loading_Spinner");
      const Item_1 = document.getElementById("Item_1_Photo");
      const Item_2 = document.getElementById("Item_2_Photo");
      const Item_3 = document.getElementById("Item_3_Photo");
      const Item_4 = document.getElementById("Item_4_Photo");
      const Item_5 = document.getElementById("Item_5_Photo");
      const Item_6 = document.getElementById("Item_6_Photo");
      const Item_7 = document.getElementById("Item_7_Photo");
      const Item_8 = document.getElementById("Item_8_Photo");
      const Item_9 = document.getElementById("Item_9_Photo");
      const Item_10 = document.getElementById("Item_10_Photo");
      if(load_spinner) load_spinner.style.display = "none";
      if(Item_1) Item_1.style.display = "block";
      if(Item_2) Item_2.style.display = "block";
      if(Item_3) Item_3.style.display = "block";
      if(Item_4) Item_4.style.display = "block";
      if(Item_5) Item_5.style.display = "block";
      if(Item_6) Item_6.style.display = "block";
      if(Item_7) Item_7.style.display = "block";
      if(Item_8) Item_8.style.display = "block";
      if(Item_9) Item_9.style.display = "block";
      if(Item_10) Item_10.style.display = "block";

    }, 1500); 
  }, []);

  return (
    <div style={style_MainContainer}>
      <p style={Trending_SearchTitle}>Trending Searches: </p>
      <div style={Style_ButtonsContainer}>
        <button id="Dark" style={Style_Buttons} onClick={() => ButtonClicked("Dark", "Nature", "Beautiful", "Sky")}>Dark</button>
        <button id="Nature" style={Style_Buttons_Current} onClick={() => ButtonClicked("Nature", "Dark", "Beautiful", "Sky")}>Nature</button>
        <button id="Beautiful" style={Style_Buttons} onClick={() => ButtonClicked("Beautiful", "Dark", "Nature", "Sky")} >Beautiful</button>
        <button id="Sky" style={Style_Buttons}onClick={() => ButtonClicked("Sky", "Dark", "Nature", "Beautiful")} >Sky</button>
      </div>

      <img
        style={Arrows_Style_Left}
        onClick={scrollLeft}
        src={LeftArrowImage}
        alt="Left_Arrow"
      />
      <img
        style={Arrows_Style_Right}
        onClick={scrollRight}
        src={RightArrowImage}
        alt="Right_Arrow"
      />

      {/*Calling Hover Function for Source --------------------------*/}
      <HoverImg containerId="Item_1_Photo" sourceTextId="Source_1_Photo" ImgId="Play_Img_1_p" HeartId="Heart_p_1"/>
      <HoverImg containerId="Item_2_Photo" sourceTextId="Source_2_Photo" ImgId="Play_Img_2_p" HeartId="Heart_p_2"/>
      <HoverImg containerId="Item_3_Photo" sourceTextId="Source_3_Photo" ImgId="Play_Img_3_p" HeartId="Heart_p_3"/>
      <HoverImg containerId="Item_4_Photo" sourceTextId="Source_4_Photo" ImgId="Play_Img_4_p" HeartId="Heart_p_4"/>
      <HoverImg containerId="Item_5_Photo" sourceTextId="Source_5_Photo" ImgId="Play_Img_5_p" HeartId="Heart_p_5"/>
      <HoverImg containerId="Item_6_Photo" sourceTextId="Source_6_Photo" ImgId="Play_Img_6_p" HeartId="Heart_p_6"/>
      <HoverImg containerId="Item_7_Photo" sourceTextId="Source_7_Photo" ImgId="Play_Img_7_p" HeartId="Heart_p_7"/>
      <HoverImg containerId="Item_8_Photo" sourceTextId="Source_8_Photo" ImgId="Play_Img_8_p" HeartId="Heart_p_8"/>
      <HoverImg containerId="Item_9_Photo" sourceTextId="Source_9_Photo" ImgId="Play_Img_9_p" HeartId="Heart_p_9"/>
      <HoverImg containerId="Item_10_Photo" sourceTextId="Source_10_Photo" ImgId="Play_Img_10_p" HeartId="Heart_p_10"/>

      <Heart_Hover Heard_Id="Heart_p_1"/>
      <Heart_Hover Heard_Id="Heart_p_2"/>
      <Heart_Hover Heard_Id="Heart_p_3"/>
      <Heart_Hover Heard_Id="Heart_p_4"/>
      <Heart_Hover Heard_Id="Heart_p_5"/>
      <Heart_Hover Heard_Id="Heart_p_6"/>
      <Heart_Hover Heard_Id="Heart_p_7"/>
      <Heart_Hover Heard_Id="Heart_p_8"/>
      <Heart_Hover Heard_Id="Heart_p_9"/>
      <Heart_Hover Heard_Id="Heart_p_10"/>
      {/*Calling Hover Function for Source --------------------------*/}

      <div id="Loading_Spinner" style={Loading_Spinner} className="loading-spinner"></div>

      <div id="Photo_Main_Conainer" style={style_Main} ref={scrollContainerRef}>
        <div style={style_Item} id="Item_1_Photo">
          <img style={Image_Style} src={photoArray[0]} onClick={() => TriggerLink(0)} />
          <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_1_p" />
          <img onClick={() => Save_Photo({id_Heart_p: "Heart_p_1", src:photoArray[0], url: urlArray[0] })}  src={Heart_Img} style={Heart_Style} id="Heart_p_1"/>
          <p style={Source_Text_Style} id="Source_1_Photo">
            Source:
            <span id="Img_Source1" style={Actual_Source_Text}>
              {urlArray[0]}
            </span>
          </p>
        </div>

        <div
          style={style_Item}
          id="Item_2_Photo"
          
        >
          <img style={Image_Style} src={photoArray[1]} onClick={() => TriggerLink(1)} />
          <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_2_p" />
          <img onClick={() => Save_Photo({id_Heart_p: "Heart_p_2", src:photoArray[1], url: urlArray[1] })} src={Heart_Img} style={Heart_Style} id="Heart_p_2"/>
          <p style={Source_Text_Style} id="Source_2_Photo">
            Source:{" "}
            <span id="Img_Source2" style={Actual_Source_Text}>
              {urlArray[1]}
            </span>
          </p>
        </div>

        <div
          style={style_Item}
          id="Item_3_Photo"
          
        >
          <img style={Image_Style} src={photoArray[2]} onClick={() => TriggerLink(2)} />
          <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_3_p" />
          <img onClick={() => Save_Photo({id_Heart_p: "Heart_p_3", src:photoArray[2], url: urlArray[2] })} src={Heart_Img} style={Heart_Style} id="Heart_p_3"/>
          <p style={Source_Text_Style} id="Source_3_Photo">
            Source:{" "}
            <span id="Img_Source3" style={Actual_Source_Text}>
              {urlArray[2]}
            </span>
          </p>
        </div>

        <div
          style={style_Item}
          id="Item_4_Photo"
          
        >
          <img style={Image_Style} src={photoArray[3]} onClick={() => TriggerLink(3)} />
          <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_4_p" />
          <img onClick={() => Save_Photo({id_Heart_p: "Heart_p_4", src:photoArray[3], url: urlArray[3] })} src={Heart_Img} style={Heart_Style} id="Heart_p_4"/>
          <p style={Source_Text_Style} id="Source_4_Photo">
            Source:{" "}
            <span id="Img_Source4" style={Actual_Source_Text}>
              {urlArray[3]}
            </span>
          </p>
        </div>

        <div
          style={style_Item}
          id="Item_5_Photo"
          
        >
          <img style={Image_Style} src={photoArray[4]} onClick={() => TriggerLink(4)} />
          <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_5_p" />
          <img onClick={() => Save_Photo({id_Heart_p: "Heart_p_5", src:photoArray[4], url: urlArray[4] })} src={Heart_Img} style={Heart_Style} id="Heart_p_5"/>
          <p style={Source_Text_Style} id="Source_5_Photo">
            Source:{" "}
            <span id="Img_Source5" style={Actual_Source_Text}>
              {urlArray[4]}
            </span>
          </p>
        </div>

        <div
          style={style_Item}
          id="Item_6_Photo"
         
        >
          <img style={Image_Style} src={photoArray[5]} onClick={() => TriggerLink(5)} />
          <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_6_p" />
          <img onClick={() => Save_Photo({id_Heart_p: "Heart_p_6", src:photoArray[5], url: urlArray[5] })} src={Heart_Img} style={Heart_Style} id="Heart_p_6"/>
          <p style={Source_Text_Style} id="Source_6_Photo">
            Source:{" "}
            <span id="Img_Source6" style={Actual_Source_Text}>
              {urlArray[5]}
            </span>
          </p>
        </div>

        <div
          style={style_Item}
          id="Item_7_Photo"
          
        >
          <img style={Image_Style} src={photoArray[6]} onClick={() => TriggerLink(6)} />
          <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_7_p" />
          <img onClick={() => Save_Photo({id_Heart_p: "Heart_p_7", src:photoArray[6], url: urlArray[6] })} src={Heart_Img} style={Heart_Style} id="Heart_p_7"/>
          <p style={Source_Text_Style} id="Source_7_Photo">
            Source:{" "}
            <span id="Img_Source7" style={Actual_Source_Text}>
              {urlArray[6]}
            </span>
          </p>
        </div>

        <div
          style={style_Item}
          id="Item_8_Photo"
          
        >
          <img style={Image_Style} src={photoArray[7]} onClick={() => TriggerLink(7)} />
          <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_8_p" />
          <img onClick={() => Save_Photo({id_Heart_p: "Heart_p_8", src:photoArray[7], url: urlArray[7] })} src={Heart_Img} style={Heart_Style} id="Heart_p_8"/>
          <p style={Source_Text_Style} id="Source_8_Photo">
            Source:{" "}
            <span id="Img_Source8" style={Actual_Source_Text}>
              {urlArray[7]}
            </span>
          </p>
        </div>

        <div
          style={style_Item}
          id="Item_9_Photo"
          
        >
          <img style={Image_Style} src={photoArray[8]} onClick={() => TriggerLink(8)} />
          <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_9_p" />
          <img onClick={() => Save_Photo({id_Heart_p: "Heart_p_9", src:photoArray[8], url: urlArray[8] })} src={Heart_Img} style={Heart_Style} id="Heart_p_9"/>
          <p style={Source_Text_Style} id="Source_9_Photo">
            Source:{" "}
            <span id="Img_Source9" style={Actual_Source_Text}>
              {urlArray[8]}
            </span>
          </p>
        </div>

        <div
          style={style_Item}
          id="Item_10_Photo"
          
        >
          <img style={Image_Style} src={photoArray[9]} onClick={() => TriggerLink(9)} />
          <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_10_p" />
          <img onClick={() => Save_Photo({id_Heart_p: "Heart_p_10", src:photoArray[9], url: urlArray[9] })} src={Heart_Img} style={Heart_Style} id="Heart_p_10"/>
          <p style={Source_Text_Style} id="Source_10_Photo">
            Source:{" "}
            <span id="Img_Source10" style={Actual_Source_Text}>
              {urlArray[9]}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Photos_Style;
