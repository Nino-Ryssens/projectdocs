const fs = require('fs');
const path = require('path');

const files = [
  'index.html',
  'week1.html', 'week2.html', 'week3.html', 'week4.html',
  'week5.html', 'week6.html', 'week7.html', 'week8.html',
  'week9.html', 'week10.html', 'week11.html', 'week12.html'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add sticky footer script before responsive-breakpoints if not already there
  if (!content.includes('sticky-footer.js')) {
    content = content.replace(
      '<script src="assets/responsive-breakpoints.js"></script>',
      '<script src="assets/sticky-footer.js"></script>\n  <script src="assets/responsive-breakpoints.js"></script>'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Added sticky-footer.js to ${file}`);
  } else {
    console.log(`${file} already has sticky-footer.js`);
  }
});

console.log('Sticky footer script added to all files!');
