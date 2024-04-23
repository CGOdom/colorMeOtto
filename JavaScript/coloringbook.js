// Function to create a random star
function createStar() {
  const star = document.createElement("div");
  star.className = "star";
  star.style.width = `${Math.random() * 2 + 1}px`; // Random width between 1px and 3px
  star.style.height = star.style.width; // Make the star a perfect circle
  star.style.left = `${Math.random() * window.innerWidth}px`; // Random horizontal position
  star.style.top = `${Math.random() * window.innerHeight}px`; // Random vertical position
  document.body.appendChild(star);
}

// Create stars at random intervals
setInterval(createStar, 50); // Adjust interval for more or fewer stars

// Manual carousel navigation
$(document).ready(function () {
  $("#carouselExample").carousel({
    interval: false, // Disable automatic cycling
  });

  // Navigate to previous slide
  $(".carousel-control-prev").click(function () {
    $("#carouselExample").carousel("prev");
  });

  // Navigate to next slide
  $(".carousel-control-next").click(function () {
    $("#carouselExample").carousel("next");
  });
});

// Function to generate a random number between min and max
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

$(document).ready(function () {
  // Update UFO position with random values and animate its movement
  function updateUFOPosition() {
    // Generate random destination coordinates within the page boundaries
    var randomX = getRandomNumber(0, window.innerWidth - 200); // Adjust 200 based on UFO width
    var randomY = getRandomNumber(0, window.innerHeight - 200); // Adjust 200 based on UFO height

    // Calculate distance to travel in x and y directions
    var dx = randomX - parseInt($(".ufo-image").css("left"));
    var dy = randomY - parseInt($(".ufo-image").css("top"));

    // Calculate the duration of the animation based on distance
    var distance = Math.sqrt(dx * dx + dy * dy);
    var duration = distance * 0.05 + "s"; // Adjust multiplier for speed

    // Update UFO position and animate its movement
    $(".ufo-image").animate(
      { left: randomX + "px", top: randomY + "px" },
      { duration: duration, easing: "linear" }
    );
  }

  // Call updateUFOPosition function every 6 seconds (same duration as animation)
  setInterval(updateUFOPosition, 6000);
});
