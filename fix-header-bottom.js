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
  
  // Replace pb-header-bottom with inline style
  content = content.replace(
    /pb-header-bottom scale-125 origin-top/g,
    'scale-125 origin-top" style="padding-bottom: 1.68rem;'
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});

console.log('Header bottom spacing updated for all week files!');
