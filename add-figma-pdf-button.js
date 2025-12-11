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
  
  // Add Figma PDF button beside GitHub button
  content = content.replace(
    /<a href="https:\/\/github\.com\/Nino-Ryssens\/projectdocs" target="_blank" rel="noopener noreferrer" class="inline-block mb-1 px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all">GitHub Repository →<\/a>/,
    '<div class="flex gap-2 justify-center mb-1">\n      <a href="https://github.com/Nino-Ryssens/projectdocs" target="_blank" rel="noopener noreferrer" class="inline-block px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all">GitHub Repository →</a>\n      <a href="assets/Lost-in-tra(i)nslation_borden_RyssensN_2526.pdf" target="_blank" rel="noopener noreferrer" class="inline-block px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all">Figma Boards PDF ↓</a>\n    </div>'
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Added Figma PDF button to ${file}`);
});

console.log('Figma PDF button added to all footers!');
