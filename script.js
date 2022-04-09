var bar = document.querySelector('.home .fa-bars');
var times = document.querySelector('.header .fa-times');
var header = document.querySelector('.header');
var wrapper = document.querySelector('.body .wrapper');

bar.onclick = () =>{
  header.classList.toggle('active');
  wrapper.classList.toggle('active');

}

times.onclick = () =>{
  header.classList.remove('active');
  wrapper.classList.remove('active');
}



var swiper = new Swiper(" .grid-slider", {
    grabCursor: true,
    // loop: true,
    centeredSlides:true,
    autoHeight:true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 1,
      },
      1000: {
        slidesPerView: 1,
      },
    }
  });

var swiper = new Swiper(" .loca-swiper", {
    grabCursor: true,
    loop: true,
    centeredSlides:true,
    autoHeight:true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 1,
      },
      1000: {
        slidesPerView: 1,
      },
    }
  });