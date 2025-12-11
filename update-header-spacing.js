const fs = require('fs');
const path = require('path');

const files = [
  'week1.html', 'week2.html', 'week3.html', 'week4.html',
  'week5.html', 'week6.html', 'week7.html', 'week8.html',
  'week9.html', 'week10.html', 'week11.html', 'week12.html'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace mb-1 with mb-header-gap in the h1 inside header
  content = content.replace(
    /<h1 class="font-display font-black text-7xl mb-1 -tracking-wider">([^<]+)<\/h1>/g,
    '<h1 class="font-display font-black text-7xl mb-header-gap -tracking-wider">$1</h1>'
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});

console.log('Header spacing updated for all week files!');
