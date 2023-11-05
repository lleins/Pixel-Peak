import { CSSProperties } from "react";
import Resize_Saved_Saved from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\ResizeImg.png";
import Exit_Saved_Saved from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\Images\\Exit.png";
import React, { useRef, RefObject, useEffect, useState } from "react";
import Remove_Img from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\remove.png";
import Exit_Img_white from "C:\\Users\\Big_T\\OneDrive\\Desktop\\VsCode\\MERN\\react-app\\src\\Components\\Images\\RightArrow.png";

function Saved_Style(){

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
            Remove_Text.style.left = "30px";
            
        }
        if(Remove_Image){
            Remove_Image.style.left = "-1px";
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
            Remove_Image.style.left = "265px";
        }

        if(Cancel_Image){
            Cancel_Image.style.display = "none";
        }
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

    const Saved_Container_Style: CSSProperties = {
        position: "absolute",
        height: "93%",
        width: "100%",
        backgroundColor: "rgb(40, 40, 40)",
        top: "42px",
        overflowY: "auto",
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        gridTemplateRows: "repeat(10, 1fr)",
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



    return(
        <div style={Main_Style} id="Main_Container">
            <img src={Exit_Saved_Saved} style={Exit_Img_Style_Saved} onClick={closeTab}/>
            <h1 style={Title_Style}>Saved</h1>
            <h1 style={Title_Style_Pixel}>Pixel Peak</h1>

            <div style={Saved_Container_Style} id="Saved_Container">


                <div id="Saved_Item_1" style={Saved_Item_Style}>
                    <img id="Resize_Saved_1" style={Resize_Saved} src={Resize_Saved_Saved}/>
                    <img id="Remove_Saved_Item_1" onClick={() => {Remove_Saved_Item({Remove_Id: "Remove_Text_1", Remove_Img: "Remove_Saved_Item_1", Cancel_Image: "Cancel_Image_1"})}} style={Remove_Saved} src={Remove_Img}/>
                    <p id="Remove_Text_1" style={Remove_Text}>Remove</p>
                    <img id="Cancel_Image_1" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_1", Remove_Img_Cancel: "Remove_Saved_Item_1", Cancel_Img: "Cancel_Image_1"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                </div>

                <div id="Saved_Item_2" style={Saved_Item_Style}>
                    <img id="Resize_Saved_2" style={Resize_Saved} src={Resize_Saved_Saved}/>
                    <img id="Remove_Saved_Item_2" onClick={() => {Remove_Saved_Item({Remove_Id: "Remove_Text_2", Remove_Img: "Remove_Saved_Item_2", Cancel_Image: "Cancel_Image_2"})}} style={Remove_Saved} src={Remove_Img}/>
                    <p id="Remove_Text_2" style={Remove_Text}>Remove</p>
                    <img id="Cancel_Image_2" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_2", Remove_Img_Cancel: "Remove_Saved_Item_2", Cancel_Img: "Cancel_Image_2"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                </div>

                <div id="Saved_Item_3" style={Saved_Item_Style}>
                    <img id="Resize_Saved_3" style={Resize_Saved} src={Resize_Saved_Saved}/>
                    <img id="Remove_Saved_Item_3"  onClick={() => {Remove_Saved_Item({Remove_Id: "Remove_Text_3", Remove_Img: "Remove_Saved_Item_3", Cancel_Image: "Cancel_Image_3"})}}  style={Remove_Saved} src={Remove_Img}/>
                    <p id="Remove_Text_3" style={Remove_Text}>Remove</p>
                    <img id="Cancel_Image_3" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_3", Remove_Img_Cancel: "Remove_Saved_Item_3", Cancel_Img: "Cancel_Image_3"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                </div>

                <div id="Saved_Item_4" style={Saved_Item_Style}>
                    <img id="Resize_Saved_4" style={Resize_Saved} src={Resize_Saved_Saved}/>
                    <img id="Remove_Saved_Item_4" onClick={() => {Remove_Saved_Item({Remove_Id: "Remove_Text_4", Remove_Img: "Remove_Saved_Item_4", Cancel_Image: "Cancel_Image_4"})}} style={Remove_Saved} src={Remove_Img}/>
                    <p id="Remove_Text_4" style={Remove_Text}>Remove</p>
                    <img id="Cancel_Image_4" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_4", Remove_Img_Cancel: "Remove_Saved_Item_4", Cancel_Img: "Cancel_Image_4"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                </div>

                <div id="Saved_Item_5" style={Saved_Item_Style}>
                    <img id="Resize_Saved_5" style={Resize_Saved} src={Resize_Saved_Saved}/>
                    <img id="Remove_Saved_Item_5" onClick={() => {Remove_Saved_Item({Remove_Id: "Remove_Text_5", Remove_Img: "Remove_Saved_Item_5", Cancel_Image: "Cancel_Image_5"})}}  style={Remove_Saved} src={Remove_Img}/>
                    <p id="Remove_Text_5" style={Remove_Text}>Remove</p>
                    <img id="Cancel_Image_5" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_5", Remove_Img_Cancel: "Remove_Saved_Item_5", Cancel_Img: "Cancel_Image_5"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                </div>

                <div id="Saved_Item_6" style={Saved_Item_Style}>
                    <img id="Resize_Saved_6" style={Resize_Saved} src={Resize_Saved_Saved}/>
                    <img id="Remove_Saved_Item_6" onClick={() => {Remove_Saved_Item({Remove_Id: "Remove_Text_6", Remove_Img: "Remove_Saved_Item_6", Cancel_Image: "Cancel_Image_6"})}}  style={Remove_Saved} src={Remove_Img}/>
                    <p id="Remove_Text_6" style={Remove_Text}>Remove</p>
                    <img id="Cancel_Image_6" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_6", Remove_Img_Cancel: "Remove_Saved_Item_6", Cancel_Img: "Cancel_Image_6"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                </div>

                <div id="Saved_Item_7" style={Saved_Item_Style}>
                    <img id="Resize_Saved_7" style={Resize_Saved} src={Resize_Saved_Saved}/>
                    <img id="Remove_Saved_Item_7" onClick={() => {Remove_Saved_Item({Remove_Id: "Remove_Text_7", Remove_Img: "Remove_Saved_Item_7", Cancel_Image: "Cancel_Image_7"})}} style={Remove_Saved} src={Remove_Img}/>
                    <p id="Remove_Text_7" style={Remove_Text}>Remove</p>
                    <img id="Cancel_Image_7" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_7", Remove_Img_Cancel: "Remove_Saved_Item_7", Cancel_Img: "Cancel_Image_7"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                </div>

                <div id="Saved_Item_8" style={Saved_Item_Style}>
                    <img id="Resize_Saved_8" style={Resize_Saved} src={Resize_Saved_Saved}/>
                    <img id="Remove_Saved_Item_8" onClick={() => {Remove_Saved_Item({Remove_Id: "Remove_Text_8", Remove_Img: "Remove_Saved_Item_8", Cancel_Image: "Cancel_Image_8"})}}  style={Remove_Saved} src={Remove_Img}/>
                    <p id="Remove_Text_8" style={Remove_Text}>Remove</p>
                    <img id="Cancel_Image_8" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_8", Remove_Img_Cancel: "Remove_Saved_Item_8", Cancel_Img: "Cancel_Image_8"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                </div>

                <div id="Saved_Item_9" style={Saved_Item_Style}>
                    <img id="Resize_Saved_9" style={Resize_Saved} src={Resize_Saved_Saved}/>
                    <img id="Remove_Saved_Item_9" onClick={() => {Remove_Saved_Item({Remove_Id: "Remove_Text_9", Remove_Img: "Remove_Saved_Item_9", Cancel_Image: "Cancel_Image_9"})}}  style={Remove_Saved} src={Remove_Img}/>
                    <p id="Remove_Text_9" style={Remove_Text}>Remove</p>
                    <img id="Cancel_Image_9" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_9", Remove_Img_Cancel: "Remove_Saved_Item_9", Cancel_Img: "Cancel_Image_9"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                </div>
                
                <div id="Saved_Item_10" style={Saved_Item_Style}>
                    <img id="Resize_Saved_10" style={Resize_Saved} src={Resize_Saved_Saved}/>
                    <img id="Remove_Saved_Item_10" onClick={() => {Remove_Saved_Item({Remove_Id: "Remove_Text_10", Remove_Img: "Remove_Saved_Item_10", Cancel_Image: "Cancel_Image_10"})}} style={Remove_Saved} src={Remove_Img}/>
                    <p id="Remove_Text_10" style={Remove_Text}>Remove</p>
                    <img id="Cancel_Image_10" onClick={() => {Cancel_Remove_Saved_Item({Remove_Id_Cancel: "Remove_Text_10", Remove_Img_Cancel: "Remove_Saved_Item_10", Cancel_Img: "Cancel_Image_10"})}} src={Exit_Img_white} style={Cancel_Remove}/>
                </div>

               

            </div>
        </div>

    );

};

export default Saved_Style;