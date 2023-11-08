import { CSSProperties } from "react";
import Resize_Saved_Saved from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\ResizeImg.png";
import Exit_Saved_Saved from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\Images\\Exit.png";
import Exit_Img from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\Images\\ExitLogin.png";
import React, { useRef, RefObject, useEffect, useState } from "react";
import Remove_Img from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\remove.png";
import Picture_Img from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\PicImg.png";
import Video_Img from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\PlayImg.png";
import Exit_Img_white from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\RightArrow.png";
import Cookies from 'js-cookie';
import { Collection } from "mongoose";


function Saved_Style(){

    const [urlArray_Saved, seturlArray_Saved] = useState<string[]>([]);

   
    //const newString = "new string value";
  
    //seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString]);

    function closeTab(){
        const MainContainer = document.getElementById("Saved_React");
        const Account_Container = document.getElementById("Login_Container");
        if(MainContainer) MainContainer.style.left = "200%";
        if(Account_Container) Account_Container.style.visibility = "visible";
        

    }

    interface Remove_Saved{
        Remove_Id: string;
        Remove_Img: string;
        Cancel_Image: string;
    }

    function Remove_Saved_Item({Remove_Id, Remove_Img, Cancel_Image}: Remove_Saved){
        const Remove_Text = document.getElementById(Remove_Id);
        const Remove_Image = document.getElementById(Remove_Img);
        const Cancel_Img = document.getElementById(Cancel_Image);

        if (Remove_Text){ 
            Remove_Text.style.opacity = "1";
            Remove_Text.style.left = "40px";
            
        }
        if(Remove_Image){
            Remove_Image.style.display = "none";
        }
        if(Cancel_Img){
            Cancel_Img.style.display = "block";

        }
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
            actual_remove_text.style.opacity = "1";
            actual_remove_text.style.top = "5px";
            actual_remove_text.style.left = "40%";
            actual_remove_text.style.right = "40%";
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
  
        if(actual_container){
            actual_container.style.width = "300px";
            actual_container.style.height = "200px";
            actual_container.style.position = "relative";
            actual_container.style.left = "30%";
            actual_container.style.top = "100px";
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
            actual_remove_text.style.opacity = "0";
            actual_remove_text.style.top = "5px";
            actual_remove_text.style.left = "300px";
            actual_remove_text.style.right = "30px";
        }

        const element = document.getElementById(Container_Id_exit);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }

    }

        const Container_1 = document.getElementById("Saved_Item_1");
        const Saved_Photo_1 = document.getElementById("Saved_Photo_Item_1") as HTMLImageElement;
        const Saved_Video_1 = document.getElementById("Saved_Video_Item_1") as HTMLVideoElement;
        const Video_Image_1 = document.getElementById("Video_Img_1");
        const Photo_Image_1 = document.getElementById("Picture_Img_1");
        
        const Container_2 = document.getElementById("Saved_Item_2");
        const Saved_Photo_2 = document.getElementById("Saved_Photo_Item_2")as HTMLImageElement;
        const Saved_Video_2 = document.getElementById("Saved_Video_Item_2")as HTMLVideoElement;
        const Video_Image_2 = document.getElementById("Video_Img_2");
        const Photo_Image_2 = document.getElementById("Picture_Img_2");
    
        const Container_3 = document.getElementById("Saved_Item_3");
        const Saved_Photo_3 = document.getElementById("Saved_Photo_Item_3")as HTMLImageElement;
        const Saved_Video_3 = document.getElementById("Saved_Video_Item_3")as HTMLVideoElement;
        const Video_Image_3 = document.getElementById("Video_Img_3");
        const Photo_Image_3 = document.getElementById("Picture_Img_3");
    
        const Container_4 = document.getElementById("Saved_Item_4");
        const Saved_Photo_4 = document.getElementById("Saved_Photo_Item_4")as HTMLImageElement;
        const Saved_Video_4 = document.getElementById("Saved_Video_Item_4")as HTMLVideoElement;
        const Video_Image_4 = document.getElementById("Video_Img_4");
        const Photo_Image_4 = document.getElementById("Picture_Img_4");
    
        const Container_5 = document.getElementById("Saved_Item_5");
        const Saved_Photo_5 = document.getElementById("Saved_Photo_Item_5")as HTMLImageElement;
        const Saved_Video_5 = document.getElementById("Saved_Video_Item_5")as HTMLVideoElement;
        const Video_Image_5 = document.getElementById("Video_Img_5");
        const Photo_Image_5 = document.getElementById("Picture_Img_5");
    
        const Container_6 = document.getElementById("Saved_Item_6");
        const Saved_Photo_6 = document.getElementById("Saved_Photo_Item_6")as HTMLImageElement;
        const Saved_Video_6 = document.getElementById("Saved_Video_Item_6")as HTMLVideoElement;
        const Video_Image_6 = document.getElementById("Video_Img_6");
        const Photo_Image_6 = document.getElementById("Picture_Img_6");
    
        const Container_7 = document.getElementById("Saved_Item_7");
        const Saved_Photo_7 = document.getElementById("Saved_Photo_Item_7")as HTMLImageElement;
        const Saved_Video_7 = document.getElementById("Saved_Video_Item_7")as HTMLVideoElement;
        const Video_Image_7 = document.getElementById("Video_Img_7");
        const Photo_Image_7 = document.getElementById("Picture_Img_7");
    
        const Container_8 = document.getElementById("Saved_Item_8");
        const Saved_Photo_8 = document.getElementById("Saved_Photo_Item_8")as HTMLImageElement;
        const Saved_Video_8 = document.getElementById("Saved_Video_Item_8")as HTMLVideoElement;
        const Video_Image_8 = document.getElementById("Video_Img_8");
        const Photo_Image_8 = document.getElementById("Picture_Img_8");
    
        const Container_9 = document.getElementById("Saved_Item_9");
        const Saved_Photo_9 = document.getElementById("Saved_Photo_Item_9")as HTMLImageElement;
        const Saved_Video_9 = document.getElementById("Saved_Video_Item_9")as HTMLVideoElement;
        const Video_Image_9 = document.getElementById("Video_Img_9");
        const Photo_Image_9 = document.getElementById("Picture_Img_9");
    
        const Container_10 = document.getElementById("Saved_Item_10");
        const Saved_Photo_10 = document.getElementById("Saved_Photo_Item_10")as HTMLImageElement;
        const Saved_Video_10 = document.getElementById("Saved_Video_Item_10")as HTMLVideoElement;
        const Video_Image_10 = document.getElementById("Video_Img_10");
        const Photo_Image_10 = document.getElementById("Picture_Img_10");
        
        const Saved_Container_Change = document.getElementById("Saved_Container");
        const No_Saved_Text_Change = document.getElementById("No_Saved_Text");
        const Saved_Container_Change_2 = document.getElementById("No_Saved_Items_Container");
        const Saved_Number_Place = document.getElementById("Saved_Number");
        const Email_Login_Token = Cookies.get("Login_Token");
        
        /*
        function TriggerLink_s(i: number) {
            const url = documents[i];
        
            window.open(url, "_blank");
        }
        */
    
        fetch('http://localhost:5000/api/Saved_Get_Pics_Vids', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
                body: JSON.stringify({ email_data: Email_Login_Token }),
            })
                .then(response => response.json())
                .then(data => {
                  if (data.success === 1) {
                    // Documents found with the specified email
                    const documents = data.documents;
                    if(Saved_Number_Place) Saved_Number_Place.textContent = "";
                    if(Saved_Number_Place) Saved_Number_Place.textContent = documents.length.toString();
                    if(Saved_Container_Change_2)Saved_Container_Change_2.style.display = "none";
                    if(Saved_Container_Change)Saved_Container_Change.style.display = "block";
                    if(No_Saved_Text_Change)No_Saved_Text_Change.style.display = "none";

                    if(documents[0] === undefined){
                        if(Container_1) Container_1.style.display = "none";
                    } else if(documents[0] !== undefined){
                        if ((documents[0].type) === "P"){
                            if(Saved_Photo_1) Saved_Photo_1.style.display = "block";  //For Saved Item 1
                            if(Saved_Photo_1) Saved_Photo_1.src = documents[0].src;
                            if(Photo_Image_1) Photo_Image_1.style.display = "block";
                            const newString = documents[0].src;
                            seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString]);

                        } else if((documents[0].type) === "V"){
                            if(Saved_Video_1) Saved_Video_1.style.display = "block";
                            if(Saved_Video_1) Saved_Video_1.src = documents[0].src;
                            if(Video_Image_1) Video_Image_1.style.display = "block";
                            const newString = documents[0].src;
                            seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString]);
                        }
                    }
                    
                    if(documents[1] === undefined){
                        if(Container_2) Container_2.style.display = "none";
                    } else if(documents[1] !== undefined){
                        if ((documents[1].type) === "P"){
                            if(Saved_Photo_2) Saved_Photo_2.style.display = "block";  //For Saved Item 2
                            if(Saved_Photo_2) Saved_Photo_2.src = documents[1].src;
                            if(Photo_Image_2) Photo_Image_2.style.display = "block";
                            const newString2 = documents[1].src;
                            seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString2]);
                        } else if((documents[1].type) === "V"){
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
                        if ((documents[2].type) === "P"){
                            if(Saved_Photo_3) Saved_Photo_3.style.display = "block";  //For Saved Item 3
                            if(Saved_Photo_3) Saved_Photo_3.src = documents[2].src;
                            if(Photo_Image_3) Photo_Image_3.style.display = "block";
                            const newString3 = documents[2].src;
                            seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString3]);
                        } else if((documents[2].type) === "V"){
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
                        if ((documents[3].type) === "P"){
                            if(Saved_Photo_4) Saved_Photo_4.style.display = "block";  //For Saved Item 4
                            if(Saved_Photo_4) Saved_Photo_4.src = documents[3].src;
                            if(Photo_Image_4) Photo_Image_4.style.display = "block";
                            const newString4 = documents[3].src;
                            seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString4]);
                        } else if((documents[3].type) === "V"){
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
                        if ((documents[4].type) === "P"){
                            if(Saved_Photo_5) Saved_Photo_5.style.display = "block";  //For Saved Item 5
                            if(Saved_Photo_5) Saved_Photo_5.src = documents[4].src;
                            if(Photo_Image_5) Photo_Image_5.style.display = "block";
                            const newString5 = documents[4].src;
                            seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString5]);
                        } else if((documents[4].type) === "V"){
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
                        if ((documents[5].type) === "P"){
                            if(Saved_Photo_6) Saved_Photo_6.style.display = "block";  //For Saved Item 6
                            if(Saved_Photo_6) Saved_Photo_6.src = documents[5].src;
                            if(Photo_Image_6) Photo_Image_6.style.display = "block";
                            const newString6 = documents[5].src;
                            seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString6]);
                        } else if((documents[5].type) === "V"){
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
                        if ((documents[6].type) === "P"){
                            if(Saved_Photo_7) Saved_Photo_7.style.display = "block";  //For Saved Item 7
                            if(Saved_Photo_7) Saved_Photo_7.src = documents[6].src;
                            if(Photo_Image_7) Photo_Image_7.style.display = "block";
                            const newString7 = documents[6].src;
                            seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString7]);
                        } else if((documents[6].type) === "V"){
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
                        if ((documents[7].type) === "P"){
                            if(Saved_Photo_8) Saved_Photo_8.style.display = "block";  //For Saved Item 8
                            if(Saved_Photo_8) Saved_Photo_8.src = documents[7].src;
                            if(Photo_Image_8) Photo_Image_8.style.display = "block";
                            const newString8 = documents[7].src;
                            seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString8]);
                        } else if((documents[7].type) === "V"){
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
                        if ((documents[8].type) === "P"){
                            if(Saved_Photo_9) Saved_Photo_9.style.display = "block";  //For Saved Item 9
                            if(Saved_Photo_9) Saved_Photo_9.src = documents[8].src;
                            if(Photo_Image_9) Photo_Image_9.style.display = "block";
                            const newString9 = documents[8].src;
                            seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString9]);
                        } else if((documents[8].type) === "V"){
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
                        if ((documents[9].type) === "P"){
                            if(Saved_Photo_10) Saved_Photo_10.style.display = "block";  //For Saved Item 10
                            if(Saved_Photo_10) Saved_Photo_10.src = documents[9].src;
                            if(Photo_Image_10) Photo_Image_10.style.display = "block";
                            const newString10 = documents[9].src;
                            seturlArray_Saved(prevUrlArray => [...prevUrlArray, newString10]);
                        } else if((documents[9].type) === "V"){
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
                  } else {
                   
                  }
                })
            .catch(error => {
                console.error('Fetch error:', error);
            });


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
        console.log("Src from Saved: ", src);
          fetch('http://localhost:5000/api/delete_saved_Item_Saved', {
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

    

   

    const Main_Style: CSSProperties = {
        overflowY: "hidden",

    };


    const Exit_Img_Style_Saved: CSSProperties = {
        position: "absolute",
        right: "5px",
        top: "2px",
        cursor: "pointer",
        zIndex: "10",

    };

    const Title_Style: CSSProperties = {
        position: "fixed",
        left: "50%",
        transform: "translate(-50%, 0%)",
        top: "5px",
        color: "rgb(60, 60, 60)",
        fontFamily: "verdana",
        fontVariant: "small-caps",
        fontWeight: "bold",
        fontSize: "25px",
    };

    const Title_Style_Pixel: CSSProperties = {
        position: "fixed",
        color: "rgb(60, 60, 60)",
        fontFamily: "verdana",
        fontVariant: "small-caps",
        fontWeight: "bold",
        fontSize: "18px",
        left: "10px",
        top: "7px",
    };

    const [isOverflowVisible_s, setIsOverflowVisible_s] = useState(true);

    const toggleOverflow_s = () => {
      setIsOverflowVisible_s(prev => !prev);
    };


    const Saved_Container_Style: CSSProperties = {
        position: "absolute",
        height: "93%",
        width: "100%",
        backgroundColor: "rgb(40, 40, 40)",
        top: "42px",
        overflowY: isOverflowVisible_s ? 'auto' : 'hidden',
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        gridTemplateRows: "repeat(11, 1fr)",
        gridGap: "20px",
        filter: "brightness(100%)",
    };

    const Saved_Item_Style: CSSProperties = {
        top: "100px",
        position: "relative",
        height: "200px",
        width: "300px",
        borderRadius: "5px",
        backgroundColor: "rgb(150, 150, 150, 0.3)",
        left: "30%",
        transform: "translate(-30%, 0%)",
        cursor: "pointer",
        transition: ".3s",

    };

    const Resize_Saved: CSSProperties = {
        position: "absolute",
        left: "265px",
        top: "165px",
        transform: "scale(.7)",
        
    };  

    const Remove_Saved: CSSProperties = {
        position: "absolute",
        left: "265px",
        top: "2px",
        transform: "scale(.7)",
        transition: ".3s",
        
    };

    const Remove_Text: CSSProperties = {
        top: "6px",
        position: "absolute",
        fontFamily: "verdana",
        fontSize: "16px",
        textAlign: "center",
        color: "rgb(255, 255, 255)",
        left: "300px",
        right: "30px",
        borderRadius: "5px",
        backgroundColor: "rgb(255, 61, 27, .8)",
        opacity: "0",
        transform: ".3s",
        transition: ".3s",
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
        display: "none",
        transform: "scale(.7)",
        top: "5px",
        left: "5px",
    };

    const Picture_Img_Style: CSSProperties = {
        position: "absolute",
        display: "none",
        transform: "scale(.7)",
        top: "5px",
        left: "5px",
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
        transition: ".3s",
        transform: ".3s",
        borderRadius: "5px",
        display: "none",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
    };

    const Saved_Video_Item_Style: CSSProperties = {
        width: "100%",
        height: "100%",
        transition: ".3s",
        transform: ".3s",
        borderRadius: "5px",
        display: "none",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
    };

    const Bottom_Space: CSSProperties = {
        height: "100px",
      
    };
    
    const Items_Saved: CSSProperties = {
       fontFamily: "verdana",
       fontSize: "16px",
       color: "white",
       position: "absolute",
       left: "20px",
       top: "20px",
      
    };
     
    const No_Saved_Style: CSSProperties = {
        fontFamily: "verdana",
        fontSize: "20px",
        fontWeight: "bold",
        backgroundColor: "rgb(30, 30, 30)",
        padding: "20px",
        color: "rgb(10, 10, 10)",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        display: "none",
        border: "1px solid black",
        borderRadius: "5px",
    };

    const No_Saved_Container_Style: CSSProperties = {
        position: "absolute",
        height: "93%",
        width: "100%",
        backgroundColor: "rgb(40, 40, 40)",
        top: "42px",
        filter: "brightness(100%)",
        display: "none",
        
    };

    

    const [controlsEnabled, setControlsEnabled] = useState(false);

    const toggleControls = () => {
      setControlsEnabled(prevEnabled => !prevEnabled);
    };

  

    return(
        <div style={Main_Style} id="Main_Container">
            <img src={Exit_Saved_Saved} style={Exit_Img_Style_Saved} onClick={closeTab}/>
            <h1 id="Type_Title" style={Title_Style}>Saved</h1>
            <h1 style={Title_Style_Pixel}>Pixel Peak</h1>

            <div style={Saved_Container_Style} id="Saved_Container">
                <div id="Marker" style={Marker_Style}></div>

                <div style={Items_Saved}>Items Saved: <span id="Saved_Number">0</span></div>

                <div id="Saved_Item_1" style={Saved_Item_Style}>
                    <img id="Saved_Photo_Item_1" style={Saved_Photo_Item_Style}/>
                    <video id="Saved_Video_Item_1" style={Saved_Video_Item_Style}  typeof="video/mp4" controls={controlsEnabled} muted></video>
                    <img id="Resize_Saved_1" style={Resize_Saved} src={Resize_Saved_Saved} onClick={() => Resize_Photo_Item_Saved({Container_Id: "Saved_Item_1", Exit_Id: "Exit_Img_Resize_1", Resize_Id: "Resize_Saved_1", Picture_Id: "Picture_Img_1", Video_Id: "Video_Img_1", Remove_Pic_Id: "Remove_Saved_Item_1", Remove_Text_Id: "Remove_Text_1"})}/>
                    <img id="Remove_Saved_Item_1" onClick={() => {Remove_Saved_Item({Remove_Id: "Remove_Text_1", Remove_Img: "Remove_Saved_Item_1", Cancel_Image: "Cancel_Image_1"})}} style={Remove_Saved} src={Remove_Img}/>
                    <p id="Remove_Text_1" style={Remove_Text} onClick={() => {Remove_Saved_Item_Database({src_p: "Picture_Img_1", src_v: "Video_Img_1", numb: 0})}}  >Remove</p>
                    <img id="Cancel_Image_1" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_1", Remove_Img_Cancel: "Remove_Saved_Item_1", Cancel_Img: "Cancel_Image_1"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                    <img src={Video_Img} style={Video_Img_Style} id="Video_Img_1" />
                    <img src={Picture_Img} style={Picture_Img_Style} id="Picture_Img_1" />
                    <img src={Exit_Img} style={Exit_Resize_Style} id="Exit_Img_Resize_1" onClick={() => Exit_Photo_Item_Saved({Container_Id_exit: "Saved_Item_1", Exit_Id_exit: "Exit_Img_Resize_1", Resize_Id_exit: "Resize_Saved_1", Picture_Id_exit: "Picture_Img_1", Video_Id_exit: "Video_Img_1", Remove_Pic_Id_exit: "Remove_Saved_Item_1", Remove_Text_Id_exit: "Remove_Text_1"})}/>
                </div>

                <div id="Saved_Item_2" style={Saved_Item_Style}>
                    <img id="Saved_Photo_Item_2" style={Saved_Photo_Item_Style}/>
                    <video id="Saved_Video_Item_2" style={Saved_Video_Item_Style}  typeof="video/mp4" controls={controlsEnabled} muted></video>
                    <img id="Resize_Saved_2" style={Resize_Saved} src={Resize_Saved_Saved} onClick={() => Resize_Photo_Item_Saved({Container_Id: "Saved_Item_2", Exit_Id: "Exit_Img_Resize_2", Resize_Id: "Resize_Saved_2", Picture_Id: "Picture_Img_2", Video_Id: "Video_Img_2", Remove_Pic_Id: "Remove_Saved_Item_2", Remove_Text_Id: "Remove_Text_2"})}/>
                    <img id="Remove_Saved_Item_2" onClick={() => {Remove_Saved_Item({Remove_Id: "Remove_Text_2", Remove_Img: "Remove_Saved_Item_2", Cancel_Image: "Cancel_Image_2"})}} style={Remove_Saved} src={Remove_Img}/>
                    <p id="Remove_Text_2" style={Remove_Text} onClick={() => {Remove_Saved_Item_Database({src_p: "Picture_Img_2", src_v: "Video_Img_2", numb: 1})}}>Remove</p>
                    <img id="Cancel_Image_2" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_2", Remove_Img_Cancel: "Remove_Saved_Item_2", Cancel_Img: "Cancel_Image_2"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                    <img src={Video_Img} style={Video_Img_Style} id="Video_Img_2" />
                    <img src={Picture_Img} style={Picture_Img_Style} id="Picture_Img_2" />
                    <img src={Exit_Img} style={Exit_Resize_Style} id="Exit_Img_Resize_2" onClick={() => Exit_Photo_Item_Saved({Container_Id_exit: "Saved_Item_2", Exit_Id_exit: "Exit_Img_Resize_2", Resize_Id_exit: "Resize_Saved_2", Picture_Id_exit: "Picture_Img_2", Video_Id_exit: "Video_Img_2", Remove_Pic_Id_exit: "Remove_Saved_Item_2", Remove_Text_Id_exit: "Remove_Text_2"})}/>
                </div>

                <div id="Saved_Item_3" style={Saved_Item_Style}>
                    <img id="Saved_Photo_Item_3" style={Saved_Photo_Item_Style}/>
                    <video id="Saved_Video_Item_3" style={Saved_Video_Item_Style}  typeof="video/mp4" controls={controlsEnabled} muted></video>
                    <img id="Resize_Saved_3" style={Resize_Saved} src={Resize_Saved_Saved} onClick={() => Resize_Photo_Item_Saved({Container_Id: "Saved_Item_3", Exit_Id: "Exit_Img_Resize_3", Resize_Id: "Resize_Saved_3", Picture_Id: "Picture_Img_3", Video_Id: "Video_Img_3", Remove_Pic_Id: "Remove_Saved_Item_3", Remove_Text_Id: "Remove_Text_3"})}/>
                    <img id="Remove_Saved_Item_3"  onClick={() => {Remove_Saved_Item({Remove_Id: "Remove_Text_3", Remove_Img: "Remove_Saved_Item_3", Cancel_Image: "Cancel_Image_3"})}}  style={Remove_Saved} src={Remove_Img}/>
                    <p id="Remove_Text_3" style={Remove_Text} onClick={() => {Remove_Saved_Item_Database({src_p: "Picture_Img_3", src_v: "Video_Img_3", numb: 2})}}>Remove</p>
                    <img id="Cancel_Image_3" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_3", Remove_Img_Cancel: "Remove_Saved_Item_3", Cancel_Img: "Cancel_Image_3"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                    <img src={Video_Img} style={Video_Img_Style} id="Video_Img_3" />
                    <img src={Picture_Img} style={Picture_Img_Style} id="Picture_Img_3" />
                    <img src={Exit_Img} style={Exit_Resize_Style} id="Exit_Img_Resize_3" onClick={() => Exit_Photo_Item_Saved({Container_Id_exit: "Saved_Item_3", Exit_Id_exit: "Exit_Img_Resize_3", Resize_Id_exit: "Resize_Saved_3", Picture_Id_exit: "Picture_Img_3", Video_Id_exit: "Video_Img_3", Remove_Pic_Id_exit: "Remove_Saved_Item_3", Remove_Text_Id_exit: "Remove_Text_3"})}/>
                </div>

                <div id="Saved_Item_4" style={Saved_Item_Style}>
                    <img id="Saved_Photo_Item_4" style={Saved_Photo_Item_Style}/>
                    <video id="Saved_Video_Item_4" style={Saved_Video_Item_Style}  typeof="video/mp4" controls={controlsEnabled} muted></video>
                    <img id="Resize_Saved_4" style={Resize_Saved} src={Resize_Saved_Saved} onClick={() => Resize_Photo_Item_Saved({Container_Id: "Saved_Item_4", Exit_Id: "Exit_Img_Resize_4", Resize_Id: "Resize_Saved_4", Picture_Id: "Picture_Img_4", Video_Id: "Video_Img_4", Remove_Pic_Id: "Remove_Saved_Item_4", Remove_Text_Id: "Remove_Text_4"})}/>
                    <img id="Remove_Saved_Item_4" onClick={() => {Remove_Saved_Item({Remove_Id: "Remove_Text_4", Remove_Img: "Remove_Saved_Item_4", Cancel_Image: "Cancel_Image_4"})}} style={Remove_Saved} src={Remove_Img}/>
                    <p id="Remove_Text_4" style={Remove_Text} onClick={() => {Remove_Saved_Item_Database({src_p: "Picture_Img_4", src_v: "Video_Img_4", numb: 3})}}>Remove</p>
                    <img id="Cancel_Image_4" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_4", Remove_Img_Cancel: "Remove_Saved_Item_4", Cancel_Img: "Cancel_Image_4"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                    <img src={Video_Img} style={Video_Img_Style} id="Video_Img_4" />
                    <img src={Picture_Img} style={Picture_Img_Style} id="Picture_Img_4" />
                    <img src={Exit_Img} style={Exit_Resize_Style} id="Exit_Img_Resize_4" onClick={() => Exit_Photo_Item_Saved({Container_Id_exit: "Saved_Item_4", Exit_Id_exit: "Exit_Img_Resize_4", Resize_Id_exit: "Resize_Saved_4", Picture_Id_exit: "Picture_Img_4", Video_Id_exit: "Video_Img_4", Remove_Pic_Id_exit: "Remove_Saved_Item_4", Remove_Text_Id_exit: "Remove_Text_4"})}/>
                </div>

                <div id="Saved_Item_5" style={Saved_Item_Style}>
                    <img id="Saved_Photo_Item_5" style={Saved_Photo_Item_Style}/>
                    <video id="Saved_Video_Item_5" style={Saved_Video_Item_Style}  typeof="video/mp4" controls={controlsEnabled} muted></video>
                    <img id="Resize_Saved_5" style={Resize_Saved} src={Resize_Saved_Saved} onClick={() => Resize_Photo_Item_Saved({Container_Id: "Saved_Item_5", Exit_Id: "Exit_Img_Resize_5", Resize_Id: "Resize_Saved_5", Picture_Id: "Picture_Img_5", Video_Id: "Video_Img_5", Remove_Pic_Id: "Remove_Saved_Item_5", Remove_Text_Id: "Remove_Text_5"})}/>
                    <img id="Remove_Saved_Item_5" onClick={() => {Remove_Saved_Item({Remove_Id: "Remove_Text_5", Remove_Img: "Remove_Saved_Item_5", Cancel_Image: "Cancel_Image_5"})}}  style={Remove_Saved} src={Remove_Img}/>
                    <p id="Remove_Text_5" style={Remove_Text} onClick={() => {Remove_Saved_Item_Database({src_p: "Picture_Img_5", src_v: "Video_Img_5", numb: 4})}}>Remove</p>
                    <img id="Cancel_Image_5" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_5", Remove_Img_Cancel: "Remove_Saved_Item_5", Cancel_Img: "Cancel_Image_5"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                    <img src={Video_Img} style={Video_Img_Style} id="Video_Img_5" />
                    <img src={Picture_Img} style={Picture_Img_Style} id="Picture_Img_5" />
                    <img src={Exit_Img} style={Exit_Resize_Style} id="Exit_Img_Resize_5" onClick={() => Exit_Photo_Item_Saved({Container_Id_exit: "Saved_Item_5", Exit_Id_exit: "Exit_Img_Resize_5", Resize_Id_exit: "Resize_Saved_5", Picture_Id_exit: "Picture_Img_5", Video_Id_exit: "Video_Img_5", Remove_Pic_Id_exit: "Remove_Saved_Item_5", Remove_Text_Id_exit: "Remove_Text_5"})}/>
                </div>

                <div id="Saved_Item_6" style={Saved_Item_Style}>
                    <img id="Saved_Photo_Item_6" style={Saved_Photo_Item_Style}/>
                    <video id="Saved_Video_Item_6" style={Saved_Video_Item_Style}  typeof="video/mp4" controls={controlsEnabled} muted></video>
                    <img id="Resize_Saved_6" style={Resize_Saved} src={Resize_Saved_Saved} onClick={() => Resize_Photo_Item_Saved({Container_Id: "Saved_Item_6", Exit_Id: "Exit_Img_Resize_6", Resize_Id: "Resize_Saved_6", Picture_Id: "Picture_Img_6", Video_Id: "Video_Img_6", Remove_Pic_Id: "Remove_Saved_Item_6", Remove_Text_Id: "Remove_Text_6"})}/>
                    <img id="Remove_Saved_Item_6" onClick={() => {Remove_Saved_Item({Remove_Id: "Remove_Text_6", Remove_Img: "Remove_Saved_Item_6", Cancel_Image: "Cancel_Image_6"})}}  style={Remove_Saved} src={Remove_Img}/>
                    <p id="Remove_Text_6" style={Remove_Text} onClick={() => {Remove_Saved_Item_Database({src_p: "Picture_Img_6", src_v: "Video_Img_6", numb: 5})}}>Remove</p>
                    <img id="Cancel_Image_6" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_6", Remove_Img_Cancel: "Remove_Saved_Item_6", Cancel_Img: "Cancel_Image_6"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                    <img src={Video_Img} style={Video_Img_Style} id="Video_Img_6" />
                    <img src={Picture_Img} style={Picture_Img_Style} id="Picture_Img_6" />
                    <img src={Exit_Img} style={Exit_Resize_Style} id="Exit_Img_Resize_6" onClick={() => Exit_Photo_Item_Saved({Container_Id_exit: "Saved_Item_6", Exit_Id_exit: "Exit_Img_Resize_6", Resize_Id_exit: "Resize_Saved_6", Picture_Id_exit: "Picture_Img_6", Video_Id_exit: "Video_Img_6", Remove_Pic_Id_exit: "Remove_Saved_Item_6", Remove_Text_Id_exit: "Remove_Text_6"})}/>
                </div>

                <div id="Saved_Item_7" style={Saved_Item_Style}>
                    <img id="Saved_Photo_Item_7" style={Saved_Photo_Item_Style}/>
                    <video id="Saved_Video_Item_7" style={Saved_Video_Item_Style}  typeof="video/mp4" controls={controlsEnabled} muted></video>
                    <img id="Resize_Saved_7" style={Resize_Saved} src={Resize_Saved_Saved} onClick={() => Resize_Photo_Item_Saved({Container_Id: "Saved_Item_7", Exit_Id: "Exit_Img_Resize_7", Resize_Id: "Resize_Saved_7", Picture_Id: "Picture_Img_7", Video_Id: "Video_Img_7", Remove_Pic_Id: "Remove_Saved_Item_7", Remove_Text_Id: "Remove_Text_7"})}/>
                    <img id="Remove_Saved_Item_7" onClick={() => {Remove_Saved_Item({Remove_Id: "Remove_Text_7", Remove_Img: "Remove_Saved_Item_7", Cancel_Image: "Cancel_Image_7"})}} style={Remove_Saved} src={Remove_Img}/>
                    <p id="Remove_Text_7" style={Remove_Text} onClick={() => {Remove_Saved_Item_Database({src_p: "Picture_Img_7", src_v: "Video_Img_7", numb: 6})}}>Remove</p>
                    <img id="Cancel_Image_7" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_7", Remove_Img_Cancel: "Remove_Saved_Item_7", Cancel_Img: "Cancel_Image_7"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                    <img src={Video_Img} style={Video_Img_Style} id="Video_Img_7" />
                    <img src={Picture_Img} style={Picture_Img_Style} id="Picture_Img_7" />
                    <img src={Exit_Img} style={Exit_Resize_Style} id="Exit_Img_Resize_7" onClick={() => Exit_Photo_Item_Saved({Container_Id_exit: "Saved_Item_7", Exit_Id_exit: "Exit_Img_Resize_7", Resize_Id_exit: "Resize_Saved_7", Picture_Id_exit: "Picture_Img_7", Video_Id_exit: "Video_Img_7", Remove_Pic_Id_exit: "Remove_Saved_Item_7", Remove_Text_Id_exit: "Remove_Text_7"})}/>
                </div>

                <div id="Saved_Item_8" style={Saved_Item_Style}>
                    <img id="Saved_Photo_Item_8" style={Saved_Photo_Item_Style}/>
                    <video id="Saved_Video_Item_8" style={Saved_Video_Item_Style}  typeof="video/mp4" controls={controlsEnabled} muted></video>
                    <img id="Resize_Saved_8" style={Resize_Saved} src={Resize_Saved_Saved} onClick={() => Resize_Photo_Item_Saved({Container_Id: "Saved_Item_8", Exit_Id: "Exit_Img_Resize_8", Resize_Id: "Resize_Saved_8", Picture_Id: "Picture_Img_8", Video_Id: "Video_Img_8", Remove_Pic_Id: "Remove_Saved_Item_8", Remove_Text_Id: "Remove_Text_8"})}/>
                    <img id="Remove_Saved_Item_8" onClick={() => {Remove_Saved_Item({Remove_Id: "Remove_Text_8", Remove_Img: "Remove_Saved_Item_8", Cancel_Image: "Cancel_Image_8"})}}  style={Remove_Saved} src={Remove_Img}/>
                    <p id="Remove_Text_8" style={Remove_Text} onClick={() => {Remove_Saved_Item_Database({src_p: "Picture_Img_8", src_v: "Video_Img_8", numb: 7})}}>Remove</p>
                    <img id="Cancel_Image_8" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_8", Remove_Img_Cancel: "Remove_Saved_Item_8", Cancel_Img: "Cancel_Image_8"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                    <img src={Video_Img} style={Video_Img_Style} id="Video_Img_8" />
                    <img src={Picture_Img} style={Picture_Img_Style} id="Picture_Img_8" />
                    <img src={Exit_Img} style={Exit_Resize_Style} id="Exit_Img_Resize_8" onClick={() => Exit_Photo_Item_Saved({Container_Id_exit: "Saved_Item_8", Exit_Id_exit: "Exit_Img_Resize_8", Resize_Id_exit: "Resize_Saved_8", Picture_Id_exit: "Picture_Img_8", Video_Id_exit: "Video_Img_8", Remove_Pic_Id_exit: "Remove_Saved_Item_8", Remove_Text_Id_exit: "Remove_Text_8"})}/>
                </div>

                <div id="Saved_Item_9" style={Saved_Item_Style}>
                    <img id="Saved_Photo_Item_9" style={Saved_Photo_Item_Style}/>
                    <video id="Saved_Video_Item_9" style={Saved_Video_Item_Style}  typeof="video/mp4" controls={controlsEnabled} muted></video>
                    <img id="Resize_Saved_9" style={Resize_Saved} src={Resize_Saved_Saved} onClick={() => Resize_Photo_Item_Saved({Container_Id: "Saved_Item_9", Exit_Id: "Exit_Img_Resize_9", Resize_Id: "Resize_Saved_9", Picture_Id: "Picture_Img_9", Video_Id: "Video_Img_9", Remove_Pic_Id: "Remove_Saved_Item_9", Remove_Text_Id: "Remove_Text_9"})}/>
                    <img id="Remove_Saved_Item_9" onClick={() => {Remove_Saved_Item({Remove_Id: "Remove_Text_9", Remove_Img: "Remove_Saved_Item_9", Cancel_Image: "Cancel_Image_9"})}}  style={Remove_Saved} src={Remove_Img}/>
                    <p id="Remove_Text_9" style={Remove_Text} onClick={() => {Remove_Saved_Item_Database({src_p: "Picture_Img_9", src_v: "Video_Img_9", numb: 8})}}>Remove</p>
                    <img id="Cancel_Image_9" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_9", Remove_Img_Cancel: "Remove_Saved_Item_9", Cancel_Img: "Cancel_Image_9"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                    <img src={Video_Img} style={Video_Img_Style} id="Video_Img_9" />
                    <img src={Picture_Img} style={Picture_Img_Style} id="Picture_Img_9" />
                    <img src={Exit_Img} style={Exit_Resize_Style} id="Exit_Img_Resize_9" onClick={() => Exit_Photo_Item_Saved({Container_Id_exit: "Saved_Item_9", Exit_Id_exit: "Exit_Img_Resize_9", Resize_Id_exit: "Resize_Saved_9", Picture_Id_exit: "Picture_Img_9", Video_Id_exit: "Video_Img_9", Remove_Pic_Id_exit: "Remove_Saved_Item_9", Remove_Text_Id_exit: "Remove_Text_9"})}/>
                </div>
                
                <div id="Saved_Item_10" style={Saved_Item_Style}>
                    <img id="Saved_Photo_Item_10" style={Saved_Photo_Item_Style}/>
                    <video id="Saved_Video_Item_10" style={Saved_Video_Item_Style}  typeof="video/mp4" controls={controlsEnabled} muted></video>
                    <img id="Resize_Saved_10" style={Resize_Saved} src={Resize_Saved_Saved} onClick={() => Resize_Photo_Item_Saved({Container_Id: "Saved_Item_10", Exit_Id: "Exit_Img_Resize_10", Resize_Id: "Resize_Saved_10", Picture_Id: "Picture_Img_10", Video_Id: "Video_Img_10", Remove_Pic_Id: "Remove_Saved_Item_10", Remove_Text_Id: "Remove_Text_10"})}/>
                    <img id="Remove_Saved_Item_10" onClick={() => {Remove_Saved_Item({Remove_Id: "Remove_Text_10", Remove_Img: "Remove_Saved_Item_10", Cancel_Image: "Cancel_Image_10"})}} style={Remove_Saved} src={Remove_Img}/>
                    <p id="Remove_Text_10" style={Remove_Text} onClick={() => {Remove_Saved_Item_Database({src_p: "Picture_Img_10", src_v: "Video_Img_10", numb: 9})}}>Remove</p>
                    <img id="Cancel_Image_10" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_10", Remove_Img_Cancel: "Remove_Saved_Item_10", Cancel_Img: "Cancel_Image_10"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                    <img src={Video_Img} style={Video_Img_Style} id="Video_Img_10" />
                    <img src={Picture_Img} style={Picture_Img_Style} id="Picture_Img_10" />
                    <img src={Exit_Img} style={Exit_Resize_Style} id="Exit_Img_Resize_10" onClick={() => Exit_Photo_Item_Saved({Container_Id_exit: "Saved_Item_10", Exit_Id_exit: "Exit_Img_Resize_10", Resize_Id_exit: "Resize_Saved_10", Picture_Id_exit: "Picture_Img_10", Video_Id_exit: "Video_Img_10", Remove_Pic_Id_exit: "Remove_Saved_Item_10", Remove_Text_Id_exit: "Remove_Text_10"})}/>
                </div>
                <div style={Bottom_Space} id="Bottom_Saved_Space"></div>
            </div>
            <div id="No_Saved_Items_Container" style={No_Saved_Container_Style}>

            </div>
            <p id="No_Saved_Text" style={No_Saved_Style}>You have no saved items...</p>
        </div>

    );

};

export default Saved_Style;