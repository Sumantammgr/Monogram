let popbtn=document.querySelector(".pop-box");
let usdbtn=document.querySelector(".usd-icon");
let popbox=document.querySelector(".box-list");

let ab=0;
popbtn.addEventListener("click",()=>{
         if(ab==0){
            popbox.style.display="block";
            ab=1;
         }else{
            popbox.style.display="none";
            ab=0;
         }
   
})
let usdlist=document.querySelector(".usd-list");
let abc=0;
usdbtn.addEventListener("click",()=>{
    if(abc==0){
        usdlist.style.display="block";
        abc=1;
    }else{
        usdlist.style.display="none";
        abc=0;
    }
   
})


const openbtn=document.querySelector(".menu-bar");
const navbox=document.querySelector(".menu-ul");
const wholeBg=document.querySelector("body");
openbtn.addEventListener("click",()=>{
    navbox.classList.toggle("active");
    wholeBg.style.backgroundColor="#555";
    
})
const closebtn=document.querySelector(".close-bar");
closebtn.addEventListener("click",()=>{
    navbox.classList.remove("active")
    wholeBg.style.backgroundColor="transparent";
})