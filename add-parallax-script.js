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
  
  // Add parallax script before responsive-breakpoints script if not already there
  if (!content.includes('parallax-scroll.js')) {
    content = content.replace(
      '<script src="assets/responsive-breakpoints.js"></script>',
      '<script src="assets/parallax-scroll.js"></script>\n  <script src="assets/responsive-breakpoints.js"></script>'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Added parallax-scroll.js to ${file}`);
  } else {
    console.log(`${file} already has parallax-scroll.js`);
  }
});

console.log('Parallax scroll script added to all files!');
console.log('\nNext: Set your background image URL in the CSS variables:');
console.log('In tailwind-custom.css, update: --bg-image: url("your-image-path.jpg");');
