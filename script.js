const $buttons = $(".ripple");

$buttons.each(function () {
  $(this).on("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const $button = $(e.target);
    const buttonTop = $button.position().top;
    const buttonLeft = $button.position().left;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = $("<span class='circle'></span>");
    circle.css({
      top: yInside + "px",
      left: xInside + "px",
    });

    $(this).append(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
