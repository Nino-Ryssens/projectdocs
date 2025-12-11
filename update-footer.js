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
  
  // Add ' 1' after 'Grafisch en Digitale Media'
  content = content.replace(
    /Grafisch en Digitale Media1/g,
    'Grafisch en Digitale Media 1'
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Added '1' after 'grafisch en digitale media' in ${file}`);
});

console.log('Footer text updated in all files!');
