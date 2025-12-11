// Mobile Navigation Enhancement
(function() {
  const navToggle = document.getElementById('nav-toggle');
  const weekLinks = document.querySelectorAll('.week-link a');
  
  // Close menu when clicking a week link on mobile
  weekLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Check if on mobile (menu is shown as dropdown)
      if (window.innerWidth < 769) {
        navToggle.checked = false;
      }
    });
  });
  
  // Close menu when clicking outside on mobile
  document.addEventListener('click', (e) => {
    if (window.innerWidth < 769) {
      const nav = document.querySelector('.nav');
      const isClickInsideNav = nav.contains(e.target);
      
      if (!isClickInsideNav && navToggle.checked) {
        navToggle.checked = false;
      }
    }
  });
  
  // Handle window resize - reset menu state
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 769 && navToggle.checked) {
      navToggle.checked = false;
    }
  });
  
  // Add touch feedback on mobile
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    link.addEventListener('touchstart', function() {
      this.style.opacity = '0.7';
    });
    
    link.addEventListener('touchend', function() {
      this.style.opacity = '1';
    });
  });
})();
