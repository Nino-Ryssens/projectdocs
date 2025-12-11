const fs = require('fs');
const path = require('path');

const weekFiles = Array.from({ length: 12 }, (_, i) => `week${i + 1}.html`);

weekFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // 1. Update header for responsive scaling
    const oldHeader = '<header class="text-center border-b border-border-light py-5 pb-8 scale-125 origin-top">';
    const newHeader = '<header class="text-center border-b border-border-light py-5 pb-8 sm:scale-125 sm:origin-top">';
    if (content.includes(oldHeader)) {
      content = content.replace(oldHeader, newHeader);
      modified = true;
    }

    // 2. Update h1 for responsive text size
    const oldH1 = '<h1 class="font-display font-black text-7xl mb-1 -tracking-wider">';
    const newH1 = '<h1 class="font-display font-black text-5xl sm:text-7xl mb-1 -tracking-wider">';
    if (content.includes(oldH1)) {
      content = content.replace(oldH1, newH1);
      modified = true;
    }

    // 3. Update subtitle for responsive text size
    const oldSubtitle = '<p class="text-lg text-text-secondary text-center mt-0.5">';
    const newSubtitle = '<p class="text-base sm:text-lg text-text-secondary text-center mt-0.5">';
    if (content.includes(oldSubtitle)) {
      content = content.replace(oldSubtitle, newSubtitle);
      modified = true;
    }

    // 4. Update nav ul
    const oldNav = 'class="flex justify-center items-center gap-nav-gap py-0.5 px-0 list-none m-0">';
    const newNav = 'class="flex flex-wrap justify-center items-center gap-2 sm:gap-nav-gap py-1 px-3 sm:py-0.5 sm:px-0 list-none m-0">';
    if (content.includes(oldNav)) {
      content = content.replace(oldNav, newNav);
      modified = true;
    }

    // 5. Update main content area
    const oldMain = '<main class="max-w-content mx-auto pt-8 px-6 pb-8">';
    const newMain = '<main class="max-w-content mx-auto pt-4 sm:pt-8 px-4 sm:px-6 pb-8">';
    if (content.includes(oldMain)) {
      content = content.replace(oldMain, newMain);
      modified = true;
    }

    // 6. Update h2 in main
    const oldH2 = 'class="text-3xl font-bold -tracking-wider text-text-primary mt-0 mb-4">';
    const newH2 = 'class="text-2xl sm:text-3xl font-bold -tracking-wider text-text-primary mt-0 mb-4">';
    if (content.includes(oldH2)) {
      content = content.replace(oldH2, newH2);
      modified = true;
    }

    // 7. Update paragraphs with mobile text size
    const oldP = 'class="max-w-prose mt-2 mb-6 text-text-secondary leading-relaxed">';
    const newP = 'class="max-w-prose mt-2 mb-6 text-sm sm:text-base text-text-secondary leading-relaxed">';
    if (content.includes(oldP)) {
      content = content.replace(new RegExp(oldP.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newP);
      modified = true;
    }

    // 8. Update page-nav
    const oldPageNav = 'class="page-nav flex justify-between items-center max-w-content mx-auto mt-12 px-6 py-4 border-t border-border-lighter">';
    const newPageNav = 'class="page-nav flex flex-col-reverse sm:flex-row justify-between items-center max-w-content mx-auto mt-8 sm:mt-12 px-4 sm:px-6 py-3 sm:py-4 border-t border-border-lighter gap-4">';
    if (content.includes(oldPageNav)) {
      content = content.replace(oldPageNav, newPageNav);
      modified = true;
    }

    // 9. Update page-nav links
    const oldNavLink = 'class="no-underline text-accent font-semibold transition-all duration-200 hover:translate-x-1">';
    const newNavLink = 'class="no-underline text-accent font-semibold transition-all duration-200 hover:translate-x-1 text-sm sm:text-base w-full sm:w-auto text-center sm:text-left">';
    if (content.includes(oldNavLink)) {
      content = content.replace(new RegExp(oldNavLink.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newNavLink);
      modified = true;
    }

    // 10. Update two-columns layout for mobile
    const oldTwoCol = 'class="flex flex-wrap gap-4 mt-1.5">';
    const newTwoCol = 'class="flex flex-col md:flex-row gap-4 mt-6">';
    if (content.includes(oldTwoCol)) {
      content = content.replace(oldTwoCol, newTwoCol);
      modified = true;
    }

    // 11. Update card items
    const oldCard = 'class="flex-1 min-w-[45%] bg-white border border-border-lighter rounded-lg p-8 shadow-sm hover:shadow-md hover:-translate-y-0.75 transition-all duration-200">';
    const newCard = 'class="flex-1 bg-white border border-border-lighter rounded-lg p-4 sm:p-8 shadow-sm hover:shadow-md hover:-translate-y-0.75 transition-all duration-200">';
    if (content.includes(oldCard)) {
      content = content.replace(new RegExp(oldCard.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newCard);
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Mobile optimized: ${file}`);
    } else {
      console.log(`⏭️  ${file} already optimized`);
    }
  } else {
    console.log(`❌ ${file} not found`);
  }
});

console.log('\n✅ Mobile optimization complete!');
