import { CSSProperties } from "react";
import React, { useRef, RefObject, useEffect, useState } from "react";
import SearchImg from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\Images\\Search.png"
import PlayImg from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\PlayImg.png";
import Heart_Img_vid from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\Heart.png";
import Resize_Img_v_Search from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\ResizeImg.png";
import Exit_Img_p_Search from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\ExitImg.png";
import Cookies from 'js-cookie';
function Video_Search_Style(){




    {
        /*API Call, PEXELS-------------------------------------------------------------*/
      }
      const apiKey_v = "GTKZGX1qr6cVxMS1Dl88v1xUVe2edF3qaozGZMucbID3XTPE3Z2fSdbh";
      const [searchQuery_v, setSearchQuery_v] = useState('');
      const [PageQuery_v, setPageQuery_v] = useState(1);
      const apiUrl_v = `https://api.pexels.com/videos/search?query=${searchQuery_v}&per_page=18&page=${PageQuery_v}`;
    
      interface Video_v {
        video_files: {
          link: string;
        }[];
      }
    
      interface Video2_v {
        url: {
          url: string;
        }[];
      }
    
      const [videoArray_v, setVideoArray_v] = useState<string[]>([]);
      const [videoArrayurl_v, setVideoArrayurl_v] = useState<string[]>([]);
      useEffect(() => {
        const fetchVideos = async () => {
          try {
            const response = await fetch(apiUrl_v, {
              headers: {
                Authorization: apiKey_v,
              },
            });
    
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
    
            const data_v = await response.json();
            const videos = data_v.videos.map((video: Video_v) =>
              video.video_files[1].link.toString()
            );
            setVideoArray_v(videos);
    
            const videosurl_v = data_v.videos.map((video: Video2_v) => video.url);
            setVideoArrayurl_v(videosurl_v);
          } catch (error) {
            console.error("Error:", error);
          }
        };
    
        fetchVideos();
      }, [apiKey_v, apiUrl_v]);
    
      const handleQueryChange_v = (newQuery: string) => {
        setSearchQuery_v(newQuery);
      };

      const handlePageChange_v = (newPage_v: number) => {
        setPageQuery_v(newPage_v);
      };

      function TriggerLink_v(i: number) {
        const url = videoArrayurl_v[i];
    
        window.open(url, "_blank");
      }


      function ChangeSearch(){
        const load_spinner_vid = document.getElementById("Loading_Spinner_vid");
        if(load_spinner_vid) load_spinner_vid.style.display = "block";
        
        setTimeout(() => {
            const load_spinner_vid = document.getElementById("Loading_Spinner_vid");
            if(load_spinner_vid) load_spinner_vid.style.display = "none";
            
            const ActualInput =  document.getElementById('Search_Videos') as HTMLInputElement
            const ActualResult =  document.getElementById('Search_Result_v');
        
            if(ActualInput) handleQueryChange_v(ActualInput.value);
            if(ActualResult) ActualResult.textContent = ActualInput.value;
            setIsDisplayBlock_v(true);
            handlePageChange_v(PageQuery_v / PageQuery_v);

        }, 1500); 
    }  

    const handleKeyPress_v = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          const SearchButton = document.getElementById('Search_Button_v');
          if (SearchButton) {
              SearchButton.click();
          }
        }
    };


    const increaseBrightness_vid = () => {
      const elements = document.querySelectorAll('.Heart_Style_Class_Vid');
      
      for (let i = 0; i < elements.length; i++){
        const element = elements[i] as HTMLElement; 
        const element_style = getComputedStyle(element);
        
        if (element_style.filter === "brightness(1)"){
          element.style.filter = "brightness(500%)";
        } else {
         
        }
      }
    };


    interface Resize_ids_v{
      Container_Id_v: string;
      Exit_Id_v: string;
      Heart_Id_v: string;
      Resize_Id_v: string;
      Source_Id_v: string;
      Picture_Id_v: string;
    }


    function Resize_Photo_Item_v({Container_Id_v, Exit_Id_v, Heart_Id_v, Resize_Id_v, Source_Id_v, Picture_Id_v }: Resize_ids_v){
      const element = document.getElementById("Video_Item_1");
      if (element) {
          element.scrollIntoView({ behavior: 'instant' });
      }
      toggleOverflow_v();
      toggleControls();
      const actual_container = document.getElementById(Container_Id_v);
      const actual_exit = document.getElementById(Exit_Id_v);
      const actual_heart = document.getElementById(Heart_Id_v);
      const actual_resize = document.getElementById(Resize_Id_v);
      const actual_source = document.getElementById(Source_Id_v);
      const actual_picture = document.getElementById(Picture_Id_v);


      if(actual_container){
        actual_container.style.width = "100%";
        actual_container.style.height = "95%";
        actual_container.style.position = "absolute";
        actual_container.style.left = "50%";
        actual_container.style.top = "49%";
        actual_container.style.transform = "translate(-50%, -50%)";
        actual_container.style.zIndex = "12";
        actual_container.style.boxShadow = '0px 0px 0px 100vw rgba(0, 0, 0, .9)';
      }
      
      if(actual_exit){
        actual_exit.style.display = "block";
      }

      if(actual_heart){
        actual_heart.style.position = "absolute";
        actual_heart.style.top = "5px";
        actual_heart.style.left = "5px";
      }

      if(actual_resize){
        actual_resize.style.display = "none";
      }

      if(actual_source){
        actual_source.style.display = "none";
      }
      
      if(actual_picture){
        actual_picture.style.left = "81%";
        actual_picture.style.top = "50%";
        actual_picture.style.transform = "translate(-50%, -50%)";
      }



    }

    interface Exit_Resize_ids_v{
      Container_Id_Exit_v: string;
      Exit_Id_Exit_v: string;
      Heart_Id_Exit_v: string;
      Resize_Id_Exit_v: string;
      Source_Id_Exit_v: string;
      Picture_Id_Exit_v: string;
    }

    function Exit_Photo_Item_v({Container_Id_Exit_v, Exit_Id_Exit_v, Heart_Id_Exit_v, Resize_Id_Exit_v, Source_Id_Exit_v, Picture_Id_Exit_v }: Exit_Resize_ids_v){
      toggleOverflow_v();
      toggleControls();
      
      const actual_container = document.getElementById(Container_Id_Exit_v);
      const actual_exit = document.getElementById(Exit_Id_Exit_v);
      const actual_heart = document.getElementById(Heart_Id_Exit_v);
      const actual_resize = document.getElementById(Resize_Id_Exit_v);
      const actual_source = document.getElementById(Source_Id_Exit_v);
      const actual_picture = document.getElementById(Picture_Id_Exit_v);
      
      if(actual_container){
        actual_container.style.width = "300px";
        actual_container.style.height = "200px";
        actual_container.style.position = "relative";
        actual_container.style.left = "50%";
        actual_container.style.top = "0%";
        actual_container.style.transform = "translate(-50%)";
        actual_container.style.zIndex = "10";
        actual_container.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0)'
      }
      
      if(actual_exit){
        actual_exit.style.display = "none";
      }
  
      if(actual_heart){
        actual_heart.style.position = "relative";
        actual_heart.style.top = "-200px";
        actual_heart.style.left = "260px";
      }

      if(actual_resize){
        actual_resize.style.display = "flex";
        actual_resize.style.position = "relative";
        actual_resize.style.left = "265px";
        actual_resize.style.top = "-70px";
      }

      if(actual_source){
        actual_source.style.display = "flex";
      }
      
      if(actual_picture){
        actual_picture.style.display = "flex";
        actual_picture.style.position = "absolute";
        actual_picture.style.left = "300px";
        actual_picture.style.top = "5px";
        actual_picture.style.transform = "scale(.7)";
      }
      
      const element = document.getElementById(Container_Id_Exit_v);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }

    }

    const [isOverflowVisible_v, setIsOverflowVisible_v] = useState(true);

    const toggleOverflow_v = () => {
      setIsOverflowVisible_v(prev => !prev);
    };







    function ChangeNextPage_v(){
        handlePageChange_v(PageQuery_v + 1);

        const load_spinner_vid = document.getElementById("Loading_Spinner_vid_Bottom");
        if(load_spinner_vid) load_spinner_vid.style.display = "block";

        
        setTimeout(() => {
            increaseBrightness_vid();
            const load_spinner_vid = document.getElementById("Loading_Spinner_vid_Bottom");
            if(load_spinner_vid) load_spinner_vid.style.display = "none";
            const element = document.getElementById("Search_Videos");
              if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
              }
    
        }, 1500); 

        
        
      }

      function ChangePrevPage_v(){
        if (PageQuery_v <= 1){

        }else if(PageQuery_v > 1){
            handlePageChange_v(PageQuery_v - 1);
            const load_spinner_vid = document.getElementById("Loading_Spinner_vid_Bottom");
            if(load_spinner_vid) load_spinner_vid.style.display = "block";
    
            
            setTimeout(() => {
                increaseBrightness_vid();
                const load_spinner_vid = document.getElementById("Loading_Spinner_vid_Bottom");
                if(load_spinner_vid) load_spinner_vid.style.display = "none";
                const element = document.getElementById("Search_Videos");
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 1500);
        };
        
        
      }

      {
        /*API Call, PEXELS-------------------------------------------------------------*/
      }



    interface HoverImgProps {
        containerId: string;
        sourceTextId: string;
        Video: string;
        PlayImg: string;
        Resize_Id_v: string;
      }
    
      function HoverImg({
        containerId,
        sourceTextId,
        Video,
        PlayImg, Resize_Id_v
      }: HoverImgProps) {
        useEffect(() => {
          const sourceTextActual = document.getElementById(sourceTextId);
          const containerActual = document.getElementById(containerId);
          const PlayImgActual = document.getElementById(PlayImg);
          const videoElement = document.getElementById(
            Video
          ) as HTMLVideoElement | null;
          const ResizeActual = document.getElementById(Resize_Id_v);
    
          const handleMouseOver = () => {
         
            videoElement?.play();
            if (PlayImgActual) PlayImgActual.style.opacity = "0";
            if (ResizeActual) ResizeActual.style.opacity = "1";
          };
    
          const handleMouseOut = () => {
  
            videoElement?.pause(); 
            if (PlayImgActual) PlayImgActual.style.opacity = "1";
            if (ResizeActual) ResizeActual.style.opacity = "1";
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

      interface Save_Vid_Ids_Search{
        id_Heart_vid_Search: string;
      }

      function Save_Vid_Search({ id_Heart_vid_Search }: Save_Vid_Ids_Search) : void {
        const HeartImg = document.getElementById(id_Heart_vid_Search);

        const Check_Login_V = Cookies.get("Login_Token");

        if(Check_Login_V !== undefined){
          if (HeartImg) {
            const HeartStyle = getComputedStyle(HeartImg);
            if (HeartStyle.filter === "brightness(5)") {
              HeartImg.style.filter = "brightness(100%)";
              const Fail_Notif = document.getElementById("Saved_1");
              if(Fail_Notif) Fail_Notif.style.display = "block";
              setTimeout(() => {
                if(Fail_Notif) Fail_Notif.style.display = "none";
                
              }, 2000);
            } else if (HeartStyle.filter === "brightness(1)") {
              HeartImg.style.filter = "brightness(500%)";
              const Save_Notif = document.getElementById("Saved_10");
              if(Save_Notif) Save_Notif.style.display = "block";
              setTimeout(() => {
                if(Save_Notif) Save_Notif.style.display = "none";
                
              }, 2000);
      
            }
          }
        }else if (Check_Login_V === undefined){
          const Login_Notif = document.getElementById("Login_Request_0");
          if(Login_Notif) Login_Notif.style.display = "block";
          setTimeout(function () {
            if (Login_Notif) Login_Notif.style.display = 'none';
          }, 4000);
        }

       
      }
    


    const Main_Style: CSSProperties={
        position: "absolute",
        border: "0px solid rgb(200, 200, 200)",
        height: "95%",
        width: "100%",
        left: "50%",
        top: "50%",
        marginTop: "19px",
        transform: "translate(-50%, -50%)",
        borderRadius: "0px",
        overflowY: isOverflowVisible_v ? 'auto' : 'hidden',
        backgroundColor: "rgb(40, 40, 40)",
    };

    const Input_Style: CSSProperties={
        position: "absolute",
        border: "0px solid rgb(200, 200, 200)",
        left: "50%",
        transform: "translate(-50%, 0%)",
        width: "50%",
        height: "30px",
        fontFamily: "verdana",
        fontSize: "14px",
        color: "rgb(255, 255, 255)",
        marginTop: "10px",
        borderRadius: "5px",
        backgroundColor: "rgb(150, 150, 150, 0.3)",
        paddingLeft: "35px",
       
    };

    const Search_Img_Style: CSSProperties={
        position: "absolute",
        top: "10px",
        transform: "scale(.8)",
        left: "25%",       
        cursor: "pointer",
    };


    const Search_Title_Style: CSSProperties={
        position: "absolute",
        border: "0px solid rgb(200, 200, 200)",
        left: "50%",
        transform: "translate(-50%, 0%)",
        fontFamily: "verdana",
        fontSize: "20px",
        color: "rgb(255, 255, 255)",
        top: "65px",
    };
    
    const Video_Container_Style: CSSProperties={
        position: "absolute",
        border: "0px solid rgb(200, 200, 200)",
        height: "100%",
        width: "1000px",
        left: "50%",
        top: "50%",
        marginTop: "130px",
        transform: "translate(-50%, -50%)",
        borderRadius: "0px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(6, 1fr)",
        gridGap: "20px",
        paddingBottom: "30px",
       
    };

    const [isDisplayBlock_v, setIsDisplayBlock_v] = useState(false);

    const Video_Item_Style: CSSProperties={
        position: "relative",
        height: "200px",
        width: "300px",
        borderRadius: "5px",
        backgroundColor: "rgb(150, 150, 150, 0.3)",
        left: "50%",
        transform: "translate(-50%, 0%)",
        cursor: "pointer",
        display: isDisplayBlock_v? "block" : "none",
        transition: ".3s",
    };

    const Video_Style: CSSProperties={
        position: "relative",
        height: "100%",
        width: "100%",
        borderRadius: "5px",
        backgroundColor: "rgb(150, 150, 150, 0.3)",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
    };

    const Play_Img_Style: CSSProperties = {
        position: "absolute",
        top: "5px",
        marginLeft: "-295px",
        transform: "scale(.7)",
        opacity: "1",
        transition: ".3s",
    };




    const Space: CSSProperties={
        position: "relative",
        height: "200px",
        width: "300px",
        borderRadius: "5px",
        backgroundColor: "rgb(200, 200, 200, 0)",
        left: "50%",
        transform: "translate(-50%, 0%)"
    };

 

    const Bottom_Buttons_Style: CSSProperties={
        position: "relative",
        width: "100px",
        height: "40px",
        borderRadius: "5px",
        backgroundColor: "rgb(255, 255, 255)",
        color: "rgb(10, 10, 10)",
        fontFamily: "verdana",
        fontSize: "14px",
        cursor: "pointer",
        border: "none",
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "10px",
        marginBottom: "10px",
        left: "20px",  
    };


    const Page_Counter_Style_v: CSSProperties = {
        position: "absolute",
        fontFamily: "verdana",
        fontSize: "16px",
        color: "rgb(255, 255, 255)",
        left: "495px",
        marginTop: "-40px",
      
    };

    function updateStyles(){
        const screenWidth = window.innerWidth;
        const Small_ScreenSize: CSSProperties = {
            width: "650px",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(6, 1fr)",
        };

        const Smaller_ScreenSize: CSSProperties = {
            width: "400px",
            gridTemplateColumns: "repeat(1, 1fr)",
            gridTemplateRows: "repeat(6, 1fr)",
    
        };

        const Small_ScreenSize_Button: CSSProperties = {
            left: "-130px",
        };

        const Smaller_ScreenSize_Button: CSSProperties = {
            top: "-200px",
            left: "60px",
        };

        const Small_ScreenSize_Counter_v: CSSProperties = {
            left: "320px",
        };
        const Smaller_ScreenSize_Counter_v: CSSProperties = {
            marginTop: "-240px",
            left: "195px",
        };

        const Smaller_SearchTitle_v: CSSProperties = {
          fontSize: "17px",
        };

        const Smaller_SeachBar_v: CSSProperties = {
            width: "74%",
        };
        
        const Smaller_SeachIcon_v: CSSProperties = {
          left: "13%",
        };

        if (screenWidth > 790 && screenWidth < 1165) {
            Object.assign(Video_Container_Style, Small_ScreenSize);
            Object.assign(Bottom_Buttons_Style, Small_ScreenSize_Button);
            Object.assign(Page_Counter_Style_v, Small_ScreenSize_Counter_v);
        }
        if(screenWidth <= 790){
            Object.assign(Video_Container_Style, Smaller_ScreenSize);
            Object.assign(Bottom_Buttons_Style, Smaller_ScreenSize_Button);
            Object.assign(Page_Counter_Style_v, Smaller_ScreenSize_Counter_v);
            Object.assign(Search_Title_Style, Smaller_SearchTitle_v);
            Object.assign(Input_Style, Smaller_SeachBar_v);
            Object.assign(Search_Img_Style, Smaller_SeachIcon_v);
        }
    }
    updateStyles();
    window.addEventListener('resize', updateStyles);

    const Loading_Spinner_vid: CSSProperties = {
      top: "250px",
      zIndex: "30",
      display: "none",
      left: "48%",
    };

    const Loading_Spinner_vid_Bottom: CSSProperties = {
      zIndex: "30",
      display: "none",
      left: "48%",
    };
    
    const Heart_Style: CSSProperties = {
      top: "-200px",
      position: "relative",
      transform: "scale(.8)",
      left: "260px",
      filter: "brightness(500%)",
      opacity: "1",
      transition: ".3s",
    }
    
    
    const Resize_Img_style: CSSProperties = {
      top: "-40px",
      position: "relative",
      transform: "scale(.7)",
      left: "230px",
      filter: "brightness(500%)",
      opacity: "1",
      transition: ".3s",
    }

    const Exit_Img_Resize: CSSProperties = {
      position: "absolute",
      right: "5px",
      top: "5px",
      transform: "scale(1)",
      opacity: "1",
      transition: ".3s",
      display: "none",
     
    }
    
    const [controlsEnabled, setControlsEnabled] = useState(false);

    const toggleControls = () => {
      setControlsEnabled(prevEnabled => !prevEnabled);
    };

    return(

        <div style={Main_Style}>

        <HoverImg containerId="Video_Item_1" sourceTextId="Source_1_Vid_v" Video="Video_1_v" PlayImg="Play_Img_1_v" Resize_Id_v="Resize_Img_v_1"/>
        <HoverImg containerId="Video_Item_2" sourceTextId="Source_2_Vid_v" Video="Video_2_v" PlayImg="Play_Img_2_v" Resize_Id_v="Resize_Img_v_2"/>
        <HoverImg containerId="Video_Item_3" sourceTextId="Source_3_Vid_v" Video="Video_3_v" PlayImg="Play_Img_3_v" Resize_Id_v="Resize_Img_v_3"/>
        <HoverImg containerId="Video_Item_4" sourceTextId="Source_4_Vid_v" Video="Video_4_v" PlayImg="Play_Img_4_v" Resize_Id_v="Resize_Img_v_4"/>
        <HoverImg containerId="Video_Item_5" sourceTextId="Source_5_Vid_v" Video="Video_5_v" PlayImg="Play_Img_5_v" Resize_Id_v="Resize_Img_v_5"/>
        <HoverImg containerId="Video_Item_6" sourceTextId="Source_6_Vid_v" Video="Video_6_v" PlayImg="Play_Img_6_v" Resize_Id_v="Resize_Img_v_6"/>
        <HoverImg containerId="Video_Item_7" sourceTextId="Source_7_Vid_v" Video="Video_7_v" PlayImg="Play_Img_7_v" Resize_Id_v="Resize_Img_v_7"/>
        <HoverImg containerId="Video_Item_8" sourceTextId="Source_8_Vid_v" Video="Video_8_v" PlayImg="Play_Img_8_v" Resize_Id_v="Resize_Img_v_8"/>
        <HoverImg containerId="Video_Item_9" sourceTextId="Source_9_Vid_v" Video="Video_9_v" PlayImg="Play_Img_9_v" Resize_Id_v="Resize_Img_v_9"/>
        <HoverImg containerId="Video_Item_10" sourceTextId="Source_10_Vid_v" Video="Video_10_v" PlayImg="Play_Img_10_v" Resize_Id_v="Resize_Img_v_10"/>
        <HoverImg containerId="Video_Item_11" sourceTextId="Source_11_Vid_v" Video="Video_11_v" PlayImg="Play_Img_11_v" Resize_Id_v="Resize_Img_v_11"/>
        <HoverImg containerId="Video_Item_12" sourceTextId="Source_12_Vid_v" Video="Video_12_v" PlayImg="Play_Img_12_v" Resize_Id_v="Resize_Img_v_12"/>
        <HoverImg containerId="Video_Item_13" sourceTextId="Source_13_Vid_v" Video="Video_13_v" PlayImg="Play_Img_13_v" Resize_Id_v="Resize_Img_v_13"/>
        <HoverImg containerId="Video_Item_14" sourceTextId="Source_14_Vid_v" Video="Video_14_v" PlayImg="Play_Img_14_v" Resize_Id_v="Resize_Img_v_14"/>
        <HoverImg containerId="Video_Item_15" sourceTextId="Source_15_Vid_v" Video="Video_15_v" PlayImg="Play_Img_15_v" Resize_Id_v="Resize_Img_v_15"/>
        <HoverImg containerId="Video_Item_16" sourceTextId="Source_16_Vid_v" Video="Video_16_v" PlayImg="Play_Img_16_v" Resize_Id_v="Resize_Img_v_16"/>
        <HoverImg containerId="Video_Item_17" sourceTextId="Source_17_Vid_v" Video="Video_17_v" PlayImg="Play_Img_17_v" Resize_Id_v="Resize_Img_v_17"/>
        <HoverImg containerId="Video_Item_18" sourceTextId="Source_18_Vid_v" Video="Video_18_v" PlayImg="Play_Img_18_v" Resize_Id_v="Resize_Img_v_18"/>

        <div id="Loading_Spinner_vid" style={Loading_Spinner_vid} className="loading-spinner"></div>

        <input id="Search_Videos" type="text" placeholder="Search for videos" style={Input_Style} onKeyDown={handleKeyPress_v} />
        <img onClick={ChangeSearch} id="Search_Button_v" style={Search_Img_Style} src={SearchImg}/>
        <h1 style={Search_Title_Style}>Search results for "<span id="Search_Result_v"></span>"</h1>
        <div id="Video_Container" style={Video_Container_Style}>
            <div id="Video_Item_1" style={Video_Item_Style}>
                <video id="Video_1_v" src={videoArray_v[0]} style={Video_Style} typeof="video/mp4" onClick={() => TriggerLink_v(0)} controls={controlsEnabled} muted></video>
                <img style={Play_Img_Style} src={PlayImg} id="Play_Img_1_v" />
                
                <img className="Heart_Style_Class_Vid" onClick={() => Save_Vid_Search({id_Heart_vid_Search: "Heart_vid_1"})} src={Heart_Img_vid} style={Heart_Style} id="Heart_vid_1"/>
                <img id="Resize_Img_v_1" src={Resize_Img_v_Search} style={Resize_Img_style} onClick={() => Resize_Photo_Item_v({Container_Id_v: "Video_Item_1", Exit_Id_v: "Exit_Img_v_1", Heart_Id_v: "Heart_vid_1", Resize_Id_v: "Resize_Img_v_1", Source_Id_v: "Source_1_Vid_v", Picture_Id_v: "Play_Img_1_v"})}/>
                <img id="Exit_Img_v_1" src={Exit_Img_p_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item_v({Container_Id_Exit_v: "Video_Item_1", Exit_Id_Exit_v: "Exit_Img_v_1", Heart_Id_Exit_v: "Heart_vid_1", Resize_Id_Exit_v: "Resize_Img_v_1", Source_Id_Exit_v: "Source_1_Vid_v", Picture_Id_Exit_v: "Play_Img_1_v"})}/>
            </div>  
        
            <div id="Video_Item_2"  style={Video_Item_Style} >
                <video id="Video_2_v" src={videoArray_v[1]} style={Video_Style} typeof="video/mp4" onClick={() => TriggerLink_v(1)} controls={controlsEnabled} muted></video>
                <img style={Play_Img_Style} src={PlayImg} id="Play_Img_2_v" />
               
                <img className="Heart_Style_Class_Vid" onClick={() => Save_Vid_Search({id_Heart_vid_Search: "Heart_vid_2"})} src={Heart_Img_vid} style={Heart_Style} id="Heart_vid_2"/>
                <img id="Resize_Img_v_2" src={Resize_Img_v_Search} style={Resize_Img_style} onClick={() => Resize_Photo_Item_v({Container_Id_v: "Video_Item_2", Exit_Id_v: "Exit_Img_v_2", Heart_Id_v: "Heart_vid_2", Resize_Id_v: "Resize_Img_v_2", Source_Id_v: "Source_2_Vid_v", Picture_Id_v: "Play_Img_2_v"})}/>
                <img id="Exit_Img_v_2" src={Exit_Img_p_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item_v({Container_Id_Exit_v: "Video_Item_2", Exit_Id_Exit_v: "Exit_Img_v_2", Heart_Id_Exit_v: "Heart_vid_2", Resize_Id_Exit_v: "Resize_Img_v_2", Source_Id_Exit_v: "Source_2_Vid_v", Picture_Id_Exit_v: "Play_Img_2_v"})}/>
            </div>  

            <div id="Video_Item_3" style={Video_Item_Style}>
                <video id="Video_3_v" src={videoArray_v[2]} style={Video_Style} typeof="video/mp4" onClick={() => TriggerLink_v(2)} controls={controlsEnabled} muted></video>
                <img style={Play_Img_Style} src={PlayImg} id="Play_Img_3_v" />
               
                <img className="Heart_Style_Class_Vid" onClick={() => Save_Vid_Search({id_Heart_vid_Search: "Heart_vid_3"})} src={Heart_Img_vid} style={Heart_Style} id="Heart_vid_3"/>
                <img id="Resize_Img_v_3" src={Resize_Img_v_Search} style={Resize_Img_style} onClick={() => Resize_Photo_Item_v({Container_Id_v: "Video_Item_3", Exit_Id_v: "Exit_Img_v_3", Heart_Id_v: "Heart_vid_3", Resize_Id_v: "Resize_Img_v_3", Source_Id_v: "Source_3_Vid_v", Picture_Id_v: "Play_Img_3_v"})}/>
                <img id="Exit_Img_v_3" src={Exit_Img_p_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item_v({Container_Id_Exit_v: "Video_Item_3", Exit_Id_Exit_v: "Exit_Img_v_3", Heart_Id_Exit_v: "Heart_vid_3", Resize_Id_Exit_v: "Resize_Img_v_3", Source_Id_Exit_v: "Source_3_Vid_v", Picture_Id_Exit_v: "Play_Img_3_v"})}/>
            </div>  

            <div id="Video_Item_4" style={Video_Item_Style}>
                <video id="Video_4_v" src={videoArray_v[3]} style={Video_Style} typeof="video/mp4" onClick={() => TriggerLink_v(3)} controls={controlsEnabled} muted></video>
                <img style={Play_Img_Style} src={PlayImg} id="Play_Img_4_v" />
               
                <img className="Heart_Style_Class_Vid" onClick={() => Save_Vid_Search({id_Heart_vid_Search: "Heart_vid_4"})} src={Heart_Img_vid} style={Heart_Style} id="Heart_vid_4"/>
                <img id="Resize_Img_v_4" src={Resize_Img_v_Search} style={Resize_Img_style} onClick={() => Resize_Photo_Item_v({Container_Id_v: "Video_Item_4", Exit_Id_v: "Exit_Img_v_4", Heart_Id_v: "Heart_vid_4", Resize_Id_v: "Resize_Img_v_4", Source_Id_v: "Source_4_Vid_v", Picture_Id_v: "Play_Img_4_v"})}/>
                <img id="Exit_Img_v_4" src={Exit_Img_p_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item_v({Container_Id_Exit_v: "Video_Item_4", Exit_Id_Exit_v: "Exit_Img_v_4", Heart_Id_Exit_v: "Heart_vid_4", Resize_Id_Exit_v: "Resize_Img_v_4", Source_Id_Exit_v: "Source_4_Vid_v", Picture_Id_Exit_v: "Play_Img_4_v"})}/>
            </div>  

            <div id="Video_Item_5" style={Video_Item_Style} >
                <video id="Video_5_v" src={videoArray_v[4]} style={Video_Style} typeof="video/mp4" onClick={() => TriggerLink_v(4)} controls={controlsEnabled} muted></video>
                <img style={Play_Img_Style} src={PlayImg} id="Play_Img_5_v"/>
               
                <img className="Heart_Style_Class_Vid" onClick={() => Save_Vid_Search({id_Heart_vid_Search: "Heart_vid_5"})} src={Heart_Img_vid} style={Heart_Style} id="Heart_vid_5"/>
                <img id="Resize_Img_v_5" src={Resize_Img_v_Search} style={Resize_Img_style} onClick={() => Resize_Photo_Item_v({Container_Id_v: "Video_Item_5", Exit_Id_v: "Exit_Img_v_5", Heart_Id_v: "Heart_vid_5", Resize_Id_v: "Resize_Img_v_5", Source_Id_v: "Source_5_Vid_v", Picture_Id_v: "Play_Img_5_v"})}/>
                <img id="Exit_Img_v_5" src={Exit_Img_p_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item_v({Container_Id_Exit_v: "Video_Item_5", Exit_Id_Exit_v: "Exit_Img_v_5", Heart_Id_Exit_v: "Heart_vid_5", Resize_Id_Exit_v: "Resize_Img_v_5", Source_Id_Exit_v: "Source_5_Vid_v", Picture_Id_Exit_v: "Play_Img_5_v"})}/>
            </div>  

            <div id="Video_Item_6" style={Video_Item_Style} >
                <video id="Video_6_v" src={videoArray_v[5]} style={Video_Style} typeof="video/mp4" onClick={() => TriggerLink_v(5)} controls={controlsEnabled} muted></video>
                <img style={Play_Img_Style} src={PlayImg} id="Play_Img_6_v" />
               
                <img className="Heart_Style_Class_Vid" onClick={() => Save_Vid_Search({id_Heart_vid_Search: "Heart_vid_6"})} src={Heart_Img_vid} style={Heart_Style} id="Heart_vid_6"/>
                <img id="Resize_Img_v_6" src={Resize_Img_v_Search} style={Resize_Img_style} onClick={() => Resize_Photo_Item_v({Container_Id_v: "Video_Item_6", Exit_Id_v: "Exit_Img_v_6", Heart_Id_v: "Heart_vid_6", Resize_Id_v: "Resize_Img_v_6", Source_Id_v: "Source_6_Vid_v", Picture_Id_v: "Play_Img_6_v"})}/>
                <img id="Exit_Img_v_6" src={Exit_Img_p_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item_v({Container_Id_Exit_v: "Video_Item_6", Exit_Id_Exit_v: "Exit_Img_v_6", Heart_Id_Exit_v: "Heart_vid_6", Resize_Id_Exit_v: "Resize_Img_v_6", Source_Id_Exit_v: "Source_6_Vid_v", Picture_Id_Exit_v: "Play_Img_6_v"})}/>
            </div>  

            <div id="Video_Item_7" style={Video_Item_Style} >
                <video id="Video_7_v" src={videoArray_v[6]} style={Video_Style} typeof="video/mp4" onClick={() => TriggerLink_v(6)} controls={controlsEnabled} muted></video>   
                <img style={Play_Img_Style} src={PlayImg} id="Play_Img_7_v" />
              
                <img className="Heart_Style_Class_Vid" onClick={() => Save_Vid_Search({id_Heart_vid_Search: "Heart_vid_7"})} src={Heart_Img_vid} style={Heart_Style} id="Heart_vid_7"/>
                <img id="Resize_Img_v_7" src={Resize_Img_v_Search} style={Resize_Img_style} onClick={() => Resize_Photo_Item_v({Container_Id_v: "Video_Item_7", Exit_Id_v: "Exit_Img_v_7", Heart_Id_v: "Heart_vid_7", Resize_Id_v: "Resize_Img_v_7", Source_Id_v: "Source_7_Vid_v", Picture_Id_v: "Play_Img_7_v"})}/>
                <img id="Exit_Img_v_7" src={Exit_Img_p_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item_v({Container_Id_Exit_v: "Video_Item_7", Exit_Id_Exit_v: "Exit_Img_v_7", Heart_Id_Exit_v: "Heart_vid_7", Resize_Id_Exit_v: "Resize_Img_v_7", Source_Id_Exit_v: "Source_7_Vid_v", Picture_Id_Exit_v: "Play_Img_7_v"})}/>
            </div>  

            <div id="Video_Item_8" style={Video_Item_Style} >
                <video id="Video_8_v" src={videoArray_v[7]} style={Video_Style} typeof="video/mp4" onClick={() => TriggerLink_v(7)} controls={controlsEnabled} muted></video>
                <img style={Play_Img_Style} src={PlayImg} id="Play_Img_8_v" />
               
                <img className="Heart_Style_Class_Vid" onClick={() => Save_Vid_Search({id_Heart_vid_Search: "Heart_vid_8"})} src={Heart_Img_vid} style={Heart_Style} id="Heart_vid_8"/>
                <img id="Resize_Img_v_8" src={Resize_Img_v_Search} style={Resize_Img_style} onClick={() => Resize_Photo_Item_v({Container_Id_v: "Video_Item_8", Exit_Id_v: "Exit_Img_v_8", Heart_Id_v: "Heart_vid_8", Resize_Id_v: "Resize_Img_v_8", Source_Id_v: "Source_8_Vid_v", Picture_Id_v: "Play_Img_8_v"})}/>
                <img id="Exit_Img_v_8" src={Exit_Img_p_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item_v({Container_Id_Exit_v: "Video_Item_8", Exit_Id_Exit_v: "Exit_Img_v_8", Heart_Id_Exit_v: "Heart_vid_8", Resize_Id_Exit_v: "Resize_Img_v_8", Source_Id_Exit_v: "Source_8_Vid_v", Picture_Id_Exit_v: "Play_Img_8_v"})}/>
            </div>  

            <div id="Video_Item_9" style={Video_Item_Style} >
                <video id="Video_9_v" src={videoArray_v[8]} style={Video_Style} typeof="video/mp4" onClick={() => TriggerLink_v(8)} controls={controlsEnabled} muted></video>
                <img style={Play_Img_Style} src={PlayImg} id="Play_Img_9_v" />
               
                <img className="Heart_Style_Class_Vid" onClick={() => Save_Vid_Search({id_Heart_vid_Search: "Heart_vid_9"})} src={Heart_Img_vid} style={Heart_Style} id="Heart_vid_9"/>
                <img id="Resize_Img_v_9" src={Resize_Img_v_Search} style={Resize_Img_style} onClick={() => Resize_Photo_Item_v({Container_Id_v: "Video_Item_9", Exit_Id_v: "Exit_Img_v_9", Heart_Id_v: "Heart_vid_9", Resize_Id_v: "Resize_Img_v_9", Source_Id_v: "Source_9_Vid_v", Picture_Id_v: "Play_Img_9_v"})}/>
                <img id="Exit_Img_v_9" src={Exit_Img_p_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item_v({Container_Id_Exit_v: "Video_Item_9", Exit_Id_Exit_v: "Exit_Img_v_9", Heart_Id_Exit_v: "Heart_vid_9", Resize_Id_Exit_v: "Resize_Img_v_9", Source_Id_Exit_v: "Source_9_Vid_v", Picture_Id_Exit_v: "Play_Img_9_v"})}/>
            </div>  

            <div id="Video_Item_10" style={Video_Item_Style} >
                <video id="Video_10_v" src={videoArray_v[9]} style={Video_Style} typeof="video/mp4" onClick={() => TriggerLink_v(9)} controls={controlsEnabled} muted></video>
                <img style={Play_Img_Style} src={PlayImg} id="Play_Img_10_v" />
              
                <img className="Heart_Style_Class_Vid" onClick={() => Save_Vid_Search({id_Heart_vid_Search: "Heart_vid_10"})} src={Heart_Img_vid} style={Heart_Style} id="Heart_vid_10"/>
                <img id="Resize_Img_v_10" src={Resize_Img_v_Search} style={Resize_Img_style} onClick={() => Resize_Photo_Item_v({Container_Id_v: "Video_Item_10", Exit_Id_v: "Exit_Img_v_10", Heart_Id_v: "Heart_vid_10", Resize_Id_v: "Resize_Img_v_10", Source_Id_v: "Source_10_Vid_v", Picture_Id_v: "Play_Img_10_v"})}/>
                <img id="Exit_Img_v_10" src={Exit_Img_p_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item_v({Container_Id_Exit_v: "Video_Item_10", Exit_Id_Exit_v: "Exit_Img_v_10", Heart_Id_Exit_v: "Heart_vid_10", Resize_Id_Exit_v: "Resize_Img_v_10", Source_Id_Exit_v: "Source_10_Vid_v", Picture_Id_Exit_v: "Play_Img_10_v"})}/>
            </div> 

            <div id="Video_Item_11" style={Video_Item_Style} >
                <video id="Video_11_v" src={videoArray_v[10]} style={Video_Style} typeof="video/mp4" onClick={() => TriggerLink_v(10)} controls={controlsEnabled} muted></video>
                <img style={Play_Img_Style} src={PlayImg} id="Play_Img_11_v" />
               
                <img className="Heart_Style_Class_Vid" onClick={() => Save_Vid_Search({id_Heart_vid_Search: "Heart_vid_11"})} src={Heart_Img_vid} style={Heart_Style} id="Heart_vid_11"/>
                <img id="Resize_Img_v_11" src={Resize_Img_v_Search} style={Resize_Img_style} onClick={() => Resize_Photo_Item_v({Container_Id_v: "Video_Item_11", Exit_Id_v: "Exit_Img_v_11", Heart_Id_v: "Heart_vid_11", Resize_Id_v: "Resize_Img_v_11", Source_Id_v: "Source_11_Vid_v", Picture_Id_v: "Play_Img_11_v"})}/>
                <img id="Exit_Img_v_11" src={Exit_Img_p_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item_v({Container_Id_Exit_v: "Video_Item_11", Exit_Id_Exit_v: "Exit_Img_v_11", Heart_Id_Exit_v: "Heart_vid_11", Resize_Id_Exit_v: "Resize_Img_v_11", Source_Id_Exit_v: "Source_11_Vid_v", Picture_Id_Exit_v: "Play_Img_11_v"})}/>
            </div>  

            <div id="Video_Item_12" style={Video_Item_Style} >
                <video id="Video_12_v" src={videoArray_v[11]} style={Video_Style} typeof="video/mp4" onClick={() => TriggerLink_v(11)} controls={controlsEnabled} muted></video>
                <img style={Play_Img_Style} src={PlayImg} id="Play_Img_12_v" />
             
                <img className="Heart_Style_Class_Vid" onClick={() => Save_Vid_Search({id_Heart_vid_Search: "Heart_vid_12"})} src={Heart_Img_vid} style={Heart_Style} id="Heart_vid_12"/>
                <img id="Resize_Img_v_12" src={Resize_Img_v_Search} style={Resize_Img_style} onClick={() => Resize_Photo_Item_v({Container_Id_v: "Video_Item_12", Exit_Id_v: "Exit_Img_v_12", Heart_Id_v: "Heart_vid_12", Resize_Id_v: "Resize_Img_v_12", Source_Id_v: "Source_12_Vid_v", Picture_Id_v: "Play_Img_12_v"})}/>
                <img id="Exit_Img_v_12" src={Exit_Img_p_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item_v({Container_Id_Exit_v: "Video_Item_12", Exit_Id_Exit_v: "Exit_Img_v_12", Heart_Id_Exit_v: "Heart_vid_12", Resize_Id_Exit_v: "Resize_Img_v_12", Source_Id_Exit_v: "Source_12_Vid_v", Picture_Id_Exit_v: "Play_Img_12_v"})}/>
            </div> 

            <div id="Video_Item_13" style={Video_Item_Style} >
                <video id="Video_13_v" src={videoArray_v[12]} style={Video_Style} typeof="video/mp4" onClick={() => TriggerLink_v(12)} controls={controlsEnabled} muted></video>
                <img style={Play_Img_Style} src={PlayImg} id="Play_Img_13_v" />
             
                <img className="Heart_Style_Class_Vid" onClick={() => Save_Vid_Search({id_Heart_vid_Search: "Heart_vid_13"})} src={Heart_Img_vid} style={Heart_Style} id="Heart_vid_13"/>
                <img id="Resize_Img_v_13" src={Resize_Img_v_Search} style={Resize_Img_style} onClick={() => Resize_Photo_Item_v({Container_Id_v: "Video_Item_13", Exit_Id_v: "Exit_Img_v_13", Heart_Id_v: "Heart_vid_13", Resize_Id_v: "Resize_Img_v_13", Source_Id_v: "Source_13_Vid_v", Picture_Id_v: "Play_Img_13_v"})}/>
                <img id="Exit_Img_v_13" src={Exit_Img_p_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item_v({Container_Id_Exit_v: "Video_Item_13", Exit_Id_Exit_v: "Exit_Img_v_13", Heart_Id_Exit_v: "Heart_vid_13", Resize_Id_Exit_v: "Resize_Img_v_13", Source_Id_Exit_v: "Source_13_Vid_v", Picture_Id_Exit_v: "Play_Img_13_v"})}/>
            </div>  

            <div id="Video_Item_14" style={Video_Item_Style} >
                <video id="Video_14_v" src={videoArray_v[13]} style={Video_Style} typeof="video/mp4" onClick={() => TriggerLink_v(13)} controls={controlsEnabled} muted></video>
                <img style={Play_Img_Style} src={PlayImg} id="Play_Img_14_v" />
          
                <img className="Heart_Style_Class_Vid" onClick={() => Save_Vid_Search({id_Heart_vid_Search: "Heart_vid_14"})} src={Heart_Img_vid} style={Heart_Style} id="Heart_vid_14"/>
                <img id="Resize_Img_v_14" src={Resize_Img_v_Search} style={Resize_Img_style} onClick={() => Resize_Photo_Item_v({Container_Id_v: "Video_Item_14", Exit_Id_v: "Exit_Img_v_14", Heart_Id_v: "Heart_vid_14", Resize_Id_v: "Resize_Img_v_14", Source_Id_v: "Source_14_Vid_v", Picture_Id_v: "Play_Img_14_v"})}/>
                <img id="Exit_Img_v_14" src={Exit_Img_p_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item_v({Container_Id_Exit_v: "Video_Item_14", Exit_Id_Exit_v: "Exit_Img_v_14", Heart_Id_Exit_v: "Heart_vid_14", Resize_Id_Exit_v: "Resize_Img_v_14", Source_Id_Exit_v: "Source_14_Vid_v", Picture_Id_Exit_v: "Play_Img_14_v"})}/>
            </div>  

            <div id="Video_Item_15" style={Video_Item_Style} >
                <video id="Video_15_v" src={videoArray_v[14]} style={Video_Style} typeof="video/mp4" onClick={() => TriggerLink_v(14)} controls={controlsEnabled} muted></video>
                <img style={Play_Img_Style} src={PlayImg} id="Play_Img_15_v" />
               
                <img className="Heart_Style_Class_Vid" onClick={() => Save_Vid_Search({id_Heart_vid_Search: "Heart_vid_15"})} src={Heart_Img_vid} style={Heart_Style} id="Heart_vid_15"/>
                <img id="Resize_Img_v_15" src={Resize_Img_v_Search} style={Resize_Img_style} onClick={() => Resize_Photo_Item_v({Container_Id_v: "Video_Item_15", Exit_Id_v: "Exit_Img_v_15", Heart_Id_v: "Heart_vid_15", Resize_Id_v: "Resize_Img_v_15", Source_Id_v: "Source_15_Vid_v", Picture_Id_v: "Play_Img_15_v"})}/>
                <img id="Exit_Img_v_15" src={Exit_Img_p_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item_v({Container_Id_Exit_v: "Video_Item_15", Exit_Id_Exit_v: "Exit_Img_v_15", Heart_Id_Exit_v: "Heart_vid_15", Resize_Id_Exit_v: "Resize_Img_v_15", Source_Id_Exit_v: "Source_15_Vid_v", Picture_Id_Exit_v: "Play_Img_15_v"})}/>
            </div>  

            <div id="Video_Item_16" style={Video_Item_Style} >
                <video id="Video_16_v" src={videoArray_v[15]} style={Video_Style} typeof="video/mp4" onClick={() => TriggerLink_v(15)} controls={controlsEnabled} muted></video>
                <img style={Play_Img_Style} src={PlayImg} id="Play_Img_16_v" />
              
                <img className="Heart_Style_Class_Vid" onClick={() => Save_Vid_Search({id_Heart_vid_Search: "Heart_vid_16"})} src={Heart_Img_vid} style={Heart_Style} id="Heart_vid_16"/>
                <img id="Resize_Img_v_16" src={Resize_Img_v_Search} style={Resize_Img_style} onClick={() => Resize_Photo_Item_v({Container_Id_v: "Video_Item_16", Exit_Id_v: "Exit_Img_v_16", Heart_Id_v: "Heart_vid_16", Resize_Id_v: "Resize_Img_v_16", Source_Id_v: "Source_16_Vid_v", Picture_Id_v: "Play_Img_16_v"})}/>
                <img id="Exit_Img_v_16" src={Exit_Img_p_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item_v({Container_Id_Exit_v: "Video_Item_16", Exit_Id_Exit_v: "Exit_Img_v_16", Heart_Id_Exit_v: "Heart_vid_16", Resize_Id_Exit_v: "Resize_Img_v_16", Source_Id_Exit_v: "Source_16_Vid_v", Picture_Id_Exit_v: "Play_Img_16_v"})}/>
            </div> 

            <div id="Video_Item_17" style={Video_Item_Style} >
                <video id="Video_17_v" src={videoArray_v[16]} style={Video_Style} typeof="video/mp4" onClick={() => TriggerLink_v(16)} controls={controlsEnabled} muted></video>
                <img style={Play_Img_Style} src={PlayImg} id="Play_Img_17_v" />
            
                <img className="Heart_Style_Class_Vid" onClick={() => Save_Vid_Search({id_Heart_vid_Search: "Heart_vid_17"})} src={Heart_Img_vid} style={Heart_Style} id="Heart_vid_17"/>
                <img id="Resize_Img_v_17" src={Resize_Img_v_Search} style={Resize_Img_style} onClick={() => Resize_Photo_Item_v({Container_Id_v: "Video_Item_17", Exit_Id_v: "Exit_Img_v_17", Heart_Id_v: "Heart_vid_17", Resize_Id_v: "Resize_Img_v_17", Source_Id_v: "Source_17_Vid_v", Picture_Id_v: "Play_Img_17_v"})}/>
                <img id="Exit_Img_v_17" src={Exit_Img_p_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item_v({Container_Id_Exit_v: "Video_Item_17", Exit_Id_Exit_v: "Exit_Img_v_17", Heart_Id_Exit_v: "Heart_vid_17", Resize_Id_Exit_v: "Resize_Img_v_17", Source_Id_Exit_v: "Source_17_Vid_v", Picture_Id_Exit_v: "Play_Img_17_v"})}/>
            </div> 
            
            <div id="Video_Item_18" style={Video_Item_Style} >
                <video id="Video_18_v" src={videoArray_v[17]} style={Video_Style} typeof="video/mp4" onClick={() => TriggerLink_v(17)} controls={controlsEnabled} muted></video>
                <img style={Play_Img_Style} src={PlayImg} id="Play_Img_18_v" />
                
                <img className="Heart_Style_Class_Vid" onClick={() => Save_Vid_Search({id_Heart_vid_Search: "Heart_vid_18"})} src={Heart_Img_vid} style={Heart_Style} id="Heart_vid_18"/>
                <img id="Resize_Img_v_18" src={Resize_Img_v_Search} style={Resize_Img_style} onClick={() => Resize_Photo_Item_v({Container_Id_v: "Video_Item_18", Exit_Id_v: "Exit_Img_v_18", Heart_Id_v: "Heart_vid_18", Resize_Id_v: "Resize_Img_v_18", Source_Id_v: "Source_18_Vid_v", Picture_Id_v: "Play_Img_18_v"})}/>
                <img id="Exit_Img_v_18" src={Exit_Img_p_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item_v({Container_Id_Exit_v: "Video_Item_18", Exit_Id_Exit_v: "Exit_Img_v_18", Heart_Id_Exit_v: "Heart_vid_18", Resize_Id_Exit_v: "Resize_Img_v_18", Source_Id_Exit_v: "Source_18_Vid_v", Picture_Id_Exit_v: "Play_Img_18_v"})}/>
            </div>  

            <div style={Space}></div>
            <div>
                <button onClick={ChangePrevPage_v} style={Bottom_Buttons_Style}>Prev Page</button>
                <p style={Page_Counter_Style_v}>{PageQuery_v}</p>
                <button onClick={ChangeNextPage_v} style={Bottom_Buttons_Style}>Next Page</button> 
                <div id="Loading_Spinner_vid_Bottom" style={Loading_Spinner_vid_Bottom} className="loading-spinner"></div>
            </div>

        </div>
        </div>
    );
}


export default Video_Search_Style;