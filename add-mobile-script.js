const fs = require('fs');
const path = require('path');

const weekFiles = Array.from({ length: 12 }, (_, i) => `week${i + 1}.html`);

weekFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    const scriptTag = '  <script src="assets/mobile-nav.js"><\/script>';
    const closingBody = '<\/body>\n<\/html>';
    
    if (!content.includes('mobile-nav.js')) {
      content = content.replace(closingBody, `  ${scriptTag}\n</body>\n</html>`);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Added mobile-nav.js: ${file}`);
    } else {
      console.log(`⏭️  ${file} - already has script`);
    }
  }
});

console.log('Done!');
