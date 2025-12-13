/**
 * HTML MODIFIERS
 * Functions that add or modify HTML elements (buttons, links, image wrappers, etc.)
 * These functions add content or wrap existing elements with new HTML
 */

const fs = require('fs');
const path = require('path');

const files = [
  'index.html',
  'week1.html', 'week2.html', 'week3.html', 'week4.html',
  'week5.html', 'week6.html', 'week7.html', 'week8.html',
  'week9.html', 'week10.html', 'week11.html', 'week12.html'
];

// ============================================================================
// ADD GITHUB LINK
// ============================================================================
function addGithubLink() {
  console.log('\n--- Adding GitHub Link ---');
  files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(
      /(<footer[^>]*>)\s*(©[^<]*)/,
      '$1\n    <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="block mb-3 text-accent hover:underline">GitHub Repository</a>\n    $2'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Added GitHub link to ${file}`);
  });
}

// ============================================================================
// ADD FIGMA PDF BUTTON
// ============================================================================
function addFigmaPdfButton() {
  console.log('\n--- Adding Figma PDF Button ---');
  files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(
      /<a href="https:\/\/github\.com\/Nino-Ryssens\/projectdocs" target="_blank" rel="noopener noreferrer" class="inline-block mb-1 px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all">GitHub Repository →<\/a>/,
      '<div class="flex gap-2 justify-center mb-1">\n      <a href="https://github.com/Nino-Ryssens/projectdocs" target="_blank" rel="noopener noreferrer" class="inline-block px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all">GitHub Repository →</a>\n      <a href="assets/Lost-in-tra(i)nslation_borden_RyssensN_2526.pdf" target="_blank" rel="noopener noreferrer" class="inline-block px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all">Figma Boards PDF ↓</a>\n    </div>'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Added Figma PDF button to ${file}`);
  });
}

// ============================================================================
// ADD FIGMA PROTOTYPE BUTTON
// ============================================================================
function addFigmaPrototypeButton() {
  console.log('\n--- Adding Figma Prototype Button ---');
  files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(
      /<a href="assets\/Lost-in-tra\(i\)nslation_borden_RyssensN_2526\.pdf" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all">Figma Boards PDF ↓<\/a>/,
      '<a href="assets/Lost-in-tra(i)nslation_borden_RyssensN_2526.pdf" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all">Figma Boards PDF ↓</a>\n      <a href="https://www.figma.com/proto/5SdUMXc88aYSiTXPnDtTzf/Midi-Treinborden?page-id=0%3A1&node-id=129-1145&p=f&viewport=-170%2C741%2C0.17&t=ITxxPCSA8J4OGGEF-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=129%3A1145" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all">Figma Prototype →</a>'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Added Figma prototype button to ${file}`);
  });
}

// ============================================================================
// MAKE IMAGES CLICKABLE
// ============================================================================
function makeImagesClickable() {
  console.log('\n--- Making Images Clickable ---');
  const weekFiles = [
    'week1.html', 'week2.html', 'week3.html', 'week4.html',
    'week5.html', 'week6.html', 'week7.html', 'week8.html',
    'week9.html', 'week10.html', 'week11.html', 'week12.html'
  ];
  
  weekFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Wrap img tags with loading attribute
    content = content.replace(
      /<img src="([^"]+)" alt="([^"]+)" loading="lazy" class="responsive-img mb-4">/g,
      '<a href="$1" class="lightbox" data-alt="$2"><img src="$1" alt="$2" loading="lazy" class="responsive-img mb-4 cursor-pointer hover:opacity-80 transition-opacity"></a>'
    );
    
    // Wrap img tags without loading attribute
    content = content.replace(
      /<img src="([^"]+)" alt="([^"]+)" class="responsive-img mb-4">/g,
      '<a href="$1" class="lightbox" data-alt="$2"><img src="$1" alt="$2" class="responsive-img mb-4 cursor-pointer hover:opacity-80 transition-opacity"></a>'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Made images clickable in ${file}`);
  });
}

// ============================================================================
// UPDATE FOOTER BUTTON
// ============================================================================
function updateFooterButton() {
  console.log('\n--- Updating Footer Button ---');
  const weekFiles = [
    'week1.html', 'week2.html', 'week3.html', 'week4.html',
    'week5.html', 'week6.html', 'week7.html', 'week8.html',
    'week9.html', 'week10.html', 'week11.html', 'week12.html'
  ];
  
  weekFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(
      /<footer([^>]*)>\s*<a href="https:\/\/github\.com\/Nino-Ryssens\/projectdocs"([^>]*)>GitHub Repository →<\/a>\s*(©[^<]*)<\/footer>/,
      '<footer$1>\n    <a href="https://github.com/Nino-Ryssens/projectdocs"$2>GitHub Repository →</a>\n    <p>$3</p>\n  </footer>'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated footer button in ${file}`);
  });
}

// ============================================================================
// ADD MOBILE MENU
// ============================================================================
function addMobileMenu() {
  console.log('\n--- Adding Mobile Menu ---');
  const weekFiles = [
    'week1.html', 'week2.html', 'week3.html', 'week4.html',
    'week5.html', 'week6.html', 'week7.html', 'week8.html',
    'week9.html', 'week10.html', 'week11.html', 'week12.html'
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

  weekFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      if (content.includes('id="mobile-menu-btn"')) {
        console.log(`⏭️  ${file} already has mobile menu`);
        return;
      }
      
      const bodyIndex = content.indexOf('<body');
      const afterBodyTag = content.indexOf('>', bodyIndex) + 1;
      content = content.slice(0, afterBodyTag) + '\n' + mobileMenuHTML + content.slice(afterBodyTag);
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Added mobile menu to ${file}`);
    } catch (error) {
      console.error(`✗ Error updating ${file}:`, error.message);
    }
  });
}

// ============================================================================
// EXPORT FUNCTIONS
// ============================================================================
module.exports = {
  addGithubLink,
  addFigmaPdfButton,
  addFigmaPrototypeButton,
  makeImagesClickable,
  updateFooterButton,
  addMobileMenu
};

// Uncomment to run individual functions:
// addGithubLink();
// addFigmaPdfButton();
// addFigmaPrototypeButton();
// makeImagesClickable();
// updateFooterButton();
// addMobileMenu();
