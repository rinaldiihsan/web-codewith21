const hamburgerBtn = document.querySelector('.hamburger-btn');
const sidebar = document.querySelector('.sidebar');
const navMenu = document.querySelector('.nav-menu-mobile');
const navbar = document.getElementById('navbar');

// Tambahkan event listener saat tombol hamburger diklik
hamburgerBtn.addEventListener('click', () => {
  // Toggle kelas "show-sidebar" pada sidebar
  sidebar.classList.toggle('show-sidebar');
});

// Tambahkan event listener saat klik di luar area navigasi
document.addEventListener('click', (event) => {
  const isClickInsideNavMenu = navMenu.contains(event.target);
  const isClickInsideHamburger = hamburgerBtn.contains(event.target);
  const isClickInsideSidebar = sidebar.contains(event.target);

  if (!isClickInsideNavMenu && !isClickInsideHamburger && !isClickInsideSidebar) {
    // Sembunyikan sidebar jika klik di luar area navigasi
    sidebar.classList.remove('show-sidebar');
  }
});
