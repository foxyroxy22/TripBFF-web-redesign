$(document).ready(function () {
  $(".tab-content > li").hide();
  $(".tab-content > li").first().show();

  $(".tab-btn li").click(function () {
    $(this).find(".tab-btn-cont").addClass("active");
    $(this).siblings().find(".tab-btn-cont").removeClass("active");

    let order = $(this).index();

    $(".tab-content > li").eq(order).show().siblings().hide();
  });

  //faq list
  // $(".faq-list li").addClass("active");

  $(".faq-list li").click(function () {
    $(this).toggleClass("active");
  });
});
