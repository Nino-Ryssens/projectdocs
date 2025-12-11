// Responsive breakpoints - change styles only at specific screen sizes
(function() {
  const BREAKPOINTS = {
    mobile: 768,    // Below this = mobile
    tablet: 1024,   // Above mobile, below this = tablet
    desktop: 1024   // Above this = desktop
  };
  
  let currentBreakpoint = null;
  
  function getBreakpoint() {
    const width = window.innerWidth;
    if (width < BREAKPOINTS.mobile) return 'mobile';
    if (width < BREAKPOINTS.tablet) return 'tablet';
    return 'desktop';
  }
  
  function applyBreakpointStyles() {
    const breakpoint = getBreakpoint();
    
    if (breakpoint === currentBreakpoint) return; // No change needed
    
    currentBreakpoint = breakpoint;
    
    const html = document.documentElement;
    
    // Remove all breakpoint classes
    html.classList.remove('bp-mobile', 'bp-tablet', 'bp-desktop');
    
    // Add current breakpoint class
    html.classList.add(`bp-${breakpoint}`);
    
    console.log(`Breakpoint changed to: ${breakpoint}`);
  }
  
  // Apply on load
  applyBreakpointStyles();
  
  // Apply on resize with debounce
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(applyBreakpointStyles, 300);
  });
})();
