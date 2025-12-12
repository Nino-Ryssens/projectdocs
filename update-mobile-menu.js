const fs = require('fs');
const path = require('path');

// Files to update
const files = [
  'week1.html',
  'week2.html',
  'week3.html',
  'week4.html',
  'week5.html',
  'week6.html',
  'week7.html',
  'week8.html',
  'week9.html',
  'week10.html',
  'week11.html',
  'week12.html'
];

const mobileMenuHTML = `  <!-- Mobile Menu Button (Hamburger) -->
  <button id="mobile-menu-btn" class="mobile-menu-btn" aria-label="Toggle menu" aria-expanded="false">
    <div class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </button>

  <!-- Mobile Dropdown Menu -->
  <nav id="mobile-menu" class="hidden">
    <ul>
      <li><a href="index.html">Homepage</a></li>
      <li><a href="week1.html">Week 1</a></li>
      <li><a href="week2.html">Week 2</a></li>
      <li><a href="week3.html">Week 3</a></li>
      <li><a href="week4.html">Week 4</a></li>
      <li><a href="week5.html">Week 5</a></li>
      <li><a href="week6.html">Week 6</a></li>
      <li><a href="week7.html">Week 7</a></li>
      <li><a href="week8.html">Week 8</a></li>
      <li><a href="week9.html">Week 9</a></li>
      <li><a href="week10.html">Week 10</a></li>
      <li><a href="week11.html">Week 11</a></li>
      <li><a href="week12.html">Week 12</a></li>
    </ul>
  </nav>

`;

const scriptTag = `  <script src="assets/mobile-menu.js"></script>`;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find where to insert mobile menu (right after <body> tag)
    const bodyIndex = content.indexOf('<body');
    const afterBodyTag = content.indexOf('>', bodyIndex) + 1;
    
    // Check if mobile menu already exists
    if (content.includes('id="mobile-menu-btn"')) {
      console.log(`✓ ${file} already has mobile menu`);
      return;
    }
    
    // Insert mobile menu after body tag
    content = content.slice(0, afterBodyTag) + '\n' + mobileMenuHTML + content.slice(afterBodyTag);
    
    // Add script tag before closing </body> if not present
    if (!content.includes('assets/mobile-menu.js')) {
      const bodyCloseIndex = content.lastIndexOf('</body>');
      const beforeBodyClose = content.substring(bodyCloseIndex - 50, bodyCloseIndex);
      const lastScriptIndex = beforeBodyClose.lastIndexOf('<script');
      const insertIndex = bodyCloseIndex - (beforeBodyClose.length - lastScriptIndex) + beforeBodyClose.lastIndexOf('</script>') + '</script>'.length;
      
      content = content.slice(0, insertIndex) + '\n' + scriptTag + content.slice(insertIndex);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated ${file}`);
  } catch (error) {
    console.error(`✗ Error updating ${file}:`, error.message);
  }
});

console.log('\nMobile menu added to all week pages!');
