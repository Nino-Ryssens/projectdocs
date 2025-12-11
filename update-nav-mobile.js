const fs = require('fs');
const path = require('path');

const weekFiles = Array.from({ length: 12 }, (_, i) => `week${i + 1}.html`);

weekFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update nav to relative positioning for mobile dropdown
    const oldNav = '<nav class="nav" aria-label="Primary">';
    const newNav = '<nav class="nav relative" aria-label="Primary">';
    
    if (content.includes(oldNav)) {
      content = content.replace(oldNav, newNav);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated nav: ${file}`);
    } else {
      console.log(`⏭️  ${file} - nav already updated`);
    }
  }
});

console.log('Done!');
