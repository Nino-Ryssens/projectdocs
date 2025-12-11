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
  
  // Remove parallax script line
  content = content.replace(
    '  <script src="assets/parallax-scroll.js"></script>\n',
    ''
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Removed parallax-scroll.js from ${file}`);
});

console.log('Parallax script removed from all files!');
