// Footer positioning - always static, no sticky behavior
(function() {
  function updateFooterPosition() {
    const footer = document.querySelector('footer');
    
    if (!footer) return;
    
    // Keep footer static for consistent spacing
    footer.style.position = 'static';
    footer.style.bottom = 'auto';
    footer.style.left = 'auto';
    footer.style.right = 'auto';
    footer.style.zIndex = 'auto';
    document.body.style.paddingBottom = '0';
  }
  
  // Check on page load
  updateFooterPosition();
  
  // Check after images load
  window.addEventListener('load', updateFooterPosition);
})();
