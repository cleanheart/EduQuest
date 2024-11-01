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

// video popup
$(function () {
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
});
