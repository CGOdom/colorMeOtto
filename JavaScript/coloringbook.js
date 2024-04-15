<script>
  // Function to create a random star
  function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = `${Math.random() * 2 + 1}px`; // Random width between 1px and 3px
    star.style.height = star.style.width; // Make the star a perfect circle
    star.style.left = `${Math.random() * window.innerWidth}px`; // Random horizontal position
    star.style.top = `${Math.random() * window.innerHeight}px`; // Random vertical position
    document.body.appendChild(star);
  }

  // Create stars at random intervals
  setInterval(createStar, 50); // Adjust interval for more or fewer stars

  // Manual carousel navigation
  $(document).ready(function(){
    $('#carouselExample').carousel({
      interval: false // Disable automatic cycling
    });

    // Navigate to previous slide
    $('.carousel-control-prev').click(function(){
      $('#carouselExample').carousel('prev');
    });

    // Navigate to next slide
    $('.carousel-control-next').click(function(){
      $('#carouselExample').carousel('next');
    });
  });
</script>