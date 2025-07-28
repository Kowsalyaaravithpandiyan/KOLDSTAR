
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent event bubbling
    navMenu.classList.toggle('active');
  });

  // Close menu on outside click
  document.addEventListener('click', function (e) {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove('active');
    }
  });

