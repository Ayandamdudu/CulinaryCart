
document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.scrollable-container');
  const btnLeft = document.querySelector('.scroll-left-button');
  const btnRight = document.querySelector('.scroll-right-button');

  container.addEventListener('wheel', function (e) {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
  });

  container.addEventListener('touchmove', function (e) {
    e.preventDefault();
    container.scrollLeft += e.touches[0].clientX - e.touches[1].clientX;
  });

  btnLeft.addEventListener('click', function() {
    container.scrollBy({left: -100, behavior: 'smooth' });
  });

  btnRight.addEventListener('click', function() {
    container.scrollBy({right: 100, behavior: 'smooth' });
  });
});
