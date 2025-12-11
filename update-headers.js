const fs = require('fs');
const path = require('path');

const weekFiles = Array.from({ length: 11 }, (_, i) => `week${i + 2}.html`);

weekFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    const oldHeader = '<header class="text-center border-b border-border-light py-4 pb-6">';
    const newHeader = '<header class="text-center border-b border-border-light py-5 pb-8 scale-125 origin-top">';
    
    if (content.includes(oldHeader)) {
      content = content.replace(oldHeader, newHeader);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated ${file}`);
    } else {
      console.log(`⏭️  ${file} already updated or pattern not found`);
    }
  } else {
    console.log(`❌ ${file} not found`);
  }
});

console.log('Done!');
