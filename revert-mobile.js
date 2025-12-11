const fs = require('fs');
const path = require('path');

const allFiles = ['index.html', ...Array.from({ length: 12 }, (_, i) => `week${i + 1}.html`)];

allFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // 1. Revert header responsive scaling
    const newHeader = '<header class="text-center border-b border-border-light py-5 pb-8 sm:scale-125 sm:origin-top">';
    const oldHeader = '<header class="text-center border-b border-border-light py-5 pb-8 scale-125 origin-top">';
    if (content.includes(newHeader)) {
      content = content.replace(newHeader, oldHeader);
      modified = true;
    }

    // 2. Revert h1 responsive text size
    const newH1 = '<h1 class="font-display font-black text-5xl sm:text-7xl mb-1 -tracking-wider">';
    const revertH1 = '<h1 class="font-display font-black text-7xl mb-1 -tracking-wider">';
    if (content.includes(newH1)) {
      content = content.replace(newH1, revertH1);
      modified = true;
    }

    // 3. Revert subtitle responsive text size
    const newSubtitle = '<p class="text-base sm:text-lg text-text-secondary text-center mt-0.5">';
    const revertSubtitle = '<p class="text-lg text-text-secondary text-center mt-0.5">';
    if (content.includes(newSubtitle)) {
      content = content.replace(newSubtitle, revertSubtitle);
      modified = true;
    }

    // 4. Revert nav ul
    const newNav = 'class="flex flex-wrap justify-center items-center gap-2 sm:gap-nav-gap py-1 px-3 sm:py-0.5 sm:px-0 list-none m-0">';
    const revertNav = 'class="flex justify-center items-center gap-nav-gap py-0.5 px-0 list-none m-0">';
    if (content.includes(newNav)) {
      content = content.replace(newNav, revertNav);
      modified = true;
    }

    // 5. Revert nav links text size and padding
    const newNavLink = 'class="no-underline text-text-primary font-medium transition-colors duration-200 inline-flex items-center gap-1 text-sm sm:text-base px-2 sm:px-0 py-1 sm:py-0">';
    const revertNavLink = 'class="no-underline text-text-primary font-medium transition-colors duration-200 inline-flex items-center gap-1">';
    if (content.includes(newNavLink)) {
      content = content.replace(new RegExp(newNavLink.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), revertNavLink);
      modified = true;
    }

    // 6. Revert toggle button size
    const newToggle = 'class="nav-toggle w-8 h-8 sm:w-9 sm:h-9 inline-grid place-items-center rounded-lg cursor-pointer transition-all duration-180">';
    const revertToggle = 'class="nav-toggle w-9 h-9 inline-grid place-items-center rounded-lg cursor-pointer transition-all duration-180">';
    if (content.includes(newToggle)) {
      content = content.replace(newToggle, revertToggle);
      modified = true;
    }

    // 7. Revert main content area
    const newMain = '<main class="max-w-content mx-auto pt-4 sm:pt-8 px-4 sm:px-6 pb-8">';
    const revertMain = '<main class="max-w-content mx-auto pt-8 px-6 pb-8">';
    if (content.includes(newMain)) {
      content = content.replace(newMain, revertMain);
      modified = true;
    }

    // 8. Revert h2 in main
    const newH2 = 'class="text-2xl sm:text-3xl font-bold -tracking-wider text-text-primary mt-0 mb-4">';
    const revertH2 = 'class="text-3xl font-bold -tracking-wider text-text-primary mt-0 mb-4">';
    if (content.includes(newH2)) {
      content = content.replace(new RegExp(newH2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), revertH2);
      modified = true;
    }

    // 9. Revert h3 responsive size
    const newH3 = 'class="text-lg sm:text-xl font-semibold text-text-primary mb-3">';
    const revertH3 = 'class="text-xl font-semibold text-text-primary mb-3">';
    if (content.includes(newH3)) {
      content = content.replace(newH3, revertH3);
      modified = true;
    }

    // 10. Revert paragraphs with mobile text size
    const newP = 'class="max-w-prose mt-2 mb-6 text-sm sm:text-base text-text-secondary leading-relaxed">';
    const revertP = 'class="max-w-prose mt-2 mb-6 text-text-secondary leading-relaxed">';
    if (content.includes(newP)) {
      content = content.replace(new RegExp(newP.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), revertP);
      modified = true;
    }

    // 11. Revert page-nav
    const newPageNav = 'class="page-nav flex flex-col-reverse sm:flex-row justify-between items-center max-w-content mx-auto mt-8 sm:mt-12 px-4 sm:px-6 py-3 sm:py-4 border-t border-border-lighter gap-4">';
    const revertPageNav = 'class="page-nav flex justify-between items-center max-w-content mx-auto mt-12 px-6 py-4 border-t border-border-lighter">';
    if (content.includes(newPageNav)) {
      content = content.replace(newPageNav, revertPageNav);
      modified = true;
    }

    // 12. Revert page-nav links
    const newNavLinkPage = 'class="no-underline text-accent font-semibold transition-all duration-200 hover:translate-x-1 text-sm sm:text-base w-full sm:w-auto text-center sm:text-left">';
    const revertNavLinkPage = 'class="no-underline text-accent font-semibold transition-all duration-200 hover:translate-x-1">';
    if (content.includes(newNavLinkPage)) {
      content = content.replace(new RegExp(newNavLinkPage.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), revertNavLinkPage);
      modified = true;
    }

    // 13. Revert two-columns layout for mobile
    const newTwoCol = 'class="flex flex-col md:flex-row gap-4 mt-6">';
    const revertTwoCol = 'class="flex flex-wrap gap-4 mt-1.5">';
    if (content.includes(newTwoCol)) {
      content = content.replace(newTwoCol, revertTwoCol);
      modified = true;
    }

    // 14. Revert card items
    const newCard = 'class="flex-1 bg-white border border-border-lighter rounded-lg p-4 sm:p-8 shadow-sm hover:shadow-md hover:-translate-y-0.75 transition-all duration-200">';
    const revertCard = 'class="flex-1 min-w-[45%] bg-white border border-border-lighter rounded-lg p-8 shadow-sm hover:shadow-md hover:-translate-y-0.75 transition-all duration-200">';
    if (content.includes(newCard)) {
      content = content.replace(new RegExp(newCard.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), revertCard);
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Reverted: ${file}`);
    } else {
      console.log(`⏭️  ${file} already reverted`);
    }
  } else {
    console.log(`❌ ${file} not found`);
  }
});

console.log('\n✅ Reversion complete!');
