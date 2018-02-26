let ham = document.querySelector('.hamburger-a');
let navbar = document.querySelector('.nav-a');

function visibility(){
    if(navbar.style.visibility == "" || navbar.style.visibility == "hidden"){
        navbar.style.visibility = "visible"; 
    }else{
        navbar.style.visibility = "hidden";
    }
}

function big(){
    navbar.style.visibility = "visible";
}



var mobileViewport = window.matchMedia("screen and (max-width: 700px)");
mobileViewport.addListener(function(mq) {
 
    if(mq.matches) {
        navbar.style.visibility = "hidden";
        ham.addEventListener('click', visibility);
    } else {
        big();
    }
});