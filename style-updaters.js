/**
 * STYLE UPDATERS
 * Functions that update CSS classes, spacing, padding, and other styling attributes
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
// UPDATE BUTTON PADDING
// ============================================================================
function updateButtonPadding() {
  console.log('\n--- Updating Button Padding ---');
  files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(
      /class="inline-block px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all"/g,
      'class="inline-block px-6 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all"'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated button padding in ${file}`);
  });
}

// ============================================================================
// UPDATE BUTTON SPACING
// ============================================================================
function updateButtonSpacing() {
  console.log('\n--- Updating Button Spacing ---');
  files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(
      /<div class="flex gap-2 justify-center mb-1">/g,
      '<div class="flex gap-4 justify-center mb-2">'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated button spacing in ${file}`);
  });
}

// ============================================================================
// UPDATE GITHUB BUTTON (Convert link to styled button)
// ============================================================================
function updateGithubButton() {
  console.log('\n--- Updating GitHub Button ---');
  files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(
      /<a href="https:\/\/github\.com\/Nino-Ryssens\/projectdocs" target="_blank" rel="noopener noreferrer" class="block mb-3 text-accent hover:underline">GitHub Repository<\/a>/,
      '<a href="https://github.com/Nino-Ryssens/projectdocs" target="_blank" rel="noopener noreferrer" class="inline-block mb-3 px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all">GitHub Repository →</a>'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated GitHub button in ${file}`);
  });
}

// ============================================================================
// UPDATE GITHUB URL
// ============================================================================
function updateGithubUrl() {
  console.log('\n--- Updating GitHub URLs ---');
  files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(
      /href="https:\/\/github\.com"/g,
      'href="https://github.com/Nino-Ryssens/projectdocs"'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated GitHub URL in ${file}`);
  });
}

// ============================================================================
// UPDATE FOOTER TEXT
// ============================================================================
function updateFooterText() {
  console.log('\n--- Updating Footer Text ---');
  files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(
      /Grafisch en Digitale Media1/g,
      'Grafisch en Digitale Media 1'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated footer text in ${file}`);
  });
}

// ============================================================================
// UPDATE HEADER BOTTOM SPACING (pb-8 -> pb-header-bottom)
// ============================================================================
function updateHeaderBottom() {
  console.log('\n--- Updating Header Bottom Spacing ---');
  weekFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(
      /pb-8 scale-125 origin-top/g,
      'pb-header-bottom scale-125 origin-top'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated ${file}`);
  });
}

// ============================================================================
// FIX HEADER BOTTOM (Revert pb-header-bottom to inline style)
// ============================================================================
function fixHeaderBottom() {
  console.log('\n--- Fixing Header Bottom ---');
  weekFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(
      /pb-header-bottom scale-125 origin-top/g,
      'scale-125 origin-top" style="padding-bottom: 1.68rem;'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed ${file}`);
  });
}

// ============================================================================
// UPDATE HEADER SPACING (mb-1 -> mb-header-gap in h1)
// ============================================================================
function updateHeaderSpacing() {
  console.log('\n--- Updating Header Spacing ---');
  weekFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(
      /<h1 class="font-display font-black text-7xl mb-1 -tracking-wider">([^<]+)<\/h1>/g,
      '<h1 class="font-display font-black text-7xl mb-header-gap -tracking-wider">$1</h1>'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated ${file}`);
  });
}

// ============================================================================
// UPDATE IMAGE TITLES (Set data-alt to week name)
// ============================================================================
function updateImageTitles() {
  console.log('\n--- Updating Image Titles ---');
  const weekMap = {
    'week1.html': 'Week 1',
    'week2.html': 'Week 2',
    'week3.html': 'Week 3',
    'week4.html': 'Week 4',
    'week5.html': 'Week 5',
    'week6.html': 'Week 6',
    'week7.html': 'Week 7',
    'week8.html': 'Week 8',
    'week9.html': 'Week 9',
    'week10.html': 'Week 10',
    'week11.html': 'Week 11',
    'week12.html': 'Week 12',
  };

  Object.entries(weekMap).forEach(([file, weekName]) => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(
      /data-alt="[^"]*"/g,
      `data-alt="${weekName}"`
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated ${file} - images now show "${weekName}"`);
  });
}

// ============================================================================
// UPDATE HEADERS (Update old header styling to new)
// ============================================================================
function updateHeaders() {
  console.log('\n--- Updating Headers ---');
  const headersToUpdate = Array.from({ length: 11 }, (_, i) => `week${i + 2}.html`);

  headersToUpdate.forEach(file => {
    const filePath = path.join(__dirname, file);
    
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      const oldHeader = '<header class="text-center border-b border-border-light py-4 pb-6">';
      const newHeader = '<header class="text-center border-b border-border-light py-5 pb-8 scale-125 origin-top">';
      
      if (content.includes(oldHeader)) {
        content = content.replace(oldHeader, newHeader);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Updated ${file}`);
      } else {
        console.log(`⏭️  ${file} already updated or pattern not found`);
      }
    }
  });
}

// ============================================================================
// UPDATE NAV (Add relative positioning for mobile)
// ============================================================================
function updateNav() {
  console.log('\n--- Updating Nav ---');
  weekFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      const oldNav = '<nav class="nav" aria-label="Primary">';
      const newNav = '<nav class="nav relative" aria-label="Primary">';
      
      if (content.includes(oldNav)) {
        content = content.replace(oldNav, newNav);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Updated nav: ${file}`);
      } else {
        console.log(`⏭️  ${file} - nav already updated`);
      }
    }
  });
}

// ============================================================================
// EXPORT FUNCTIONS
// ============================================================================
module.exports = {
  updateButtonPadding,
  updateButtonSpacing,
  updateGithubButton,
  updateGithubUrl,
  updateFooterText,
  updateHeaderBottom,
  fixHeaderBottom,
  updateHeaderSpacing,
  updateImageTitles,
  updateHeaders,
  updateNav
};

// Uncomment to run individual functions:
// updateButtonPadding();
// updateButtonSpacing();
// updateGithubButton();
// updateGithubUrl();
// updateFooterText();
// updateHeaderBottom();
// fixHeaderBottom();
// updateHeaderSpacing();
// updateImageTitles();
// updateHeaders();
// updateNav();
