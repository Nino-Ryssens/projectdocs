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
  
  // Add GitHub link above the copyright text in footer
  content = content.replace(
    /(<footer[^>]*>)\s*(©[^<]*)/,
    '$1\n    <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="block mb-3 text-accent hover:underline">GitHub Repository</a>\n    $2'
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Added GitHub link to ${file}`);
});

console.log('GitHub link added to all footers!');
console.log('Note: Update the GitHub URL in the script to your actual repository');
