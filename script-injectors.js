/**
 * SCRIPT INJECTORS
 * Functions that inject script tags into HTML files
 */

const fs = require('fs');
const path = require('path');

const files = [
  'index.html',
  'week1.html', 'week2.html', 'week3.html', 'week4.html',
  'week5.html', 'week6.html', 'week7.html', 'week8.html',
  'week9.html', 'week10.html', 'week11.html', 'week12.html'
];

const weekFiles = [
  'week1.html', 'week2.html', 'week3.html', 'week4.html',
  'week5.html', 'week6.html', 'week7.html', 'week8.html',
  'week9.html', 'week10.html', 'week11.html', 'week12.html'
];

// ============================================================================
// ADD LIGHTBOX SCRIPT
// ============================================================================
function addLightboxScript() {
  console.log('\n--- Adding Lightbox Script ---');
  files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('lightbox.js')) {
      content = content.replace(
        '</body>',
        '  <script src="assets/lightbox.js"></script>\n</body>'
      );
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Added lightbox.js to ${file}`);
    } else {
      console.log(`⏭️  ${file} already has lightbox.js`);
    }
  });
}

// ============================================================================
// ADD RESPONSIVE BREAKPOINTS SCRIPT
// ============================================================================
function addResponsiveScript() {
  console.log('\n--- Adding Responsive Breakpoints Script ---');
  files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('responsive-breakpoints.js')) {
      // Find lightbox script and add before it
      content = content.replace(
        '<script src="assets/lightbox.js"></script>',
        '<script src="assets/responsive-breakpoints.js"></script>\n  <script src="assets/lightbox.js"></script>'
      );
      
      // If lightbox script not found, add before closing body
      if (!content.includes('responsive-breakpoints.js')) {
        content = content.replace(
          '</body>',
          '  <script src="assets/responsive-breakpoints.js"></script>\n</body>'
        );
      }
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Added responsive-breakpoints.js to ${file}`);
    } else {
      console.log(`⏭️  ${file} already has responsive-breakpoints.js`);
    }
  });
}

// ============================================================================
// ADD PARALLAX SCRIPT
// ============================================================================
function addParallaxScript() {
  console.log('\n--- Adding Parallax Script ---');
  files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('parallax-scroll.js')) {
      content = content.replace(
        '<script src="assets/responsive-breakpoints.js"></script>',
        '<script src="assets/parallax-scroll.js"></script>\n  <script src="assets/responsive-breakpoints.js"></script>'
      );
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Added parallax-scroll.js to ${file}`);
    } else {
      console.log(`⏭️  ${file} already has parallax-scroll.js`);
    }
  });
}

// ============================================================================
// REMOVE PARALLAX SCRIPT
// ============================================================================
function removeParallaxScript() {
  console.log('\n--- Removing Parallax Script ---');
  files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(
      '  <script src="assets/parallax-scroll.js"></script>\n',
      ''
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Removed parallax-scroll.js from ${file}`);
  });
}

// ============================================================================
// ADD STICKY FOOTER SCRIPT
// ============================================================================
function addStickyFooterScript() {
  console.log('\n--- Adding Sticky Footer Script ---');
  files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('sticky-footer.js')) {
      content = content.replace(
        '<script src="assets/responsive-breakpoints.js"></script>',
        '<script src="assets/sticky-footer.js"></script>\n  <script src="assets/responsive-breakpoints.js"></script>'
      );
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Added sticky-footer.js to ${file}`);
    } else {
      console.log(`⏭️  ${file} already has sticky-footer.js`);
    }
  });
}

// ============================================================================
// ADD MOBILE NAV SCRIPT (Week files only)
// ============================================================================
function addMobileNavScript() {
  console.log('\n--- Adding Mobile Nav Script ---');
  weekFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      const scriptTag = '  <script src="assets/mobile-nav.js"><\/script>';
      const closingBody = '<\/body>\n<\/html>';
      
      if (!content.includes('mobile-nav.js')) {
        content = content.replace(closingBody, `  ${scriptTag}\n</body>\n</html>`);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Added mobile-nav.js: ${file}`);
      } else {
        console.log(`⏭️  ${file} - already has script`);
      }
    }
  });
}

// ============================================================================
// ADD MOBILE MENU SCRIPT
// ============================================================================
function addMobileMenuScript() {
  console.log('\n--- Adding Mobile Menu Script ---');
  weekFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      const scriptTag = '  <script src="assets/mobile-menu.js"></script>';
      
      if (!content.includes('assets/mobile-menu.js')) {
        const bodyCloseIndex = content.lastIndexOf('</body>');
        content = content.slice(0, bodyCloseIndex) + scriptTag + '\n' + content.slice(bodyCloseIndex);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Added mobile-menu.js to ${file}`);
      } else {
        console.log(`⏭️  ${file} already has mobile-menu.js`);
      }
    }
  });
}

// ============================================================================
// EXPORT FUNCTIONS
// ============================================================================
module.exports = {
  addLightboxScript,
  addResponsiveScript,
  addParallaxScript,
  removeParallaxScript,
  addStickyFooterScript,
  addMobileNavScript,
  addMobileMenuScript
};

// Uncomment to run individual functions:
// addLightboxScript();
// addResponsiveScript();
// addParallaxScript();
// removeParallaxScript();
// addStickyFooterScript();
// addMobileNavScript();
// addMobileMenuScript();
