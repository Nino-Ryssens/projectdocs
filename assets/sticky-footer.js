// Footer positioning using CSS flexbox (no JS needed, but kept for reference)
(function() {
  function updateFooterPosition() {
    const footer = document.querySelector('footer');
    const main = document.querySelector('main');
    
    if (!footer || !main) return;
    
    // CSS Flexbox handles this now, but ensure footer is visible
    footer.style.width = '100%';
    footer.style.overflow = 'hidden';
  }
  
  // Check on page load
  updateFooterPosition();
  
  // Check after images load
  window.addEventListener('load', updateFooterPosition);
  
  // Check on resize
  window.addEventListener('resize', updateFooterPosition);
})();
