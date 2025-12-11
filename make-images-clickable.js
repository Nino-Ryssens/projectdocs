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
  
  // Wrap img tags in anchor tags with lightbox class
  content = content.replace(
    /<img src="([^"]+)" alt="([^"]+)" loading="lazy" class="responsive-img mb-4">/g,
    '<a href="$1" class="lightbox" data-alt="$2"><img src="$1" alt="$2" loading="lazy" class="responsive-img mb-4 cursor-pointer hover:opacity-80 transition-opacity"></a>'
  );
  
  // Also handle images without loading attribute
  content = content.replace(
    /<img src="([^"]+)" alt="([^"]+)" class="responsive-img mb-4">/g,
    '<a href="$1" class="lightbox" data-alt="$2"><img src="$1" alt="$2" class="responsive-img mb-4 cursor-pointer hover:opacity-80 transition-opacity"></a>'
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file} with clickable images`);
});

console.log('All images are now clickable!');
