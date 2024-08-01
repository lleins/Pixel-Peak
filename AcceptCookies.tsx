import Cookies from "js-cookie";



document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        
      const Cokies_Container = document.getElementById("Cookies_Confirmation_Container");
      if(Cokies_Container){
        const Accept_Cookie_Status = Cookies.get("Cookies_Accept");
        //console.log("Cookie: ", Accept_Cookie_Status );
        if(Accept_Cookie_Status == undefined){
            Cokies_Container.style.opacity = "1";
            Cokies_Container.style.bottom = "0px";
        }else if(Accept_Cookie_Status == "1"){
            Cokies_Container.style.opacity = "0";
            Cokies_Container.style.bottom = "-700px";
        }
      }
   
    }, 1000); 
});
 
  
const Accept_Cookie = document.getElementById("Accept_Cookies_Btn");
if (Accept_Cookie) {
    Accept_Cookie.addEventListener("click", () => {  
        const Accepted = "1";
        const sevenDaysFromNow = new Date();
        sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7);
        Cookies.set("Cookies_Accept", Accepted, { path: '/', expires: sevenDaysFromNow  });
    });
}
