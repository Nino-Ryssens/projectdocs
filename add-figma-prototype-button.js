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
  
  // Add Figma prototype button as third button
  content = content.replace(
    /<a href="assets\/Lost-in-tra\(i\)nslation_borden_RyssensN_2526\.pdf" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all">Figma Boards PDF ↓<\/a>/,
    '<a href="assets/Lost-in-tra(i)nslation_borden_RyssensN_2526.pdf" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all">Figma Boards PDF ↓</a>\n      <a href="https://www.figma.com/proto/5SdUMXc88aYSiTXPnDtTzf/Midi-Treinborden?page-id=0%3A1&node-id=129-1145&p=f&viewport=-170%2C741%2C0.17&t=ITxxPCSA8J4OGGEF-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=129%3A1145" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all">Figma Prototype →</a>'
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Added Figma prototype button to ${file}`);
});

console.log('Figma prototype button added to all footers!');
