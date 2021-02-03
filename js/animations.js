$(window).scroll(function () {
  $(".one").each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 200) {
      $(this).addClass("hatch visible");
    }
  });
});

$(window).scroll(function () {
  $(".two").each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 500) {
      $(this).addClass("fadeIn visible");
    }
  });
});

$(window).scroll(function () {
  $(".three").each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 700) {
      $(this).addClass("slideUp visible");
    }
  });
});

$(window).scroll(function () {
  $(".four").each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 700) {
      $(this).addClass("expandUp visible");
    }
  });
});

$(window).scroll(function () {
  $(".five").each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 700) {
      $(this).addClass("hatch visible");
    }
  });
});
