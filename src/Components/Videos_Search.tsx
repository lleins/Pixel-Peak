import { CSSProperties } from "react";
import React, { useRef, RefObject, useEffect, useState } from "react";
import SearchImg from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/Search.png";
import PlayImg from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/PlayImg.png";
import Heart_Img_vid from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/Heart.png";
import Resize_Img_v_Search from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/Fullscreen.png";
import Exit_Img_p_Search from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/ExitImg.png";
import download_Img from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/download.png";
import arrow from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/Left_Arrow.png";
import video_img from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/PlayImg.png";
import pic_img from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/PicImg.png";
import Cookies from 'js-cookie';
const apiKey_v = "GTKZGX1qr6cVxMS1Dl88v1xUVe2edF3qaozGZMucbID3XTPE3Z2fSdbh";

function Video_Search_Style(){
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



  {
      /*API Call, PEXELS-------------------------------------------------------------*/
    }

      //Checl for home video search
      var randomvalue = "";
      const getRandomString = (): string => {
          const check_video_search_v =  Cookies.get("Home_Search_Videos");
          if (!check_video_search_v) {
              const strings: string[] = ['dark', 'nature', 'forest', 'sky'];
              const randomIndex: number = Math.floor(Math.random() * strings.length);
              randomvalue = strings[randomIndex];
          } else {
              randomvalue = check_video_search_v;
           
          }
          return randomvalue;
      };
    const randomString: string = getRandomString();

    const [searchQuery_v, setSearchQuery_v] = useState("");
    
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
    

    interface Video3_v {
      user: {
          name: string;
      };
    }
    const [videoArray_v, setVideoArray_v] = useState<string[]>([]);
    const [videoArrayurl_v, setVideoArrayurl_v] = useState<string[]>([]);
    const [videoArrayuser_v, setVideoArrayuser_v] = useState<string[]>([]);
    const [videoResults, setVideoResults] = useState<string[]>([]);
    useEffect(() => {
      const fetchVideos = async () => {
        try {
          const response = await fetch(apiUrl_v, {
            headers: {
              Authorization: apiKey_v,
            },
          });
          
          if (!response.ok) {
           
          }
          
          const data_v = await response.json();

          const videos = data_v.videos.map((video: Video_v) => video.video_files[0].link.toString());
          setVideoArray_v(videos);
    
          const videosurl_v = data_v.videos.map((video: Video2_v) => video.url);
          setVideoArrayurl_v(videosurl_v);
         

          const videosuser_v = data_v.videos.map((video: Video3_v) => video.user.name);
          setVideoArrayuser_v(videosuser_v);

          const videoResult_v = data_v.total_results;
          setVideoResults(videoResult_v);


        } catch (error) {
         
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


    function TriggerLink_v_url(url: string) {
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
          
      }, 1500); 
  }  

  interface query_interface{
    query: string;
  }

  function ChangeSearch_Trending({query}:query_interface){

    const load_spinner_vid = document.getElementById("Loading_Spinner_vid");
    if(load_spinner_vid) load_spinner_vid.style.display = "block";
    
    setTimeout(() => {
        const load_spinner_vid = document.getElementById("Loading_Spinner_vid");
        if(load_spinner_vid) load_spinner_vid.style.display = "none";
        
        const ActualInput =  document.getElementById('Search_Videos') as HTMLInputElement
        const ActualResult =  document.getElementById('Search_Result_v');

        setSearchValue(query);
        ChangeSearch();
        
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


  function reset_page_counter(){
    setPageQuery_v(PageQuery_v / PageQuery_v);
  }


  interface Resize_ids_v{
    Container_Id_v: string;
    Exit_Id_v: string;
    Heart_Id_v: string;
    Resize_Id_v: string;
    Source_Id_v: string;
    Picture_Id_v: string;
    Loading_Id_v: string;
  }


  function Resize_Photo_Item_v({Container_Id_v, Exit_Id_v, Heart_Id_v, Resize_Id_v, Source_Id_v, Picture_Id_v, Loading_Id_v }: Resize_ids_v){
    const element = document.getElementById("main_style");
    if (element) {
        element.scrollIntoView({ behavior: 'instant' });
        element.textContent = "";
        element.textContent = Container_Id_v;
    }
 
    toggleControls();

    const View_Video_Container = document.getElementById("View_Video");
    
    const download_btn = document.getElementById("View_Download_Btn");

    const nav_bar = document.getElementById("Main_Nav");
    const exit_img = document.getElementById("View_Exit_Img");
    const user = document.getElementById("view_video_user");
    const Heart_Img = document.getElementById("View_Heart_Img");
    const actual_heart = document.getElementById(Heart_Id_v);
    const actual_video = document.getElementById("Video_View_Actual") as HTMLVideoElement | null;
    if(actual_heart){ 
      const HeartStyle = getComputedStyle(actual_heart);
      if(actual_heart){
        if (HeartStyle.filter === "brightness(1)"){
          if(Heart_Img) Heart_Img.style.filter = "brightness(100%)";
        }
      }else if(actual_heart){
        if (HeartStyle.filter === "brightness(5)"){
          if(Heart_Img) Heart_Img.style.filter = "brightness(500%)";
        }
      }
    }

    if(download_btn){
      download_btn.onclick=(() => Download_video({Download_Btn_Id: "View_Download_Btn", url: Picture_Id_v}));
    }
   
  
    if(Heart_Img){
      Heart_Img.onclick=(() =>Save_Vid_Search({id_Heart_vid_Search: `View_Heart_Img`, src: Picture_Id_v, url: Resize_Id_v, load: ``, user: Source_Id_v }));
    }

    if(user){
      user.textContent = "";
      user.textContent = "By: " + Source_Id_v;
      user.onclick=(() =>TriggerLink_v_url(Resize_Id_v));
    }

    if(exit_img){
      exit_img.style.display = "block";
    }

    if(actual_video){
      actual_video.src = Picture_Id_v;
    }

    if(nav_bar){
      nav_bar.style.display = "none";
    }
    if(View_Video_Container){
      View_Video_Container.style.display = "block";
    }


  }




  function Exit_Photo_Item_v(){
    
    const View_Video_Container = document.getElementById("View_Video");
    const nav_bar = document.getElementById("Main_Nav");
    const exit_img = document.getElementById("View_Exit_Img");

    if(exit_img){
      exit_img.style.display = "none";
    }

    if(nav_bar){
      nav_bar.style.display = "flex";
    }
    if(View_Video_Container){
      View_Video_Container.style.display = "none";
    }

    toggleControls();
    
    const mainStyleElement = document.getElementById("main_style");
    if (mainStyleElement) {
        const elementText = mainStyleElement.textContent;
        const element = document.querySelector(`#${elementText}`); // Assuming you want to select by ID
        
        if (element instanceof HTMLElement) {
            element.scrollIntoView({ behavior: 'instant' });
        }
    }
  }
  const [isOverflowVisible_v, setIsOverflowVisible_v] = useState(true);

  const toggleOverflow_v = () => {
    setIsOverflowVisible_v(prev => !prev);
  };



  function ChangeNextPage_v(){
      handlePageChange_v(PageQuery_v + 1);
    
      increaseBrightness_vid();
         
      const element = document.getElementById("Search_Videos");
        if (element) {
            element.scrollIntoView({ behavior: 'instant' });
        }
    
    }

    function ChangePrevPage_v(){
      if (PageQuery_v <= 1){

      }else if(PageQuery_v > 1){
          handlePageChange_v(PageQuery_v - 1);
  
          increaseBrightness_vid();
          const element = document.getElementById("Search_Videos");
          if (element) {
            element.scrollIntoView({ behavior: 'instant' });
          }
      
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
      enabled: boolean;
    }
  
    function HoverImg({
      containerId,
      sourceTextId,
      Video,
      PlayImg,
      Resize_Id_v,
      enabled, // Add a default value to enable the function by default
    }: HoverImgProps) {
      useEffect(() => {
        if (!enabled) return; // If the function is disabled, return early
    
        const sourceTextActual = document.getElementById(sourceTextId);
        const containerActual = document.getElementById(containerId);
        const PlayImgActual = document.getElementById(PlayImg);
        const videoElement = document.getElementById(Video) as HTMLVideoElement | null;
        const ResizeActual = document.getElementById(Resize_Id_v);
    
        const handleMouseOver = () => {
          if(videoElement) videoElement.play();
          if (PlayImgActual) PlayImgActual.style.opacity = "0";
          if (ResizeActual) ResizeActual.style.opacity = "1";
          if(sourceTextActual) sourceTextActual.style.opacity = "1";
        };
    
        const handleMouseOut = () => {
          if(videoElement) videoElement.pause();
          if (PlayImgActual) PlayImgActual.style.opacity = "1";
          if (ResizeActual) ResizeActual.style.opacity = "1";
          if(sourceTextActual) sourceTextActual.style.opacity = "1";
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
      }, [containerId, sourceTextId, enabled]); // Include 'enabled' in the dependency array
    
      return null;
    }

    interface Save_Vid_Ids_Search{
      id_Heart_vid_Search: string;
      src: string;
      url: string;
      load: string;
      user: string;
    }

    function Save_Vid_Search({ id_Heart_vid_Search, src, url, load, user }: Save_Vid_Ids_Search) : void {
      const HeartImg = document.getElementById(id_Heart_vid_Search);
      const Loader = document.getElementById(load);
      
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
              body: JSON.stringify({ email_data: Check_Login, src_data : src.toString(), url_data: url.toString(), type_data: "V", user: user }),
              })
              .then(response => {
                  if (response.ok) { //request sent
                    
                      //console.log("From Sign React: Request sent"); //Sent to express server
                      return response.json(); 
                  } else {
             
                    const Success_Notif = document.getElementById("Saved_0"); //request did not send
                    if(Success_Notif) Success_Notif.style.display = "block";
                    setTimeout(() => {
                      if(Success_Notif) Success_Notif.style.display = "none";
                      
                    }, 2000);
                      //console.log("From Sign React: Request failed"); //Failed to send
                      return response.json(); 
                  }
              })
              .then(data => {
                  if (data.message === 1) { //successfully saved
              
                    HeartImg.style.filter = "brightness(100%)";
                    //console.log("Saved in Photos_Format");
                    const Success_Notif = document.getElementById("Saved_1"); //changes heart color and display notif
                    if(Success_Notif) Success_Notif.style.display = "block";
                    setTimeout(() => {
                      if(Success_Notif) Success_Notif.style.display = "none";
                      
                    }, 2000);
                      
                  } else if (data.message === 0) { //failed to save
      
                    //console.log("Didnt Save in Photos_Format 0");
                    const Success_Notif = document.getElementById("Saved_0"); //displays notif
                    if(Success_Notif) Success_Notif.style.display = "block";
                    setTimeout(() => {
                      if(Success_Notif) Success_Notif.style.display = "none";
                      
                    }, 2000);
                  }else if (data.message === 3) { //fail in server
               
                    //console.log("Didnt Save in Photos_Format 3");
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
                  //console.log("Removed in Photos_Format 1");
                    const Success_Notif = document.getElementById("Saved_10"); //changes heart color and displays notif
                    if(Success_Notif) Success_Notif.style.display = "block";
                    setTimeout(() => {
                      if(Success_Notif) Success_Notif.style.display = "none";
                      
                    }, 2000);
  
                } else if (data.success === 0) { //did not delete save
             
                  //console.log("Didnt Remove in Photos_Format 0");
                  const Success_Notif = document.getElementById("Saved_0"); //displays notif
                  if(Success_Notif) Success_Notif.style.display = "block";
                  setTimeout(() => {
                    if(Success_Notif) Success_Notif.style.display = "none";
                    
                  }, 2000);
                } else {
                  //console.log("Didnt Remove in Photos_Format 4");
         
                    const Success_Notif = document.getElementById("Saved_0");
                    if(Success_Notif) Success_Notif.style.display = "block";
                    setTimeout(() => {
                      if(Success_Notif) Success_Notif.style.display = "none";
                      
                    }, 2000);
                }
              })
              .catch((error) => {
                // Handle any error that occurred during the fetch.
                //console.error('Fetch error:', error);
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


    interface HoverPhotosProps_v {
      containerId: string;
      SwitchContainerId: string;
      inputId: string;
      arrowId: string;
      arrowId_2: string;
    }

    function HoverSwitch_v ({
      containerId,
      SwitchContainerId,
      inputId,
      arrowId,
      arrowId_2

    }: HoverPhotosProps_v) {
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





    function calculateTotalPages(totalResults: number, resultsPerPage: number): number {
      return Math.ceil(totalResults / resultsPerPage);
    }


    interface download_ids{
      Download_Btn_Id: string;
      url: string;
  }
  
  async function Download_video({Download_Btn_Id, url, }: download_ids){
    const download_btn = document.getElementById(Download_Btn_Id);

    if(download_btn){
        download_btn.textContent = "Downloading";
    }
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        let result = '';
        for (let i = 0; i < 8; i++) {
            result += Math.floor(Math.random() * 10); // Generate a random digit (0-9)
        }
        link.download = 'video' + result + '.mp4';
        link.click();
        setTimeout(() => {
            URL.revokeObjectURL(url);
        }, 1000); //
        if(download_btn){
            download_btn.textContent = "Download";
        }
    } catch (error) {
        //console.error('An error occurred while downloading the video:', error);
        if(download_btn){
            download_btn.textContent = "Download";
        }
    }
}

  const Main_Style: CSSProperties={
      position: "absolute",
      border: "0px solid rgb(200, 200, 200)",
      height: "100%",
      width: "100%",
      left: "0px",
      marginTop: "0px",
      borderRadius: "0px",
      overflowY: isOverflowVisible_v ? 'auto' : 'hidden',
      backgroundColor: "rgb(15, 15, 15)",
      
  };  

  function getRandomNumber() {
    return Math.floor(Math.random() * 20); 
  }
  const randomNumber = getRandomNumber();

  const search_bar_img_container: CSSProperties = {
    position: "absolute",
    top: "0px",
    height: "500px",
    width: "100%",
    left: "0px",
    backgroundColor: "rgb(0, 0, 0, 1)",
  };

  const Video_top_text: CSSProperties = {
    position: "absolute",
    border: "0px solid rgb(200, 200, 200)",
    left: "50%",
    transform: "translate(-50%, 0%)",

    fontFamily: "helvetica",
    fontSize: "35px",
    color: "rgb(255, 255, 255)",
    top: "100px",
    fontWeight: "bold",
    whiteSpace: "nowrap",
  };

  const Video_top_text_2: CSSProperties = {
    position: "absolute",
    border: "0px solid rgb(200, 200, 200)",
    left: "50%",
    transform: "translate(-50%, 0%)",
    fontFamily: "helvetica",
    fontSize: "18px",
    color: "rgb(255, 255, 255)",
    top: "170px",
    fontWeight: "bold",
    whiteSpace: "nowrap",
  
  };

  const Video_featured_text_container: CSSProperties = {
    position: "absolute",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "250px",
      fontFamily: "helvetica",
      top: "66%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
  };


  const Main_video_Style: CSSProperties = {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0px",
    left: "0px",
    objectFit: "cover",
    backgroundRepeat: "no-repeat",
    opacity: ".5",
  };

  const Video_featured_text: CSSProperties = {
    color: "rgb(255, 255, 255)",
    cursor: "pointer",
    textDecoration: "underline",
    fontSize: "18px",
  };

 const Video_featured_text_title: CSSProperties = {
  color: "rgb(200, 200, 200)",
 };

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

  const Search_Img_Style: CSSProperties={
    position: "absolute",
    top: "50%",
    transform: "translate(0%, -50%)",
    right: "15px",       
    cursor: "pointer",
    filter: "brightness(100%)",
  };


  const Search_Title_Style: CSSProperties={
      position: "absolute",
      border: "0px solid rgb(200, 200, 200)",
      left: "50%",
      transform: "translate(-50%, 0%)",
      fontFamily: "helvetica",
      fontSize: "20px",
      color: "rgb(255, 255, 255)",
      top: "575px",
      fontWeight: "bold",
      paddingBottom: "100px",
  };
  

  const Result_Style: CSSProperties={
    position: "absolute",
    left: "20px",
    fontFamily: "helvetica",
    fontSize: "14px",
    color: "rgb(255, 255, 255)",
    top: "525px",
  };
  
  const pageOf_Style: CSSProperties={
    position: "absolute",
    right: "20px",
    fontFamily: "helvetica",
    fontSize: "14px",
    color: "rgb(255, 255, 255)",
    top: "525px",
  };  

  const Download_Btn_Style_View: CSSProperties = {
    color: "rgb(255, 255, 255)",
    fontFamily: "helvetica",
    fontSize: "15px",
    position: "absolute",
    bottom: "45px",
    right: "100px",
    transition: ".2s",
    cursor: "pointer",
    border: "0px",
    backgroundColor: "rgb(45, 101, 255)",
    borderRadius: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "5px",
    paddingBottom: "5px",
};

  const Download_Btn_Style: CSSProperties = {
    color: "rgb(255, 255, 255)",
    fontFamily: "helvetica",
    fontSize: "15px",
    position: "absolute",
    bottom: "-43px",
    right: "60px",
    transition: ".2s",
    cursor: "pointer",
    border: "0px",
    backgroundColor: "rgb(45, 101, 255)",
    borderRadius: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "5px",
    paddingBottom: "5px",
};

const Download_Image_Style: CSSProperties = {
  width: "15px",
  height: "15px",
  verticalAlign: "center",
  marginTop: "-2px",
  marginRight: "6px",
};
  const Video_Container_Style: CSSProperties={
      position: "absolute",
      border: "0px solid rgb(200, 200, 200)",
      height: "100%",
      width: "1200px",
      left: "50%",
      top: "50%",
      marginTop: "650px",
      transform: "translate(-50%, -50%)",
      borderRadius: "0px",
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)",
      gridTemplateRows: "repeat(18, 1fr)",
      gridGap: "100px",
      paddingBottom: "10px",
     
  };

  const [isDisplayBlock_v, setIsDisplayBlock_v] = useState(false);

  const Video_Item_Style: CSSProperties={
      position: "relative",
      height: "500px",
      width: "80%",
      minWidth: "250px",
      minHeight: "125px",
      maxWidth: "1000px",
      maxHeight: "500px",
      borderRadius: "0px",
      backgroundColor: "rgb(150, 150, 150, 0.3)",
      left: "50%",
      transform: "translate(-50%, 0%)",
      cursor: "pointer",
      display: isDisplayBlock_v? "block" : "none",
 
  };

  const Video_Style: CSSProperties={
      position: "relative",
      height: "100%",
      width: "100%",
      borderRadius: "0px",
      backgroundColor: "rgb(150, 150, 150, 0.3)",
      objectFit: "cover",
      backgroundRepeat: "no-repeat",
  };

  const Play_Img_Style: CSSProperties = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      opacity: "1",
      transition: ".2s",
      backgroundColor: "rgb(10, 10, 10, .5)",
      padding: "10px",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
  };

  const Space: CSSProperties={
      position: "relative",
      height: "0px",
      width: "300px",
      borderRadius: "5px",
      backgroundColor: "rgb(200, 200, 200, 0)",
      left: "50%",
      transform: "translate(-50%, 0%)",
      zIndex: "-1",
  };

    
  const Space_2: CSSProperties={
    position: "relative",
    height: "150px",
    width: "300px",
    borderRadius: "5px",
    backgroundColor: "rgb(200, 200, 200, 0)",
    left: "50%",
    transform: "translate(-50%, 0%)",
    zIndex: "-1",
  };



  const Bottom_Buttons_Style_Left: CSSProperties={
    position: "absolute",
    width: "100px",
    height: "40px",
    borderRadius: "5px",
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgb(10, 10, 10)",
    fontFamily: "helvetica",
    fontSize: "14px",
    cursor: "pointer",
    border: "none",
    marginRight: "200px",
    left: "calc(50% - 75px)",
    transform: "translate(-50%, 0%)",
  };

  
  const Bottom_Buttons_Style_Right: CSSProperties={
    position: "absolute",
    width: "100px",
    height: "40px",
    borderRadius: "5px",
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgb(10, 10, 10)",
    fontFamily: "helvetica",
    fontSize: "14px",
    cursor: "pointer",
    border: "none",
    left: "calc(50% + 75px)",
    transform: "translate(-50%, 0%)",
  };


  const Page_Counter_Style_v: CSSProperties = {
      position: "absolute",
      fontFamily: "helvetica",
      fontSize: "16px",
      color: "rgb(255, 255, 255)",
      marginTop: "10px",
      left: "50%",
      transform: "translate(-50%, 0%)",
    
  };
  
  const Heart_Style: CSSProperties = {
    bottom: "-40px",
    position: "absolute",
    width: "32px",
    height: "32px",
    right: "0px",
    filter: "brightness(500%)",
    opacity: "1",
    transition: ".2s",
  };
  

  const View_Exit_Img_Resize: CSSProperties = {
    position: "absolute",
    right: "5%",
    top: "60px",
    opacity: "1",
    transition: ".3s",
    display: "none",
    zIndex: "999999",
    cursor: "pointer",
    width: "32px",
    height: "32px",
  };

  const View_Video_Style: CSSProperties = {
    position: "absolute",
    width: "90%",
    height: "500px",
    borderRadius: "0px",
    backgroundColor: "rgb(20, 20, 20, 1)",
    left: "50%",
    top: "100px",
    transform: "translate(-50%, 0%)",
    cursor: "pointer",
  };

  const Heart_Style_View: CSSProperties = {
    top: "625px",
    position: "absolute",
    width: "28px",
    height: "28px",
    right: "5%",
    filter: "brightness(500%)",
    opacity: "1",
    transition: ".2s",
    cursor: "pointer",
    zIndex: "5",
  };
 
  const view_user_text_style: CSSProperties = {
    top: "625px",
    position: "absolute",
    left: "5%",
    color: "rgb(255, 255, 255)",
    fontFamily: "helvetica",
    fontSize: "15px",
    opacity: "1",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "45%",

  };

  const view_video_style_Container: CSSProperties = {
    position: "fixed",
    width: "100%",
    height: "100vh",
    backgroundColor: "rgb(10, 10, 10, .9)",
    backdropFilter: "blur(5px)",
    left: "0%",
    top: "0px",
    zIndex: "10000",
    display: "none",
    overflow: "auto",
  };

  const View_Video_Actual_Container: CSSProperties = {
    position: "absolute",
    width: "80%",
    height: "700px",
    backgroundColor: "rgb(20, 20, 20)",
    left: "50%",
    transform: "translate(-50%, 0%)",
    top: "60px",
    zIndex: "100001",
  };

  const Loading_Spinner_vid: CSSProperties = {
    position: "absolute",
    top: "90%",
    zIndex: "30",
    display: "none",
    transform: "translate(-50%, -45%)",
    left: "45%",
  };


  const Loading_Spinner_vid_Bottom: CSSProperties = {
    position: "absolute",
    zIndex: "30",
    display: "none",
    left: "48%",
    transform: "translate(-50%, 0%)",
    marginTop: "60px",
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

  const Resize_Img_style: CSSProperties = {
    top: "-40px",
    position: "relative",
    transform: "scale(.5)",
    left: "230px",
    opacity: "0",
    transition: ".1s",
  };

  const user_text_style_container: CSSProperties = {
    bottom: "0px",
    position: "absolute",
    left: "0px",
    height: "50px",
    transition: ".1s",
    color: "rgb(255, 255, 255)",
    fontFamily: "helvetica",
    fontSize: "14px",
    opacity: "1",
    width: "100%",
  };

  const user_text_style: CSSProperties = {
    color: "rgb(255, 255, 255)",
    fontFamily: "helvetica",
    fontSize: "15px",
    position: "absolute",
    bottom: "-50px",
    left: "0px",
    transition: ".2s",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "50%",
  };

  const Exit_Img_Resize: CSSProperties = {
    position: "absolute",
    right: "5px",
    top: "5px",
    transform: "scale(1)",
    opacity: "1",
    transition: ".3s",
    display: "none",
  };
  
  const Loading_Spinner_V: CSSProperties = {
    top: "90px",
    left: "140px",
    zIndex: "9",
    display: "none",
  };

  const top_items_style: CSSProperties = {
    position: "absolute",
    width: "90%",
    height: "50px",
    left: "5%",
    top: "35px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const view_title_style: React.CSSProperties = {
    fontFamily: 'Arial',
    color: 'rgb(255, 255, 255)',
    fontWeight: 'bold',
    letterSpacing: '1px',
    fontSize: '20px',
    fontVariant: 'small-caps'
  };

  const top_marker: CSSProperties = {
    position: "absolute",
    left: "0px",
    top: "0px",
    opacity: "1",
    zIndex: "-1",

  };  

  const footerStyle: CSSProperties = {
    borderTop: '1px solid rgba(255, 255, 255, 1)',
    position: 'relative',
    backgroundColor: 'rgb(15, 15, 15)',
    width: '100%',
    left: "0px",
    height: '180px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(1, 1fr)',

  };


  const titleStyle: CSSProperties = {
    position: 'relative',
    top: '50px',
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const linkStyle: CSSProperties = {
    position: 'relative',
    top: '50px',
    color: 'rgb(220, 220, 220)',
    fontFamily: 'Helvetica',
    fontSize: '12px',
    cursor: 'pointer',
    transition: 'transform 0.1s',
    textAlign: 'center',
  };

  const copyrightStyle: CSSProperties = {
    position: 'absolute',
    top: '65px',
    left: '15px',
    textAlign: 'left',
    color: "rgb(200, 200, 200)",
  };

  
    
  const Switch_Container: CSSProperties = {
    position: "absolute",
    border: "0px solid rgb(200, 200, 200)",
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
    display: "none",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    cursor: "pointer",
  };

  const Videos_switch: CSSProperties = {
    width: "100px",
    borderRight: "2px solid rgb(50, 50, 50)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    cursor: "pointer",
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

  const Switch_to_Videos: CSSProperties = {
    position: "absolute",
    width: "118px",
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
    left: "0px",

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

  function updateStyles(){
      const screenWidth = window.innerWidth;
      const Small_ScreenSize: CSSProperties = {
          width: "100%",
          gridTemplateColumns: "repeat(1, 1fr)",
          gridTemplateRows: "repeat(18, 1fr)",
          
      };

      const Smaller_ScreenSize: CSSProperties = {
          width: "100%",
          gridTemplateColumns: "repeat(1, 1fr)",
          gridTemplateRows: "repeat(18, 1fr)",
  
      };
      
      const Smaller_ScreenSize_smallets: CSSProperties = {
        width: "100%",
      };

  
      const Smaller_ScreenSize_View_Heart: CSSProperties = {
        top: "375px",
      };

      const Smaller_ScreenSize_View_user: CSSProperties = {
        top: "375px",
      };

      const Smaller_ScreenSize_View_container: CSSProperties = {
        height: "425px",
      };

      const Heart_Style_smallest: CSSProperties = {
        bottom: "-35px",
        width: "24px",
        height: "24px",
      };


      const Smaller_SearchTitle_v: CSSProperties = {
        fontSize: "17px",
      };

      const Smaller_SeachBar_v: CSSProperties = {
        width: "calc(75% + 60px)",
      };
      
      const Smaller_SeachIcon_v: CSSProperties = {
        left: "calc(67% + 60px)",
      };

      const Smaller_SeachIcon_v_2: CSSProperties = {
        left: "77%",
    };

      const Smaller_SeachIcon_1_v: CSSProperties = {
        left: "70%",
      };

      const Video_Item_Style_smallest: CSSProperties={
        height: "250px",
        /*width: "90%",*/
      };

      const Video_Item_Style_small: CSSProperties={
        height: "275px",
        /*width: "500px",*/
      };

      const Smaller_ScreenSize_Exit_View: CSSProperties = {
        right: "1%",
      };

      const Smaller_ScreenSize_video_View: CSSProperties = {
        height: "250px",
      };

      const Smaller_ScreenSize_Trending: CSSProperties = {
        width: "70%",
        top: "360px",
      };

      const Smaller_ScreenSize_VidLoader: CSSProperties = {
        top: "50%",
      };

      const Smaller_ScreenSize_bottomLoader: CSSProperties = {
        marginTop: "-150px",
        display: "none",
        left: "47%",
        transform: "translate(-50, 0%)",
      };
      const Smaller_ScreenSize_bottomLoader_2: CSSProperties = {
        marginTop: "-150px",
        display: "none",
        left: "47%",
        transform: "translate(-50, 0%)",
      };

      const Smaller_ScreenSize_bottomLoader_3: CSSProperties = {
        marginTop: "20px",
        display: "none",
        left: "48%",
        transform: "translate(-50, 0%)",
      };

      const Smaller_ScreenSize_download_btn: CSSProperties = {
        fontSize: "12px",
        bottom: "-37px",
        paddingLeft: "10px",
        paddingRight: "10px",
        right: "40px",
      };

      const Smaller_ScreenSize_download_btn_view: CSSProperties = {
        fontSize: "12px",
        bottom: "25px",
        paddingLeft: "10px",
        paddingRight: "10px",
        right: "60px",
      };

      const Smaller_ScreenSize_download_img: CSSProperties = {
        width: "13px",
        height: "13px",
      };

      const Smaller_ScreenSize_Space: CSSProperties = {
        height: "0px",
      };

      const Smaller_ScreenSize_video_actual_View: CSSProperties = {
        height: "425px",
      };
      const title_2_small: CSSProperties = {
        fontSize: "15px",
        whiteSpace: "pre-wrap",
        top: "160px",
        width: "75%",
      };

      const featured_small: CSSProperties = {
        fontSize: "16px",
        
      };


      if (screenWidth > 890 && screenWidth < 1250) {
          Object.assign(Video_Container_Style, Small_ScreenSize);

          Object.assign(Loading_Spinner_vid_Bottom, Smaller_ScreenSize_bottomLoader_3);
      }
      if(screenWidth <= 890){
          Object.assign(Video_Item_Style, Video_Item_Style_small);
          Object.assign(Video_Container_Style, Smaller_ScreenSize);
          Object.assign(Search_Title_Style, Smaller_SearchTitle_v);
          Object.assign(Input_Style, Smaller_SeachBar_v);
          Object.assign(Loading_Spinner_vid_Bottom, Smaller_ScreenSize_bottomLoader_2);
          Object.assign(Space, Smaller_ScreenSize_Space);
      }

      if(screenWidth <= 600){
        Object.assign(Video_top_text_2, title_2_small);
        Object.assign(Video_featured_text, featured_small);
     
      }
      
      if(screenWidth <= 560){
        Object.assign(Video_Item_Style, Video_Item_Style_smallest);
        Object.assign(Video_Container_Style, Smaller_ScreenSize_smallets);
        Object.assign(Heart_Style, Heart_Style_smallest);
        Object.assign(View_Video_Actual_Container, Smaller_ScreenSize_video_actual_View);
        Object.assign(View_Exit_Img_Resize, Smaller_ScreenSize_Exit_View);
        Object.assign(View_Video_Style, Smaller_ScreenSize_video_View);
        Object.assign(Heart_Style_View, Smaller_ScreenSize_View_Heart);
        Object.assign(view_user_text_style, Smaller_ScreenSize_View_user);
        Object.assign(Video_featured_text_container, Smaller_ScreenSize_Trending);
        Object.assign(Loading_Spinner_vid_Bottom, Smaller_ScreenSize_bottomLoader);
        Object.assign(Download_Btn_Style_View, Smaller_ScreenSize_download_btn_view);
        Object.assign(Download_Btn_Style, Smaller_ScreenSize_download_btn);
        Object.assign(Download_Image_Style, Smaller_ScreenSize_download_img);
    }
  }

  updateStyles();
  


  const [searchValue, setSearchValue] = useState(randomString);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);

  };



  const [controlsEnabled, setControlsEnabled] = useState(false);

  const toggleControls = () => {
    setControlsEnabled(prevEnabled => !prevEnabled);
  };


  function Change_To_Photos(){
    Cookies.remove("Home_Search_Videos");
    Cookies.remove("Home_Search_Photos");
    Cookies.remove("Go_to_Photos_fromV");      
    Cookies.remove("Go_to_Videos_fromP"); 
    Cookies.set('Go_to_Photos_fromV', "1" , { path: '/' });
    window.location.reload();
  }

  ChangeSearch();

  const Video_Items = [];

  if(videoArray_v.length === 0){
    const video_container = document.getElementById("Video_Container");
    const search_title = document.getElementById("search_title");
    const none_title = document.getElementById("none_title");
    const button_title = document.getElementById("button_container_v");
    const footer = document.getElementById("Footer");
    if(video_container)video_container.style.display = "block";
    if(footer) footer.style.display = "grid";
    if(search_title)search_title.style.display = "none";
    if(none_title)none_title.style.display = "block";
    if(button_title)button_title.style.display = "none";
    
  }else{
    Video_Items.length = 0;
    const video_container = document.getElementById("Video_Container");
    const search_title = document.getElementById("search_title");
    const none_title = document.getElementById("none_title");
    const button_title = document.getElementById("button_container_v");
    if(video_container)video_container.style.display = "grid";
    if(search_title)search_title.style.display = "block";
    if(none_title)none_title.style.display = "none";
    if(button_title)button_title.style.display = "block";
    for (let i = 0; i < videoArray_v.length ; i++) {
      if(videoArray_v[i] === ""){
        
      }else{
        Video_Items.push(
          <div id={`Video_Item_${i+1}`} key={i} style={Video_Item_Style}>
              <video id={`Video_${i+1}_v`} src={videoArray_v[i]} style={Video_Style} typeof="video/mp4" onClick={() => Resize_Photo_Item_v({Container_Id_v: `Video_Item_${i+1}`, Exit_Id_v: videoArrayuser_v[i], Heart_Id_v: `Heart_vid_${i+1}`, Resize_Id_v: videoArrayurl_v[i], Source_Id_v: videoArrayuser_v[i], Picture_Id_v: videoArray_v[i], Loading_Id_v: `Loading_Spinner_V_${i+1}`})}  controls={controlsEnabled} loop muted></video>
              <img style={Play_Img_Style} onClick={() => Resize_Photo_Item_v({Container_Id_v: `Video_Item_${i+1}`, Exit_Id_v: videoArrayuser_v[i], Heart_Id_v: `Heart_vid_${i+1}`, Resize_Id_v: videoArrayurl_v[i], Source_Id_v: videoArrayuser_v[i], Picture_Id_v: videoArray_v[i], Loading_Id_v: `Loading_Spinner_V_${i+1}`})}  src={PlayImg} id={`Play_Img_${i+1}_v`} />
              <div id={`Loading_Spinner_V_${i+1}`} style={Loading_Spinner_V} className="loading-spinner"></div>
              <img className="Heart_Style_Class_Vid" onClick={() => Save_Vid_Search({id_Heart_vid_Search: `Heart_vid_${i+1}`, src: videoArray_v[i], url: videoArrayurl_v[i], load: `Loading_Spinner_V_${i+1}`, user: videoArrayuser_v[i] })} src={Heart_Img_vid} style={Heart_Style} id={`Heart_vid_${i+1}`}/>
              <img id={`Resize_Img_v_${i+1}`} src={Resize_Img_v_Search} style={Resize_Img_style} />
              <img id={`Exit_Img_v_${i+1}`} src={Exit_Img_p_Search} style={Exit_Img_Resize}/>
              <div id={`user_text_${i+1}`} style={user_text_style_container}>
                <p onClick={() => TriggerLink_v(i)} className="video_user" style={user_text_style}>By: {videoArrayuser_v[i]}</p>
              </div>
              <button onClick={() => Download_video({Download_Btn_Id: `Download_Button_v${i+1}`, url: videoArray_v[i]})} style={Download_Btn_Style}> <img style={Download_Image_Style} src={download_Img}/><span id={`Download_Button_v${i+1}`}>Download</span></button>
          </div>
      );
      }

  }
  } 

  return(

      <div  style={Main_Style}>
        <p id="main_style" style={top_marker}></p>

      <HoverImg containerId="Video_Item_1" sourceTextId="user_text_1" Video="Video_1_v" PlayImg="Play_Img_1_v" Resize_Id_v="Heart_vid_1" enabled={true}/>
      <HoverImg containerId="Video_Item_2" sourceTextId="user_text_2" Video="Video_2_v" PlayImg="Play_Img_2_v" Resize_Id_v="Heart_vid_2" enabled={true}/>
      <HoverImg containerId="Video_Item_3" sourceTextId="user_text_3" Video="Video_3_v" PlayImg="Play_Img_3_v" Resize_Id_v="Heart_vid_3" enabled={true}/>
      <HoverImg containerId="Video_Item_4" sourceTextId="user_text_4" Video="Video_4_v" PlayImg="Play_Img_4_v" Resize_Id_v="Heart_vid_4" enabled={true}/>
      <HoverImg containerId="Video_Item_5" sourceTextId="user_text_5" Video="Video_5_v" PlayImg="Play_Img_5_v" Resize_Id_v="Heart_vid_5" enabled={true}/>
      <HoverImg containerId="Video_Item_6" sourceTextId="user_text_6" Video="Video_6_v" PlayImg="Play_Img_6_v" Resize_Id_v="Heart_vid_6" enabled={true}/>
      <HoverImg containerId="Video_Item_7" sourceTextId="user_text_7" Video="Video_7_v" PlayImg="Play_Img_7_v" Resize_Id_v="Heart_vid_7" enabled={true}/>
      <HoverImg containerId="Video_Item_8" sourceTextId="user_text_8" Video="Video_8_v" PlayImg="Play_Img_8_v" Resize_Id_v="Heart_vid_8" enabled={true}/>
      <HoverImg containerId="Video_Item_9" sourceTextId="user_text_9" Video="Video_9_v" PlayImg="Play_Img_9_v" Resize_Id_v="Heart_vid_9" enabled={true}/>
      <HoverImg containerId="Video_Item_10" sourceTextId="user_text_10" Video="Video_10_v" PlayImg="Play_Img_10_v" Resize_Id_v="Heart_vid_10" enabled={true}/>
      <HoverImg containerId="Video_Item_11" sourceTextId="user_text_11" Video="Video_11_v" PlayImg="Play_Img_11_v" Resize_Id_v="Heart_vid_11" enabled={true}/>
      <HoverImg containerId="Video_Item_12" sourceTextId="user_text_12" Video="Video_12_v" PlayImg="Play_Img_12_v" Resize_Id_v="Heart_vid_12" enabled={true}/>
      <HoverImg containerId="Video_Item_13" sourceTextId="user_text_13" Video="Video_13_v" PlayImg="Play_Img_13_v" Resize_Id_v="Heart_vid_13" enabled={true}/>
      <HoverImg containerId="Video_Item_14" sourceTextId="user_text_14" Video="Video_14_v" PlayImg="Play_Img_14_v" Resize_Id_v="Heart_vid_14" enabled={true}/>
      <HoverImg containerId="Video_Item_15" sourceTextId="user_text_15" Video="Video_15_v" PlayImg="Play_Img_15_v" Resize_Id_v="Heart_vid_15" enabled={true}/>
      <HoverImg containerId="Video_Item_16" sourceTextId="user_text_16" Video="Video_16_v" PlayImg="Play_Img_16_v" Resize_Id_v="Heart_vid_16" enabled={true}/>
      <HoverImg containerId="Video_Item_17" sourceTextId="user_text_17" Video="Video_17_v" PlayImg="Play_Img_17_v" Resize_Id_v="Heart_vid_17" enabled={true}/>
      <HoverImg containerId="Video_Item_18" sourceTextId="user_text_18" Video="Video_18_v" PlayImg="Play_Img_18_v" Resize_Id_v="Heart_vid_18" enabled={true}/>
      


      <HoverSwitch_v containerId="Videos_Switch_Container_v" SwitchContainerId="Switch_to_photos_v" inputId="input_Switch_container_v" arrowId="arrow_Switch_Videos_v" arrowId_2=""/>
      <HoverSwitch_v containerId="photos_Switch_Container_v" SwitchContainerId="Switch_to_videos_v" inputId="input_Switch_container_v" arrowId="arrow_Switch_Photos_v" arrowId_2=""/>
      <HoverSwitch_v containerId="Switch_to_videos_v" SwitchContainerId="Switch_to_videos_v" inputId="input_Switch_container_v" arrowId="arrow_Switch_Photos_v" arrowId_2="" />
      <HoverSwitch_v containerId="Switch_to_photos_v" SwitchContainerId="Switch_to_photos_v" inputId="input_Switch_container_v" arrowId="arrow_Switch_Videos_v" arrowId_2="" />


      <div style={search_bar_img_container}>
        <video style={Main_video_Style} autoPlay loop muted controls={controlsEnabled} src={videoArray_v[randomNumber]}></video>
        <p style={Video_top_text}>Search videos</p>
        <p style={Video_top_text_2}>Search endless free videos with no limit and royalty free.</p>
        <div id="input_Switch_container_v" style={Switch_Container}>
              <div id="Videos_Switch_Container_v" style={Videos_switch}>
                <img id="arrow_Switch_Videos_v" src={arrow} style={arrow_switch}/>
                <p style={Switch_text}>Videos</p>
              </div>

              <div id="photos_switch_container_main_v">
                <div id="photos_Switch_Container_v" style={Photos_switch}>
                  <img id="arrow_Switch_Photos_v" src={arrow} style={arrow_switch}/>
                  <p id="photos_text_11_v" style={Switch_text}>Photos</p>
                </div>
              </div>
           

              <div id="Switch_to_videos_v" style={Switch_to_Videos}>
                <img src={video_img} style={icon_switch}/>
                <p style={Switch_to_text}>Videos</p>
              </div>
              <div id="Switch_to_photos_v" onClick={Change_To_Photos} style={Switch_to_Photos}>
                <img src={pic_img} style={icon_switch}/>
                <p style={Switch_to_text}>Photos</p>
              </div>
        </div>

        <div style={Input_SearchImg_Container}>
          <input id="Search_Videos" onChange={(event) => {handleInputChange(event); reset_page_counter();}} value={searchValue} type="text" placeholder="Search for videos" style={Input_Style} onKeyDown={handleKeyPress_v} />
          <img onClick={() =>{ChangeSearch(); reset_page_counter();}} id="Search_Button_v" style={Search_Img_Style} src={SearchImg}/>
        </div>
        <img id="View_Exit_Img" src={Exit_Img_p_Search} onClick={() => Exit_Photo_Item_v()} style={View_Exit_Img_Resize}/>
          <div style={Video_featured_text_container}>
              <p style={Video_featured_text} onClick={() => ChangeSearch_Trending({query: "dark"})}>Dark</p>
              <p style={Video_featured_text} onClick={() => ChangeSearch_Trending({query: "nature"})}>Nature</p>
              <p style={Video_featured_text} onClick={() => ChangeSearch_Trending({query: "forest"})}>Forest</p>
              <p style={Video_featured_text} onClick={() => ChangeSearch_Trending({query: "sky"})}>Sky</p>
              <div id="Loading_Spinner_vid" style={Loading_Spinner_vid} className="loading-spinner"></div>
          </div>
      </div>
      <h1 id="search_title" style={Search_Title_Style}>Search results for "{searchQuery_v}"</h1>
      <h1 id="none_title" style={Search_Title_Style}>No results were found...</h1>
      <p style={Result_Style}>Total results: {videoResults}</p>
      <p style={pageOf_Style}>Page {PageQuery_v} of {calculateTotalPages(Number(videoResults), 18)}</p>
      <div id="View_Video" style={view_video_style_Container}> 
        <div style={View_Video_Actual_Container}>
          <div id="view_top_items" style={top_items_style}>
            <p style={view_title_style}>Pixel Peak</p>
            <p style={view_title_style}>Videos</p>
          </div>
          <video id="Video_View_Actual"  style={View_Video_Style} typeof="video/mp4" controls={controlsEnabled}></video>
          <img id="View_Heart_Img" className="Heart_Style_Class_Vid" src={Heart_Img_vid} style={Heart_Style_View}/>
          <p id="view_video_user" style={view_user_text_style}></p>
          <button style={Download_Btn_Style_View}> <img style={Download_Image_Style} src={download_Img}/><span id="View_Download_Btn">Download</span></button>
        </div>
      </div>
      <div id="Video_Container" style={Video_Container_Style}>
         {Video_Items}
          <div style={Space}></div>
          <div id="button_container_v">
              <button onClick={ChangePrevPage_v} style={Bottom_Buttons_Style_Left}>Prev Page</button>
              <p style={Page_Counter_Style_v}>{PageQuery_v}</p>
              <button onClick={ChangeNextPage_v} style={Bottom_Buttons_Style_Right}>Next Page</button> 
              <div id="Loading_Spinner_vid_Bottom" style={Loading_Spinner_vid_Bottom} className="loading-spinner"></div>
          </div>
          <div style={Space_2}></div>
          <div id="Footer" className="Scroll_Div" style={footerStyle}>
              <p style={Footer_Title}>Pixel Peak</p>
                <p id="CopyWright" style={copyrightStyle}>
                  Copyright © 2024 Pixel Peak. All Rights Reserved. User Agreement, Privacy,
                  Payments Terms of Use, Cookies and AdChoice. Made By Lukas Leins
                </p>
            </div>
      </div>
      
      </div>
  );
}


export default Video_Search_Style;