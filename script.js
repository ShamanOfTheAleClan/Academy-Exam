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


//uzdeti indexus ant pagination, kad jie sutaptu su slide'ais

//Pagal dabartinį active pagination atidaryti slide su slideTo funkcija

//