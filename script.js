window.onload=function(){

// burger animation

let burger = document.getElementById("burger");
let menu = document.querySelector(".menu-wrap");

function burgerClick()  {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        menu.style.transform = 'translateX(-160px)';
        }
        else {
        burger.classList.add('active');
        menu.style.transform = "translateX(0px)";
        }
    }
burger.addEventListener('click', burgerClick) ;
}

//form validation
// function formValidation(){

//     let name = document.forms["singUp"]["name"];               
//     let surname = document.forms["signUp"]["surname"];
//     let phone = document.forms["singUp"]["phone"];  
   
//     if (name.value == "")                                  
//     { 
//         window.alert("Please enter your name."); 
//         console.log("something happened");
//         // name.focus(); 
//         return false; 
//     } 

//     if (phone.value == "")                           
//     { 
//         window.alert("Please enter your telephone number."); 
//         // phone.focus(); 
//         return false; 
//     } 
//     return true; 
// }