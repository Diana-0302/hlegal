$(".burger").click(function () {
  $(this).toggleClass("active");
});

$(".lang").click(function () {
  $(".lang").removeClass("active");
  $(this).addClass("active");
});

$("#firstSlider").slick({
  dots: true,
  arrows: false,
});

$(".burger").click(function () {
  $(".content").toggleClass("z-1");
});
