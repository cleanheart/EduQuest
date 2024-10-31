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
const youtubeLink = "https://www.youtube.com/embed/oPkLFZWxtz4?autoplay=1";

// বাটন ও পপআপ এলিমেন্ট খুঁজে বের করুন
const videoButton = document.getElementById("videoButton");
const videoPopup = document.getElementById("videoPopup");
const youtubeVideo = document.getElementById("youtubeVideo");
const closeIcon = document.getElementById("closeIcon");

// বাটনে ক্লিক করলে পপআপ ও ভিডিও চালু হবে
videoButton.addEventListener("click", () => {
  videoPopup.classList.add("active");
  youtubeVideo.src = youtubeLink; // ভিডিও URL সেট করা হয়েছে
});

// বন্ধ আইকনে ক্লিক করলে পপআপ ধীরে ধীরে বন্ধ হবে
closeIcon.addEventListener("click", () => {
  videoPopup.classList.add("fade-out");
  setTimeout(() => {
    videoPopup.classList.remove("active", "fade-out");
    youtubeVideo.src = ""; // ভিডিও বন্ধ করার জন্য src খালি করা হয়েছে
  }, 400); // 0.4 সেকেন্ড পরে পপআপ বন্ধ
});
