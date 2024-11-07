// menu-icon toggle
document
  .querySelector(".mobile-menu-icon")
  .addEventListener("click", function () {
    this.classList.toggle("active");
  });

//mobile menu show-hide
const menuIcon = document.getElementById("menuIcon");
const mobileMenuWrapper = document.getElementById("mobile-menu-wrapper");

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("menu-show");
  mobileMenuWrapper.classList.toggle("menu-show");
});

// video popup
$(function () {
  //slick slider for itesm slider area

  $(".hero-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoPlay: true,

    prevArrow: '<button class="slick-prev">Prev</button>',
    nextArrow: '<button class="slick-next">Next</button>',
  });

  $(".hero-icon-slider").slick({
    dots: false,
    infinite: true,
    slidesToShow: 6,
    speed: 300,
    autoPlay: true,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  // video popup
  $(".video-btn a").magnificPopup({
    type: "iframe",
    iframe: {
      patterns: {
        youtube: {
          index: "youtube.com/",
          src: "https://www.youtube.com/embed/%id%?autoplay=1", // URL that will be set as a source for iframe.
        },
      },
    },
  });

  //happy student slider
  $(".happy-student-slider-wrapper").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoPlay: true,

    prevArrow:
      '<button class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow:
      '<button class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
  });

  //counter up
  $(".count").counterUp({
    dely: 10,
    time: 1000,
  });
});

//footer
document.querySelector(".newsletter").addEventListener("click", function () {
  document.querySelector(".email-input").focus();
});
