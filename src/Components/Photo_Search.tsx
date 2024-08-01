import { CSSProperties } from "react";
import React, { useRef, RefObject, useEffect, useState} from "react";
import SearchImg from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/Search.png"
import Heart_Img_pic from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/Heart.png";
import download_Img from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/download.png";
import arrow from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/Left_Arrow.png";
import video_img from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/PlayImg.png";
import pic_img from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/PicImg.png";
import Cookies from 'js-cookie';
import axios from 'axios';


function Photo_Search_Style(){
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
    var randomvalue_p = "";
    const getRandomString = (): string => {
        const check_video_search_p =  Cookies.get("Home_Search_Photos");
        if (!check_video_search_p) {
            const strings: string[] = ['dark', 'nature', 'forest', 'sky'];
            const randomIndex: number = Math.floor(Math.random() * strings.length);
            randomvalue_p = strings[randomIndex];
        } else {
          randomvalue_p = check_video_search_p;
          
        }
        return randomvalue_p;
    };
    const randomString: string = getRandomString();


      const apiKey_s = "GTKZGX1qr6cVxMS1Dl88v1xUVe2edF3qaozGZMucbID3XTPE3Z2fSdbh";
      const [searchQuery_s, setSearchQuery_s] = useState("");
      const [PageQuery_s, setPageQuery_s] = useState(1);
      const apiUrl_s = `https://api.pexels.com/v1/search?query=${searchQuery_s}&per_page=18&page=${PageQuery_s}`;

    
      interface Photo_s {
        src: {
          large2x: string;
        };
      }
    
      interface URL_s {
        url: {
          url: string;
        };
      }
      
      
      interface photo3_v {
        photographer: {
            name: string;
        };
      }

      const [photoArray_s, setPhotoArray_s] = useState([]);
      const [urlArray_s, seturlArray_s] = useState([]);
      const [PhotoArrayuser_v, setphotoArrayuser_v] = useState<string[]>([]);
      const [PhotoResults, setphotoResults] = useState<string[]>([]);
    
      useEffect(() => {
        const fetchPhotos_s = async () => {
          try {
            const response = await fetch(apiUrl_s, {
              headers: {
                Authorization: apiKey_s,
              },
            });
    
            if (!response.ok) {
              //throw new Error("Network response was not ok");
            }
    
            const data_s = await response.json();
           
            const urls_s = data_s.photos.map((photo: Photo_s) =>
              photo.src.large2x.toString()
            );
            setPhotoArray_s(urls_s);
    
            const urls_Link_s = data_s.photos.map((photo: URL_s) => photo.url.toString());
            seturlArray_s(urls_Link_s);


            const photouser_v = data_s.photos.map((photo: photo3_v) => photo.photographer);
            setphotoArrayuser_v(photouser_v);

            const photoResult_v = data_s.total_results;
            setphotoResults(photoResult_v);


          } catch (error) {
            
          }
        };
    
        fetchPhotos_s();
      }, [apiKey_s, apiUrl_s]);
    
      const handleQueryChange_s = (newQuery_s: string) => {
        setSearchQuery_s(newQuery_s);
      };

      
      const handlePageChange_s = (newPage_s: number) => {
        setPageQuery_s(newPage_s);
      };

      function TriggerLink_s(i: number) {
        const url = urlArray_s[i];
        window.open(url, "_blank");
      }



      function ChangeNextPage(){
        handlePageChange_s(PageQuery_s + 1);

        increaseBrightness();

        const element = document.getElementById("Search_Photos");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
      
      }

      function calculateTotalPages(totalResults: number, resultsPerPage: number): number {
        return Math.ceil(totalResults / resultsPerPage);
      }

      function ChangePrevPage(){
        if (PageQuery_s <= 1){

        }else if(PageQuery_s > 1){
            handlePageChange_s(PageQuery_s - 1);

            const load_spinner_photo = document.getElementById("Loading_Spinner_Photo_Bot");
            if(load_spinner_photo) load_spinner_photo.style.display = "block";
            
            setTimeout(() => {
                increaseBrightness();
                const load_spinner_photo = document.getElementById("Loading_Spinner_Photo_Bot");
                if(load_spinner_photo) load_spinner_photo.style.display = "none";

                const element = document.getElementById("Search_Photos");
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 1500);  
        };
      }
      
    {
        /*API Call, PEXELS-------------------------------------------------------------*/
    }
    
    const increaseBrightness = () => {
      const elements = document.querySelectorAll('.Heart_Style_Class');
      
      for (let i = 0; i < elements.length; i++){
        const element = elements[i] as HTMLElement; 
        const element_style = getComputedStyle(element);
        
        if (element_style.filter === "brightness(1)"){
          element.style.filter = "brightness(500%)";
        } else {
         
        }
      }
    };
    

    function change_search_reset_page(){
      setPageQuery_s(PageQuery_s / PageQuery_s);
    }
    
    
    interface query_interface{
      query: string;
    }

    function ChangeSearch_Trending({query}:query_interface){

      const load_spinner_vid = document.getElementById("Loading_Spinner_photo");
      if(load_spinner_vid) load_spinner_vid.style.display = "block";
      
      setTimeout(() => {
          const load_spinner_vid = document.getElementById("Loading_Spinner_photo");
          if(load_spinner_vid) load_spinner_vid.style.display = "none";
          
          const ActualInput =  document.getElementById('Search_Photos') as HTMLInputElement
          const ActualResult =  document.getElementById('Search_Result');

          setSearchValue(query);
          ChangeSearch();
          
      }, 1500); 
  }  

    
    

    
    interface HoverImgProps {
        containerId: string;
        sourceTextId: string;
        ImgId: string;
        ResizeId: string;
      }
    

    function HoverImg({ containerId, sourceTextId, ImgId, ResizeId }: HoverImgProps) {
        useEffect(() => {
          const sourceTextActual = document.getElementById(sourceTextId);
          const containerActual = document.getElementById(containerId);
          const ImageActual = document.getElementById(ImgId); 
          const ResizeActual = document.getElementById(ResizeId);  

        }, [containerId, sourceTextId, ImgId, ResizeId]);
    
        return null;
      }



      interface Save_Photo_Ids_Search{
        id_Heart_Photo_Search: string;
        src: string;
        url: string;
        load: string;
        user: string;
      }

      function Save_Photo_Search({ id_Heart_Photo_Search, src, url, user, load, }: Save_Photo_Ids_Search) : void {
        const HeartImg = document.getElementById(id_Heart_Photo_Search);
        const Loader = document.getElementById(load);
        if(Loader) Loader.style.display = "none";
        const Check_Login = Cookies.get("Login_Token"); //Checks Login Token
    if(Check_Login !== undefined){

      if (HeartImg) {
        const HeartStyle = getComputedStyle(HeartImg);
        if (HeartStyle.filter === "brightness(5)") { //checks Heart color
          
          fetch('http://50.18.247.63:5000/api/save', { //fetch to /save endpoint in Server.js
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email_data: Check_Login, src_data : src.toString(), url_data: url.toString(), type_data: "P", user: user  }),
            })
            .then(response => {
                if (response.ok) { //request sent
                  
                    //console.log("From Sign React: Request sent"); //Sent to express server
                    return response.json(); 
                } else {
                  const Success_Notif = document.getElementById("Saved_0"); //request did not send
                  if(Loader) Loader.style.display = "none";
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
                  if(Loader) Loader.style.display = "none";
                  const Success_Notif = document.getElementById("Saved_1"); //changes heart color and display notif
                  if(Success_Notif) Success_Notif.style.display = "block";
                  setTimeout(() => {
                    if(Success_Notif) Success_Notif.style.display = "none";
                    
                  }, 2000);
                    
                } else if (data.message === 0) { //failed to save
                  //console.log("Didnt Save in Photos_Format 0");
                  if(Loader) Loader.style.display = "none";
                  const Success_Notif = document.getElementById("Saved_0"); //displays notif
                  if(Success_Notif) Success_Notif.style.display = "block";
                  setTimeout(() => {
                    if(Success_Notif) Success_Notif.style.display = "none";
                    
                  }, 2000);
                }else if (data.message === 3) { //fail in server
                  //console.log("Didnt Save in Photos_Format 3");
                  if(Loader) Loader.style.display = "none";
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
          fetch('http://50.18.247.63:5000/api/delete_saved', {
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
                  if(Loader) Loader.style.display = "none";
                  const Success_Notif = document.getElementById("Saved_10"); //changes heart color and displays notif
                  if(Success_Notif) Success_Notif.style.display = "block";
                  setTimeout(() => {
                    if(Success_Notif) Success_Notif.style.display = "none";
                    
                  }, 2000);

              } else if (data.success === 0) { //did not delete save
                //console.log("Didnt Remove in Photos_Format 0");
                if(Loader) Loader.style.display = "none";
                const Success_Notif = document.getElementById("Saved_0"); //displays notif
                if(Success_Notif) Success_Notif.style.display = "block";
                setTimeout(() => {
                  if(Success_Notif) Success_Notif.style.display = "none";
                  
                }, 2000);
              } else {
                //console.log("Didnt Remove in Photos_Format 4");
                  if(Loader) Loader.style.display = "none";
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
      if(Loader) Loader.style.display = "none";
      const Login_Notif = document.getElementById("Login_Request_0");
      if(Login_Notif) Login_Notif.style.display = "block";
      setTimeout(function () {
        if (Login_Notif) Login_Notif.style.display = 'none';
      }, 4000);
    }

       
      }

      
    function ChangeSearch(){
        
        const ActualInput =  document.getElementById('Search_Photos') as HTMLInputElement
        const ActualResult =  document.getElementById('Search_Result');

        const load_spinner_photo = document.getElementById("Loading_Spinner_photo");
        if(load_spinner_photo) load_spinner_photo.style.display = "block";
        
        setTimeout(() => {
            const load_spinner_photo = document.getElementById("Loading_Spinner_photo");
            if(load_spinner_photo) load_spinner_photo.style.display = "none";
            
            if(ActualInput) handleQueryChange_s(ActualInput.value);
            if(ActualResult) ActualResult.textContent = ActualInput.value;
            setIsDisplayBlock(true);
          
        }, 1500);  
        
    }  
   
    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        const SearchButton = document.getElementById('Search_Button');
        if (SearchButton) {
            SearchButton.click();
        }
      }
    };
    
    interface download_ids{
      Download_Btn_Id: string;
      url: string;
    }


    async function Download_Image({Download_Btn_Id, url, }: download_ids){
      const download_btn = document.getElementById(Download_Btn_Id);

      if(download_btn){
        download_btn.textContent = "Downloading";
      }
      try {
        const response = await axios.get(url, { responseType: 'blob' });
        const blob = new Blob([response.data]);
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        let result = '';
        for (let i = 0; i < 8; i++) {
            result += Math.floor(Math.random() * 10); // Generate a random digit (0-9)
        }
        link.download = 'photo' + result + '.jpg';
        link.click();
        if(download_btn){
          download_btn.textContent = "Download";
        }
    } catch (error) {
        //console.error('An error occurred while downloading the image:', error);
        if(download_btn){
          download_btn.textContent = "Download";
        }
    }
      
    }





    interface HoverPhotosProps_p {
      containerId: string;
      SwitchContainerId: string;
      inputId: string;
      arrowId: string;
      arrowId_2: string;
    }
  
    function HoverSwitch_p ({
      containerId,
      SwitchContainerId,
      inputId,
      arrowId,
      arrowId_2

    }: HoverPhotosProps_p) {
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


    

    const [isOverflowVisible, setIsOverflowVisible] = useState(true);

    const toggleOverflow = () => {
      setIsOverflowVisible(prev => !prev);
    };

    const Main_Style: CSSProperties={
        position: "absolute",
        border: "0px solid rgb(200, 200, 200)",
        height: "100%",
        width: "100%",
        left: "0px",
        marginTop: "0px",
        borderRadius: "0px",
        overflowY: isOverflowVisible ? 'auto' : 'hidden',
        backgroundColor: "rgb(15, 15, 15)",
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
    }


    const Search_Img_Style: CSSProperties={
      position: "absolute",
      top: "50%",
      transform: "translate(0%, -50%)",
      right: "15px",      
      cursor: "pointer",
      filter: "brightness(100%)",
    }

    const [searchChanged, setSearchChanged] = useState(false);

    const Trending_Title_Style: CSSProperties={
      display: searchChanged ? 'block' : 'none',
      position: "absolute",
      border: "0px solid rgb(200, 200, 200)",
      left: "50%",
      transform: "translate(-50%, 0%)",
      fontFamily: "helvetica",
      fontSize: "20px",
      color: "rgb(255, 255, 255)",
      top: "540px",
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

    const Video_top_text_p: CSSProperties = {
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

    
    const Video_top_text_p_2: CSSProperties = {
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


    const Video_featured_text_container_p: CSSProperties = {
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

    const Video_featured_text_p: CSSProperties = {
      color: "rgb(255, 255, 255)",
      cursor: "pointer",
      textDecoration: "underline",
      fontSize: "18px",
    };


    const Photo_Container_Style: CSSProperties={
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
    const [isDisplayBlock, setIsDisplayBlock] = useState(false);

    const Photo_Item_Style: CSSProperties={
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
    
        display: isDisplayBlock? "block" : "none",
        
    }

    const Space: CSSProperties={
      position: "relative",
      height: "0px",
      width: "300px",
      borderRadius: "5px",
      backgroundColor: "rgb(200, 200, 200, 0)",
      left: "50%",
      transform: "translate(-50%, 0%)",
      zIndex: "-1",
    }

    const Image_Style: CSSProperties={
      position: "relative",
        height: "100%",
        width: "100%",
        borderRadius: "0px",
        backgroundColor: "rgb(150, 150, 150, 0.3)",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
    }

    const Bottom_Buttons_Style: CSSProperties={
        position: "relative",
        width: "100px",
        height: "40px",
        borderRadius: "5px",
        backgroundColor: "rgb(255, 255, 255)",
        color: "rgb(10, 10, 10)",
        fontFamily: "helvetica",
        fontSize: "14px",
        cursor: "pointer",
        border: "none",
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "10px",
        marginBottom: "10px",
        left: "20px", 
    }


      const Pic_Img_Style: CSSProperties = {
        position: "absolute",
        top: "5px",
        marginLeft: "-295px",
        transform: "scale(.7)",
        opacity: 1,
        transition: ".3s",
      };

      const Page_Counter_Style: CSSProperties = {
        position: "absolute",
        fontFamily: "helvetica",
        fontSize: "16px",
        color: "rgb(255, 255, 255)",
        marginTop: "10px",
        left: "50%",
        transform: "translate(-50%, 0%)",
      
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


      const Loading_Spinner_photo: CSSProperties = {
        position: "absolute",
        top: "90%",
        zIndex: "30",
        display: "block",
        transform: "translate(-50%, -45%)",
        left: "45%",
      };
  
      const Loading_Spinner_photo_Bottom: CSSProperties = {
        zIndex: "30",
        display: "none",
        left: "48%",
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
        cursor: "pointer"
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
      
      const Loading_Spinner_P: CSSProperties = {
        top: "90px",
        left: "140px",
        zIndex: "9",
        display: "none",
      };
      
      function getRandomNumber() {
        return Math.floor(Math.random() * 20); 
      }
      const randomNumber = getRandomNumber();
      const search_bar_img_container_p: CSSProperties = {
        position: "absolute",
        top: "0px",
        height: "500px",
        width: "100%",
        left: "0px",
        backgroundImage: `url(${photoArray_s[randomNumber]})`, 
        backgroundSize: 'cover',
        backgroundColor: "rgb(0, 0, 0, .5)",
        backgroundBlendMode: 'multiply',
      };

  
      const Video_featured_text_title_p: CSSProperties = {
        color: "rgb(200, 200, 200)",
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
        cursor: "pointer",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: "40%",
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

    
    const open_in_browser_style: CSSProperties = {
      position: "absolute",
      color: "rgb(255, 255, 255)",
      fontFamily: "arial",
      fontSize: "12px",
      right: "5px",
      bottom: "-15px",
      textDecoration: "underline",
      cursor: "pointer",
      textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'
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
    borderRight: "2px solid rgb(50, 50, 50)",
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
  
  const Input_SearchImg_Container: CSSProperties ={
    position: "absolute",
    left: "calc(50% + 60px)",
    transform: "translate(-50%, 0%)",
    width: "50%",
    height: "60px",
    fontSize: "16px",
    top: "220px",
  }

  const Switch_to_Photos: CSSProperties = {
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


    const openinbrowser = (imageUrl: string) => {
      window.open(imageUrl, '_blank');
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
          width: "90%",
        };

        const Video_Item_Style_small: CSSProperties={
          height: "275px",
         width: "500px",
        };


        const Smaller_ScreenSize_Trending: CSSProperties = {
          width: "50%",
          top: "360px",
        };

        const Smaller_ScreenSize_VidLoader: CSSProperties = {
          top: "90%",
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

        const Smaller_ScreenSize_Space: CSSProperties = {
          height: "0px",
        };

        const Smaller_ScreenSize_download_img: CSSProperties = {
          width: "13px",
          height: "13px",
        };
      
        const Smaller_ScreenSize_download_btn: CSSProperties = {
          fontSize: "12px",
          bottom: "-37px",
          paddingLeft: "10px",
          paddingRight: "10px",
          right: "40px",
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
            Object.assign(Photo_Container_Style, Small_ScreenSize);
          
            Object.assign(Loading_Spinner_photo_Bottom, Smaller_ScreenSize_bottomLoader_3);
        }
        if(screenWidth <= 890){
            Object.assign(Photo_Item_Style, Video_Item_Style_small);
            Object.assign(Photo_Container_Style, Smaller_ScreenSize);
            Object.assign(Search_Title_Style, Smaller_SearchTitle_v);
            Object.assign(Input_Style, Smaller_SeachBar_v);

            Object.assign(Loading_Spinner_photo_Bottom, Smaller_ScreenSize_bottomLoader_2);
            Object.assign(Space, Smaller_ScreenSize_Space);
        }

        
      if(screenWidth <= 600){
        Object.assign(Video_top_text_p_2, title_2_small);
        Object.assign(Video_featured_text_p, featured_small);
      }
        
        if(screenWidth <= 560){
          Object.assign(Photo_Item_Style, Video_Item_Style_smallest);
          Object.assign(Photo_Container_Style, Smaller_ScreenSize_smallets);
          Object.assign(Heart_Style, Heart_Style_smallest);

          Object.assign(Video_featured_text_container_p, Smaller_ScreenSize_Trending);
          Object.assign(Loading_Spinner_photo, Smaller_ScreenSize_VidLoader);
          Object.assign(Loading_Spinner_photo_Bottom, Smaller_ScreenSize_bottomLoader);
          Object.assign(Download_Btn_Style, Smaller_ScreenSize_download_btn);
          Object.assign(Download_Image_Style, Smaller_ScreenSize_download_img);
      }
    }
  
   
    const [searchValue, setSearchValue] = useState(randomString);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
  
    };


    function Change_To_Videos(){
      Cookies.remove("Home_Search_Videos");
      Cookies.remove("Home_Search_Photos");
      Cookies.remove("Go_to_Photos_fromV");      
      Cookies.remove("Go_to_Videos_fromP"); 
      Cookies.set('Go_to_Videos_fromP', "1" , { path: '/' });
      window.location.reload();
    }

    ChangeSearch();
    
    
    const Photo_Items = [];

    if(photoArray_s.length === 0){
      const photo_container = document.getElementById("Photo_Container");
      const search_title = document.getElementById("actual_Title_p");
      const none_title = document.getElementById("none_title_p");
      const button_title = document.getElementById("button_container_p");
      const footer = document.getElementById("Footer");
      if(photo_container) photo_container.style.display = "block";
      if(footer) footer.style.display = "grid";
      if(search_title) search_title.style.display = "none";
      if(none_title) none_title.style.display = "block";
      if(button_title) button_title.style.display = "none";
      
    }else{
      Photo_Items.length = 0;
      const photo_container = document.getElementById("Photo_Container");
      const search_title = document.getElementById("actual_Title_p");
      const none_title = document.getElementById("none_title_p");
      const button_title = document.getElementById("button_container_p");
      if(photo_container) photo_container.style.display = "grid";
      if(search_title) search_title.style.display = "block";
      if(none_title) none_title.style.display = "none";
      if(button_title) button_title.style.display = "block";
      for (let i = 0; i < photoArray_s.length ; i++) {
        if(photoArray_s[i] === ""){
          
        }else{
          Photo_Items.push(
            <div id={`Item_${i+1}_Photo_s`} key={i} style={Photo_Item_Style}>
                <img id="" style={Image_Style} src={photoArray_s[i]}/>
                <div id={`Loading_Spinner_P_${i+1}`} style={Loading_Spinner_P} className="loading-spinner"></div>
                <img className="Heart_Style_Class" onClick={() => Save_Photo_Search({id_Heart_Photo_Search: `Heart_Photo_${i+1}`, src: photoArray_s[i], url: urlArray_s[i], load: `Loading_Spinner_P_${i+1}`, user: PhotoArrayuser_v[i]})} src={Heart_Img_pic} style={Heart_Style} id={`Heart_Photo_${i+1}`}/>
                <div id={`user_text_${i+1}`} style={user_text_style_container}>
                  <p onClick={() => TriggerLink_s(i)} className="video_user" style={user_text_style}>By: {PhotoArrayuser_v[i]}</p>
                </div>
                <button onClick={() => Download_Image({Download_Btn_Id: `Download_Button${i+1}`, url: photoArray_s[i]})} style={Download_Btn_Style}> <img style={Download_Image_Style} src={download_Img}/><span id={`Download_Button${i+1}`}>Download</span></button>
                <p style={open_in_browser_style} onClick={() => openinbrowser(photoArray_s[i])}>Open in browser</p>
            </div>
          );
        }
      }
    }
    updateStyles();
   
    return(


        <div id="Main_Container" style={Main_Style}>


            <HoverImg containerId="Item_1_Photo_s" sourceTextId="Source_1_Photo_s" ImgId="Play_Img_1_s" ResizeId="Resize_Photo_1"/>
            <HoverImg containerId="Item_2_Photo_s" sourceTextId="Source_2_Photo_s" ImgId="Play_Img_2_s" ResizeId="Resize_Photo_2"/>
            <HoverImg containerId="Item_3_Photo_s" sourceTextId="Source_3_Photo_s" ImgId="Play_Img_3_s" ResizeId="Resize_Photo_3"/>
            <HoverImg containerId="Item_4_Photo_s" sourceTextId="Source_4_Photo_s" ImgId="Play_Img_4_s" ResizeId="Resize_Photo_4"/>
            <HoverImg containerId="Item_5_Photo_s" sourceTextId="Source_5_Photo_s" ImgId="Play_Img_5_s" ResizeId="Resize_Photo_5"/>
            <HoverImg containerId="Item_6_Photo_s" sourceTextId="Source_6_Photo_s" ImgId="Play_Img_6_s" ResizeId="Resize_Photo_6"/>
            <HoverImg containerId="Item_7_Photo_s" sourceTextId="Source_7_Photo_s" ImgId="Play_Img_7_s" ResizeId="Resize_Photo_7"/>
            <HoverImg containerId="Item_8_Photo_s" sourceTextId="Source_8_Photo_s" ImgId="Play_Img_8_s" ResizeId="Resize_Photo_8"/>
            <HoverImg containerId="Item_9_Photo_s" sourceTextId="Source_9_Photo_s" ImgId="Play_Img_9_s" ResizeId="Resize_Photo_9"/>
            <HoverImg containerId="Item_10_Photo_s" sourceTextId="Source_10_Photo_s" ImgId="Play_Img_10_s" ResizeId="Resize_Photo_10"/>
            <HoverImg containerId="Item_11_Photo_s" sourceTextId="Source_11_Photo_s" ImgId="Play_Img_11_s" ResizeId="Resize_Photo_11"/>
            <HoverImg containerId="Item_12_Photo_s" sourceTextId="Source_12_Photo_s" ImgId="Play_Img_12_s" ResizeId="Resize_Photo_12"/>
            <HoverImg containerId="Item_13_Photo_s" sourceTextId="Source_13_Photo_s" ImgId="Play_Img_13_s" ResizeId="Resize_Photo_13"/>
            <HoverImg containerId="Item_14_Photo_s" sourceTextId="Source_14_Photo_s" ImgId="Play_Img_14_s" ResizeId="Resize_Photo_14"/>
            <HoverImg containerId="Item_15_Photo_s" sourceTextId="Source_15_Photo_s" ImgId="Play_Img_15_s" ResizeId="Resize_Photo_15"/>
            <HoverImg containerId="Item_16_Photo_s" sourceTextId="Source_16_Photo_s" ImgId="Play_Img_16_s" ResizeId="Resize_Photo_16"/>
            <HoverImg containerId="Item_17_Photo_s" sourceTextId="Source_17_Photo_s" ImgId="Play_Img_17_s" ResizeId="Resize_Photo_17"/>
            <HoverImg containerId="Item_18_Photo_s" sourceTextId="Source_18_Photo_s" ImgId="Play_Img_18_s" ResizeId="Resize_Photo_18"/>


            <HoverSwitch_p containerId="Videos_Switch_Container_p" SwitchContainerId="Switch_to_photos_p" inputId="input_Switch_container_p" arrowId="arrow_Switch_Videos_p" arrowId_2=""/>
            <HoverSwitch_p containerId="photos_Switch_Container_p" SwitchContainerId="Switch_to_videos_p" inputId="input_Switch_container_p" arrowId="arrow_Switch_Photos_p" arrowId_2=""/>
            <HoverSwitch_p containerId="Switch_to_videos_p" SwitchContainerId="Switch_to_videos_p" inputId="input_Switch_container_p" arrowId="arrow_Switch_Photos_p" arrowId_2="" />
            <HoverSwitch_p containerId="Switch_to_photos_p" SwitchContainerId="Switch_to_photos_p" inputId="input_Switch_container_p" arrowId="arrow_Switch_Videos_p" arrowId_2="" />


        <div style={search_bar_img_container_p}>
        <p style={Video_top_text_p}>Search photos</p>
        <p style={Video_top_text_p_2}>Search thousands of free photos endlessly with no royalties.</p>
        <div id="input_Switch_container_p" style={Switch_Container}>
              <div id="Videos_Switch_Container_p" style={Videos_switch}>
                <img id="arrow_Switch_Videos_p" src={arrow} style={arrow_switch}/>
                <p style={Switch_text}>Videos</p>
              </div>

              <div id="photos_switch_container_main_p">
                <div id="photos_Switch_Container_p" style={Photos_switch}>
                  <img id="arrow_Switch_Photos_p" src={arrow} style={arrow_switch}/>
                  <p id="photos_text_11_p" style={Switch_text}>Photos</p>
                </div>
              </div>
           

              <div id="Switch_to_videos_p" onClick={Change_To_Videos} style={Switch_to_Videos}>
                <img src={video_img} style={icon_switch}/>
                <p style={Switch_to_text}>Videos</p>
              </div>
              <div id="Switch_to_photos_p" style={Switch_to_Photos}>
                <img src={pic_img} style={icon_switch}/>
                <p style={Switch_to_text}>Photos</p>
              </div>
        </div>

        <div style={Input_SearchImg_Container}>
          <input id="Search_Photos" onChange={(event) => {handleInputChange(event); change_search_reset_page();}} value={searchValue} type="text" placeholder="Search for photos" style={Input_Style} onKeyDown={handleKeyPress} />
          <img id="Search_Button"  onClick={() => {ChangeSearch(); change_search_reset_page();}} style={Search_Img_Style} src={SearchImg}/>
        </div>
          
          <div style={Video_featured_text_container_p}>
              <p style={Video_featured_text_p} onClick={() => ChangeSearch_Trending({query: "dark"})}>Dark</p>
              <p style={Video_featured_text_p} onClick={() => ChangeSearch_Trending({query: "nature"})}>Nature</p>
              <p style={Video_featured_text_p} onClick={() => ChangeSearch_Trending({query: "forest"})}>Forest</p>
              <p style={Video_featured_text_p} onClick={() => ChangeSearch_Trending({query: "sky"})}>Sky</p>
              <div id="Loading_Spinner_photo" style={Loading_Spinner_photo} className="loading-spinner"></div>
          </div>
        </div>
        <h1 id="actual_Title_p" style={Search_Title_Style}>Search results for "<span id="Search_Result"></span>"</h1>
        <h1 id="none_title_p" style={Search_Title_Style}>No results were found...</h1>
        <p style={Result_Style}>Total results: {PhotoResults}</p>
        <p style={pageOf_Style}>Page {PageQuery_s} of {calculateTotalPages(Number(PhotoResults), 18)}</p>
        <h1 id="trending_today" style={Trending_Title_Style}>Trending recently "<span>Ocean</span>"</h1>
        
        <div id="Photo_Container" style={Photo_Container_Style}>
            {Photo_Items}
            <div style={Space}></div>
            <div id="button_container_p">
                <button onClick={ChangePrevPage} style={Bottom_Buttons_Style_Left}>Prev Page</button>
                <p style={Page_Counter_Style}>{PageQuery_s}</p>
                <button onClick={ChangeNextPage} style={Bottom_Buttons_Style_Right}>Next Page</button> 
                <div id="Loading_Spinner_vid_Bottom" style={Loading_Spinner_photo_Bottom} className="loading-spinner"></div>
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


export default Photo_Search_Style;