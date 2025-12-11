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
  
  // Add lightbox script before closing body tag if not already there
  if (!content.includes('lightbox.js')) {
    content = content.replace(
      '</body>',
      '  <script src="assets/lightbox.js"></script>\n</body>'
    );
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Added lightbox.js to ${file}`);
  } else {
    console.log(`${file} already has lightbox.js`);
  }
});

console.log('Lightbox script added to all files!');
