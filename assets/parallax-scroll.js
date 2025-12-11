// Cursor-based 3D rotation - rotate model based on cursor vertical position
(function() {
  // Inject 3D background container
  const bgContainer = document.createElement('div');
  bgContainer.id = 'parallax-bg';
  bgContainer.innerHTML = `
    <iframe title="SNCB HLE13" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/ce724e4758794b468a49a975cf7551b8/embed"></iframe>
  `;
  
  // Insert at the beginning of body
  document.body.insertBefore(bgContainer, document.body.firstChild);
  
  const iframe = bgContainer.querySelector('iframe');
  
  // Hide play button and UI by adding CSS to iframe
  const hideUIStyle = document.createElement('style');
  hideUIStyle.textContent = `
    #parallax-bg iframe {
      filter: brightness(1) !important;
    }
    /* Hide all buttons and play controls */
    button, [role="button"], svg[data-name*="play"], .play-button, [class*="play"] {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
    }
  `;
  document.head.appendChild(hideUIStyle);
  
  // Try to hide button when iframe loads
  if (iframe) {
    iframe.addEventListener('load', () => {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        if (iframeDoc) {
          // Hide all buttons
          const buttons = iframeDoc.querySelectorAll('button, [role="button"], svg');
          buttons.forEach(btn => {
            btn.style.display = 'none';
            btn.style.visibility = 'hidden';
            btn.style.opacity = '0';
            btn.style.pointerEvents = 'none';
          });
          
          // Add style to hide UI
          const style = iframeDoc.createElement('style');
          style.textContent = `
            button, [role="button"], svg, .play-button, [class*="play"], [class*="button"] {
              display: none !important;
              visibility: hidden !important;
            }
          `;
          iframeDoc.head.appendChild(style);
        }
      } catch (e) {
        // CORS blocked, use alternative approach
      }
    });
  }
  
  let cursorRotation = 0;
  let lastCursorY = 0;
  
  // Track cursor movement
  window.addEventListener('mousemove', (e) => {
    const currentCursorY = e.clientY;
    const cursorDelta = currentCursorY - lastCursorY;
    
    // Add rotation based on vertical cursor movement
    cursorRotation += cursorDelta * 0.3;
    
    if (cursorRotation > 360) cursorRotation -= 360;
    if (cursorRotation < -360) cursorRotation += 360;
    
    document.documentElement.style.setProperty('--scroll-rotation', `${cursorRotation}deg`);
    
    lastCursorY = currentCursorY;
  });
  
  // Also track touch for mobile
  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const currentTouchY = touch.clientY;
      const touchDelta = currentTouchY - lastCursorY;
      
      cursorRotation += touchDelta * 0.3;
      
      if (cursorRotation > 360) cursorRotation -= 360;
      if (cursorRotation < -360) cursorRotation += 360;
      
      document.documentElement.style.setProperty('--scroll-rotation', `${cursorRotation}deg`);
      
      lastCursorY = currentTouchY;
    }
  });
})();
