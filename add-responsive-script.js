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
  
  // Add responsive-breakpoints script before other scripts if not already there
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
    console.log(`Added responsive-breakpoints.js to ${file}`);
  } else {
    console.log(`${file} already has responsive-breakpoints.js`);
  }
});

console.log('Responsive breakpoints script added to all files!');
