$(document).ready(function () {
  $("#comments-slider").owlCarousel({
    navigation: false,
    slideSpeed: 100,
    paginationSpeed: 800,
    singleItem: true,
    autoPlay: false,
  });
});

$(".owl-carousel").owlCarousel({
  loop: true,
  padding: 0.1,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$(document).ready(function () {
    $("#comments-slider2").owlCarousel({
      navigation: false,
      width: 300,
      slideSpeed: 100,
      paginationSpeed: 800,
      singleItem: true,
      autoPlay: false,
    });
  });


//   preloader

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }

//   btn

let color = '#7872B9'; 
function change(identifier) {
 identifier.style.background = color;
}

let text = '#fff'; 
function changeText(identifier2) {
 identifier2.style.color = text;
}

// let dec = 'none'; 
// function changeText(identifier) {
//  identifier.style.text-decoration = dec;
// }