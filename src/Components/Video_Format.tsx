import { CSSProperties } from "react";
import React, { useRef, RefObject, useEffect, useState } from "react";
import RightArrowImage from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\Right_Arrow.png";
import LeftArrowImage from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\Left_Arrow.png";
import PlayImg from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\PlayImg.png";
import Heart_Img_v from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\Heart.png";
import { SaveOptions } from "mongoose";
import Cookies from 'js-cookie';

function Video_Style() {
  {
    /*API Call, PEXELS-------------------------------------------------------------*/
  }
  const apiKey = "GTKZGX1qr6cVxMS1Dl88v1xUVe2edF3qaozGZMucbID3XTPE3Z2fSdbh";
  const [searchQuery, setSearchQuery] = useState('beautiful');
  const apiUrl = `https://api.pexels.com/videos/search?query=${searchQuery}&per_page=10`;

  interface Video {
    video_files: {
      link: string;
    }[];
  }

  interface Video2 {
    url: {
      url: string;
    }[];
  }

  const [videoArray, setVideoArray] = useState<string[]>([]);
  const [videoArrayurl, setVideoArrayurl] = useState<string[]>([]);
  useEffect(() => {
    const fetchVideos = async () => {
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
        const videos = data.videos.map((video: Video) =>
          video.video_files[1].link.toString()
        );
        setVideoArray(videos);

        const videosurl = data.videos.map((video: Video2) => video.url);
        setVideoArrayurl(videosurl);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchVideos();
  }, [apiKey, apiUrl]);

  const handleQueryChange = (newQuery: string) => {
    setSearchQuery(newQuery);
  };
  {
    /*API Call, PEXELS-------------------------------------------------------------*/
  }

  function TriggerLink(i: number) {
    const url = videoArrayurl[i];

    window.open(url, "_blank");
  }

  interface HoverImgProps {
    containerId: string;
    sourceTextId: string;
    Video: string;
    PlayImg: string;
  }

  function HoverImg({
    containerId,
    sourceTextId,
    Video,
    PlayImg,
  }: HoverImgProps) {
    useEffect(() => {
      const sourceTextActual = document.getElementById(sourceTextId);
      const containerActual = document.getElementById(containerId);
      const PlayImgActual = document.getElementById(PlayImg);
      const videoElement = document.getElementById(
        Video
      ) as HTMLVideoElement | null;

      const handleMouseOver = () => {
        if (sourceTextActual) sourceTextActual.style.opacity = "0";
        if (sourceTextActual) sourceTextActual.style.top = "175px";
        videoElement?.play();
        if (PlayImgActual) PlayImgActual.style.opacity = "0";
        if (PlayImgActual) PlayImgActual.style.top = "10px";
        if (containerActual) containerActual.style.transform = "scale(1.1)";
      };

      const handleMouseOut = () => {
        if (sourceTextActual) sourceTextActual.style.opacity = "1";
        if (sourceTextActual) sourceTextActual.style.top = "175px";
        videoElement?.pause(); 
        if (PlayImgActual) PlayImgActual.style.opacity = "1";
        if (PlayImgActual) PlayImgActual.style.top = "10px";
        if (containerActual) containerActual.style.transform = "scale(1)";
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
    }, [containerId, sourceTextId]);

    return null;
  }



  interface HoverHeartProps_v {
    Heart_Id_v: string;
  }

  function Heart_Hover_v ({ Heart_Id_v }: HoverHeartProps_v) {
    useEffect(() => {
      const Heart_Actual = document.getElementById(Heart_Id_v);
    

      const handleMouseOver = () => {
        if(Heart_Actual) Heart_Actual.style.transform = "scale(1)";
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
    }, [Heart_Id_v]);

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
    
    const input = a;

    const search = input.replace("_Vid", "");

    const load_spinner_v = document.getElementById("Loading_Spinner_v");
    if(load_spinner_v) load_spinner_v.style.display = "block";
    setTimeout(() => {
      const load_spinner_v = document.getElementById("Loading_Spinner_v");
      if(load_spinner_v) load_spinner_v.style.display = "none";
      handleQueryChange(search);

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

  interface Save_Vid_Ids{
    id_Heart: string;
    src: string;
    url: string;
  }

  function Save_Video({ id_Heart, src, url}: Save_Vid_Ids) : void {
    const HeartImg = document.getElementById(id_Heart);
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
            body: JSON.stringify({ email_data: Check_Login, src_data : src.toString(), url_data: url.toString(), type_data: "V"  }),
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
  };

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
    overflowY: "hidden",
    marginTop: "200px",
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
    transition: ".2s",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const Actual_Source_Text: CSSProperties = {
    color: "rgb(82, 156, 253)",
    cursor: "pointer",
    textDecoration: "underline",
  };

  const Play_Img_Style: CSSProperties = {
    position: "absolute",
    top: "240px",
    marginLeft: "-339px",
    transform: "scale(.7)",
    opacity: 1,
    transition: ".3s",
  };


  const Loading_Spinner: CSSProperties = {
    top: "550px",
    zIndex: "9",
    display: "block",
   };


   
   const Heart_Style_v: CSSProperties = {
    top: "-220px",
    position: "relative",
    transform: "scale(.9)",
    left: "305px",
    filter: "brightness(500%)",
    opacity: "1",
    transition: ".3s",
    zIndex: "12",
  }
 
 
   useEffect(() => {
     setTimeout(() => {
       const load_spinner_v = document.getElementById("Loading_Spinner_v");
       const Item_1_v = document.getElementById("Item_1_Vid");
       const Item_2_v = document.getElementById("Item_2_Vid");
       const Item_3_v = document.getElementById("Item_3_Vid");
       const Item_4_v = document.getElementById("Item_4_Vid");
       const Item_5_v = document.getElementById("Item_5_Vid");
       const Item_6_v = document.getElementById("Item_6_Vid");
       const Item_7_v= document.getElementById("Item_7_Vid");
       const Item_8_v = document.getElementById("Item_8_Vid");
       const Item_9_v = document.getElementById("Item_9_Vid");
       const Item_10_v = document.getElementById("Item_10_Vid");
       if(load_spinner_v) load_spinner_v.style.display = "none";
       if(Item_1_v) Item_1_v.style.display = "block";
       if(Item_2_v) Item_2_v.style.display = "block";
       if(Item_3_v) Item_3_v.style.display = "block";
       if(Item_4_v) Item_4_v.style.display = "block";
       if(Item_5_v) Item_5_v.style.display = "block";
       if(Item_6_v) Item_6_v.style.display = "block";
       if(Item_7_v) Item_7_v.style.display = "block";
       if(Item_8_v) Item_8_v.style.display = "block";
       if(Item_9_v) Item_9_v.style.display = "block";
       if(Item_10_v) Item_10_v.style.display = "block";
 
     }, 1500); 
   }, []);

  return (
    <div style={style_MainContainer}>
      <p style={Trending_SearchTitle}>Trending Searches: </p>
      <div style={Style_ButtonsContainer}>
      <button id="Dark_Vid" style={Style_Buttons} onClick={() => ButtonClicked("Dark_Vid", "Nature_Vid", "Beautiful_Vid", "Sky_Vid")}>Dark</button>
        <button id="Nature_Vid" style={Style_Buttons} onClick={() => ButtonClicked("Nature_Vid", "Dark_Vid", "Beautiful_Vid", "Sky_Vid")}>Nature</button>
        <button id="Beautiful_Vid" style={Style_Buttons_Current} onClick={() => ButtonClicked("Beautiful_Vid", "Dark_Vid", "Nature_Vid", "Sky_Vid")} >Beautiful</button>
        <button id="Sky_Vid" style={Style_Buttons}onClick={() => ButtonClicked("Sky_Vid", "Dark_Vid", "Nature_Vid", "Beautiful_Vid")} >Sky</button>
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
      <HoverImg
        containerId="Item_1_Vid"
        sourceTextId="Source_1_Vid"
        Video="Video_1"
        PlayImg="Play_Img_1"
      />
      <HoverImg
        containerId="Item_2_Vid"
        sourceTextId="Source_2_Vid"
        Video="Video_2"
        PlayImg="Play_Img_2"
      />
      <HoverImg
        containerId="Item_3_Vid"
        sourceTextId="Source_3_Vid"
        Video="Video_3"
        PlayImg="Play_Img_3"
      />
      <HoverImg
        containerId="Item_4_Vid"
        sourceTextId="Source_4_Vid"
        Video="Video_4"
        PlayImg="Play_Img_4"
      />
      <HoverImg
        containerId="Item_5_Vid"
        sourceTextId="Source_5_Vid"
        Video="Video_5"
        PlayImg="Play_Img_5"
      />
      <HoverImg
        containerId="Item_6_Vid"
        sourceTextId="Source_6_Vid"
        Video="Video_6"
        PlayImg="Play_Img_6"
      />
      <HoverImg
        containerId="Item_7_Vid"
        sourceTextId="Source_7_Vid"
        Video="Video_7"
        PlayImg="Play_Img_7"
      />
      <HoverImg
        containerId="Item_8_Vid"
        sourceTextId="Source_8_Vid"
        Video="Video_8"
        PlayImg="Play_Img_8"
      />
      <HoverImg
        containerId="Item_9_Vid"
        sourceTextId="Source_9_Vid"
        Video="Video_9"
        PlayImg="Play_Img_9"
      />
      <HoverImg
        containerId="Item_10_Vid"
        sourceTextId="Source_10_Vid"
        Video="Video_10"
        PlayImg="Play_Img_10"
      />

      {/**/}
      <Heart_Hover_v Heart_Id_v="Heart_v_1"/>
      <Heart_Hover_v Heart_Id_v="Heart_v_2"/>
      <Heart_Hover_v Heart_Id_v="Heart_v_3"/>
      <Heart_Hover_v Heart_Id_v="Heart_v_4"/>
      <Heart_Hover_v Heart_Id_v="Heart_v_5"/>
      <Heart_Hover_v Heart_Id_v="Heart_v_6"/>
      <Heart_Hover_v Heart_Id_v="Heart_v_7"/>
      <Heart_Hover_v Heart_Id_v="Heart_v_8"/>
      <Heart_Hover_v Heart_Id_v="Heart_v_9"/>
      <Heart_Hover_v Heart_Id_v="Heart_v_10"/>
    

      {/*Calling Hover Function for Source --------------------------*/}

      <div id="Loading_Spinner_v" style={Loading_Spinner} className="loading-spinner"></div>

      <div id="Scroll_Container" style={style_Main} ref={scrollContainerRef}>
        <div style={style_Item} id="Item_1_Vid">
          <video
            id="Video_1"
            style={Image_Style}
            typeof="video/mp4"
            src={videoArray[0]}
            muted
            onClick={() => TriggerLink(0)}></video>
          <img style={Play_Img_Style} src={PlayImg} id="Play_Img_1" />
          <img onClick={() => Save_Video({id_Heart: "Heart_v_1", src: videoArray[0], url: videoArrayurl[0] })} src={Heart_Img_v} style={Heart_Style_v} id="Heart_v_1"/>
          <p style={Source_Text_Style} id="Source_1_Vid">
            Source:{" "}
            <span id="Img_Source1" style={Actual_Source_Text}>
              {videoArrayurl[0]}
            </span>
          </p>
        </div>

        <div style={style_Item} id="Item_2_Vid" >
          <video
            id="Video_2"
            style={Image_Style}
            typeof="video/mp4"
            src={videoArray[1]}
            muted
            onClick={() => TriggerLink(1)}></video>
          <img style={Play_Img_Style} src={PlayImg} id="Play_Img_2" />
          <img onClick={() => Save_Video({id_Heart: "Heart_v_2", src: videoArray[1], url: videoArrayurl[1] })} src={Heart_Img_v} style={Heart_Style_v} id="Heart_v_2"/>
          <p style={Source_Text_Style} id="Source_2_Vid">
            Source:{" "}
            <span id="Img_Source1" style={Actual_Source_Text}>
              {videoArrayurl[1]}
            </span>
          </p>
        </div>

        <div style={style_Item} id="Item_3_Vid" >
          <video
            id="Video_3"
            style={Image_Style}
            typeof="video/mp4"
            src={videoArray[2]}
            muted
            onClick={() => TriggerLink(2)}></video>
          <img style={Play_Img_Style} src={PlayImg} id="Play_Img_3" />
          <img onClick={() => Save_Video({id_Heart: "Heart_v_3", src: videoArray[2], url: videoArrayurl[2] })} src={Heart_Img_v} style={Heart_Style_v} id="Heart_v_3"/>
          <p style={Source_Text_Style} id="Source_3_Vid">
            Source:{" "}
            <span id="Img_Source1" style={Actual_Source_Text}>
              {videoArrayurl[2]}
            </span>
          </p>
        </div>

        <div style={style_Item} id="Item_4_Vid" >
          <video
            id="Video_4"
            style={Image_Style}
            typeof="video/mp4"
            src={videoArray[3]}
            muted
            onClick={() => TriggerLink(3)}></video>
          <img style={Play_Img_Style} src={PlayImg} id="Play_Img_4" />
          <img onClick={() => Save_Video({id_Heart: "Heart_v_4", src: videoArray[3], url: videoArrayurl[3] })} src={Heart_Img_v} style={Heart_Style_v} id="Heart_v_4"/>
          <p style={Source_Text_Style} id="Source_4_Vid">
            Source:{" "}
            <span id="Img_Source1" style={Actual_Source_Text}>
              {videoArrayurl[3]}
            </span>
          </p>
        </div>

        <div style={style_Item} id="Item_5_Vid" >
          <video
            id="Video_5"
            style={Image_Style}
            typeof="video/mp4"
            src={videoArray[4]}
            muted
            onClick={() => TriggerLink(4)}></video>
          <img style={Play_Img_Style} src={PlayImg} id="Play_Img_5" />
          <img onClick={() => Save_Video({id_Heart: "Heart_v_5", src: videoArray[4], url: videoArrayurl[4] })} src={Heart_Img_v} style={Heart_Style_v} id="Heart_v_5"/>
          <p style={Source_Text_Style} id="Source_5_Vid">
            Source:{" "}
            <span id="Img_Source1" style={Actual_Source_Text}>
              {videoArrayurl[4]}
            </span>
          </p>
        </div>

        <div style={style_Item} id="Item_6_Vid" >
          <video
            id="Video_6"
            style={Image_Style}
            typeof="video/mp4"
            src={videoArray[5]}
            muted
            onClick={() => TriggerLink(5)}></video>
          <img style={Play_Img_Style} src={PlayImg} id="Play_Img_6" />
          <img onClick={() => Save_Video({id_Heart: "Heart_v_6", src: videoArray[5], url: videoArrayurl[5] })} src={Heart_Img_v} style={Heart_Style_v} id="Heart_v_6"/>
          <p style={Source_Text_Style} id="Source_6_Vid">
            Source:{" "}
            <span id="Img_Source1" style={Actual_Source_Text}>
              {videoArrayurl[5]}
            </span>
          </p>
        </div>

        <div style={style_Item} id="Item_7_Vid">
          <video
            id="Video_7"
            style={Image_Style}
            typeof="video/mp4"
            src={videoArray[6]}
            muted
            onClick={() => TriggerLink(6)}></video>
          <img style={Play_Img_Style} src={PlayImg} id="Play_Img_7" />
          <img onClick={() => Save_Video({id_Heart: "Heart_v_7", src: videoArray[6], url: videoArrayurl[6] })} src={Heart_Img_v} style={Heart_Style_v} id="Heart_v_7"/>
          <p style={Source_Text_Style} id="Source_7_Vid">
            Source:{" "}
            <span id="Img_Source1" style={Actual_Source_Text}>
              {videoArrayurl[6]}
            </span>
          </p>
        </div>

        <div style={style_Item} id="Item_8_Vid" >
          <video
            id="Video_8"
            style={Image_Style}
            typeof="video/mp4"
            src={videoArray[7]}
            muted
            onClick={() => TriggerLink(7)}></video>
          <img style={Play_Img_Style} src={PlayImg} id="Play_Img_8" />
          <img onClick={() => Save_Video({id_Heart: "Heart_v_8", src: videoArray[7], url: videoArrayurl[7] })} src={Heart_Img_v} style={Heart_Style_v} id="Heart_v_8"/>
          <p style={Source_Text_Style} id="Source_8_Vid">
            Source:{" "}
            <span id="Img_Source1" style={Actual_Source_Text}>
              {videoArrayurl[7]}
            </span>
          </p>
        </div>

        <div style={style_Item} id="Item_9_Vid" >
          <video
            id="Video_9"
            style={Image_Style}
            typeof="video/mp4"
            src={videoArray[8]}
            muted
            onClick={() => TriggerLink(8)}></video>
          <img style={Play_Img_Style} src={PlayImg} id="Play_Img_9" />
          <img onClick={() => Save_Video({id_Heart: "Heart_v_9", src: videoArray[8], url: videoArrayurl[8] })} src={Heart_Img_v} style={Heart_Style_v} id="Heart_v_9"/>
          <p style={Source_Text_Style} id="Source_9_Vid">
            Source:{" "}
            <span id="Img_Source1" style={Actual_Source_Text}>
              {videoArrayurl[8]}
            </span>
          </p>
        </div>

        <div style={style_Item} id="Item_10_Vid">
          <video
            id="Video_10"
            style={Image_Style}
            typeof="video/mp4"
            src={videoArray[9]}
            muted
            onClick={() => TriggerLink(9)}></video>
          <img style={Play_Img_Style} src={PlayImg} id="Play_Img_10" />
          <img onClick={() => Save_Video({id_Heart: "Heart_v_10", src: videoArray[9], url: videoArrayurl[9]})} src={Heart_Img_v} style={Heart_Style_v} id="Heart_v_10"/>
          <p style={Source_Text_Style} id="Source_10_Vid">
            Source:{" "}
            <span id="Img_Source1" style={Actual_Source_Text}>
              {videoArrayurl[9]}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video_Style;
