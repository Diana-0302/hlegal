function checkParams() {
  const fio = $("#fio").val();
  const email = $("#email").val();
  const phone = $("#phone").val();
  const text = $("#text").val();

  if (
    fio.length != 0 &&
    email.length != 0 &&
    phone.length != 0 &&
    text.length != 0
  ) {
    $(".btn-send").removeAttr("disabled");
  } else {
    $(".btn-send").attr("disabled", "disabled");
    $(".form-field").addClass("req");
  }
}

$(".btn-send").click(function () {
  $(".btn-send").text("Sent");
  $(".btn-send").css({
    "background-color": "#EDEDF7",
    color: "#323264",
    "box-shadow": "none",
    "border-color": "#EDEDF7",
  });
  $(".form-field").attr("disabled", "disabled");
});
