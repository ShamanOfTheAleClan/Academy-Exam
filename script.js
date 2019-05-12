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

// //suzinoti dabartinio slide index
// let currentSlide = swiper2.activeIndex; 

// //suzinoti aktyvu button
// let currentButton = document.querySelector(".features-button-active");

// //nustatyti dabartini slide pagal active button
// //Suzinom aktyvaus mygtuko index ir aktyvinam tokio paties index slide

// let activeIndex = currentButton.getAttribute("index");
// window.onload=function(){    
//     swiper2.slideTo(activeIndex, 300);
// }

// //paspaudus mygtuka aktyvinam ji ir nuvarom i jo slide
// let buttons = document.querySelectorAll(".features-button");
// //visiems mygtukams uzdedam paspaudima
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("mousedown", function() {
//         //jei jau aktyvus, tai nieko nedarom
//         if (this.classList.contains(".features-button-active")) {}
//         else {
//             //visiems nuimam active
//             for (let j = 0; j < buttons.length; j++) {
//                 buttons[j].classList.remove(".features-button-active")
//             }
//             //uzdedam active
//             this.classList.add(".features-button-active");
//             //ijungiam atitinkama slide
//             swiper2.slideTo(activeIndex, 300);
//         }
//     })
// }


//Pagal dabartinį active mygtuka atidaryti slide su slideTo funkcija
// let slideNumber = this.getAttribute("data-slide");
//       mySSwiper.slideTo(slideNumber-1, 300);

//Paspaudus ant pagination atidaryti atitinkamą slide

//nudraginus slide pazymeti atitinkama jo pagination.