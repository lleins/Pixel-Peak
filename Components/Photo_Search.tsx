import { CSSProperties } from "react";
import React, { useRef, RefObject, useEffect, useState } from "react";
import SearchImg from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\Images\\Search.png"
import Pic_Img from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\PicImg.png";
import Heart_Img_pic from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\Heart.png";
import Resize_Img_p_Search from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\ResizeImg.png";
import Exit_Img_v_Search from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\ExitImg.png";
import Cookies from 'js-cookie';
import { Page } from "puppeteer";
import { get } from "mongoose";


function Photo_Search_Style(){

    {
        /*API Call, PEXELS-------------------------------------------------------------*/
    }

      const apiKey_s = "GTKZGX1qr6cVxMS1Dl88v1xUVe2edF3qaozGZMucbID3XTPE3Z2fSdbh";
      const [searchQuery_s, setSearchQuery_s] = useState('');
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
    
      const [photoArray_s, setPhotoArray_s] = useState([]);
      const [urlArray_s, seturlArray_s] = useState([]);
    
      useEffect(() => {
        const fetchPhotos_s = async () => {
          try {
            const response = await fetch(apiUrl_s, {
              headers: {
                Authorization: apiKey_s,
              },
            });
    
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
    
            const data_s = await response.json();
            const urls_s = data_s.photos.map((photo: Photo_s) =>
              photo.src.large2x.toString()
            );
            setPhotoArray_s(urls_s);
    
            const urls_Link_s = data_s.photos.map((photo: URL_s) => photo.url.toString());
            seturlArray_s(urls_Link_s);
          } catch (error) {
            console.error("Error:", error);
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

          const handleMouseOver = () => {
            if (ImageActual) ImageActual.style.opacity = "0";
            if (ResizeActual) ResizeActual.style.opacity = "1";
          };
    
          const handleMouseOut = () => {
            if (ImageActual) ImageActual.style.opacity = "1";
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
        }, [containerId, sourceTextId, ImgId, ResizeId]);
    
        return null;
      }



      interface Save_Photo_Ids_Search{
        id_Heart_Photo_Search: string;
        src: string;
        url: string;
        load: string;
      }

      function Save_Photo_Search({ id_Heart_Photo_Search, src, url, load }: Save_Photo_Ids_Search) : void {
        const HeartImg = document.getElementById(id_Heart_Photo_Search);
        const Loader = document.getElementById(load);
        if(Loader) Loader.style.display = "block";
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
                  if(Loader) Loader.style.display = "none";
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
                  if(Loader) Loader.style.display = "none";
                  const Success_Notif = document.getElementById("Saved_1"); //changes heart color and display notif
                  if(Success_Notif) Success_Notif.style.display = "block";
                  setTimeout(() => {
                    if(Success_Notif) Success_Notif.style.display = "none";
                    
                  }, 2000);
                    
                } else if (data.message === 0) { //failed to save
                  console.log("Didnt Save in Photos_Format 0");
                  if(Loader) Loader.style.display = "none";
                  const Success_Notif = document.getElementById("Saved_0"); //displays notif
                  if(Success_Notif) Success_Notif.style.display = "block";
                  setTimeout(() => {
                    if(Success_Notif) Success_Notif.style.display = "none";
                    
                  }, 2000);
                }else if (data.message === 3) { //fail in server
                  console.log("Didnt Save in Photos_Format 3");
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
                  if(Loader) Loader.style.display = "none";
                  const Success_Notif = document.getElementById("Saved_10"); //changes heart color and displays notif
                  if(Success_Notif) Success_Notif.style.display = "block";
                  setTimeout(() => {
                    if(Success_Notif) Success_Notif.style.display = "none";
                    
                  }, 2000);

              } else if (data.success === 0) { //did not delete save
                console.log("Didnt Remove in Photos_Format 0");
                if(Loader) Loader.style.display = "none";
                const Success_Notif = document.getElementById("Saved_0"); //displays notif
                if(Success_Notif) Success_Notif.style.display = "block";
                setTimeout(() => {
                  if(Success_Notif) Success_Notif.style.display = "none";
                  
                }, 2000);
              } else {
                console.log("Didnt Remove in Photos_Format 4");
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
              console.error('Fetch error:', error);
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
            handlePageChange_s(PageQuery_s / PageQuery_s);
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
    
    interface Resize_ids{
      Container_Id: string;
      Exit_Id: string;
      Heart_Id: string;
      Resize_Id: string;
      Source_Id: string;
      Picture_Id: string;
      Main_id: string;
      Loading_id: string;
    }


    function Resize_Photo_Item({Container_Id, Exit_Id, Heart_Id, Resize_Id, Source_Id, Picture_Id, Main_id, Loading_id }: Resize_ids){
      const element = document.getElementById("Item_1_Photo_s");
      if (element) {
          element.scrollIntoView({ behavior: 'instant' });
      }
      toggleOverflow();
      const actual_container = document.getElementById(Container_Id);
      const actual_exit = document.getElementById(Exit_Id);
      const actual_heart = document.getElementById(Heart_Id);
      const actual_resize = document.getElementById(Resize_Id);
      const actual_source = document.getElementById(Source_Id);
      const actual_picture = document.getElementById(Picture_Id);
      const actual_main = document.getElementById(Main_id);
      const actual_load = document.getElementById(Loading_id);

      if(actual_container){
        actual_container.style.width = "100%";
        actual_container.style.height = "95%";
        actual_container.style.position = "absolute";
        actual_container.style.left = "50%";
        actual_container.style.top = "50%";
        actual_container.style.transform = "translate(-50%, -50%)";
        actual_container.style.zIndex = "12";
        actual_container.style.boxShadow = '0px 0px 0px 100vw rgba(0, 0, 0, .9)';
        
      }
      
      if(actual_exit){
        actual_exit.style.display = "block";
      }

      if(actual_load){
        actual_load.style.left = "480px";
        actual_load.style.top = "240px";
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
        actual_picture.style.display = "none";
      }



    }

    interface Exit_Resize_ids{
      Container_Id_Exit: string;
      Exit_Id_Exit: string;
      Heart_Id_Exit: string;
      Resize_Id_Exit: string;
      Source_Id_Exit: string;
      Picture_Id_Exit: string;
      Main_Id_Exit: string;
      Load_Id_Exit: string;
    }

    function Exit_Photo_Item({Container_Id_Exit, Exit_Id_Exit, Heart_Id_Exit, Resize_Id_Exit, Source_Id_Exit, Picture_Id_Exit, Main_Id_Exit, Load_Id_Exit }: Exit_Resize_ids){
      toggleOverflow();
      
      const actual_container = document.getElementById(Container_Id_Exit);
      const actual_exit = document.getElementById(Exit_Id_Exit);
      const actual_heart = document.getElementById(Heart_Id_Exit);
      const actual_resize = document.getElementById(Resize_Id_Exit);
      const actual_source = document.getElementById(Source_Id_Exit);
      const actual_picture = document.getElementById(Picture_Id_Exit);
      const actual_main = document.getElementById(Main_Id_Exit);
      const actual_load = document.getElementById(Load_Id_Exit);
      if(actual_container){
        actual_container.style.width = "300px";
        actual_container.style.height = "200px";
        actual_container.style.position = "relative";
        actual_container.style.left = "50%";
        actual_container.style.top = "0%";
        actual_container.style.transform = "translate(-50%)";
        actual_container.style.zIndex = "10";
        actual_container.style.backdropFilter = "blur(-10px)"
        actual_container.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0)'
      }
      
      if(actual_exit){
        actual_exit.style.display = "none";
      }
      
      if(actual_load){
        actual_load.style.left = "140px";
        actual_load.style.top = "85px";
      }

      if(actual_heart){
        actual_heart.style.position = "relative";
        actual_heart.style.top = "-195px";
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
      }
      
      const element = document.getElementById(Container_Id_Exit);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }

    }

    const [isOverflowVisible, setIsOverflowVisible] = useState(true);

    const toggleOverflow = () => {
      setIsOverflowVisible(prev => !prev);
    };

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
        overflowY: isOverflowVisible ? 'auto' : 'hidden',
        backgroundColor: "rgb(40, 40, 40)",
    }

    
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
        transition: ".5s",
    }


    const Search_Img_Style: CSSProperties={
        position: "absolute",
        top: "10px",
        transform: "scale(.8)",
        left: "25%",       
        cursor: "pointer",
    }


    
    const Search_Title_Style: CSSProperties={
        position: "absolute",
        border: "0px solid rgb(200, 200, 200)",
        left: "50%",
        transform: "translate(-50%, 0%)",
        fontFamily: "verdana",
        fontSize: "20px",
        color: "rgb(255, 255, 255)",
        top: "65px",
    }
    
    const Photo_Container_Style: CSSProperties={
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
        
    }
    const [isDisplayBlock, setIsDisplayBlock] = useState(false);

    const Photo_Item_Style: CSSProperties={
        position: "relative",
        height: "200px",
        width: "300px",
        borderRadius: "5px",
        backgroundColor: "rgb(150, 150, 150, 0.3)",
        left: "50%",
        transform: "translate(-50%, 0%)",
        cursor: "pointer",
        display: isDisplayBlock? "block" : "none",
        top: "0%",
        transition: ".3s",
    }

    const Space: CSSProperties={
        position: "relative",
        height: "200px",
        width: "300px",
        borderRadius: "5px",
        backgroundColor: "rgb(200, 200, 200, 0)",
        left: "50%",
        transform: "translate(-50%, 0%)"
    }

    const Image_Style: CSSProperties={
        width: "100%",
        height: "100%",
        borderRadius: "5px",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgb(150, 150, 150, 0.3)",
    }

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
            left: "-150px",
        };

        const Smaller_ScreenSize_Button: CSSProperties = {
            top: "-200px",
            left: "60px",
        };

        const Small_ScreenSize_Counter: CSSProperties = {
            left: "320px",
        };
        const Smaller_ScreenSize_Counter: CSSProperties = {
            marginTop: "-240px",
            left: "195px",
        };

        const Smaller_SearchTitle: CSSProperties = {
          fontSize: "17px",
        };

        const Smaller_SeachBar: CSSProperties = {
            width: "74%",
        };
        
        const Smaller_SeachIcon: CSSProperties = {
          left: "13%",
        };

        if (screenWidth > 790 && screenWidth < 1165) {
            Object.assign(Photo_Container_Style, Small_ScreenSize);
            Object.assign(Bottom_Buttons_Style, Small_ScreenSize_Button);
            Object.assign(Page_Counter_Style, Small_ScreenSize_Counter);
            
        }
        if(screenWidth <= 790){
            Object.assign(Photo_Container_Style, Smaller_ScreenSize);
            Object.assign(Bottom_Buttons_Style, Smaller_ScreenSize_Button);
            Object.assign(Page_Counter_Style, Smaller_ScreenSize_Counter);
            Object.assign(Search_Title_Style, Smaller_SearchTitle);
            Object.assign(Input_Style, Smaller_SeachBar);
            Object.assign(Search_Img_Style, Smaller_SeachIcon);
        }
    }
    updateStyles();
    window.addEventListener('resize', updateStyles);

    const Loading_Spinner_photo: CSSProperties = {
      top: "130px",
      zIndex: "30",
      display: "none",
      left: "48%",
    };

    const Loading_Spinner_photo_Bottom: CSSProperties = {
      zIndex: "30",
      display: "none",
      left: "48%",
    };

  

    const Heart_Style: CSSProperties = {
      top: "-195px",
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
    
    const Loading_Spinner_P: CSSProperties = {
      top: "90px",
      left: "140px",
      zIndex: "9",
      display: "none",
    };

    return(


        <div id="Main_Container" style={Main_Style}>

        <input id="Search_Photos" type="text" placeholder="Search for photos" style={Input_Style} onKeyDown={handleKeyPress} />
        <img id="Search_Button" onClick={ChangeSearch} style={Search_Img_Style} src={SearchImg}/>
        <h1 style={Search_Title_Style}>Search results for "<span id="Search_Result"></span>"</h1>
        <div id="Photo_Container" style={Photo_Container_Style}>



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

            <div id="Loading_Spinner_photo" style={Loading_Spinner_photo} className="loading-spinner"></div>
      
            <div id="Item_1_Photo_s" style={Photo_Item_Style}>
                <img id="" style={Image_Style} src={photoArray_s[0]} onClick={() => TriggerLink_s(0)}/>
                <div id="Loading_Spinner_P_1" style={Loading_Spinner_P} className="loading-spinner"></div>
                <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_1_s" />
                <img className="Heart_Style_Class" onClick={() => Save_Photo_Search({id_Heart_Photo_Search: "Heart_Photo_1", src: photoArray_s[0], url: urlArray_s[0], load: "Loading_Spinner_P_1"})} src={Heart_Img_pic} style={Heart_Style} id="Heart_Photo_1"/>
                <img src={Resize_Img_p_Search} style={Resize_Img_style} id="Resize_Photo_1" onClick={() => Resize_Photo_Item({Container_Id: "Item_1_Photo_s", Exit_Id: "Exit_Resize_1", Heart_Id: "Heart_Photo_1", Resize_Id: "Resize_Photo_1", Source_Id: "Source_1_Photo_s", Picture_Id: "Play_Img_1_s", Main_id: "Main_Container", Loading_id: "Loading_Spinner_P_1"})}/>
                <img id="Exit_Resize_1" src={Exit_Img_v_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item({Container_Id_Exit: "Item_1_Photo_s", Exit_Id_Exit: "Exit_Resize_1", Heart_Id_Exit: "Heart_Photo_1", Resize_Id_Exit: "Resize_Photo_1", Source_Id_Exit: "Source_1_Photo_s", Picture_Id_Exit: "Play_Img_1_s", Main_Id_Exit: "Main_Container", Load_Id_Exit: "Loading_Spinner_P_1"})}/>
            </div>  
        
            <div id="Item_2_Photo_s" style={Photo_Item_Style} >
                <img style={Image_Style} src={photoArray_s[1]} onClick={() => TriggerLink_s(1)}/>
                <div id="Loading_Spinner_P_2" style={Loading_Spinner_P} className="loading-spinner"></div>
                <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_2_s" />
                <img className="Heart_Style_Class" onClick={() => Save_Photo_Search({id_Heart_Photo_Search: "Heart_Photo_2", src: photoArray_s[1], url: urlArray_s[1], load: "Loading_Spinner_P_2"})} src={Heart_Img_pic} style={Heart_Style} id="Heart_Photo_2"/>
                <img src={Resize_Img_p_Search} style={Resize_Img_style} id="Resize_Photo_2" onClick={() => Resize_Photo_Item({Container_Id: "Item_2_Photo_s", Exit_Id: "Exit_Resize_2", Heart_Id: "Heart_Photo_2", Resize_Id: "Resize_Photo_2", Source_Id: "Source_2_Photo_s", Picture_Id: "Play_Img_2_s", Main_id: "Main_Container", Loading_id: "Loading_Spinner_P_2"})}/>
                <img id="Exit_Resize_2" src={Exit_Img_v_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item({Container_Id_Exit: "Item_2_Photo_s", Exit_Id_Exit: "Exit_Resize_2", Heart_Id_Exit: "Heart_Photo_2", Resize_Id_Exit: "Resize_Photo_2", Source_Id_Exit: "Source_2_Photo_s", Picture_Id_Exit: "Play_Img_2_s", Main_Id_Exit: "Main_Container", Load_Id_Exit: "Loading_Spinner_P_2"})}/>
            </div>  

            <div id="Item_3_Photo_s" style={Photo_Item_Style} >
                <img style={Image_Style} src={photoArray_s[2]} onClick={() => TriggerLink_s(2)}/>
                <div id="Loading_Spinner_P_3" style={Loading_Spinner_P} className="loading-spinner"></div>
                <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_3_s" />
                <img className="Heart_Style_Class" onClick={() => Save_Photo_Search({id_Heart_Photo_Search: "Heart_Photo_3", src: photoArray_s[2], url: urlArray_s[2], load: "Loading_Spinner_P_3"})} src={Heart_Img_pic} style={Heart_Style} id="Heart_Photo_3"/>
                <img src={Resize_Img_p_Search} style={Resize_Img_style} id="Resize_Photo_3" onClick={() => Resize_Photo_Item({Container_Id: "Item_3_Photo_s", Exit_Id: "Exit_Resize_3", Heart_Id: "Heart_Photo_3", Resize_Id: "Resize_Photo_3", Source_Id: "Source_3_Photo_s", Picture_Id: "Play_Img_3_s", Main_id: "Main_Container", Loading_id: "Loading_Spinner_P_3"})}/>
                <img id="Exit_Resize_3" src={Exit_Img_v_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item({Container_Id_Exit: "Item_3_Photo_s", Exit_Id_Exit: "Exit_Resize_3", Heart_Id_Exit: "Heart_Photo_3", Resize_Id_Exit: "Resize_Photo_3", Source_Id_Exit: "Source_3_Photo_s", Picture_Id_Exit: "Play_Img_3_s", Main_Id_Exit: "Main_Container", Load_Id_Exit: "Loading_Spinner_P_3"})}/>
            </div>  

            <div id="Item_4_Photo_s" style={Photo_Item_Style} >
                <img style={Image_Style} src={photoArray_s[3]} onClick={() => TriggerLink_s(3)}/>
                <div id="Loading_Spinner_P_4" style={Loading_Spinner_P} className="loading-spinner"></div>
                <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_4_s" />
                <img className="Heart_Style_Class" onClick={() => Save_Photo_Search({id_Heart_Photo_Search: "Heart_Photo_4", src: photoArray_s[3], url: urlArray_s[3], load: "Loading_Spinner_P_4"})} src={Heart_Img_pic} style={Heart_Style} id="Heart_Photo_4"/>
                <img src={Resize_Img_p_Search} style={Resize_Img_style} id="Resize_Photo_4" onClick={() => Resize_Photo_Item({Container_Id: "Item_4_Photo_s", Exit_Id: "Exit_Resize_4", Heart_Id: "Heart_Photo_4", Resize_Id: "Resize_Photo_4", Source_Id: "Source_4_Photo_s", Picture_Id: "Play_Img_4_s", Main_id: "Main_Container", Loading_id: "Loading_Spinner_P_4"})}/>
                <img id="Exit_Resize_4" src={Exit_Img_v_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item({Container_Id_Exit: "Item_4_Photo_s", Exit_Id_Exit: "Exit_Resize_4", Heart_Id_Exit: "Heart_Photo_4", Resize_Id_Exit: "Resize_Photo_4", Source_Id_Exit: "Source_4_Photo_s", Picture_Id_Exit: "Play_Img_4_s", Main_Id_Exit: "Main_Container", Load_Id_Exit: "Loading_Spinner_P_4"})}/>
            </div>  

            <div id="Item_5_Photo_s" style={Photo_Item_Style} >
                <img style={Image_Style} src={photoArray_s[4]} onClick={() => TriggerLink_s(4)}/>
                <div id="Loading_Spinner_P_5" style={Loading_Spinner_P} className="loading-spinner"></div>
                <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_5_s" />
                <img className="Heart_Style_Class" onClick={() => Save_Photo_Search({id_Heart_Photo_Search: "Heart_Photo_5", src: photoArray_s[4], url: urlArray_s[4], load: "Loading_Spinner_P_5"})} src={Heart_Img_pic} style={Heart_Style} id="Heart_Photo_5"/>
                <img src={Resize_Img_p_Search} style={Resize_Img_style} id="Resize_Photo_5" onClick={() => Resize_Photo_Item({Container_Id: "Item_5_Photo_s", Exit_Id: "Exit_Resize_5", Heart_Id: "Heart_Photo_5", Resize_Id: "Resize_Photo_5", Source_Id: "Source_5_Photo_s", Picture_Id: "Play_Img_5_s", Main_id: "Main_Container", Loading_id: "Loading_Spinner_P_5"})}/>
                <img id="Exit_Resize_5" src={Exit_Img_v_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item({Container_Id_Exit: "Item_5_Photo_s", Exit_Id_Exit: "Exit_Resize_5", Heart_Id_Exit: "Heart_Photo_5", Resize_Id_Exit: "Resize_Photo_5", Source_Id_Exit: "Source_5_Photo_s", Picture_Id_Exit: "Play_Img_5_s", Main_Id_Exit: "Main_Container", Load_Id_Exit: "Loading_Spinner_P_5"})}/>
            </div>  

            <div id="Item_6_Photo_s" style={Photo_Item_Style} >
                <img style={Image_Style} src={photoArray_s[5]} onClick={() => TriggerLink_s(5)}/>
                <div id="Loading_Spinner_P_6" style={Loading_Spinner_P} className="loading-spinner"></div>
                <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_6_s" />
                <img className="Heart_Style_Class" onClick={() => Save_Photo_Search({id_Heart_Photo_Search: "Heart_Photo_6", src: photoArray_s[5], url: urlArray_s[5], load: "Loading_Spinner_P_6"})} src={Heart_Img_pic} style={Heart_Style} id="Heart_Photo_6"/>
                <img src={Resize_Img_p_Search} style={Resize_Img_style} id="Resize_Photo_6" onClick={() => Resize_Photo_Item({Container_Id: "Item_6_Photo_s", Exit_Id: "Exit_Resize_6", Heart_Id: "Heart_Photo_6", Resize_Id: "Resize_Photo_6", Source_Id: "Source_6_Photo_s", Picture_Id: "Play_Img_6_s", Main_id: "Main_Container", Loading_id: "Loading_Spinner_P_6"})}/>
                <img id="Exit_Resize_6" src={Exit_Img_v_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item({Container_Id_Exit: "Item_6_Photo_s", Exit_Id_Exit: "Exit_Resize_6", Heart_Id_Exit: "Heart_Photo_6", Resize_Id_Exit: "Resize_Photo_6", Source_Id_Exit: "Source_6_Photo_s", Picture_Id_Exit: "Play_Img_6_s", Main_Id_Exit: "Main_Container", Load_Id_Exit: "Loading_Spinner_P_6"})}/>
            </div>  

            <div id="Item_7_Photo_s" style={Photo_Item_Style} >
                <img style={Image_Style} src={photoArray_s[6]} onClick={() => TriggerLink_s(6)}/>
                <div id="Loading_Spinner_P_7" style={Loading_Spinner_P} className="loading-spinner"></div>
                <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_7_s" />
                <img className="Heart_Style_Class" onClick={() => Save_Photo_Search({id_Heart_Photo_Search: "Heart_Photo_7", src: photoArray_s[6], url: urlArray_s[6], load: "Loading_Spinner_P_7"})} src={Heart_Img_pic} style={Heart_Style} id="Heart_Photo_7"/>
                <img src={Resize_Img_p_Search} style={Resize_Img_style} id="Resize_Photo_7" onClick={() => Resize_Photo_Item({Container_Id: "Item_7_Photo_s", Exit_Id: "Exit_Resize_7", Heart_Id: "Heart_Photo_7", Resize_Id: "Resize_Photo_7", Source_Id: "Source_7_Photo_s", Picture_Id: "Play_Img_7_s", Main_id: "Main_Container", Loading_id: "Loading_Spinner_P_7"})}/>
                <img id="Exit_Resize_7" src={Exit_Img_v_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item({Container_Id_Exit: "Item_7_Photo_s", Exit_Id_Exit: "Exit_Resize_7", Heart_Id_Exit: "Heart_Photo_7", Resize_Id_Exit: "Resize_Photo_7", Source_Id_Exit: "Source_7_Photo_s", Picture_Id_Exit: "Play_Img_7_s", Main_Id_Exit: "Main_Container", Load_Id_Exit: "Loading_Spinner_P_7"})}/>
            </div>  

            <div id="Item_8_Photo_s" style={Photo_Item_Style} >
                <img style={Image_Style} src={photoArray_s[7]} onClick={() => TriggerLink_s(7)}/>
                <div id="Loading_Spinner_P_8" style={Loading_Spinner_P} className="loading-spinner"></div>
                <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_8_s" />
                <img className="Heart_Style_Class" onClick={() => Save_Photo_Search({id_Heart_Photo_Search: "Heart_Photo_8", src: photoArray_s[7], url: urlArray_s[7], load: "Loading_Spinner_P_8"})} src={Heart_Img_pic} style={Heart_Style} id="Heart_Photo_8"/>
                <img src={Resize_Img_p_Search} style={Resize_Img_style} id="Resize_Photo_8" onClick={() => Resize_Photo_Item({Container_Id: "Item_8_Photo_s", Exit_Id: "Exit_Resize_8", Heart_Id: "Heart_Photo_8", Resize_Id: "Resize_Photo_8", Source_Id: "Source_8_Photo_s", Picture_Id: "Play_Img_8_s", Main_id: "Main_Container", Loading_id: "Loading_Spinner_P_8"})}/>
                <img id="Exit_Resize_8" src={Exit_Img_v_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item({Container_Id_Exit: "Item_8_Photo_s", Exit_Id_Exit: "Exit_Resize_8", Heart_Id_Exit: "Heart_Photo_8", Resize_Id_Exit: "Resize_Photo_8", Source_Id_Exit: "Source_8_Photo_s", Picture_Id_Exit: "Play_Img_8_s", Main_Id_Exit: "Main_Container", Load_Id_Exit: "Loading_Spinner_P_8"})}/>
            </div>  

            <div id="Item_9_Photo_s" style={Photo_Item_Style}>
                <img style={Image_Style} src={photoArray_s[8]}  onClick={() => TriggerLink_s(8)}/>
                <div id="Loading_Spinner_P_9" style={Loading_Spinner_P} className="loading-spinner"></div>
                <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_9_s" />
                <img className="Heart_Style_Class" onClick={() => Save_Photo_Search({id_Heart_Photo_Search: "Heart_Photo_9", src: photoArray_s[8], url: urlArray_s[8], load: "Loading_Spinner_P_9"})} src={Heart_Img_pic} style={Heart_Style} id="Heart_Photo_9"/>
                <img src={Resize_Img_p_Search} style={Resize_Img_style} id="Resize_Photo_9" onClick={() => Resize_Photo_Item({Container_Id: "Item_9_Photo_s", Exit_Id: "Exit_Resize_9", Heart_Id: "Heart_Photo_9", Resize_Id: "Resize_Photo_9", Source_Id: "Source_9_Photo_s", Picture_Id: "Play_Img_9_s", Main_id: "Main_Container", Loading_id: "Loading_Spinner_P_9"})}/>
                <img id="Exit_Resize_9" src={Exit_Img_v_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item({Container_Id_Exit: "Item_9_Photo_s", Exit_Id_Exit: "Exit_Resize_9", Heart_Id_Exit: "Heart_Photo_9", Resize_Id_Exit: "Resize_Photo_9", Source_Id_Exit: "Source_9_Photo_s", Picture_Id_Exit: "Play_Img_9_s", Main_Id_Exit: "Main_Container", Load_Id_Exit: "Loading_Spinner_P_9"})}/>
            </div>  

            <div id="Item_10_Photo_s" style={Photo_Item_Style} >
                <img style={Image_Style} src={photoArray_s[9]} onClick={() => TriggerLink_s(9)}/>
                <div id="Loading_Spinner_P_10" style={Loading_Spinner_P} className="loading-spinner"></div>
                <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_10_s" />
                <img className="Heart_Style_Class" onClick={() => Save_Photo_Search({id_Heart_Photo_Search: "Heart_Photo_10", src: photoArray_s[9], url: urlArray_s[9], load: "Loading_Spinner_P_10"})} src={Heart_Img_pic} style={Heart_Style} id="Heart_Photo_10"/>
                <img src={Resize_Img_p_Search} style={Resize_Img_style} id="Resize_Photo_10" onClick={() => Resize_Photo_Item({Container_Id: "Item_10_Photo_s", Exit_Id: "Exit_Resize_10", Heart_Id: "Heart_Photo_10", Resize_Id: "Resize_Photo_10", Source_Id: "Source_10_Photo_s", Picture_Id: "Play_Img_10_s", Main_id: "Main_Container", Loading_id: "Loading_Spinner_P_10"})}/>
                <img id="Exit_Resize_10" src={Exit_Img_v_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item({Container_Id_Exit: "Item_10_Photo_s", Exit_Id_Exit: "Exit_Resize_10", Heart_Id_Exit: "Heart_Photo_10", Resize_Id_Exit: "Resize_Photo_10", Source_Id_Exit: "Source_10_Photo_s", Picture_Id_Exit: "Play_Img_10_s", Main_Id_Exit: "Main_Container", Load_Id_Exit: "Loading_Spinner_P_10"})}/>
            </div> 

            <div id="Item_11_Photo_s" style={Photo_Item_Style} >
                <img style={Image_Style} src={photoArray_s[10]} onClick={() => TriggerLink_s(10)}/>
                <div id="Loading_Spinner_P_11" style={Loading_Spinner_P} className="loading-spinner"></div>
                <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_11_s" />
                <img className="Heart_Style_Class" onClick={() => Save_Photo_Search({id_Heart_Photo_Search: "Heart_Photo_11", src: photoArray_s[10], url: urlArray_s[10], load: "Loading_Spinner_P_11"})} src={Heart_Img_pic} style={Heart_Style} id="Heart_Photo_11"/>
                <img src={Resize_Img_p_Search} style={Resize_Img_style} id="Resize_Photo_11" onClick={() => Resize_Photo_Item({Container_Id: "Item_11_Photo_s", Exit_Id: "Exit_Resize_11", Heart_Id: "Heart_Photo_11", Resize_Id: "Resize_Photo_11", Source_Id: "Source_11_Photo_s", Picture_Id: "Play_Img_11_s", Main_id: "Main_Container", Loading_id: "Loading_Spinner_P_11"})}/>
                <img id="Exit_Resize_11" src={Exit_Img_v_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item({Container_Id_Exit: "Item_11_Photo_s", Exit_Id_Exit: "Exit_Resize_11", Heart_Id_Exit: "Heart_Photo_11", Resize_Id_Exit: "Resize_Photo_11", Source_Id_Exit: "Source_11_Photo_s", Picture_Id_Exit: "Play_Img_11_s", Main_Id_Exit: "Main_Container", Load_Id_Exit: "Loading_Spinner_P_11"})}/>
            </div>  

            <div id="Item_12_Photo_s" style={Photo_Item_Style} >
                <img style={Image_Style} src={photoArray_s[11]} onClick={() => TriggerLink_s(11)}/>
                <div id="Loading_Spinner_P_12" style={Loading_Spinner_P} className="loading-spinner"></div>
                <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_12_s" />
                <img className="Heart_Style_Class" onClick={() => Save_Photo_Search({id_Heart_Photo_Search: "Heart_Photo_12", src: photoArray_s[11], url: urlArray_s[11], load: "Loading_Spinner_P_12"})} src={Heart_Img_pic} style={Heart_Style} id="Heart_Photo_12"/>
                <img src={Resize_Img_p_Search} style={Resize_Img_style} id="Resize_Photo_12" onClick={() => Resize_Photo_Item({Container_Id: "Item_12_Photo_s", Exit_Id: "Exit_Resize_12", Heart_Id: "Heart_Photo_12", Resize_Id: "Resize_Photo_12", Source_Id: "Source_12_Photo_s", Picture_Id: "Play_Img_12_s", Main_id: "Main_Container", Loading_id: "Loading_Spinner_P_12"})}/>
                <img id="Exit_Resize_12" src={Exit_Img_v_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item({Container_Id_Exit: "Item_12_Photo_s", Exit_Id_Exit: "Exit_Resize_12", Heart_Id_Exit: "Heart_Photo_12", Resize_Id_Exit: "Resize_Photo_12", Source_Id_Exit: "Source_12_Photo_s", Picture_Id_Exit: "Play_Img_12_s", Main_Id_Exit: "Main_Container", Load_Id_Exit: "Loading_Spinner_P_12"})}/>
            </div> 

            <div id="Item_13_Photo_s" style={Photo_Item_Style} >
                <img style={Image_Style} src={photoArray_s[12]} onClick={() => TriggerLink_s(12)}/>
                <div id="Loading_Spinner_P_13" style={Loading_Spinner_P} className="loading-spinner"></div>
                <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_13_s" />
                <img className="Heart_Style_Class" onClick={() => Save_Photo_Search({id_Heart_Photo_Search: "Heart_Photo_13", src: photoArray_s[12], url: urlArray_s[12], load: "Loading_Spinner_P_13"})} src={Heart_Img_pic} style={Heart_Style} id="Heart_Photo_13"/>
                <img src={Resize_Img_p_Search} style={Resize_Img_style} id="Resize_Photo_13" onClick={() => Resize_Photo_Item({Container_Id: "Item_13_Photo_s", Exit_Id: "Exit_Resize_13", Heart_Id: "Heart_Photo_13", Resize_Id: "Resize_Photo_13", Source_Id: "Source_13_Photo_s", Picture_Id: "Play_Img_13_s", Main_id: "Main_Container", Loading_id: "Loading_Spinner_P_13"})}/>
                <img id="Exit_Resize_13" src={Exit_Img_v_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item({Container_Id_Exit: "Item_13_Photo_s", Exit_Id_Exit: "Exit_Resize_13", Heart_Id_Exit: "Heart_Photo_13", Resize_Id_Exit: "Resize_Photo_13", Source_Id_Exit: "Source_13_Photo_s", Picture_Id_Exit: "Play_Img_13_s", Main_Id_Exit: "Main_Container", Load_Id_Exit: "Loading_Spinner_P_13"})}/>
            </div>  

            <div id="Item_14_Photo_s" style={Photo_Item_Style} >
                <img style={Image_Style} src={photoArray_s[13]} onClick={() => TriggerLink_s(13)}/>
                <div id="Loading_Spinner_P_14" style={Loading_Spinner_P} className="loading-spinner"></div>
                <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_14_s" />
                <img className="Heart_Style_Class" onClick={() => Save_Photo_Search({id_Heart_Photo_Search: "Heart_Photo_14", src: photoArray_s[13], url: urlArray_s[13], load: "Loading_Spinner_P_14"})} src={Heart_Img_pic} style={Heart_Style} id="Heart_Photo_14"/>
                <img src={Resize_Img_p_Search} style={Resize_Img_style} id="Resize_Photo_14" onClick={() => Resize_Photo_Item({Container_Id: "Item_14_Photo_s", Exit_Id: "Exit_Resize_14", Heart_Id: "Heart_Photo_14", Resize_Id: "Resize_Photo_14", Source_Id: "Source_14_Photo_s", Picture_Id: "Play_Img_14_s", Main_id: "Main_Container", Loading_id: "Loading_Spinner_P_14"})}/>
                <img id="Exit_Resize_14" src={Exit_Img_v_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item({Container_Id_Exit: "Item_14_Photo_s", Exit_Id_Exit: "Exit_Resize_14", Heart_Id_Exit: "Heart_Photo_14", Resize_Id_Exit: "Resize_Photo_14", Source_Id_Exit: "Source_14_Photo_s", Picture_Id_Exit: "Play_Img_14_s", Main_Id_Exit: "Main_Container", Load_Id_Exit: "Loading_Spinner_P_14"})}/>
            </div>  

            <div id="Item_15_Photo_s" style={Photo_Item_Style} >
                <img style={Image_Style} src={photoArray_s[14]} onClick={() => TriggerLink_s(14)}/>
                <div id="Loading_Spinner_P_15" style={Loading_Spinner_P} className="loading-spinner"></div>
                <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_15_s" />
                <img className="Heart_Style_Class" onClick={() => Save_Photo_Search({id_Heart_Photo_Search: "Heart_Photo_15", src: photoArray_s[14], url: urlArray_s[14], load: "Loading_Spinner_P_15"})} src={Heart_Img_pic} style={Heart_Style} id="Heart_Photo_15"/>
                <img src={Resize_Img_p_Search} style={Resize_Img_style} id="Resize_Photo_15" onClick={() => Resize_Photo_Item({Container_Id: "Item_15_Photo_s", Exit_Id: "Exit_Resize_15", Heart_Id: "Heart_Photo_15", Resize_Id: "Resize_Photo_15", Source_Id: "Source_15_Photo_s", Picture_Id: "Play_Img_15_s", Main_id: "Main_Container", Loading_id: "Loading_Spinner_P_15"})}/>
                <img id="Exit_Resize_15" src={Exit_Img_v_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item({Container_Id_Exit: "Item_15_Photo_s", Exit_Id_Exit: "Exit_Resize_15", Heart_Id_Exit: "Heart_Photo_15", Resize_Id_Exit: "Resize_Photo_15", Source_Id_Exit: "Source_15_Photo_s", Picture_Id_Exit: "Play_Img_15_s", Main_Id_Exit: "Main_Container", Load_Id_Exit: "Loading_Spinner_P_15"})}/>
            </div>  

            <div id="Item_16_Photo_s" style={Photo_Item_Style} >
                <img style={Image_Style} src={photoArray_s[15]} onClick={() => TriggerLink_s(15)}/>
                <div id="Loading_Spinner_P_16" style={Loading_Spinner_P} className="loading-spinner"></div>
                <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_16_s" />
                <img className="Heart_Style_Class" onClick={() => Save_Photo_Search({id_Heart_Photo_Search: "Heart_Photo_16", src: photoArray_s[15], url: urlArray_s[15], load: "Loading_Spinner_P_16"})} src={Heart_Img_pic} style={Heart_Style} id="Heart_Photo_16"/>
                <img src={Resize_Img_p_Search} style={Resize_Img_style} id="Resize_Photo_16" onClick={() => Resize_Photo_Item({Container_Id: "Item_16_Photo_s", Exit_Id: "Exit_Resize_16", Heart_Id: "Heart_Photo_16", Resize_Id: "Resize_Photo_16", Source_Id: "Source_16_Photo_s", Picture_Id: "Play_Img_16_s", Main_id: "Main_Container", Loading_id: "Loading_Spinner_P_16"})}/>
                <img id="Exit_Resize_16" src={Exit_Img_v_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item({Container_Id_Exit: "Item_16_Photo_s", Exit_Id_Exit: "Exit_Resize_16", Heart_Id_Exit: "Heart_Photo_16", Resize_Id_Exit: "Resize_Photo_16", Source_Id_Exit: "Source_16_Photo_s", Picture_Id_Exit: "Play_Img_16_s", Main_Id_Exit: "Main_Container", Load_Id_Exit: "Loading_Spinner_P_16"})}/>
            </div> 

            <div id="Item_17_Photo_s" style={Photo_Item_Style} >
                <img style={Image_Style} src={photoArray_s[16]} onClick={() => TriggerLink_s(16)}/>
                <div id="Loading_Spinner_P_17" style={Loading_Spinner_P} className="loading-spinner"></div>
                <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_17_s" />
                <img className="Heart_Style_Class" onClick={() => Save_Photo_Search({id_Heart_Photo_Search: "Heart_Photo_17", src: photoArray_s[16], url: urlArray_s[16], load: "Loading_Spinner_P_17"})} src={Heart_Img_pic} style={Heart_Style} id="Heart_Photo_17"/>
                <img src={Resize_Img_p_Search} style={Resize_Img_style} id="Resize_Photo_17" onClick={() => Resize_Photo_Item({Container_Id: "Item_17_Photo_s", Exit_Id: "Exit_Resize_17", Heart_Id: "Heart_Photo_17", Resize_Id: "Resize_Photo_17", Source_Id: "Source_17_Photo_s", Picture_Id: "Play_Img_17_s", Main_id: "Main_Container", Loading_id: "Loading_Spinner_P_17"})}/>
                <img id="Exit_Resize_17" src={Exit_Img_v_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item({Container_Id_Exit: "Item_17_Photo_s", Exit_Id_Exit: "Exit_Resize_17", Heart_Id_Exit: "Heart_Photo_17", Resize_Id_Exit: "Resize_Photo_17", Source_Id_Exit: "Source_17_Photo_s", Picture_Id_Exit: "Play_Img_17_s", Main_Id_Exit: "Main_Container", Load_Id_Exit: "Loading_Spinner_P_17"})}/>
            </div> 
            
            <div id="Item_18_Photo_s" style={Photo_Item_Style} >
                <img style={Image_Style} src={photoArray_s[17]} onClick={() => TriggerLink_s(17)}/>
                <div id="Loading_Spinner_P_18" style={Loading_Spinner_P} className="loading-spinner"></div>
                <img style={Pic_Img_Style} src={Pic_Img} id="Play_Img_18_s" />
                <img className="Heart_Style_Class" onClick={() => Save_Photo_Search({id_Heart_Photo_Search: "Heart_Photo_18", src: photoArray_s[17], url: urlArray_s[17], load: "Loading_Spinner_P_18"})} src={Heart_Img_pic} style={Heart_Style} id="Heart_Photo_18"/>
                <img src={Resize_Img_p_Search} style={Resize_Img_style} id="Resize_Photo_18" onClick={() => Resize_Photo_Item({Container_Id: "Item_18_Photo_s", Exit_Id: "Exit_Resize_18", Heart_Id: "Heart_Photo_18", Resize_Id: "Resize_Photo_18", Source_Id: "Source_18_Photo_s", Picture_Id: "Play_Img_18_s", Main_id: "Main_Container", Loading_id: "Loading_Spinner_P_18"})}/>
                <img id="Exit_Resize_18" src={Exit_Img_v_Search} style={Exit_Img_Resize} onClick={() => Exit_Photo_Item({Container_Id_Exit: "Item_18_Photo_s", Exit_Id_Exit: "Exit_Resize_18", Heart_Id_Exit: "Heart_Photo_18", Resize_Id_Exit: "Resize_Photo_18", Source_Id_Exit: "Source_18_Photo_s", Picture_Id_Exit: "Play_Img_18_s", Main_Id_Exit: "Main_Container", Load_Id_Exit: "Loading_Spinner_P_18"})}/>
            </div>  

            <div style={Space}></div>
            <div>
                <button onClick={ChangePrevPage} style={Bottom_Buttons_Style}>Prev Page</button>
                <p style={Page_Counter_Style}>{PageQuery_s}</p>
                <button onClick={ChangeNextPage} style={Bottom_Buttons_Style}>Next Page</button>
                <div id="Loading_Spinner_Photo_Bot" style={Loading_Spinner_photo_Bottom} className="loading-spinner"></div> 
            </div>
            
        </div>
            
        </div>
    );

}


export default Photo_Search_Style;