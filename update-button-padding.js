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
  
  // Update button padding - increase left/right padding
  content = content.replace(
    /class="inline-block px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all"/g,
    'class="inline-block px-6 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all"'
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated button padding in ${file}`);
});

console.log('Button padding updated in all footers!');
