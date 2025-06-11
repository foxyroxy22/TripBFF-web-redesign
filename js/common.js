$(document).ready(function () {
  // mgnb
  $(".mgnb-wrap").hide();
  $(".ham").click(function () {
    $(".mgnb-wrap").fadeIn(300);
  });
  $(".btn-close").click(function () {
    $(".mgnb-wrap").fadeOut(300);
  });

  // home trips-list
  $(".trips-list .tab-content li").hide();
  $(".trips-list .tab-content li").first().show();

  $(".trips-list .tab-btn li").click(function () {
    $(this).find(".tab-btn-cont").addClass("active");
    $(this).siblings().find(".tab-btn-cont").removeClass("active");

    let order = $(this).index();

    $(".trips-list .tab-content li").eq(order).show().siblings().hide();
  });

  // review list
  const review_list_left = new Swiper(".review-list.left", {
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 7000,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    direction: "vertical",
  });

  const review_list_right = new Swiper(".review-list.right", {
    autoplay: {
      delay: 0,
      reverseDirection: true,
      disableOnInteraction: false,
    },
    speed: 7000,
    loop: true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        direction: "horizontal",
        slidesPerView: 1.5,
      },
      450: {
        direction: "horizontal",
        slidesPerView: 2,
      },
      765: {
        direction: "horizontal",
        slidesPerView: 2.5,
      },
      1024: {
        direction: "vertical",
        slidesPerView: 3,
      },
    },
  });

  var swiperClasses = [
    ".blog-slide1",
    ".blog-slide2",
    ".blog-slide3",
    ".blog-slide4",
  ];
  swiperClasses.forEach(function (swiperClass) {
    new Swiper(swiperClass, {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    grabCursor: true 
    });
  });

  var $header = $('header'); //헤더를 변수에 넣기
  var $page = $('.page-start'); //색상이 변할 부분
  var $window = $(window);
  var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
  
  $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = $page.offset().top;
  });
  
  $window.on('scroll', function(){ //스크롤시
    var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
    $header.toggleClass('down', scrolled); //클래스 토글
  });
}); //end
