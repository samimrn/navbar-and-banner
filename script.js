$(document).ready(function(){
    $(".mainmenu .row .image .nav-toggler").click(function(){
        $(".mainmenu .menu").stop() .slideToggle();
    });
    
});

// const slider = document.querySelectorAll('.slider');

// let counter = 1;
// slidefun(counter);

// let timer = setInterval(autoslide, 5000);
// function autoslide(){
//     counter += 1;
//     slidefun(counter);
// }
// function Slides(n){
//     counter += n;
//     slidefun(counter);
    // resetTimer();
// }
// function currentSlide(n){
//     counter = n;
//     slidefun(counter);
//     resetTimer();
// }
// function resetTimer(){
//        clearInterval(timer);
//        timer = setInterval(autoslide, 5000);
// }
// function slidefun(n){
//     let i;
//     for(i=0;i<slider.length;i++){
//         slider[i].style.display = "none";
//     } 
//     if(n > slider.lenght){
//         counter = 1;
//     }
//     if(n < 1){
//         counter = slider.length;
//     }
//     slider[counter - 1].style.display = "block";
// }



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
  
}





