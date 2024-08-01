import { CSSProperties } from "react";
import React, { useRef, RefObject, useEffect, useState } from "react";
import Logo from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/logo.png";
import SearchImg from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/Search.png";
import arrow from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/Left_Arrow.png";
import video_img from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/PlayImg.png";
import pic_img from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/PicImg.png";
import Main_Back from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/Main_Back.jpg";
import Main_Back_vid from "C:/Coding Files/Pixel Peak/react-app/src/Components/Videos/main_video.mp4";
import space_all from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/space_all.jpg";
import sunrise_all from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/sunrise_all.jpg";
import canyon_all from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/canyon_all.jpg";
import fire_all from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/fire_all.jpg";
import neon_all from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/neon_all.jpg";
import rain_all from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/rain_all.jpg";
import sunset_all from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/sunset_all.jpg";
import savannah_all from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/savannah_all.jpg";
import lights_all from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/lights_all.jpg";
import trees_all from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/trees_all.jpg";
import plants_all from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/plants_all.jpg";
import tropical_all from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/tropical_all.jpg";
import clouds_all from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/clouds_all.jpg";
import mountains_all from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/mountains_all.jpg";
import cloudy_all from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/cloudy_all.jpg";
import night_all from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/night_all.jpg";
import wild_all from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/wild_all.jpg";
import animals_all from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/animals_all.jpg";
import foggy_all from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/foggy_all.jpg";
import bright_all from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/bright_all.jpg";
import dark_trending from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/dark_trending.jpg";
import sky_trending from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/sky_trending.jpg";
import forest_trending from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/forest_trending.jpg";
import nature_trending from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/nature_trending.jpg";

import moon_featured from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/moon_featured.jpg";
import volcanoe_featured from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/volcanoe_featured.jpg";
import jet_featured from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/jet_featured.jpg";
import cats_featured from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/cats_featured.jpg";
import dogs_featured from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/dogs_featured.jpg";
import cowboy_featured from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/cowboy_featured.jpg";
import helicopter_featured from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/helicopter_featured.jpg";
import basketball_featured from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/basketball_featured.jpg";
import shark_featured from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/shark_featured.jpg";
import food_featured from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/food_featured.jpg";
import horse_featured from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/horse_featured.jpg";
import Cookies from 'js-cookie';

function Account_Style() {


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
   

    interface HoverPhotosProps {
      containerId: string;
      SwitchContainerId: string;
      inputId: string;
      arrowId: string;
      arrowId_2: string;
    }
  
    function HoverSwitch({
      containerId,
      SwitchContainerId,
      inputId,
      arrowId,
      arrowId_2

    }: HoverPhotosProps) {
      useEffect(() => {
   
        const switchContainer = document.getElementById(SwitchContainerId);
        const containerActual = document.getElementById(containerId);
        const inputActual = document.getElementById(inputId);
        const arrowActual = document.getElementById(arrowId);
        const arrow_2Actual = document.getElementById(arrowId_2);


        const handleMouseOver = () => {

          if(switchContainer) switchContainer.style.display = "flex";
          if(inputActual) inputActual.style.borderBottomLeftRadius = "0px";
          if(arrowActual) arrowActual.style.transform = "rotate(90deg)";
          if(arrow_2Actual) arrow_2Actual.style.transform = "rotate(90deg)";
        };
    
        const handleMouseOut = () => {
          if(switchContainer) switchContainer.style.display = "none";
          if(inputActual) inputActual.style.borderBottomLeftRadius = "5px";
          if(arrowActual) arrowActual.style.transform = "rotate(-90deg)";
          if(arrow_2Actual) arrow_2Actual.style.transform = "rotate(-90deg)";
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
      }, [containerId, SwitchContainerId, inputId, arrowId]); // Include 'enabled' in the dependency array
    
      return null;
    }

    interface change_Bars_interface {
      type: string;
   
    }
  

  
    

    function Change_Search_bars({type}:change_Bars_interface){
      const input_photos = document.getElementById("Input_Photos_Home");
      const input_videos = document.getElementById("Input_Videos_Home");
  
      const switch_photos = document.getElementById("Photos_Switch_Container");
      const switch_videos = document.getElementById("Videos_Switch_Container");
  
      const switch_to_photos = document.getElementById("Switch_to_photos");
      const switch_to_videos = document.getElementById("Switch_to_videos");
  
      const main_photo_container_switch = document.getElementById("photos_switch_container_main");


      if(type === "v"){
        
        if(main_photo_container_switch)main_photo_container_switch.style.display = "none";

        if(switch_to_photos)switch_to_photos.style.display = "none";
        if(switch_to_videos)switch_to_videos.style.display = "none";
  
        if(switch_photos)switch_photos.style.display = "none";
        if(switch_videos)switch_videos.style.display = "flex";
  
        if(input_photos)input_photos.style.display = "none";
        if(input_videos)input_videos.style.display = "flex";
      }else if(type === "p"){
        
        if(main_photo_container_switch)main_photo_container_switch.style.display = "flex";

        if(switch_to_photos)switch_to_photos.style.display = "none";
        if(switch_to_videos)switch_to_videos.style.display = "none";
  
        if(switch_photos)switch_photos.style.display = "flex";
        if(switch_videos)switch_videos.style.display = "none";
  
        if(input_photos)input_photos.style.display = "flex";
        if(input_videos)input_videos.style.display = "none";
      }
  
    }


    interface value_photos{
      value: string;
    }

    interface value_videos{
      value: string;
    }

    function Search_Photos_Featured({value}: value_photos){
      Cookies.remove("Home_Search_Videos");
      Cookies.remove("Home_Search_Photos");
      Cookies.remove("Go_to_Photos_fromV");      
      Cookies.remove("Go_to_Videos_fromP"); 
      Cookies.set("Home_Search_Photos", value, { path: '/', expires: 1  });
      window.location.reload();
    }

    function Search_Videos_Featured({value}: value_videos){
      Cookies.remove("Home_Search_Videos");
      Cookies.remove("Home_Search_Photos");
      Cookies.remove("Go_to_Photos_fromV");      
      Cookies.remove("Go_to_Videos_fromP"); 
      Cookies.set("Home_Search_Videos", value, { path: '/', expires: 1  });
      window.location.reload();
    }

    const handleKeyPress_Photos = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        Cookies.remove("Home_Search_Videos");
        Cookies.remove("Home_Search_Photos");
        Cookies.remove("Go_to_Photos_fromV");      
        Cookies.remove("Go_to_Videos_fromP");   
        const input_photos= document.getElementById("Input_Photos_Home") as HTMLInputElement;
        Cookies.set("Home_Search_Photos", input_photos.value, { path: '/', expires: 1  });
        window.location.reload();
      }
    };


  const handleKeyPress_Videos = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
        Cookies.remove("Home_Search_Videos");
        Cookies.remove("Home_Search_Photos");
        Cookies.remove("Go_to_Photos_fromV");      
        Cookies.remove("Go_to_Videos_fromP");   
        const input_videos = document.getElementById("Input_Videos_Home") as HTMLInputElement;
        Cookies.set("Home_Search_Videos", input_videos.value, { path: '/', expires: 1  });
        window.location.reload();

    }
  };


  function All_tab(){
    const all_tab = document.getElementById("All_Tab_Container");
    const featured_tab = document.getElementById("Featured_Tab_Container");
    const trending_tab = document.getElementById("Trending_Tab_Container");

    const all_btn = document.getElementById("All_btn_Actual");
    const featured_btn = document.getElementById("Featured_btn_Actual");
    const trending_btn = document.getElementById("Trending_btn_Actual");

    if(all_tab)all_tab.style.display = "grid";
    if(featured_tab)featured_tab.style.display = "none";
    if(trending_tab)trending_tab.style.display = "none";

    if(all_btn)all_btn.style.backgroundColor = "rgba(45, 101, 255, 1)";
    if(featured_btn)featured_btn.style.backgroundColor = "rgba(0, 0, 0, 0)";
    if(trending_btn)trending_btn.style.backgroundColor = "rgba(0, 0, 0, 0)";


  }
  
  function Featured_tab(){
    const all_tab = document.getElementById("All_Tab_Container");
    const featured_tab = document.getElementById("Featured_Tab_Container");
    const trending_tab = document.getElementById("Trending_Tab_Container");

    const all_btn = document.getElementById("All_btn_Actual");
    const featured_btn = document.getElementById("Featured_btn_Actual");
    const trending_btn = document.getElementById("Trending_btn_Actual");

    if(all_tab)all_tab.style.display = "none";
    if(featured_tab)featured_tab.style.display = "grid";
    if(trending_tab)trending_tab.style.display = "none";

    if(all_btn)all_btn.style.backgroundColor = "rgba(0, 0, 0, 0)";
    if(featured_btn)featured_btn.style.backgroundColor = "rgba(45, 101, 255, 1)";
    if(trending_btn)trending_btn.style.backgroundColor = "rgba(0, 0, 0, 0)";
    
  }
 

  function Trending_tab(){
    const all_tab = document.getElementById("All_Tab_Container");
    const featured_tab = document.getElementById("Featured_Tab_Container");
    const trending_tab = document.getElementById("Trending_Tab_Container");

    const all_btn = document.getElementById("All_btn_Actual");
    const featured_btn = document.getElementById("Featured_btn_Actual");
    const trending_btn = document.getElementById("Trending_btn_Actual");

    if(all_tab)all_tab.style.display = "none";
    if(featured_tab)featured_tab.style.display = "none";
    if(trending_tab)trending_tab.style.display = "grid";

    if(all_btn)all_btn.style.backgroundColor = "rgba(0, 0, 0, 0)";
    if(featured_btn)featured_btn.style.backgroundColor = "rgba(0, 0, 0, 0)";
    if(trending_btn)trending_btn.style.backgroundColor = "rgba(45, 101, 255, 1)";
    
  }
 


  const Main_Style: CSSProperties = {
    position: "absolute",
    height: "100%",
    width: "100%",
    left: "0px",
    marginTop: "0px",
    overflowY: "auto",
  };



  const Top_Main_Style: CSSProperties = {
    height: "400px",
    width: "100%",
    backgroundImage: `url(${Main_Back})`,
    backgroundSize: 'cover',
    backgroundColor: "rgb(0, 0, 0, 1)",
    backgroundBlendMode: 'multiply',
  };


  const Video_Main: CSSProperties = {
    width: "100%",
    height: "400px",
    position: "absolute",
    top: "0px",
    left: "0px",
    objectFit: "cover",
    backgroundRepeat: "no-repeat",
    opacity: ".5",
   
  };
  

  const Title_div: CSSProperties = {
    position: "absolute",
    top: "90px",
    left: "50%",
    transform: "translate(-50%, 0%)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "285px",
  };

  const Logo_Style: CSSProperties = { 
   width: "45px",
   height: "45px",
   marginTop: "-15px",
  };

  const Logo_text: CSSProperties = {
    fontFamily: 'arial',
    color: 'rgb(255, 255, 255)',
    fontWeight: 'bold',
    letterSpacing: '1px',
    fontSize: '50px',
    cursor: 'pointer',
    fontVariant: 'small-caps',
    whiteSpace: "nowrap",
  };


  const Switch_Container: CSSProperties = {
    position: "absolute",
    left: "calc(50% - 60px)",
    transform: "translate(-50%, 0%)",
    width: "50%",
    height: "60px",
    fontFamily: "helvetica",
    fontSize: "16px",
    color: "rgb(255, 255, 255)",
    top: "220px",
    borderRadius: "5px",
    backgroundColor: "rgb(15, 15, 15, 1)",
    paddingRight: "55px",
    paddingLeft: "20px",
    display: "flex",
    justifyContent: "left",
    borderLeft: "2px solid rgb(50, 50, 50)",
    borderTop: "2px solid rgb(50, 50, 50)",
    borderBottom: "2px solid rgb(50, 50, 50)",
  };

  const Photos_switch: CSSProperties = {
    width: "100px",
    borderRight: "2px solid rgb(50, 50, 50)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    cursor: "pointer",
  
 
  };

  const Videos_switch: CSSProperties = {
    width: "100px",
    borderRight: "3px solid rgb(50, 50, 50)",
    display: "none",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    cursor: "pointer",

  };
  

  const Switch_to_Videos: CSSProperties = {
    position: "absolute",
    width: "121px",
    display: "none",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    cursor: "pointer",
    top: "50px",
    backgroundColor: "rgb(15, 15, 15)", 
    borderBottomRightRadius: "5px", 
    borderBottomLeftRadius: "5px",
    padding: "10px",
    left: "-1px",
    borderRight: "2px solid rgb(50, 50, 50)",
    borderLeft: "2px solid rgb(50, 50, 50)",
    borderBottom: "2px solid rgb(50, 50, 50)",
  };


  const Switch_to_Photos: CSSProperties = {
    position: "absolute",
    width: "121px",
    display: "none",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    cursor: "pointer",
    top: "50px",
    backgroundColor: "rgb(15, 15, 15)", 
    borderBottomRightRadius: "5px", 
    borderBottomLeftRadius: "5px",
    padding: "10px",
    left: "-1px",
    borderRight: "2px solid rgb(50, 50, 50)",
    borderLeft: "2px solid rgb(50, 50, 50)",
    borderBottom: "2px solid rgb(50, 50, 50)",
 
  };

  const arrow_switch: CSSProperties = {
    transform: "rotate(-90deg)",
    width: "18px",
    height: "18px",
  };

  
  const icon_switch: CSSProperties = {
    width: "18px",
    height: "18px",
    marginLeft: "10px",
  };


  const Switch_text: CSSProperties = {
    color: "rgb(255, 255, 255)",
    fontSize: "16px",
    fontFamily: "helvetica",
    marginTop: "15px",
    marginRight: "15px", 
  };

  const Switch_to_text: CSSProperties = {
    color: "rgb(255, 255, 255)",
    fontSize: "16px",
    fontFamily: "helvetica",
    marginTop: "15px",
    marginRight: "5px", 
  };

  const Input_SearchImg_Container: CSSProperties ={
    position: "absolute",
    left: "calc(50% + 60px)",
    transform: "translate(-50%, 0%)",
    width: "50%",
    height: "60px",
    fontSize: "16px",
    top: "220px",
  }

  const Input_Style: CSSProperties={
    position: "absolute",
    left: "0px",
    width: "100%",
    height: "100%",
    fontFamily: "helvetica",
    fontSize: "16px",
    color: "rgb(255, 255, 255)",
    borderTopRightRadius: '5px', 
    borderBottomRightRadius: '5px',
    backgroundColor: "rgb(15, 15, 15, 1)",
    paddingRight: "55px",
    paddingLeft: "20px",
    borderRight: "2px solid rgb(50, 50, 50)",
    borderTop: "2px solid rgb(50, 50, 50)",
    borderBottom: "2px solid rgb(50, 50, 50)",

  };

  const Input_Style_2: CSSProperties={
    position: "absolute",
    left: "0px",
    width: "100%",
    height: "100%",
    fontFamily: "helvetica",
    fontSize: "16px",
    color: "rgb(255, 255, 255)",
    borderTopRightRadius: '5px', 
    borderBottomRightRadius: '5px',
    backgroundColor: "rgb(15, 15, 15, 1)",
    paddingRight: "55px",
    paddingLeft: "20px",
    display: "none",
    borderRight: "2px solid rgb(50, 50, 50)",
    borderTop: "2px solid rgb(50, 50, 50)",
    borderBottom: "2px solid rgb(50, 50, 50)",
  };

  const Search_Img_Style: CSSProperties={
    position: "absolute",
    top: "50%",
    transform: "translate(0%, -50%)",
    right: "15px",     
    cursor: "pointer",
    filter: "brightness(100%)",
  };


  const write_up: CSSProperties={
    position: "absolute",
    top: "170px",
    left: "50%",
    transform: "translate(-50%, 0%)",
    fontFamily: "Helvetica",
    fontSize: "20px",
    color: "rgb(255, 255, 255)",
    fontWeight: "bold",
    
  };
  

  
  const featured_bottom_container: CSSProperties={
    position: "absolute",
    top: "300px",
    left: "50%",
    transform: "translate(-50%, 0%)",
    display: "flex",
    width: "200px",
    justifyContent: "space-between",
    flexDirection: "row",
    
  };

    
  const Bottom_links_feat: CSSProperties={
    fontFamily: "Helvetica",
    fontSize: "16px",
    color: "rgb(255, 255, 255)",
    textDecoration: "underline",
    cursor: "pointer",
  };



  const Categories_Container_style: CSSProperties={
    position: "relative",
    top: "0px",
    width: "100%",

    backgroundColor: "rgb(15, 15, 15)",
  };

  const Categories_container_actual: CSSProperties={
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, 0%)",
    top: "50px",
    display: "flex",
    width: "400px",
    flexDirection: "row",
    justifyContent: "space-between",
  };

  


  const footerStyle: CSSProperties = {
    borderTop: '1px solid rgba(255, 255, 255, 1)',
    position: 'relative',
    top: "300px",
    backgroundColor: 'rgb(15, 15, 15)',
    width: '80%',
    left: "50%",
    transform: "translate(-50%, 0%)",
    height: '180px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(1, 1fr)',

  };


  const copyrightStyle: CSSProperties = {
    position: 'absolute',
    top: '65px',
    left: '15px',
    textAlign: 'left',
    color: "rgb(200, 200, 200)",
  };

  const Footer_Title: CSSProperties = {
    position: "absolute",
    color: "rgb(255, 255, 255)",
    fontFamily: "arial",
    letterSpacing: "1px",
    fontSize: "25px",
    fontVariant: "small-caps",
    fontWeight: "bold",
    left: "15px",
    top: "15px",
  };

  const Categories_Title_Style: CSSProperties={
    border: "0px solid rgb(200, 200, 200)",
    width: "120px",
    height: "35px",
    borderRadius: "25px",
    backgroundColor: "rgb(15, 15, 15)",
    fontFamily: "helvetica",
    fontSize: "16px",
    color: "rgb(255, 255, 255)",
    fontWeight: "bold",

  };

  const Categories_Title_Style_alt: CSSProperties={
    border: "0px solid rgb(200, 200, 200)",
    width: "120px",
    height: "35px",
    borderRadius: "25px",
    backgroundColor: "rgb(45, 101, 255)",
    fontFamily: "helvetica",
    fontSize: "16px",
    color: "rgb(255, 255, 255)",
    fontWeight: "bold",

  };
  
  const All_Container_Style: CSSProperties={
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "min-content",
    top: "150px",
    gridGap: "20px",
    width: "95%",
    left: "calc(50%)",
    transform: "translate(-50%, 0%)",
    maxWidth: "1400px",
  };

  const Featured_Container_Style: CSSProperties={
    position: "relative",
    display: "none",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "min-content",
    top: "150px",
    gridGap: "20px",
    width: "95%",
    left: "calc(50%)",
    transform: "translate(-50%, 0%)",
    maxWidth: "1400px",
  };

  const Trending_Container_Style: CSSProperties={
    position: "relative",
    display: "none",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "min-content",
    top: "150px",
    gridGap: "20px",
    width: "95%",
    left: "calc(50%)",
    transform: "translate(-50%, 0%)",
    maxWidth: "1400px",
  };
  
  
  const All_div_Style: CSSProperties={
    width: "100%",
    height: "385px",
    borderRadius: "5px",
    backgroundColor: "rgb(100, 100, 100, 0)",
    transform: ".25s ease",


  };

  const All_Style_Img: CSSProperties={
    width: "100%",
    height: "275px",
    borderTopRightRadius: "5px",
    borderTopLeftRadius: "5px",
    backgroundImage: `url(${Main_Back})`,
    objectFit: "cover",
    position: "relative",
    top: "0px",
    left: "0px",
    cursor: "pointer",
  };

  const All_Number_Style: CSSProperties={
    position: "relative",
    top: "-3px",
    left: "5px",
    color: "rgb(150, 150, 150)",
    fontFamily: "helvetica",
    fontSize: "14px",
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: "1px",
    transition: ".2s",
    cursor: "pointer",
  };

  const All_Number_Style_v: CSSProperties={
    position: "relative",
    top: "-10px",
    left: "5px",
    color: "rgb(150, 150, 150)",
    fontFamily: "helvetica",
    fontSize: "14px",
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: "1px",
    transition: ".2s",
    cursor: "pointer",
  };


  
  const All_Title_Style: CSSProperties={
    position: "relative",
    top: "7px",
    left: "5px",
    color: "rgb(255, 255, 255)",
    fontFamily: "helvetica",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: "1px",
  };
  
    
  const Pic_Img_Style: CSSProperties={
    width: "16px",
    height: "16px",
    marginTop: "-3px",
    marginRight: "5px",
    filter: "brightness(60%)",
  };

  
  
function updateStyles_Account(){
  const screenWidth_Home = window.innerWidth;

  const All_Container_Style_small: CSSProperties={
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "20px",
    width: "95%",

  };

  const All_Container_Style_smaller: CSSProperties={
    gridTemplateColumns: "repeat(2, 1fr)",
  };

  const All_Container_Style_smallest: CSSProperties={
    gridTemplateColumns: "repeat(1, 1fr)",
  };


  const Smaller_SeachBar_v: CSSProperties = {
    width: "calc(75% + 60px)",
  };

 

  const Smaller_Title_Text: CSSProperties = {
    fontSize: '50px',
  };

  const Smallest_Writeup_Text: CSSProperties = {
    top: "150px",
   
  };

  const Smaller_Writeup_Text: CSSProperties = {
    fontSize: '16px',
    whiteSpace: "nowrap",
  };

  const smaller_featured_bottom_container: CSSProperties = {
    top: "335px",
  };

  const title_2_small: CSSProperties = {
    fontSize: "15px",
    whiteSpace: "pre-wrap",
    top: "160px",
    width: "75%",
  };

  if(screenWidth_Home <= 1500){
    
    Object.assign(All_Container_Style, All_Container_Style_small);
    Object.assign(Featured_Container_Style, All_Container_Style_small);
    Object.assign(Trending_Container_Style, All_Container_Style_small);

  }

  if(screenWidth_Home <= 1150){
    Object.assign(write_up, Smallest_Writeup_Text);

  }

  if(screenWidth_Home <= 890){
    Object.assign(Input_Style, Smaller_SeachBar_v);
    Object.assign(Input_Style_2, Smaller_SeachBar_v);
    Object.assign(All_Container_Style, All_Container_Style_smaller);
    Object.assign(Featured_Container_Style, All_Container_Style_smaller);
    Object.assign(Trending_Container_Style, All_Container_Style_smaller);
   
  }
  
  if(screenWidth_Home <= 560){
    Object.assign(featured_bottom_container, smaller_featured_bottom_container);
    Object.assign(write_up, title_2_small);
    Object.assign(Logo_text, Smaller_Title_Text);
    Object.assign(All_Container_Style, All_Container_Style_smallest);
    Object.assign(Featured_Container_Style, All_Container_Style_smallest);
    Object.assign(Trending_Container_Style, All_Container_Style_smallest);
  };

}

function Change_To_Photos(){
  Cookies.remove("Go_to_Videos_fromP");
  Cookies.remove("Home_Search_Videos");
  Cookies.remove("Home_Search_Photos");


  Cookies.set('Go_to_Photos_fromV', "1" , { path: '/' });
  window.location.reload();
}


function Change_To_Videos(){
  Cookies.remove("Go_to_Photos_fromV");
  Cookies.remove("Home_Search_Videos");
  Cookies.remove("Home_Search_Photos");
  

  Cookies.set('Go_to_Videos_fromP', "1" , { path: '/' });
  window.location.reload();
}

updateStyles_Account();

    return(


      
        <div style={Main_Style} >

            <HoverSwitch containerId="Videos_Switch_Container" SwitchContainerId="Switch_to_photos" inputId="input_Switch_container" arrowId="arrow_Switch_Videos" arrowId_2=""/>
            <HoverSwitch containerId="photos_Switch_Container" SwitchContainerId="Switch_to_videos" inputId="input_Switch_container" arrowId="arrow_Switch_Photos" arrowId_2=""/>
            <HoverSwitch containerId="Switch_to_videos" SwitchContainerId="Switch_to_videos" inputId="input_Switch_container" arrowId="arrow_Switch_Photos" arrowId_2="" />
            <HoverSwitch containerId="Switch_to_photos" SwitchContainerId="Switch_to_photos" inputId="input_Switch_container" arrowId="arrow_Switch_Videos" arrowId_2="" />

          <div style={Top_Main_Style}>
            <video style={Video_Main} src={Main_Back_vid} muted autoPlay loop></video>
            <div style={Title_div}>
              <p style={Logo_text}>Pixel Peak</p>
            </div>

            <p style={write_up}>Discover thousands of user-uploaded photos and videos!</p>

            <div id="input_Switch_container" style={Switch_Container}>
              <div id="Videos_Switch_Container" style={Videos_switch}>
                <img id="arrow_Switch_Videos" src={arrow} style={arrow_switch}/>
                <p style={Switch_text}>Videos</p>
              </div>

              <div id="photos_switch_container_main">
                <div id="photos_Switch_Container" style={Photos_switch}>
                  <img id="arrow_Switch_Photos" src={arrow} style={arrow_switch}/>
                  <p id="photos_text_11" style={Switch_text}>Photos</p>
                </div>
              </div>
         

              <div id="Switch_to_videos" onClick={() => Change_Search_bars({type: "v"})} style={Switch_to_Videos}>
                <img src={video_img} style={icon_switch}/>
                <p style={Switch_to_text}>Videos</p>
              </div>
              <div id="Switch_to_photos" onClick={() => Change_Search_bars({type: "p"})}  style={Switch_to_Photos}>
                <img src={pic_img} style={icon_switch}/>
                <p style={Switch_to_text}>Photos</p>
              </div>
            </div>

            <div style={Input_SearchImg_Container}>
              <input id="Input_Photos_Home" type="text" onKeyDown={handleKeyPress_Photos} placeholder="Search for photos" style={Input_Style} />
              <input id="Input_Videos_Home" type="text" onKeyDown={handleKeyPress_Videos} placeholder="Search for videos" style={Input_Style_2} />
              <img style={Search_Img_Style} src={SearchImg}/>
            </div>
            <div style={featured_bottom_container}>
              <p style={Bottom_links_feat} onClick={Change_To_Videos}>All Videos</p>
              <p style={Bottom_links_feat}  onClick={Change_To_Photos}>All Photos</p>
            </div>
          </div>

          <div style={Categories_Container_style}>
            <div style={Categories_container_actual}>
              <button id="All_btn_Actual" onClick={All_tab} style={Categories_Title_Style_alt}>All</button>
              <button id="Featured_btn_Actual" onClick={Featured_tab} style={Categories_Title_Style}>Featured</button>
              <button id="Trending_btn_Actual" onClick={Trending_tab} style={Categories_Title_Style}>Trending</button>
            </div>
            <div id="All_Tab_Container" style={All_Container_Style}>
              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={space_all}/>
                <p style={All_Title_Style}>Space</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Space"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 3134</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Space"})}  style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 3465</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={sunrise_all}/>
                <p style={All_Title_Style}>Sunrise</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Sunrise"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Sunrise"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 2655</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={canyon_all}/>
                <p style={All_Title_Style}>Canyon</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Canyon"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 4625</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Canyon"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 3465</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={fire_all}/>
                <p style={All_Title_Style}>Fire</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Fire"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 6840</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Fire"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 2643</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={neon_all}/>
                <p style={All_Title_Style}>Neon</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Neon"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Neon"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 2231</p>
              </div>
              
              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={rain_all}/>
                <p style={All_Title_Style}>Rain</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Rain"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Rain"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 3980</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={sunset_all}/>
                <p style={All_Title_Style}>Sunset</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Sunset"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Sunset"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 8000</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={bright_all}/>
                <p style={All_Title_Style}>Bright</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Bright"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Space"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 5751</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={savannah_all}/>
                <p style={All_Title_Style}>Savannah</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Savannah"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 1005</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Savannah"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 75</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={lights_all}/>
                <p style={All_Title_Style}>Lights</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Lights"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Lights"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 8000</p>
              </div>
              

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={trees_all}/>
                <p style={All_Title_Style}>Trees</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Trees"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Trees"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 8000</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={plants_all}/>
                <p style={All_Title_Style}>Plants</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Plants"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Plants"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 8000</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={tropical_all}/>
                <p style={All_Title_Style}>Tropical</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Tropical"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Tropical"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 3756</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={clouds_all}/>
                <p style={All_Title_Style}>Clouds</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Clouds"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Clouds"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 8000</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={mountains_all}/>
                <p style={All_Title_Style}>Mountains</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Mountains"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Mountains"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 8000</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={foggy_all}/>
                <p style={All_Title_Style}>Foggy</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Foggy"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 3134</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Foggy"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 5178</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={cloudy_all}/>
                <p style={All_Title_Style}>Cloudy</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Cloudy"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Cloudy"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 8000</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={night_all}/>
                <p style={All_Title_Style}>Night</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Night"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Night"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 7190</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={animals_all}/>
                <p style={All_Title_Style}>Animals</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Animals"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Animals"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 8000</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={wild_all}/>
                <p style={All_Title_Style}>Wild</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Wild"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Wild"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 3656</p>
              </div>
            </div>









            <div id="Featured_Tab_Container" style={Featured_Container_Style}>
            <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={moon_featured}/>
                <p style={All_Title_Style}>Moon</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Moon"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Moon"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 1746</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={space_all}/>
                <p style={All_Title_Style}>Space</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Space"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Space"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 3465</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={volcanoe_featured}/>
                <p style={All_Title_Style}>Volcanoe</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Volcanoe"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 2368</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Volcanoe"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 908</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={jet_featured}/>
                <p style={All_Title_Style}>Jet</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Jet"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 1800</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Jet"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 540</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={cats_featured}/>
                <p style={All_Title_Style}>Cats</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Cats"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Cats"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 1892</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={dogs_featured}/>
                <p style={All_Title_Style}>Dogs</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Dogs"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Dogs"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 5799</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={cowboy_featured}/>
                <p style={All_Title_Style}>Cowboy</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Cowboy"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 4548</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Cowboy"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 353</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={helicopter_featured}/>
                <p style={All_Title_Style}>Helicopter</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Helicopter"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Helicopter"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 272</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={basketball_featured}/>
                <p style={All_Title_Style}>Basketball</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Basketball"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 4311</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Basketball"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 1666</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={shark_featured}/>
                <p style={All_Title_Style}>Shark</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Shark"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 190</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Shark"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 139</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={food_featured}/>
                <p style={All_Title_Style}>Food</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Food"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Food"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 8000</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={horse_featured}/>
                <p style={All_Title_Style}>Horse</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Horse"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Horse"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 1511</p>
              </div>
            </div>









            <div id="Trending_Tab_Container" style={Trending_Container_Style}>
            <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={dark_trending}/>
                <p style={All_Title_Style}>Dark</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Dark"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Dark"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 8000</p>
              </div>
              

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={nature_trending}/>
                <p style={All_Title_Style}>Nature</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Nature"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Nature"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 8000</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={forest_trending}/>
                <p style={All_Title_Style}>Forest</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Forest"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Forest"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 8000</p>
              </div>

              <div style={All_div_Style} className="All_featured_divs">
                <img style={All_Style_Img} src={sky_trending}/>
                <p style={All_Title_Style}>Sky</p>
                <p className="All_featured_Numbers" onClick={() => Search_Photos_Featured({value: "Sky"})} style={All_Number_Style}><img style={Pic_Img_Style} src={pic_img}/>Photos: 8000</p>
                <p className="All_featured_Numbers" onClick={() => Search_Videos_Featured({value: "Sky"})} style={All_Number_Style_v}><img style={Pic_Img_Style} src={video_img}/>Videos: 8000</p>
              </div>
            </div>
            

          </div>


        
          <div id="Footer" className="Scroll_Div" style={footerStyle}>
            <p style={Footer_Title}>Pixel Peak</p>
            <p id="CopyWright" style={copyrightStyle}>
            Copyright © 2024 Pixel Peak. All Rights Reserved. User Agreement, Privacy,
            Payments Terms of Use, Cookies and AdChoice. Made By Lukas Leins
            </p>
          </div>

        </div>
    );
}

export default Account_Style;