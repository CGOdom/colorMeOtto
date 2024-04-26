// Manual carousel navigation //
$(document).ready(function () {
  $("#carouselExample").carousel({
    interval: false,
  });

  // Navigate to previous slide //
  $(".carousel-control-prev").click(function () {
    $("#carouselExample").carousel("prev");
  });

  // Navigate to next slide //
  $(".carousel-control-next").click(function () {
    $("#carouselExample").carousel("next");
  });
});

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

$(document).ready(function () {
  // UFO position with random values //
  function updateUFOPosition() {
    // Generate random destinations //
    var randomX = getRandomNumber(0, window.innerWidth - 200);
    var randomY = getRandomNumber(0, window.innerHeight - 200);

    // Calculate distance to travel in x and y directions //
    var dx = randomX - parseInt($(".ufo-image").css("left"));
    var dy = randomY - parseInt($(".ufo-image").css("top"));

    // Calculate the duration of the animation based on distance //
    var distance = Math.sqrt(dx * dx + dy * dy);
    var duration = distance * 0.05 + "s";

    // Update UFO position //
    $(".ufo-image").animate(
      { left: randomX + "px", top: randomY + "px" },
      { duration: duration, easing: "linear" }
    );
  }

  // Call updateUFOPosition function every 6 seconds (same duration as animation) //
  setInterval(updateUFOPosition, 6000);
});
