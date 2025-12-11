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
  
  // Update footer button spacing and wrap copyright in p tag
  content = content.replace(
    /<footer([^>]*)>\s*<a href="https:\/\/github\.com\/Nino-Ryssens\/projectdocs"([^>]*)>GitHub Repository →<\/a>\s*(©[^<]*)<\/footer>/,
    '<footer$1>\n    <a href="https://github.com/Nino-Ryssens/projectdocs"$2>GitHub Repository →</a>\n    <p>$3</p>\n  </footer>'
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated footer button in ${file}`);
});

console.log('Footer button spacing updated in all week files!');
