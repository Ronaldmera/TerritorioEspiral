window.addEventListener('DOMContentLoaded', function () {
  //inicializando AOS
  AOS.init({
    offset: 200, // en píxeles
  });

  const menuBtn = document.getElementById('menu-btn');

  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      menuBtn.classList.toggle('open');
    });
  }
});
