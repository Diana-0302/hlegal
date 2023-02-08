$(".burger").click(function () {
  $(this).toggleClass("active");
});

$(".lang").click(function () {
  $(".lang").removeClass("active");
  $(this).addClass("active");
});

$(".burger").click(function () {
  $(".wrap").toggleClass("addition");
  $(".clients-wrap").toggleClass("addition");
});
