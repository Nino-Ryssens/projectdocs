/**
 * Mobile Slide-in Menu Handler
 * Manages hamburger menu toggling and mobile navigation with slide-in panel
 */

document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOverlay = document.getElementById('menu-overlay');
  const menuCloseBtn = document.getElementById('menu-close-btn');
  const menuLinks = document.querySelectorAll('.menu-item');
  
  // Debug logging
  console.log('=== MOBILE MENU DEBUG ===');
  console.log('Button found:', !!mobileMenuBtn);
  console.log('Menu found:', !!mobileMenu);
  console.log('Overlay found:', !!menuOverlay);
  console.log('Window width:', window.innerWidth);
  if (mobileMenuBtn) {
    const style = window.getComputedStyle(mobileMenuBtn);
    console.log('Button display:', style.display);
    console.log('Button z-index:', style.zIndex);
    console.log('Button pointer-events:', style.pointerEvents);
    console.log('Button visible?', style.display !== 'none');
  }
  
  if (!mobileMenuBtn || !mobileMenu || !menuOverlay) {
    console.error('Mobile menu elements not found');
    return;
  }

  /**
   * Open the mobile menu
   */
  function openMenu() {
    mobileMenu.classList.add('open');
    menuOverlay.classList.remove('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }

  /**
   * Close the mobile menu
   */
  function closeMenu() {
    mobileMenu.classList.remove('open');
    menuOverlay.classList.add('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = ''; // Restore background scroll
  }

  /**
   * Toggle the mobile menu
   */
  function toggleMenu(e) {
    e.stopPropagation();
    if (mobileMenu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Toggle menu on hamburger click
  mobileMenuBtn.addEventListener('click', toggleMenu);
  console.log('✓ Click listener attached to hamburger button');
  
  // Close menu when close button is clicked
  if (menuCloseBtn) {
    menuCloseBtn.addEventListener('click', closeMenu);
  }

  // Close menu when a navigation link is clicked
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      closeMenu();
    });
  });

  // Close menu when overlay is clicked
  menuOverlay.addEventListener('click', closeMenu);

  // Close menu on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMenu();
    }
  });

  // Prevent menu from closing when clicking inside the menu panel
  mobileMenu.addEventListener('click', function(e) {
    e.stopPropagation();
  });
});
