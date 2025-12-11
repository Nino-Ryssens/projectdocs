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
  
  // Update GitHub link to button with arrow
  content = content.replace(
    /<a href="https:\/\/github\.com\/Nino-Ryssens\/projectdocs" target="_blank" rel="noopener noreferrer" class="block mb-3 text-accent hover:underline">GitHub Repository<\/a>/,
    '<a href="https://github.com/Nino-Ryssens/projectdocs" target="_blank" rel="noopener noreferrer" class="inline-block mb-3 px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all">GitHub Repository →</a>'
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated GitHub link to button in ${file}`);
});

console.log('GitHub link converted to button in all footers!');
