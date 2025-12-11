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
  
  // Update button container with more spacing
  content = content.replace(
    /<div class="flex gap-2 justify-center mb-1">/g,
    '<div class="flex gap-4 justify-center mb-2">'
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated button spacing in ${file}`);
});

console.log('Button spacing updated in all footers!');
