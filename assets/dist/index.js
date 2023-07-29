const hamburgerBtn = document.querySelector('.hamburger-btn');
const sidebar = document.querySelector('.sidebar');
const navMenu = document.querySelector('.nav-menu-mobile');
const navbar = document.getElementById('navbar');

hamburgerBtn.addEventListener('click', () => {
  // Toggle kelas "show-sidebar" pada sidebar
  sidebar.classList.toggle('show-sidebar');
});

document.addEventListener('click', (event) => {
  const isClickInsideNavMenu = navMenu.contains(event.target);
  const isClickInsideHamburger = hamburgerBtn.contains(event.target);
  const isClickInsideSidebar = sidebar.contains(event.target);

  if (!isClickInsideNavMenu && !isClickInsideHamburger && !isClickInsideSidebar) {
    sidebar.classList.remove('show-sidebar');
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

feather.replace();
