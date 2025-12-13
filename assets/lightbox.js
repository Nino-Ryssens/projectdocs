// Lightbox functionality for clickable images
(function() {
  console.log('Lightbox script loaded');
  
  // Create lightbox modal
  const lightboxHTML = `
    <div id="lightbox" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.9); z-index: 9999; display: none; align-items: center; justify-content: center; padding: 20px;">
      <div style="position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; max-width: 90vw; max-height: 90vh;">
        <img id="lightbox-image" src="" alt="" style="max-width: 100%; max-height: 80vh; object-fit: contain; border-radius: 8px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);">
        <button id="lightbox-close" style="position: absolute; top: 20px; right: 20px; background-color: rgba(0, 0, 0, 0.6); color: white; border: none; border-radius: 50%; width: 48px; height: 48px; font-size: 28px; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10000;">
          ✕
        </button>
        <p id="lightbox-alt" style="color: white; text-align: center; margin-top: 20px; font-size: 14px; max-width: 100%;"></p>
      </div>
    </div>
  `;
  
  // Inject lightbox HTML
  document.body.insertAdjacentHTML('beforeend', lightboxHTML);
  console.log('Lightbox HTML injected');
  
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxAlt = document.getElementById('lightbox-alt');
  
  // Open lightbox on image click
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a.lightbox');
    if (link) {
      console.log('Lightbox link clicked');
      e.preventDefault();
      lightboxImage.src = link.href;
      lightboxImage.alt = link.getAttribute('data-alt') || '';
      lightboxAlt.textContent = link.getAttribute('data-alt') || '';
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      console.log('Lightbox opened');
    }
  });
  
  // Close lightbox
  function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
    console.log('Lightbox closed');
  }
  
  lightboxClose.addEventListener('click', function(e) {
    e.stopPropagation();
    closeLightbox();
  });
  
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  
  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
      closeLightbox();
    }
    
    // Arrow key navigation for before/after pairs
    if (lightbox.style.display === 'flex') {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        const currentSrc = lightboxImage.src;
        const week12Pairs = [
          { before: 'assets/week12-before-1.png', after: 'assets/week12-after-1.png' },
          { before: 'assets/week12-before-2.png', after: 'assets/week12-after-2.png' }
        ];
        
        // Find which pair we're in
        for (let pair of week12Pairs) {
          if (currentSrc.includes('week12-before') || currentSrc.includes('week12-after')) {
            if (currentSrc.includes(pair.before) || currentSrc.includes(pair.after)) {
              if (e.key === 'ArrowLeft') {
                lightboxImage.src = pair.before;
                lightboxAlt.textContent = 'Voor';
              } else {
                lightboxImage.src = pair.after;
                lightboxAlt.textContent = 'Na';
              }
              break;
            }
          }
        }
      }
    }
  });
})();
