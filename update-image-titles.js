const fs = require('fs');
const path = require('path');

const weekMap = {
  'week1.html': 'Week 1',
  'week2.html': 'Week 2',
  'week3.html': 'Week 3',
  'week4.html': 'Week 4',
  'week5.html': 'Week 5',
  'week6.html': 'Week 6',
  'week7.html': 'Week 7',
  'week8.html': 'Week 8',
  'week9.html': 'Week 9',
  'week10.html': 'Week 10',
  'week11.html': 'Week 11',
  'week12.html': 'Week 12',
};

Object.entries(weekMap).forEach(([file, weekName]) => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace all data-alt attributes with week name
  content = content.replace(
    /data-alt="[^"]*"/g,
    `data-alt="${weekName}"`
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file} - all images now show "${weekName}"`);
});

console.log('All image titles updated to week names!');
