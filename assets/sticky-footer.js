// Sticky footer based on page content
(function() {
  function updateFooterPosition() {
    const images = document.querySelectorAll('a.lightbox img');
    const footer = document.querySelector('footer');
    
    if (!footer) return;
    
    // If no images, make footer sticky
    if (images.length === 0) {
      footer.style.position = 'fixed';
      footer.style.bottom = '0';
      footer.style.left = '0';
      footer.style.right = '0';
      footer.style.zIndex = '10';
      document.body.style.paddingBottom = '120px';
    } else {
      // If images exist, make footer normal
      footer.style.position = 'static';
      footer.style.bottom = 'auto';
      footer.style.left = 'auto';
      footer.style.right = 'auto';
      footer.style.zIndex = 'auto';
      document.body.style.paddingBottom = '0';
    }
  }
  
  // Check on page load
  updateFooterPosition();
  
  // Check after images load
  window.addEventListener('load', updateFooterPosition);
})();
