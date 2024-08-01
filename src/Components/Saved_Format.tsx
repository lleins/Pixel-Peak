import { CSSProperties } from "react";
import Resize_Saved_Saved from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/ResizeImg.png";
import Exit_Img from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/ExitLogin.png";
import React, { useRef, RefObject, useEffect, useState } from "react";
import Picture_Img from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/PicImg.png";
import Video_Img from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/PlayImg.png";
import Exit_Img_white from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/RightArrow.png";
import Exit_Img_p_Search from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/ExitImg.png";
import download_Img from "C:/Coding Files/Pixel Peak/react-app/src/Components/Images/download.png";
import Cookies from 'js-cookie';
import axios from 'axios';

function Saved_Style(){


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



    useEffect(() => {
        GetSavedItems_Database_function();
    }, []);
    
  
    
    function TriggerLink_Saved_1(div: string, link: string) {
        const target_div = document.getElementById(div);
        if (target_div) target_div.onclick = () => TriggerLink_Saved_2(link);
    }
    
    function TriggerLink_Saved_2(link: string) {
        const url = link;
        window.open(url, "_blank");
    }

    const [urlArray_Saved, seturlArray_Saved] = useState<string[]>([]);
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
  
        const View_Video_Container = document.getElementById("View_Video_Saved");
        
        const download_btn = document.getElementById("View_Download_Btn_Saved");
  
        const nav_bar = document.getElementById("Main_Nav");
        const exit_img = document.getElementById("View_Exit_Img_Saved");
        const user = document.getElementById("view_video_user_Saved");
        const Heart_Img = document.getElementById("View_Heart_Img");
        const actual_video = document.getElementById("Video_View_Actual_Saved") as HTMLVideoElement | null;
        const remove_view_btn = document.getElementById("Remove_View_Saved");
  
        if(download_btn){
          download_btn.onclick=(() => Download_Image({Download_Btn_Id: "View_Download_Btn_Saved", url: Picture_Id_v}));
        }
        
        if(remove_view_btn){
            const intValue: number = Number(Heart_Id_v);
            remove_view_btn.onclick=(() => {Remove_Saved_Item_Database({src_p: "", src_v: "", numb: intValue})});
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
  
  
  
      function TriggerLink_v_url(url: string) {
        window.open(url, "_blank");
      }
     

    function Exit_Photo_Item_v(){
      
        const View_Video_Container = document.getElementById("View_Video_Saved");
        const nav_bar = document.getElementById("Main_Nav");
        const exit_img = document.getElementById("View_Exit_Img_Saved");
  
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


    function isImageUrl(url: string): boolean {
        return /\.(jpeg|jpg|gif|png|svg)$/i.test(url);
    }
    interface download_ids{
        Download_Btn_Id: string;
        url: string;
      }
  
  
      async function Download_Image({Download_Btn_Id, url, }: download_ids){
        const download_btn = document.getElementById(Download_Btn_Id);
  
        if(isImageUrl(url) === true){
            
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
        }else{
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

        
        
      }
  
  

    
    function GetSavedItems_Database_function(){

        const cookie = Cookies.get("Login_Token");
        if(cookie === null){

        }else if(cookie !== null){
            const Container_1 = document.getElementById("Saved_Item_1");
            const Saved_Photo_1 = document.getElementById("Saved_Photo_Item_1") as HTMLImageElement;
            const Saved_Video_1 = document.getElementById("Saved_Video_Item_1") as HTMLVideoElement;
            const Video_Image_1 = document.getElementById("Video_Img_1");
            const Photo_Image_1 = document.getElementById("Picture_Img_1");
            const Open_Browser_1 = document.getElementById("Open_Browser_1"); 
            const Download_btn_text_1 = document.getElementById("Download_Button_s_1");
            const Download_btn_1 = document.getElementById("download_Button_actual_1");
    
            const Container_2 = document.getElementById("Saved_Item_2");
            const Saved_Photo_2 = document.getElementById("Saved_Photo_Item_2")as HTMLImageElement;
            const Saved_Video_2 = document.getElementById("Saved_Video_Item_2")as HTMLVideoElement;
            const Video_Image_2 = document.getElementById("Video_Img_2");
            const Photo_Image_2 = document.getElementById("Picture_Img_2");
            const Open_Browser_2 = document.getElementById("Open_Browser_2");
            const Download_btn_text_2 = document.getElementById("Download_Button_s_2");
            const Download_btn_2 = document.getElementById("download_Button_actual_2");
        
            const Container_3 = document.getElementById("Saved_Item_3");
            const Saved_Photo_3 = document.getElementById("Saved_Photo_Item_3")as HTMLImageElement;
            const Saved_Video_3 = document.getElementById("Saved_Video_Item_3")as HTMLVideoElement;
            const Video_Image_3 = document.getElementById("Video_Img_3");
            const Photo_Image_3 = document.getElementById("Picture_Img_3");
            const Open_Browser_3 = document.getElementById("Open_Browser_3");
            const Download_btn_text_3 = document.getElementById("Download_Button_s_3");
            const Download_btn_3 = document.getElementById("download_Button_actual_3");
        
            const Container_4 = document.getElementById("Saved_Item_4");
            const Saved_Photo_4 = document.getElementById("Saved_Photo_Item_4")as HTMLImageElement;
            const Saved_Video_4 = document.getElementById("Saved_Video_Item_4")as HTMLVideoElement;
            const Video_Image_4 = document.getElementById("Video_Img_4");
            const Photo_Image_4 = document.getElementById("Picture_Img_4");
            const Open_Browser_4 = document.getElementById("Open_Browser_4");
            const Download_btn_text_4 = document.getElementById("Download_Button_s_4");
            const Download_btn_4 = document.getElementById("download_Button_actual_4");
        
            const Container_5 = document.getElementById("Saved_Item_5");
            const Saved_Photo_5 = document.getElementById("Saved_Photo_Item_5")as HTMLImageElement;
            const Saved_Video_5 = document.getElementById("Saved_Video_Item_5")as HTMLVideoElement;
            const Video_Image_5 = document.getElementById("Video_Img_5");
            const Photo_Image_5 = document.getElementById("Picture_Img_5");
            const Open_Browser_5 = document.getElementById("Open_Browser_5");
            const Download_btn_text_5 = document.getElementById("Download_Button_s_5");
            const Download_btn_5 = document.getElementById("download_Button_actual_5");
        
            const Container_6 = document.getElementById("Saved_Item_6");
            const Saved_Photo_6 = document.getElementById("Saved_Photo_Item_6")as HTMLImageElement;
            const Saved_Video_6 = document.getElementById("Saved_Video_Item_6")as HTMLVideoElement;
            const Video_Image_6 = document.getElementById("Video_Img_6");
            const Photo_Image_6 = document.getElementById("Picture_Img_6");
            const Open_Browser_6 = document.getElementById("Open_Browser_6");
            const Download_btn_text_6 = document.getElementById("Download_Button_s_6");
            const Download_btn_6 = document.getElementById("download_Button_actual_6");
        
            const Container_7 = document.getElementById("Saved_Item_7");
            const Saved_Photo_7 = document.getElementById("Saved_Photo_Item_7")as HTMLImageElement;
            const Saved_Video_7 = document.getElementById("Saved_Video_Item_7")as HTMLVideoElement;
            const Video_Image_7 = document.getElementById("Video_Img_7");
            const Photo_Image_7 = document.getElementById("Picture_Img_7");
            const Open_Browser_7 = document.getElementById("Open_Browser_7");
            const Download_btn_text_7 = document.getElementById("Download_Button_s_7");
            const Download_btn_7 = document.getElementById("download_Button_actual_7");
        
            const Container_8 = document.getElementById("Saved_Item_8");
            const Saved_Photo_8 = document.getElementById("Saved_Photo_Item_8")as HTMLImageElement;
            const Saved_Video_8 = document.getElementById("Saved_Video_Item_8")as HTMLVideoElement;
            const Video_Image_8 = document.getElementById("Video_Img_8");
            const Photo_Image_8 = document.getElementById("Picture_Img_8");
            const Open_Browser_8 = document.getElementById("Open_Browser_8");
            const Download_btn_text_8 = document.getElementById("Download_Button_s_8");
            const Download_btn_8 = document.getElementById("download_Button_actual_8");
        
            const Container_9 = document.getElementById("Saved_Item_9");
            const Saved_Photo_9 = document.getElementById("Saved_Photo_Item_9")as HTMLImageElement;
            const Saved_Video_9 = document.getElementById("Saved_Video_Item_9")as HTMLVideoElement;
            const Video_Image_9 = document.getElementById("Video_Img_9");
            const Photo_Image_9 = document.getElementById("Picture_Img_9");
            const Open_Browser_9 = document.getElementById("Open_Browser_9");
            const Download_btn_text_9 = document.getElementById("Download_Button_s_9");
            const Download_btn_9 = document.getElementById("download_Button_actual_9");
        
            const Container_10 = document.getElementById("Saved_Item_10");
            const Saved_Photo_10 = document.getElementById("Saved_Photo_Item_10")as HTMLImageElement;
            const Saved_Video_10 = document.getElementById("Saved_Video_Item_10")as HTMLVideoElement;
            const Video_Image_10 = document.getElementById("Video_Img_10");
            const Photo_Image_10 = document.getElementById("Picture_Img_10");
            const Open_Browser_10 = document.getElementById("Open_Browser_10");
            const Download_btn_text_10 = document.getElementById("Download_Button_s_10");
            const Download_btn_10 = document.getElementById("download_Button_actual_10");
            
            const Saved_Container_Change = document.getElementById("Saved_Container");
            const No_Saved_Text_Change = document.getElementById("No_Saved_Text");
            const Back_None = document.getElementById("Back_None");
            const Back_Saved = document.getElementById("Back_Saved");
            const Saved_Container_Change_2 = document.getElementById("No_Saved_Items_Container");
            const Saved_Number_Place = document.getElementById("Saved_Number");
            const Email_Login_Token = Cookies.get("Login_Token");
            const text_1 = document.getElementById("user_text_1");
            const text_2 = document.getElementById("user_text_2");
            const text_3 = document.getElementById("user_text_3");
            const text_4 = document.getElementById("user_text_4");
            const text_5 = document.getElementById("user_text_5");
            const text_6 = document.getElementById("user_text_6");
            const text_7 = document.getElementById("user_text_7");
            const text_8 = document.getElementById("user_text_8");
            const text_9 = document.getElementById("user_text_9");
            const text_10 = document.getElementById("user_text_10");
    
            fetch('http://18.225.95.230:5000/api/Get_Pics_Vids', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                    body: JSON.stringify({ email_data: Email_Login_Token }),
                })
                .then(response => {
                    if (response.ok) {
                       
                        return response.json(); 
                    } else {
                    
                        return response.json(); 
                    }
                })
                    .then(data => {
                      if (data.success === 1) {
                        // Documents found with the specified email
                        
                        const documents = data.documents;
                        if(Saved_Number_Place) Saved_Number_Place.textContent = "";
                        if(Saved_Number_Place) Saved_Number_Place.textContent = documents.length.toString();
                        if(Saved_Container_Change_2)Saved_Container_Change_2.style.display = "none";
                        if(Saved_Container_Change)Saved_Container_Change.style.display = "block";
                        if(No_Saved_Text_Change)No_Saved_Text_Change.style.display = "none";
                        if(Back_None)Back_None.style.display = "none";
                        if(Back_Saved)Back_Saved.style.display = "block";
                        if(documents[0] === undefined){
                            if(Container_1) Container_1.style.display = "none";
                        } else if(documents[0] !== undefined){
                            if(Download_btn_1)Download_btn_1.onclick = () => Download_Image({Download_Btn_Id: "Download_Button_s_1", url: documents[0].src})
                            if(text_1)text_1.textContent === "";
                            if(text_1)text_1.textContent = "By: " + documents[0].user;
                            if (text_1 && documents[0].url) {
                                text_1.onclick = () => TriggerLink_Saved_2(documents[0].url);
                            }
                            if ((documents[0].type) === "P"){
                                if(Open_Browser_1)Open_Browser_1.style.display = "block";
                                if(Open_Browser_1)Open_Browser_1.onclick = () => openinbrowser(documents[0].src);
                                if(Saved_Photo_1) Saved_Photo_1.style.display = "block";  //For Saved Item 1
                                if(Saved_Photo_1) Saved_Photo_1.src = documents[0].src;
                                if(Photo_Image_1) Photo_Image_1.style.display = "block";
                                const newString = documents[0].src; 
                        
                                seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString]);
    
                            } else if((documents[0].type) === "V"){
                                if(Saved_Video_1) Saved_Video_1.style.display = "block";
                                if(Saved_Video_1) Saved_Video_1.onclick = () => Resize_Photo_Item_v({Container_Id_v: "Saved_Item_1", Exit_Id_v: documents[0].user, Heart_Id_v: "0", Resize_Id_v: documents[0].url, Source_Id_v: documents[0].user, Picture_Id_v: documents[0].src, Loading_Id_v: "" });
                                if(Saved_Video_1) Saved_Video_1.src = documents[0].src;
                                if(Video_Image_1) Video_Image_1.style.display = "block";
           
                                const newString = documents[0].src;
                                seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString]);
                            }
                        }
                        
                        if(documents[1] === undefined){
                            if(Container_2) Container_2.style.display = "none";
                        } else if(documents[1] !== undefined){
                            if(Download_btn_2)Download_btn_2.onclick = () => Download_Image({Download_Btn_Id: "Download_Button_s_2", url: documents[1].src})
                            if(text_2)text_2.textContent === "";
                            if(text_2)text_2.textContent = "By: " + documents[1].user;
                            if (text_2 && documents[1].url) {
                                text_2.onclick = () => TriggerLink_Saved_2(documents[1].url);
                            }
                            if ((documents[1].type) === "P"){
                                if(Open_Browser_2)Open_Browser_2.style.display = "block";
                                if(Open_Browser_2)Open_Browser_2.onclick = () => openinbrowser(documents[1].src);
                                if(Saved_Photo_2) Saved_Photo_2.style.display = "block";  //For Saved Item 2
                                if(Saved_Photo_2) Saved_Photo_2.src = documents[1].src;
                                if(Photo_Image_2) Photo_Image_2.style.display = "block";
                    
                                const newString2 = documents[1].src;
                                seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString2]);
                            } else if((documents[1].type) === "V"){
                                if(Saved_Video_2) Saved_Video_2.onclick = () => Resize_Photo_Item_v({Container_Id_v: "Saved_Item_2", Exit_Id_v: documents[1].user, Heart_Id_v: "1", Resize_Id_v: documents[1].url, Source_Id_v: documents[1].user, Picture_Id_v: documents[1].src, Loading_Id_v: "" });
                                if(Saved_Video_2) Saved_Video_2.style.display = "block";
                                if(Saved_Video_2) Saved_Video_2.src = documents[1].src;
                                if(Video_Image_2) Video_Image_2.style.display = "block";
            
                                const newString2 = documents[1].src;
                                seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString2]);
                            }
                        }
        
        
                        if(documents[2] === undefined){
                            if(Container_3) Container_3.style.display = "none";
                        } else if(documents[2] !== undefined){
                            if(Download_btn_3)Download_btn_3.onclick = () => Download_Image({Download_Btn_Id: "Download_Button_s_3", url: documents[2].src})
                            if(text_3)text_3.textContent === "";
                            if(text_3)text_3.textContent = "By: " + documents[2].user;
                            if (text_3 && documents[2].url) {
                                text_3.onclick = () => TriggerLink_Saved_2(documents[2].url);
                            }
                            if ((documents[2].type) === "P"){
                                if(Open_Browser_3)Open_Browser_3.style.display = "block";
                                if(Open_Browser_3)Open_Browser_3.onclick = () => openinbrowser(documents[2].src);
                                if(Saved_Photo_3) Saved_Photo_3.style.display = "block";  //For Saved Item 3
                                if(Saved_Photo_3) Saved_Photo_3.src = documents[2].src;
                                if(Photo_Image_3) Photo_Image_3.style.display = "block";
                     
                                const newString3 = documents[2].src;
                                seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString3]);
                            } else if((documents[2].type) === "V"){
                                if(Saved_Video_3) Saved_Video_3.onclick = () => Resize_Photo_Item_v({Container_Id_v: "Saved_Item_3", Exit_Id_v: documents[2].user, Heart_Id_v: "2", Resize_Id_v: documents[2].url, Source_Id_v: documents[2].user, Picture_Id_v: documents[2].src, Loading_Id_v: "" });
                                if(Saved_Video_3) Saved_Video_3.style.display = "block";
                                if(Saved_Video_3) Saved_Video_3.src = documents[2].src;
                                if(Video_Image_3) Video_Image_3.style.display = "block";
                     
                                const newString3 = documents[2].src;
                                seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString3]);
                            }
                        }
        
        
                        if(documents[3] === undefined){
                            if(Container_4) Container_4.style.display = "none";
                        } else if(documents[3] !== undefined){
                            if(Download_btn_4)Download_btn_4.onclick = () => Download_Image({Download_Btn_Id: "Download_Button_s_4", url: documents[3].src})
                            if(text_4)text_4.textContent === "";
                            if(text_4)text_4.textContent = "By: " + documents[3].user;
                            if (text_4 && documents[3].url) {
                                text_4.onclick = () => TriggerLink_Saved_2(documents[3].url);
                            }
                            if ((documents[3].type) === "P"){
                                if(Open_Browser_4)Open_Browser_4.style.display = "block";
                                if(Open_Browser_4)Open_Browser_4.onclick = () => openinbrowser(documents[3].src);
                                if(Saved_Photo_4) Saved_Photo_4.style.display = "block";  //For Saved Item 4
                                if(Saved_Photo_4) Saved_Photo_4.src = documents[3].src;
                                if(Photo_Image_4) Photo_Image_4.style.display = "block";
                    
                                const newString4 = documents[3].src;
                                seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString4]);
                            } else if((documents[3].type) === "V"){
                                if(Saved_Video_4) Saved_Video_4.onclick = () => Resize_Photo_Item_v({Container_Id_v: "Saved_Item_4", Exit_Id_v: documents[3].user, Heart_Id_v: "3", Resize_Id_v: documents[3].url, Source_Id_v: documents[3].user, Picture_Id_v: documents[3].src, Loading_Id_v: "" });
                                if(Saved_Video_4) Saved_Video_4.style.display = "block";
                                if(Saved_Video_4) Saved_Video_4.src = documents[3].src;
                                if(Video_Image_4) Video_Image_4.style.display = "block";
                       
                                const newString4 = documents[3].src;
                                seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString4]);
                            }
                        }
        
                        if(documents[4] === undefined){
                            if(Container_5) Container_5.style.display = "none";
                        } else if(documents[4] !== undefined){
                            if(Download_btn_5)Download_btn_5.onclick = () => Download_Image({Download_Btn_Id: "Download_Button_s_5", url: documents[4].src})
                            if(text_5)text_5.textContent === "";
                            if(text_5)text_5.textContent = "By: " + documents[4].user;
                            if (text_5 && documents[4].url) {
                                text_5.onclick = () => TriggerLink_Saved_2(documents[4].url);
                            }
                            if ((documents[4].type) === "P"){
                                if(Open_Browser_5)Open_Browser_5.style.display = "block";
                                if(Open_Browser_5)Open_Browser_5.onclick = () => openinbrowser(documents[4].src);
                                if(Saved_Photo_5) Saved_Photo_5.style.display = "block";  //For Saved Item 5
                                if(Saved_Photo_5) Saved_Photo_5.src = documents[4].src;
                                if(Photo_Image_5) Photo_Image_5.style.display = "block";
                    
                                const newString5 = documents[4].src;
                                seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString5]);
                            } else if((documents[4].type) === "V"){
                                if(Saved_Video_5) Saved_Video_5.onclick = () => Resize_Photo_Item_v({Container_Id_v: "Saved_Item_5", Exit_Id_v: documents[4].user, Heart_Id_v: "4", Resize_Id_v: documents[4].url, Source_Id_v: documents[4].user, Picture_Id_v: documents[4].src, Loading_Id_v: "" });
                                if(Saved_Video_5) Saved_Video_5.style.display = "block";
                                if(Saved_Video_5) Saved_Video_5.src = documents[4].src;
                                if(Video_Image_5) Video_Image_5.style.display = "block";
                     
                                const newString5 = documents[4].src;
                                seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString5]);
                            }
                        }
        
        
        
                        if(documents[5] === undefined){
                            if(Container_6) Container_6.style.display = "none";
                        } else if(documents[5] !== undefined){
                            if(Download_btn_6)Download_btn_6.onclick = () => Download_Image({Download_Btn_Id: "Download_Button_s_6", url: documents[5].src})
                            if(text_6)text_6.textContent === "";
                            if(text_6)text_6.textContent = "By: " + documents[5].user;
                            if (text_6 && documents[5].url) {
                                text_6.onclick = () => TriggerLink_Saved_2(documents[5].url);
                            }
                            if ((documents[5].type) === "P"){
                                if(Open_Browser_6)Open_Browser_6.style.display = "block";
                                if(Open_Browser_6)Open_Browser_6.onclick = () => openinbrowser(documents[5].src);
                                if(Saved_Photo_6) Saved_Photo_6.style.display = "block";  //For Saved Item 6
                                if(Saved_Photo_6) Saved_Photo_6.src = documents[5].src;
                                if(Photo_Image_6) Photo_Image_6.style.display = "block";
                        
                                const newString6 = documents[5].src;
                                seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString6]);
                            } else if((documents[5].type) === "V"){
                                if(Saved_Video_6) Saved_Video_6.onclick = () => Resize_Photo_Item_v({Container_Id_v: "Saved_Item_6", Exit_Id_v: documents[5].user, Heart_Id_v: "5", Resize_Id_v: documents[5].url, Source_Id_v: documents[5].user, Picture_Id_v: documents[5].src, Loading_Id_v: "" });
                                if(Saved_Video_6) Saved_Video_6.style.display = "block";
                                if(Saved_Video_6) Saved_Video_6.src = documents[5].src;
                                if(Video_Image_6) Video_Image_6.style.display = "block";
                              
                                const newString6 = documents[5].src;
                                seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString6]);
                            }
                        }
        
                        if(documents[6] === undefined){
                            if(Container_7) Container_7.style.display = "none";
                        } else if(documents[6] !== undefined){
                            if(Download_btn_7)Download_btn_7.onclick = () => Download_Image({Download_Btn_Id: "Download_Button_s_7", url: documents[6].src})
                            if(text_7)text_7.textContent === "";
                            if(text_7)text_7.textContent = "By: " + documents[6].user;
                            if (text_7 && documents[6].url) {
                                text_7.onclick = () => TriggerLink_Saved_2(documents[6].url);
                            }
                            if ((documents[6].type) === "P"){
                                if(Open_Browser_7)Open_Browser_7.style.display = "block";
                                if(Open_Browser_7)Open_Browser_7.onclick = () => openinbrowser(documents[6].src);
                                if(Saved_Photo_7) Saved_Photo_7.style.display = "block";  //For Saved Item 7
                                if(Saved_Photo_7) Saved_Photo_7.src = documents[6].src;
                                if(Photo_Image_7) Photo_Image_7.style.display = "block";
                             
                                const newString7 = documents[6].src;
                                seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString7]);
                            } else if((documents[6].type) === "V"){
                                if(Saved_Video_7) Saved_Video_7.onclick = () => Resize_Photo_Item_v({Container_Id_v: "Saved_Item_7", Exit_Id_v: documents[6].user, Heart_Id_v: "6", Resize_Id_v: documents[6].url, Source_Id_v: documents[6].user, Picture_Id_v: documents[6].src, Loading_Id_v: "" });
                                if(Saved_Video_7) Saved_Video_7.style.display = "block";
                                if(Saved_Video_7) Saved_Video_7.src = documents[6].src;
                                if(Video_Image_7) Video_Image_7.style.display = "block";
                           
                                const newString7 = documents[6].src;
                                seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString7]);
                           }
        
                        }
        
                        if(documents[7] === undefined){
                            if(Container_8) Container_8.style.display = "none";
                        } else if(documents[7] !== undefined){
                            if(Download_btn_8)Download_btn_8.onclick = () => Download_Image({Download_Btn_Id: "Download_Button_s_8", url: documents[7].src})
                            if(text_8)text_8.textContent === "";
                            if(text_8)text_8.textContent = "By: " + documents[7].user;
                            if (text_8 && documents[7].url) {
                                text_8.onclick = () => TriggerLink_Saved_2(documents[7].url);
                            }
                            if ((documents[7].type) === "P"){
                                if(Open_Browser_8)Open_Browser_8.style.display = "block";
                                if(Open_Browser_8)Open_Browser_8.onclick = () => openinbrowser(documents[7].src);
                                if(Saved_Photo_8) Saved_Photo_8.style.display = "block";  //For Saved Item 8
                                if(Saved_Photo_8) Saved_Photo_8.src = documents[7].src;
                                if(Photo_Image_8) Photo_Image_8.style.display = "block";
                        
                                const newString8 = documents[7].src;
                                seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString8]);
                            } else if((documents[7].type) === "V"){
                                if(Saved_Video_8) Saved_Video_8.onclick = () => Resize_Photo_Item_v({Container_Id_v: "Saved_Item_8", Exit_Id_v: documents[7].user, Heart_Id_v: "7", Resize_Id_v: documents[7].url, Source_Id_v: documents[7].user, Picture_Id_v: documents[7].src, Loading_Id_v: "" });
                                if(Saved_Video_8) Saved_Video_8.style.display = "block";
                                if(Saved_Video_8) Saved_Video_8.src = documents[7].src;
                                if(Video_Image_8) Video_Image_8.style.display = "block";
                            
                                const newString8 = documents[7].src;
                                seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString8]);
                            }
                        }
        
        
                        if(documents[8] === undefined){
                            if(Container_9) Container_9.style.display = "none";
                        } else if(documents[8] !== undefined){
                            if(Download_btn_9)Download_btn_9.onclick = () => Download_Image({Download_Btn_Id: "Download_Button_s_9", url: documents[8].src})
                            if(text_9)text_9.textContent === "";
                            if(text_9)text_9.textContent = "By: " + documents[8].user;
                            if (text_9 && documents[8].url) {
                                text_9.onclick = () => TriggerLink_Saved_2(documents[8].url);
                            }
                            if ((documents[8].type) === "P"){
                                if(Open_Browser_9)Open_Browser_9.style.display = "block";
                                if(Open_Browser_9)Open_Browser_9.onclick = () => openinbrowser(documents[8].src);
                                if(Saved_Photo_9) Saved_Photo_9.style.display = "block";  //For Saved Item 9
                                if(Saved_Photo_9) Saved_Photo_9.src = documents[8].src;
                                if(Photo_Image_9) Photo_Image_9.style.display = "block";
                        
                                const newString9 = documents[8].src;
                                seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString9]);
                            } else if((documents[8].type) === "V"){
                                if(Saved_Video_9) Saved_Video_9.onclick = () => Resize_Photo_Item_v({Container_Id_v: "Saved_Item_9", Exit_Id_v: documents[8].user, Heart_Id_v: "8", Resize_Id_v: documents[8].url, Source_Id_v: documents[8].user, Picture_Id_v: documents[8].src, Loading_Id_v: "" });
                                if(Saved_Video_9) Saved_Video_9.style.display = "block";
                                if(Saved_Video_9) Saved_Video_9.src = documents[8].src;
                                if(Video_Image_9) Video_Image_9.style.display = "block";
                           
                                const newString9 = documents[8].src;
                                seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString9]);
                            }
                        }
        
                        if(documents[9] === undefined){
                            if(Container_10) Container_10.style.display = "none";
                        } else if(documents[9] !== undefined){
                            if(Download_btn_10)Download_btn_10.onclick = () => Download_Image({Download_Btn_Id: "Download_Button_s_10", url: documents[9].src})
                            if(text_10)text_10.textContent === "";
                            if(text_10)text_10.textContent = "By: " + documents[9].user;
                            if (text_10 && documents[9].url) {
                                text_10.onclick = () => TriggerLink_Saved_2(documents[9].url);
                            }
                            if ((documents[9].type) === "P"){
                                if(Open_Browser_10)Open_Browser_10.style.display = "block";
                                if(Open_Browser_10)Open_Browser_10.onclick = () => openinbrowser(documents[9].src);
                                if(Saved_Photo_10) Saved_Photo_10.style.display = "block";  //For Saved Item 10
                                if(Saved_Photo_10) Saved_Photo_10.src = documents[9].src;
                                if(Photo_Image_10) Photo_Image_10.style.display = "block";
                               
                                const newString10 = documents[9].src;
                                seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString10]);
                            } else if((documents[9].type) === "V"){
                                if(Saved_Video_10) Saved_Video_10.onclick = () => Resize_Photo_Item_v({Container_Id_v: "Saved_Item_10", Exit_Id_v: documents[9].user, Heart_Id_v: "9", Resize_Id_v: documents[9].url, Source_Id_v: documents[9].user, Picture_Id_v: documents[9].src, Loading_Id_v: "" });
                                if(Saved_Video_10) Saved_Video_10.style.display = "block";
                                if(Saved_Video_10) Saved_Video_10.src = documents[9].src;
                                if(Video_Image_10) Video_Image_10.style.display = "block";
                              
                                const newString10 = documents[9].src;
                                seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString10]);
                            }
                        }
                      
                      } else if (data.success === 0) {
                            if(Saved_Container_Change)Saved_Container_Change.style.display = "none";
                            if(No_Saved_Text_Change)No_Saved_Text_Change.style.display = "block";
                            if(Saved_Container_Change_2)Saved_Container_Change_2.style.display = "block";
                            if(Back_None)Back_None.style.display = "block";
                            if(Back_Saved)Back_Saved.style.display = "none";
                      } else {
                       
                      }
                    })
                .catch(error => {
                    
                })   
        }

           
    }

    //GetSavedItems_Database_function();

   

   
    //const newString = "new string value";
  
    //seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString]);


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




    function closeTab(){
        const MainContainer = document.getElementById("Saved_React");
        const Account_Container = document.getElementById("Login_Container");
        const nav = document.getElementById("Main_Nav");
        if(MainContainer) MainContainer.style.display = "none";
        if(Account_Container) Account_Container.style.visibility = "visible";
        if(nav)nav.style.display = "flex";
        

    }

   

    interface Cancel_Removed_Saved{
        Remove_Id_Cancel: string;
        Remove_Img_Cancel: string;
        Cancel_Img: string;
    }

    function Cancel_Remove_Saved_Item({Remove_Id_Cancel, Remove_Img_Cancel, Cancel_Img}: Cancel_Removed_Saved){
        const Remove_Text = document.getElementById(Remove_Id_Cancel);
        const Remove_Image = document.getElementById(Remove_Img_Cancel);
        const Cancel_Image = document.getElementById(Cancel_Img);

        if (Remove_Text){ 
            Remove_Text.style.opacity = "0";
            Remove_Text.style.left = "300px";
            
        }

        if(Remove_Image){
            Remove_Image.style.display = "block";
        }

        if(Cancel_Image){
            Cancel_Image.style.display = "none";
        }
    }

    const openinbrowser = (imageUrl: string) => {
        window.open(imageUrl, '_blank');
      };

    interface Resize_ids_s{
        Container_Id: string;
        Exit_Id: string;
        Resize_Id: string;
        Picture_Id: string;
        Video_Id: string;
        Remove_Pic_Id: string;
        Remove_Text_Id: string;
    }
  
  
    function Resize_Photo_Item_Saved({Container_Id, Exit_Id, Resize_Id, Picture_Id, Video_Id, Remove_Pic_Id, Remove_Text_Id}: Resize_ids_s){
        
        const element = document.getElementById("Marker");
        if (element) {
            element.scrollIntoView({ behavior: 'instant' });
        }
        toggleControls();
        toggleOverflow_s();
        const actual_container = document.getElementById(Container_Id);
        const actual_exit = document.getElementById(Exit_Id);
        const actual_resize = document.getElementById(Resize_Id);
        const actual_picture = document.getElementById(Picture_Id);
        const actual_video = document.getElementById(Video_Id);
        const actual_remove_pic = document.getElementById(Remove_Pic_Id);
        const actual_remove_text = document.getElementById(Remove_Text_Id);
        const actual_reload = document.getElementById("Reload_Btn");

        if(actual_reload)actual_reload.style.display = "none";

        if(actual_container){
          actual_container.style.width = "100%";
          actual_container.style.height = "95%";
          actual_container.style.position = "absolute";
          actual_container.style.left = "50%";
          actual_container.style.top = "50%";
          actual_container.style.marginTop = "0px";
          actual_container.style.transform = "translate(-50%, -50%)";
          actual_container.style.zIndex = "12";
          actual_container.style.boxShadow = '0px 0px 0px 100vw rgba(0, 0, 0, .9)';
        }
        
        if(actual_exit){
          actual_exit.style.display = "block";
        }
  
        if(actual_resize){
          actual_resize.style.display = "none";
        }

        if(actual_picture){
          actual_picture.style.display = "none";
        }


        if(actual_video){
            actual_video.style.display = "none";
          }

        if(actual_remove_pic){
            actual_remove_pic.style.display = "none";
        }

        if(actual_remove_text){
            actual_remove_text.style.display = "none";
           
        }

  
    }


    interface Resize_ids_exit{
        Container_Id_exit: string;
        Exit_Id_exit: string;
        Resize_Id_exit: string;
        Picture_Id_exit: string;
        Video_Id_exit: string;
        Remove_Pic_Id_exit: string;
        Remove_Text_Id_exit: string;
    }
  
  
    function Exit_Photo_Item_Saved({Container_Id_exit, Exit_Id_exit, Resize_Id_exit, Picture_Id_exit, Video_Id_exit, Remove_Pic_Id_exit, Remove_Text_Id_exit}: Resize_ids_exit){
        
        toggleControls();
        toggleOverflow_s();
        const actual_container = document.getElementById(Container_Id_exit);
        const actual_exit = document.getElementById(Exit_Id_exit);
        const actual_resize = document.getElementById(Resize_Id_exit);
        const actual_picture = document.getElementById(Picture_Id_exit);
        const actual_video = document.getElementById(Video_Id_exit);
        const actual_remove_pic = document.getElementById(Remove_Pic_Id_exit);
        const actual_remove_text = document.getElementById(Remove_Text_Id_exit);
        const actual_reload = document.getElementById("Reload_Btn");

        if(actual_reload)actual_reload.style.display = "block";

        if(actual_container){
            actual_container.style.width = "300px";
            actual_container.style.height = "200px";
            actual_container.style.position = "relative";
            actual_container.style.left = "30%";
            actual_container.style.top = "0%";
            actual_container.style.marginTop = "50px";
            actual_container.style.transform = "translate(-30%, 0)";
            actual_container.style.zIndex = "10";
            actual_container.style.backdropFilter = "blur(-10px)"
            actual_container.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0)'
        }
          
        if(actual_exit){
            actual_exit.style.display = "none";
        }
          
  
        if(actual_resize){
          actual_resize.style.left = "265px";
          actual_resize.style.top = "165px";
          actual_resize.style.display = "block";
        }

        if(actual_picture){
          actual_picture.style.display = "none";
        }


        if(actual_video){
            actual_video.style.display = "none";
        }

        if(actual_remove_pic){
            actual_remove_pic.style.display = "block";
        }

        if(actual_remove_text){
            actual_remove_text.style.display = "block";
            actual_remove_text.style.top = "5px";
            actual_remove_text.style.left = "300px";
            actual_remove_text.style.right = "30px";
        }

        const element = document.getElementById(Container_Id_exit);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }

    }


    interface Remove_Database{
        src_p: string;
        src_v: string;
        numb: number;

    }

    function Remove_Saved_Item_Database({src_p, src_v, numb}:Remove_Database){
  
        const Check_Cookie = Cookies.get("Login_Token");
        const picture = document.getElementById(src_p) as HTMLImageElement;
        const video = document.getElementById(src_v)as HTMLVideoElement;
        const src = urlArray_Saved[numb];

          fetch('http://18.225.95.230:5000/api/Item_Saved_Delete', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email_data: Check_Cookie, src_data: src }), //sends login token and url to server.js delete save endpoint
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
                //console.log("Removed in Photos_Format 1");
                  const Success_Notif = document.getElementById("Saved_10"); //changes heart color and displays notif
                  if(Success_Notif) Success_Notif.style.display = "block";
                  setTimeout(() => {
                    if(Success_Notif) Success_Notif.style.display = "none";
                    
                  }, 2000);
                  GetSavedItems_Database_function();
                  Cookies.set('Deleted_Saved', "1" , { path: '/' });
                  window.location.reload();
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


    const Main_Style: CSSProperties = {
        overflowY: "hidden",
        backgroundColor: "rgb(15, 15, 15)",
   
    };


    const Back_Img_Style_Saved: CSSProperties = {
        position: "absolute",
        left: "10%",
        top: "60px",
        cursor: "pointer",
        zIndex: "10",
        color: "rgb(255, 255, 255)",
        textDecoration: "underline",
        fontSize: "15px",
        fontFamily: "verdana",
    
    };


    const [isOverflowVisible_s, setIsOverflowVisible_s] = useState(true);

    const toggleOverflow_s = () => {
      setIsOverflowVisible_s(prev => !prev);
    };


    const Saved_Container_Style: CSSProperties = {
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: "rgb(15, 15, 15)",
        top: "0px",
        overflowY: isOverflowVisible_s ? 'auto' : 'hidden',
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        gridTemplateRows: "repeat(12, 1fr)",
        gridGap: "20px",
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
        background: 'linear-gradient(to top, rgba(10, 10, 10, .7), rgba(10, 10, 10, 0))',
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
        cursor: "pointer",
    };
  

    const Saved_Item_Style: CSSProperties = {
        position: "relative",
        height: "500px",
        width: "80%",
        minWidth: "250px",
        minHeight: "125px",
        maxWidth: "1000px",
        maxHeight: "500px",
        backgroundColor: "rgb(150, 150, 150, 0.3)",
        left: "50%",
        transform: "translate(-50%, 0%)",
        marginTop: "150px",
    };

    const Resize_Saved: CSSProperties = {
        position: "absolute",
        left: "265px",
        top: "165px",
        transform: "scale(.7)",
        opacity: "0",
        
    };  
    const Remove_Saved: CSSProperties = {
        position: "absolute",
        left: "265px",
        top: "2px",
        transform: "scale(.7)",
        transition: ".3s",
        
    };
    const Remove_Text: CSSProperties = {
        bottom: "-60px",
        position: "absolute",
        fontFamily: "verdana",
        fontSize: "15px",
        textAlign: "center",
        color: "rgb(255, 255, 255)",
        paddingLeft: "15px",
        paddingRight: "15px",
        paddingTop: "5px",
        paddingBottom: "5px",
        right: "0px",
        borderRadius: "5px",
        backgroundColor: "rgb(255, 3, 0, 1)",
        opacity: "1",
        transform: ".3s",
        transition: ".3s",
        cursor: "pointer"
    };

    const Remove_Text_View: CSSProperties = {
        bottom: "29px",
        position: "absolute",
        fontFamily: "verdana",
        fontSize: "15px",
        textAlign: "center",
        color: "rgb(255, 255, 255)",
        paddingLeft: "15px",
        paddingRight: "15px",
        paddingTop: "5px",
        paddingBottom: "5px",
        right: "60px",
        borderRadius: "5px",
        backgroundColor: "rgb(255, 3, 0, 1)",
        opacity: "1",
        transform: ".3s",
        transition: ".3s",
        cursor: "pointer"
    };

    const Cancel_Remove: CSSProperties = {
        top: "2px",
        position: "absolute",
        fontFamily: "verdana",
        fontSize: "16px",
        textAlign: "center",
        color: "rgb(255, 255, 255)",
        left: "269px",
        transform: "scale(.7)",
        transition: ".3s",
        display: "none",
    };

    const Video_Img_Style: CSSProperties = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "none",
        transition: ".2s",
        backgroundColor: "rgb(10, 10, 10, .5)",
        padding: "10px",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
    };

    const Picture_Img_Style: CSSProperties = {
        opacity: "0",
    };

    const Exit_Resize_Style: CSSProperties = {
        position: "absolute",
        display: "none",
        top: "5px",
        right: "5px",
    };

    const Marker_Style: CSSProperties = {
        position: "absolute",
        top: "0px",
        left: "5px",
    };

    const Saved_Photo_Item_Style: CSSProperties = {
        width: "100%",
        height: "100%",
        display: "none",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
    };

    const Saved_Video_Item_Style: CSSProperties = {
        width: "100%",
        height: "100%",
        display: "none",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
    };

    const Bottom_Space: CSSProperties = {
        height: "300px",
      
    };
    
    const Items_Saved: CSSProperties = {
       fontFamily: "verdana",
       fontSize: "15px",
       color: "white",
       position: "absolute",
       right: "10%",
       top: "60px",
      
    };
     
    const No_Saved_Style: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "20px",
        padding: "20px",
        color: "rgb(100, 100, 100)",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        display: "none",
    };

    const No_Saved_Container_Style: CSSProperties = {
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: "rgb(15, 15, 15)",
        top: "42px",
        filter: "brightness(100%)",
        display: "none",
        
    };

    const Update_Saved_List: CSSProperties = {
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0%)",
        top: "50px",
        zIndex: "50",
        border: "none",
        borderRadius: "5px",
        fontFamily: "verdana",
        fontSize: "16px",
        backgroundColor: "rgb(125, 151, 253)",
        color: "white",
        height: "30px",
        width: "150px",
    };

    const Reload_Img_Style: CSSProperties = {
        transform: "scale(.5)",
        verticalAlign: "middle",
        marginTop: "-3px",
    };

    const footerStyle: CSSProperties = {
        borderTop: '1px solid rgba(255, 255, 255, 1)',
        position: 'relative',
        backgroundColor: 'rgb(15, 15, 15)',
        width: '80%',
        left: "50%",
        transform: "translate(-50%, 0%)",
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
        width: "35%",
  
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

      const Download_Btn_Style: CSSProperties = {
        color: "rgb(255, 255, 255)",
        fontFamily: "helvetica",
        fontSize: "15px",
        position: "absolute",
        bottom: "-43px",
        right: "105px",
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

    const Download_Btn_Style_View: CSSProperties = {
        color: "rgb(255, 255, 255)",
        fontFamily: "helvetica",
        fontSize: "15px",
        position: "absolute",
        bottom: "45px",
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

    const open_in_browser_style: CSSProperties = {
        position: "absolute",
        color: "rgb(255, 255, 255)",
        fontFamily: "arial",
        fontSize: "12px",
        right: "5px",
        bottom: "-15px",
        textDecoration: "underline",
        cursor: "pointer",
        textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
        display: "none",
      };

    function updateStyles(){
        const screenWidth = window.innerWidth;

        const Video_Item_Style_smallest: CSSProperties={
          height: "250px",
          /*width: "90%",*/
        };

        
        const Video_Remove_Btn_Style_smallest: CSSProperties={
            fontSize: "12px",
            paddingLeft: "10px",
            paddingRight: "10px",
            bottom: "-50px",
          };
  

        const Video_Item_Style_small: CSSProperties={
          height: "275px",
          /*width: "500px",*/
        };

        const Smaller_ScreenSize_download_btn: CSSProperties = {
            fontSize: "12px",
            bottom: "-34px",
            paddingLeft: "10px",
            paddingRight: "10px",
            right: "75px",
          };
        
          const Smaller_ScreenSize_download_btn_view: CSSProperties = {
            fontSize: "12px",
            bottom: "25px",
            paddingLeft: "10px",
            paddingRight: "10px",
            right: "20px",
          };
          
          const Smaller_ScreenSize_remove_btn_view: CSSProperties = {
            fontSize: "12px",
            bottom: "9px",
            paddingLeft: "10px",
            paddingRight: "10px",
            right: "20px",
          };

        const Smaller_ScreenSize_View_user: CSSProperties = {
            top: "375px",
        };
        
        const Smaller_ScreenSize_Exit_View: CSSProperties = {
            right: "1%",
        };

        const Smaller_ScreenSize_download_img: CSSProperties = {
            width: "13px",
            height: "13px",
        };

        const Smaller_ScreenSize_video_View: CSSProperties = {
            height: "250px",
        };

        const Smaller_ScreenSize_video_actual_View: CSSProperties = {
            height: "425px",
        };
        if(screenWidth <= 890){
            Object.assign(Saved_Item_Style, Video_Item_Style_small);
    
        }
        if(screenWidth <= 560){
          Object.assign(Saved_Item_Style, Video_Item_Style_smallest);
          Object.assign(Remove_Text, Video_Remove_Btn_Style_smallest);
          Object.assign(View_Video_Actual_Container, Smaller_ScreenSize_video_actual_View);
          Object.assign( View_Exit_Img_Resize, Smaller_ScreenSize_Exit_View);
          Object.assign( View_Video_Style, Smaller_ScreenSize_video_View);
          Object.assign( view_user_text_style, Smaller_ScreenSize_View_user);
          Object.assign( Download_Btn_Style, Smaller_ScreenSize_download_btn);
          Object.assign( Download_Image_Style, Smaller_ScreenSize_download_img);
          Object.assign( Download_Btn_Style_View, Smaller_ScreenSize_download_btn_view);
          Object.assign( Remove_Text_View, Smaller_ScreenSize_remove_btn_view);
      }
    }
    
    updateStyles();

    const [controlsEnabled, setControlsEnabled] = useState(false);

    const toggleControls = () => {
      setControlsEnabled(prevEnabled => !prevEnabled);
    };

    
   
    return(



        
        <div style={Main_Style} id="Main_Container">
        
        <HoverImg containerId="Saved_Item_1" sourceTextId="user_text_1" Video="Saved_Video_Item_1" PlayImg="Video_Img_1" Resize_Id_v="Heart_vid_1" enabled={true}/>
        <HoverImg containerId="Saved_Item_2" sourceTextId="user_text_2" Video="Saved_Video_Item_2" PlayImg="Video_Img_2" Resize_Id_v="Heart_vid_2" enabled={true}/>
        <HoverImg containerId="Saved_Item_3" sourceTextId="user_text_3" Video="Saved_Video_Item_3" PlayImg="Video_Img_3" Resize_Id_v="Heart_vid_3" enabled={true}/>
        <HoverImg containerId="Saved_Item_4" sourceTextId="user_text_4" Video="Saved_Video_Item_4" PlayImg="Video_Img_4" Resize_Id_v="Heart_vid_4" enabled={true}/>
        <HoverImg containerId="Saved_Item_5" sourceTextId="user_text_5" Video="Saved_Video_Item_5" PlayImg="Video_Img_5" Resize_Id_v="Heart_vid_5" enabled={true}/>
        <HoverImg containerId="Saved_Item_6" sourceTextId="user_text_6" Video="Saved_Video_Item_6" PlayImg="Video_Img_6" Resize_Id_v="Heart_vid_6" enabled={true}/>
        <HoverImg containerId="Saved_Item_7" sourceTextId="user_text_7" Video="Saved_Video_Item_7" PlayImg="Video_Img_7" Resize_Id_v="Heart_vid_7" enabled={true}/>
        <HoverImg containerId="Saved_Item_8" sourceTextId="user_text_8" Video="Saved_Video_Item_8" PlayImg="Video_Img_8" Resize_Id_v="Heart_vid_8" enabled={true}/>
        <HoverImg containerId="Saved_Item_9" sourceTextId="user_text_9" Video="Saved_Video_Item_9" PlayImg="Video_Img_9" Resize_Id_v="Heart_vid_9" enabled={true}/>
        <HoverImg containerId="Saved_Item_10" sourceTextId="user_text_10" Video="Saved_Video_Item_10" PlayImg="Video_Img_10" Resize_Id_v="Heart_vid_10" enabled={true}/>


            {/* 
            <button id="Reload_Btn" style={Update_Saved_List} onClick={GetSavedItems_Database_function}>Update List<img style={Reload_Img_Style} src={Reload_Img}/></button>
            */}
            <img id="View_Exit_Img_Saved" src={Exit_Img_p_Search} onClick={() => Exit_Photo_Item_v()} style={View_Exit_Img_Resize}/>
            <div id="View_Video_Saved" style={view_video_style_Container}> 
                <div style={View_Video_Actual_Container}>
                    <div id="view_top_items" style={top_items_style}>
                    <p style={view_title_style}>Pixel Peak</p>
                    <p style={view_title_style}>Videos</p>
                    </div>
                    <video id="Video_View_Actual_Saved"  style={View_Video_Style} typeof="video/mp4" controls={controlsEnabled}></video>
                    <p id="view_video_user_Saved" style={view_user_text_style}></p>
                    <button style={Download_Btn_Style_View}> <img style={Download_Image_Style} src={download_Img}/><span id="View_Download_Btn_Saved">Download</span></button>

                </div>
            </div>

            <div style={Saved_Container_Style} id="Saved_Container">
                <div id="Marker" style={Marker_Style}></div>
                <p id="Back_Saved" style={Back_Img_Style_Saved} onClick={closeTab}>Back</p>
                <div style={Items_Saved}>Items Saved: <span id="Saved_Number">0</span></div>
                
                <div id="Saved_Item_1" style={Saved_Item_Style}>
                    <img id="Saved_Photo_Item_1" style={Saved_Photo_Item_Style}/>
                    <video id="Saved_Video_Item_1" style={Saved_Video_Item_Style}  typeof="video/mp4" controls={controlsEnabled} autoPlay loop muted></video>
                    <img id="Resize_Saved_1" style={Resize_Saved} src={Resize_Saved_Saved} onClick={() => Resize_Photo_Item_Saved({Container_Id: "Saved_Item_1", Exit_Id: "Exit_Img_Resize_1", Resize_Id: "Resize_Saved_1", Picture_Id: "Picture_Img_1", Video_Id: "Video_Img_1", Remove_Pic_Id: "Remove_Saved_Item_1", Remove_Text_Id: "Remove_Text_1"})}/>
                    <p id="Remove_Text_1" style={Remove_Text} onClick={() => {Remove_Saved_Item_Database({src_p: "Picture_Img_1", src_v: "Video_Img_1", numb: 0})}}  >Remove</p>
                    <img id="Cancel_Image_1" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_1", Remove_Img_Cancel: "Remove_Saved_Item_1", Cancel_Img: "Cancel_Image_1"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                    <img src={Video_Img} style={Video_Img_Style} id="Video_Img_1" />
                    <img src={Picture_Img} style={Picture_Img_Style} id="Picture_Img_1" />
                    <img src={Exit_Img} style={Exit_Resize_Style} id="Exit_Img_Resize_1" onClick={() => Exit_Photo_Item_Saved({Container_Id_exit: "Saved_Item_1", Exit_Id_exit: "Exit_Img_Resize_1", Resize_Id_exit: "Resize_Saved_1", Picture_Id_exit: "Picture_Img_1", Video_Id_exit: "Video_Img_1", Remove_Pic_Id_exit: "Remove_Saved_Item_1", Remove_Text_Id_exit: "Remove_Text_1"})}/>
                    <div style={user_text_style_container}>
                        <p id="user_text_1" className="video_user" style={user_text_style}>By: </p>
                    </div>
                    <button id="download_Button_actual_1" style={Download_Btn_Style}><img style={Download_Image_Style} src={download_Img}/><span id="Download_Button_s_1">Download</span></button>
                    <p id="Open_Browser_1" style={open_in_browser_style}>Open in browser</p>
                </div>

                <div id="Saved_Item_2" style={Saved_Item_Style}>
                    <img id="Saved_Photo_Item_2" style={Saved_Photo_Item_Style}/>
                    <video id="Saved_Video_Item_2" style={Saved_Video_Item_Style}  typeof="video/mp4" controls={controlsEnabled} autoPlay loop muted></video>
                    <img id="Resize_Saved_2" style={Resize_Saved} src={Resize_Saved_Saved} onClick={() => Resize_Photo_Item_Saved({Container_Id: "Saved_Item_2", Exit_Id: "Exit_Img_Resize_2", Resize_Id: "Resize_Saved_2", Picture_Id: "Picture_Img_2", Video_Id: "Video_Img_2", Remove_Pic_Id: "Remove_Saved_Item_2", Remove_Text_Id: "Remove_Text_2"})}/>
                    <p id="Remove_Text_2" style={Remove_Text} onClick={() => {Remove_Saved_Item_Database({src_p: "Picture_Img_2", src_v: "Video_Img_2", numb: 1})}}>Remove</p>
                    <img id="Cancel_Image_2" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_2", Remove_Img_Cancel: "Remove_Saved_Item_2", Cancel_Img: "Cancel_Image_2"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                    <img src={Video_Img} style={Video_Img_Style} id="Video_Img_2" />
                    <img src={Picture_Img} style={Picture_Img_Style} id="Picture_Img_2" />
                    <img src={Exit_Img} style={Exit_Resize_Style} id="Exit_Img_Resize_2" onClick={() => Exit_Photo_Item_Saved({Container_Id_exit: "Saved_Item_2", Exit_Id_exit: "Exit_Img_Resize_2", Resize_Id_exit: "Resize_Saved_2", Picture_Id_exit: "Picture_Img_2", Video_Id_exit: "Video_Img_2", Remove_Pic_Id_exit: "Remove_Saved_Item_2", Remove_Text_Id_exit: "Remove_Text_2"})}/>
                    <div style={user_text_style_container}>
                        <p id="user_text_2" className="video_user" style={user_text_style}>By: </p>
                    </div>
                    <button id="download_Button_actual_2" style={Download_Btn_Style}><img style={Download_Image_Style} src={download_Img}/><span id="Download_Button_s_2">Download</span></button>
                    <p id="Open_Browser_2" style={open_in_browser_style}>Open in browser</p>
                </div>

                <div id="Saved_Item_3" style={Saved_Item_Style}>
                    <img id="Saved_Photo_Item_3" style={Saved_Photo_Item_Style}/>
                    <video id="Saved_Video_Item_3" style={Saved_Video_Item_Style}  typeof="video/mp4" controls={controlsEnabled} autoPlay loop muted></video>
                    <img id="Resize_Saved_3" style={Resize_Saved} src={Resize_Saved_Saved} onClick={() => Resize_Photo_Item_Saved({Container_Id: "Saved_Item_3", Exit_Id: "Exit_Img_Resize_3", Resize_Id: "Resize_Saved_3", Picture_Id: "Picture_Img_3", Video_Id: "Video_Img_3", Remove_Pic_Id: "Remove_Saved_Item_3", Remove_Text_Id: "Remove_Text_3"})}/>
                   
                    <p id="Remove_Text_3" style={Remove_Text} onClick={() => {Remove_Saved_Item_Database({src_p: "Picture_Img_3", src_v: "Video_Img_3", numb: 2})}}>Remove</p>
                    <img id="Cancel_Image_3" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_3", Remove_Img_Cancel: "Remove_Saved_Item_3", Cancel_Img: "Cancel_Image_3"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                    <img src={Video_Img} style={Video_Img_Style} id="Video_Img_3" />
                    <img src={Picture_Img} style={Picture_Img_Style} id="Picture_Img_3" />
                    <img src={Exit_Img} style={Exit_Resize_Style} id="Exit_Img_Resize_3" onClick={() => Exit_Photo_Item_Saved({Container_Id_exit: "Saved_Item_3", Exit_Id_exit: "Exit_Img_Resize_3", Resize_Id_exit: "Resize_Saved_3", Picture_Id_exit: "Picture_Img_3", Video_Id_exit: "Video_Img_3", Remove_Pic_Id_exit: "Remove_Saved_Item_3", Remove_Text_Id_exit: "Remove_Text_3"})}/>
                    <div style={user_text_style_container}>
                        <p id="user_text_3" className="video_user" style={user_text_style}>By: </p>
                    </div>
                    <button id="download_Button_actual_3" style={Download_Btn_Style}><img style={Download_Image_Style} src={download_Img}/><span id="Download_Button_s_3">Download</span></button>
                    <p id="Open_Browser_3" style={open_in_browser_style}>Open in browser</p>
                </div>

                <div id="Saved_Item_4" style={Saved_Item_Style}>
                    <img id="Saved_Photo_Item_4" style={Saved_Photo_Item_Style}/>
                    <video id="Saved_Video_Item_4" style={Saved_Video_Item_Style}  typeof="video/mp4" controls={controlsEnabled} autoPlay loop muted></video>
                    <img id="Resize_Saved_4" style={Resize_Saved} src={Resize_Saved_Saved} onClick={() => Resize_Photo_Item_Saved({Container_Id: "Saved_Item_4", Exit_Id: "Exit_Img_Resize_4", Resize_Id: "Resize_Saved_4", Picture_Id: "Picture_Img_4", Video_Id: "Video_Img_4", Remove_Pic_Id: "Remove_Saved_Item_4", Remove_Text_Id: "Remove_Text_4"})}/>
            
                    <p id="Remove_Text_4" style={Remove_Text} onClick={() => {Remove_Saved_Item_Database({src_p: "Picture_Img_4", src_v: "Video_Img_4", numb: 3})}}>Remove</p>
                    <img id="Cancel_Image_4" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_4", Remove_Img_Cancel: "Remove_Saved_Item_4", Cancel_Img: "Cancel_Image_4"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                    <img src={Video_Img} style={Video_Img_Style} id="Video_Img_4" />
                    <img src={Picture_Img} style={Picture_Img_Style} id="Picture_Img_4" />
                    <img src={Exit_Img} style={Exit_Resize_Style} id="Exit_Img_Resize_4" onClick={() => Exit_Photo_Item_Saved({Container_Id_exit: "Saved_Item_4", Exit_Id_exit: "Exit_Img_Resize_4", Resize_Id_exit: "Resize_Saved_4", Picture_Id_exit: "Picture_Img_4", Video_Id_exit: "Video_Img_4", Remove_Pic_Id_exit: "Remove_Saved_Item_4", Remove_Text_Id_exit: "Remove_Text_4"})}/>
                    <div style={user_text_style_container}>
                        <p id="user_text_4" className="video_user" style={user_text_style}>By: </p>
                    </div>
                    <button id="download_Button_actual_4" style={Download_Btn_Style}><img style={Download_Image_Style} src={download_Img}/><span id="Download_Button_s_4">Download</span></button>
                    <p id="Open_Browser_4" style={open_in_browser_style}>Open in browser</p>
                </div>

                <div id="Saved_Item_5" style={Saved_Item_Style}>
                    <img id="Saved_Photo_Item_5" style={Saved_Photo_Item_Style}/>
                    <video id="Saved_Video_Item_5" style={Saved_Video_Item_Style}  typeof="video/mp4" controls={controlsEnabled} autoPlay loop muted></video>
                    <img id="Resize_Saved_5" style={Resize_Saved} src={Resize_Saved_Saved} onClick={() => Resize_Photo_Item_Saved({Container_Id: "Saved_Item_5", Exit_Id: "Exit_Img_Resize_5", Resize_Id: "Resize_Saved_5", Picture_Id: "Picture_Img_5", Video_Id: "Video_Img_5", Remove_Pic_Id: "Remove_Saved_Item_5", Remove_Text_Id: "Remove_Text_5"})}/>
          
                    <p id="Remove_Text_5" style={Remove_Text} onClick={() => {Remove_Saved_Item_Database({src_p: "Picture_Img_5", src_v: "Video_Img_5", numb: 4})}}>Remove</p>
                    <img id="Cancel_Image_5" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_5", Remove_Img_Cancel: "Remove_Saved_Item_5", Cancel_Img: "Cancel_Image_5"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                    <img src={Video_Img} style={Video_Img_Style} id="Video_Img_5" />
                    <img src={Picture_Img} style={Picture_Img_Style} id="Picture_Img_5" />
                    <img src={Exit_Img} style={Exit_Resize_Style} id="Exit_Img_Resize_5" onClick={() => Exit_Photo_Item_Saved({Container_Id_exit: "Saved_Item_5", Exit_Id_exit: "Exit_Img_Resize_5", Resize_Id_exit: "Resize_Saved_5", Picture_Id_exit: "Picture_Img_5", Video_Id_exit: "Video_Img_5", Remove_Pic_Id_exit: "Remove_Saved_Item_5", Remove_Text_Id_exit: "Remove_Text_5"})}/>
                    <div style={user_text_style_container}>
                        <p id="user_text_5" className="video_user" style={user_text_style}>By: </p>
                    </div>
                    <button id="download_Button_actual_5" style={Download_Btn_Style}><img style={Download_Image_Style} src={download_Img}/><span id="Download_Button_s_5">Download</span></button>
                    <p id="Open_Browser_5" style={open_in_browser_style}>Open in browser</p>
                </div>

                <div id="Saved_Item_6" style={Saved_Item_Style}>
                    <img id="Saved_Photo_Item_6" style={Saved_Photo_Item_Style}/>
                    <video id="Saved_Video_Item_6" style={Saved_Video_Item_Style}  typeof="video/mp4" controls={controlsEnabled} autoPlay  loop muted></video>
                    <img id="Resize_Saved_6" style={Resize_Saved} src={Resize_Saved_Saved} onClick={() => Resize_Photo_Item_Saved({Container_Id: "Saved_Item_6", Exit_Id: "Exit_Img_Resize_6", Resize_Id: "Resize_Saved_6", Picture_Id: "Picture_Img_6", Video_Id: "Video_Img_6", Remove_Pic_Id: "Remove_Saved_Item_6", Remove_Text_Id: "Remove_Text_6"})}/>
                    
                    <p id="Remove_Text_6" style={Remove_Text} onClick={() => {Remove_Saved_Item_Database({src_p: "Picture_Img_6", src_v: "Video_Img_6", numb: 5})}}>Remove</p>
                    <img id="Cancel_Image_6" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_6", Remove_Img_Cancel: "Remove_Saved_Item_6", Cancel_Img: "Cancel_Image_6"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                    <img src={Video_Img} style={Video_Img_Style} id="Video_Img_6" />
                    <img src={Picture_Img} style={Picture_Img_Style} id="Picture_Img_6" />
                    <img src={Exit_Img} style={Exit_Resize_Style} id="Exit_Img_Resize_6" onClick={() => Exit_Photo_Item_Saved({Container_Id_exit: "Saved_Item_6", Exit_Id_exit: "Exit_Img_Resize_6", Resize_Id_exit: "Resize_Saved_6", Picture_Id_exit: "Picture_Img_6", Video_Id_exit: "Video_Img_6", Remove_Pic_Id_exit: "Remove_Saved_Item_6", Remove_Text_Id_exit: "Remove_Text_6"})}/>
                    <div style={user_text_style_container}>
                        <p id="user_text_6" className="video_user" style={user_text_style}>By: </p>
                    </div>
                    <button id="download_Button_actual_6" style={Download_Btn_Style}><img style={Download_Image_Style} src={download_Img}/><span id="Download_Button_s_6">Download</span></button>
                    <p id="Open_Browser_6" style={open_in_browser_style}>Open in browser</p>
                </div>

                <div id="Saved_Item_7" style={Saved_Item_Style}>
                    <img id="Saved_Photo_Item_7" style={Saved_Photo_Item_Style}/>
                    <video id="Saved_Video_Item_7" style={Saved_Video_Item_Style}  typeof="video/mp4" controls={controlsEnabled} autoPlay  loop muted></video>
                    <img id="Resize_Saved_7" style={Resize_Saved} src={Resize_Saved_Saved} onClick={() => Resize_Photo_Item_Saved({Container_Id: "Saved_Item_7", Exit_Id: "Exit_Img_Resize_7", Resize_Id: "Resize_Saved_7", Picture_Id: "Picture_Img_7", Video_Id: "Video_Img_7", Remove_Pic_Id: "Remove_Saved_Item_7", Remove_Text_Id: "Remove_Text_7"})}/>
            
                    <p id="Remove_Text_7" style={Remove_Text} onClick={() => {Remove_Saved_Item_Database({src_p: "Picture_Img_7", src_v: "Video_Img_7", numb: 6})}}>Remove</p>
                    <img id="Cancel_Image_7" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_7", Remove_Img_Cancel: "Remove_Saved_Item_7", Cancel_Img: "Cancel_Image_7"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                    <img src={Video_Img} style={Video_Img_Style} id="Video_Img_7" />
                    <img src={Picture_Img} style={Picture_Img_Style} id="Picture_Img_7" />
                    <img src={Exit_Img} style={Exit_Resize_Style} id="Exit_Img_Resize_7" onClick={() => Exit_Photo_Item_Saved({Container_Id_exit: "Saved_Item_7", Exit_Id_exit: "Exit_Img_Resize_7", Resize_Id_exit: "Resize_Saved_7", Picture_Id_exit: "Picture_Img_7", Video_Id_exit: "Video_Img_7", Remove_Pic_Id_exit: "Remove_Saved_Item_7", Remove_Text_Id_exit: "Remove_Text_7"})}/>
                    <div style={user_text_style_container}>
                        <p id="user_text_7" className="video_user" style={user_text_style}>By: </p>
                    </div>
                    <button id="download_Button_actual_7" style={Download_Btn_Style}><img style={Download_Image_Style} src={download_Img}/><span id="Download_Button_s_7">Download</span></button>
                    <p id="Open_Browser_7" style={open_in_browser_style}>Open in browser</p>
                </div>

                <div id="Saved_Item_8" style={Saved_Item_Style}>
                    <img id="Saved_Photo_Item_8" style={Saved_Photo_Item_Style}/>
                    <video id="Saved_Video_Item_8" style={Saved_Video_Item_Style}  typeof="video/mp4" controls={controlsEnabled} autoPlay loop muted></video>
                    <img id="Resize_Saved_8" style={Resize_Saved} src={Resize_Saved_Saved} onClick={() => Resize_Photo_Item_Saved({Container_Id: "Saved_Item_8", Exit_Id: "Exit_Img_Resize_8", Resize_Id: "Resize_Saved_8", Picture_Id: "Picture_Img_8", Video_Id: "Video_Img_8", Remove_Pic_Id: "Remove_Saved_Item_8", Remove_Text_Id: "Remove_Text_8"})}/>
                
                    <p id="Remove_Text_8" style={Remove_Text} onClick={() => {Remove_Saved_Item_Database({src_p: "Picture_Img_8", src_v: "Video_Img_8", numb: 7})}}>Remove</p>
                    <img id="Cancel_Image_8" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_8", Remove_Img_Cancel: "Remove_Saved_Item_8", Cancel_Img: "Cancel_Image_8"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                    <img src={Video_Img} style={Video_Img_Style} id="Video_Img_8" />
                    <img src={Picture_Img} style={Picture_Img_Style} id="Picture_Img_8" />
                    <img src={Exit_Img} style={Exit_Resize_Style} id="Exit_Img_Resize_8" onClick={() => Exit_Photo_Item_Saved({Container_Id_exit: "Saved_Item_8", Exit_Id_exit: "Exit_Img_Resize_8", Resize_Id_exit: "Resize_Saved_8", Picture_Id_exit: "Picture_Img_8", Video_Id_exit: "Video_Img_8", Remove_Pic_Id_exit: "Remove_Saved_Item_8", Remove_Text_Id_exit: "Remove_Text_8"})}/>
                    <div style={user_text_style_container}>
                        <p id="user_text_8" className="video_user" style={user_text_style}>By: </p>
                    </div>
                    <button id="download_Button_actual_8" style={Download_Btn_Style}><img style={Download_Image_Style} src={download_Img}/><span id="Download_Button_s_8">Download</span></button>
                    <p id="Open_Browser_8" style={open_in_browser_style}>Open in browser</p>
                </div>

                <div id="Saved_Item_9" style={Saved_Item_Style}>
                    <img id="Saved_Photo_Item_9" style={Saved_Photo_Item_Style}/>
                    <video id="Saved_Video_Item_9" style={Saved_Video_Item_Style}  typeof="video/mp4" controls={controlsEnabled} autoPlay loop muted></video>
                    <img id="Resize_Saved_9" style={Resize_Saved} src={Resize_Saved_Saved} onClick={() => Resize_Photo_Item_Saved({Container_Id: "Saved_Item_9", Exit_Id: "Exit_Img_Resize_9", Resize_Id: "Resize_Saved_9", Picture_Id: "Picture_Img_9", Video_Id: "Video_Img_9", Remove_Pic_Id: "Remove_Saved_Item_9", Remove_Text_Id: "Remove_Text_9"})}/>
                   
                    <p id="Remove_Text_9" style={Remove_Text} onClick={() => {Remove_Saved_Item_Database({src_p: "Picture_Img_9", src_v: "Video_Img_9", numb: 8})}}>Remove</p>
                    <img id="Cancel_Image_9" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_9", Remove_Img_Cancel: "Remove_Saved_Item_9", Cancel_Img: "Cancel_Image_9"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                    <img src={Video_Img} style={Video_Img_Style} id="Video_Img_9" />
                    <img src={Picture_Img} style={Picture_Img_Style} id="Picture_Img_9" />
                    <img src={Exit_Img} style={Exit_Resize_Style} id="Exit_Img_Resize_9" onClick={() => Exit_Photo_Item_Saved({Container_Id_exit: "Saved_Item_9", Exit_Id_exit: "Exit_Img_Resize_9", Resize_Id_exit: "Resize_Saved_9", Picture_Id_exit: "Picture_Img_9", Video_Id_exit: "Video_Img_9", Remove_Pic_Id_exit: "Remove_Saved_Item_9", Remove_Text_Id_exit: "Remove_Text_9"})}/>
                    <div style={user_text_style_container}>
                        <p id="user_text_9" className="video_user" style={user_text_style}>By: </p>
                    </div>
                    <button id="download_Button_actual_9" style={Download_Btn_Style}><img style={Download_Image_Style} src={download_Img}/><span id="Download_Button_s_9">Download</span></button>
                    <p id="Open_Browser_9" style={open_in_browser_style}>Open in browser</p>
                </div>
                
                <div id="Saved_Item_10" style={Saved_Item_Style}>
                    <img id="Saved_Photo_Item_10" style={Saved_Photo_Item_Style}/>
                    <video id="Saved_Video_Item_10" style={Saved_Video_Item_Style}  typeof="video/mp4" controls={controlsEnabled} autoPlay loop muted></video>
                    <img id="Resize_Saved_10" style={Resize_Saved} src={Resize_Saved_Saved} onClick={() => Resize_Photo_Item_Saved({Container_Id: "Saved_Item_10", Exit_Id: "Exit_Img_Resize_10", Resize_Id: "Resize_Saved_10", Picture_Id: "Picture_Img_10", Video_Id: "Video_Img_10", Remove_Pic_Id: "Remove_Saved_Item_10", Remove_Text_Id: "Remove_Text_10"})}/>
                    <p id="Remove_Text_10" style={Remove_Text} onClick={() => {Remove_Saved_Item_Database({src_p: "Picture_Img_10", src_v: "Video_Img_10", numb: 9})}}>Remove</p>
                    <img id="Cancel_Image_10" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_10", Remove_Img_Cancel: "Remove_Saved_Item_10", Cancel_Img: "Cancel_Image_10"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                    <img src={Video_Img} style={Video_Img_Style} id="Video_Img_10" />
                    <img src={Picture_Img} style={Picture_Img_Style} id="Picture_Img_10" />
                    <img src={Exit_Img} style={Exit_Resize_Style} id="Exit_Img_Resize_10" onClick={() => Exit_Photo_Item_Saved({Container_Id_exit: "Saved_Item_10", Exit_Id_exit: "Exit_Img_Resize_10", Resize_Id_exit: "Resize_Saved_10", Picture_Id_exit: "Picture_Img_10", Video_Id_exit: "Video_Img_10", Remove_Pic_Id_exit: "Remove_Saved_Item_10", Remove_Text_Id_exit: "Remove_Text_10"})}/>
                    <div style={user_text_style_container}>
                        <p id="user_text_10" className="video_user" style={user_text_style}>By: </p>
                    </div>
                    <button id="download_Button_actual_10" style={Download_Btn_Style}><img style={Download_Image_Style} src={download_Img}/><span id="Download_Button_s_10">Download</span></button>
                    <p id="Open_Browser_10" style={open_in_browser_style}>Open in browser</p>
                </div>
                <div style={Bottom_Space} id="Bottom_Saved_Space"></div>
                <div id="Footer" className="Scroll_Div" style={footerStyle}>
                    <p style={Footer_Title}>Pixel Peak</p>
                    {/*
                        <div id="Account">
                        <p id="Acc_Title" className="Title_Class_Footer" style={titleStyle}>Account</p>
                        <p className="Footer_Link" id="Login_Link_p" style={linkStyle}>Login</p>
                        </div>

                        <div id="QuickLinks">
                        <p id="Quic_Title" className="Title_Class_Footer" style={titleStyle}>Quick Links</p>
                        <p className="Footer_Link" id="Videos_Link_p" style={linkStyle}>Videos</p>
                        <p className="Footer_Link" id="Photos_Link_p" style={linkStyle}>Photos</p>
                        </div>

                        <div id="About">
                        <p id="Abt_Title" className="Title_Class_Footer" style={titleStyle}>About</p>
                        <p className="Footer_Link" id="Info_Link_p" style={linkStyle}>Information</p>
                        </div>
                        */}
                        <p id="CopyWright" style={copyrightStyle}>
                        Copyright © 2024 Pixel Peak. All Rights Reserved. User Agreement, Privacy,
                        Payments Terms of Use, Cookies and AdChoice. Made By Lukas Leins
                        </p>
                </div>
            </div>
           
            <div id="No_Saved_Items_Container" style={No_Saved_Container_Style}>

            </div>
            <p id="No_Saved_Text" style={No_Saved_Style}>You have no saved items...</p>
            <p id="Back_None" style={Back_Img_Style_Saved} onClick={closeTab}>Back</p>
        </div>

    );

};

export default Saved_Style;