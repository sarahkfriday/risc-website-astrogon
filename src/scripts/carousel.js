export function initCarousel() {
  console.log("carousel.js loaded");

  function startCarousel() {
    const images = document.querySelectorAll('.carousel img');
    if (!images.length) return;

    let current = 0;

    // Remove any previous intervals
    clearInterval(window.carouselInterval);

    images.forEach((img, i) => {
      img.classList.remove('active');
      if (i === 0) img.classList.add('active');
    });

    window.carouselInterval = setInterval(() => {
      images[current].classList.remove('active');
      current = (current + 1) % images.length;
      images[current].classList.add('active');
    }, 5000);
  }

  startCarousel();

  document.addEventListener('astro:after-swap', () => {
    console.log('astro:after-swap fired (document listener)');
    setTimeout(startCarousel, 10);
  });
}