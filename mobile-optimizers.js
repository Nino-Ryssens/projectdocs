/**
 * MOBILE OPTIMIZERS
 * Functions specific to mobile optimization and responsive design updates
 */

const fs = require('fs');
const path = require('path');

const weekFiles = Array.from({ length: 12 }, (_, i) => `week${i + 1}.html`);
const allFiles = ['index.html', ...weekFiles];

// ============================================================================
// OPTIMIZE MOBILE
// ============================================================================
function optimizeMobile() {
  console.log('\n--- Optimizing Mobile Layout ---');
  weekFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // 1. Update header for responsive scaling
      if (content.includes('<header class="text-center border-b border-border-light py-5 pb-8 scale-125 origin-top">')) {
        content = content.replace(
          '<header class="text-center border-b border-border-light py-5 pb-8 scale-125 origin-top">',
          '<header class="text-center border-b border-border-light py-5 pb-8 sm:scale-125 sm:origin-top">'
        );
        modified = true;
      }

      // 2. Update h1 for responsive text size
      if (content.includes('<h1 class="font-display font-black text-7xl mb-1 -tracking-wider">')) {
        content = content.replace(
          '<h1 class="font-display font-black text-7xl mb-1 -tracking-wider">',
          '<h1 class="font-display font-black text-5xl sm:text-7xl mb-1 -tracking-wider">'
        );
        modified = true;
      }

      // 3. Update subtitle for responsive text size
      if (content.includes('<p class="text-lg text-text-secondary text-center mt-0.5">')) {
        content = content.replace(
          '<p class="text-lg text-text-secondary text-center mt-0.5">',
          '<p class="text-base sm:text-lg text-text-secondary text-center mt-0.5">'
        );
        modified = true;
      }

      // 4. Update nav ul
      if (content.includes('class="flex justify-center items-center gap-nav-gap py-0.5 px-0 list-none m-0">')) {
        content = content.replace(
          'class="flex justify-center items-center gap-nav-gap py-0.5 px-0 list-none m-0">',
          'class="flex flex-wrap justify-center items-center gap-2 sm:gap-nav-gap py-1 px-3 sm:py-0.5 sm:px-0 list-none m-0">'
        );
        modified = true;
      }

      // 5. Update main content area
      if (content.includes('<main class="max-w-content mx-auto pt-8 px-6 pb-8">')) {
        content = content.replace(
          '<main class="max-w-content mx-auto pt-8 px-6 pb-8">',
          '<main class="max-w-content mx-auto pt-4 sm:pt-8 px-4 sm:px-6 pb-8">'
        );
        modified = true;
      }

      // 6. Update h2 in main
      if (content.includes('class="text-3xl font-bold -tracking-wider text-text-primary mt-0 mb-4">')) {
        content = content.replace(
          /class="text-3xl font-bold -tracking-wider text-text-primary mt-0 mb-4">/g,
          'class="text-2xl sm:text-3xl font-bold -tracking-wider text-text-primary mt-0 mb-4">'
        );
        modified = true;
      }

      // 7. Update paragraphs with mobile text size
      if (content.includes('class="max-w-prose mt-2 mb-6 text-text-secondary leading-relaxed">')) {
        content = content.replace(
          /class="max-w-prose mt-2 mb-6 text-text-secondary leading-relaxed">/g,
          'class="max-w-prose mt-2 mb-6 text-sm sm:text-base text-text-secondary leading-relaxed">'
        );
        modified = true;
      }

      // 8. Update page-nav
      if (content.includes('class="page-nav flex justify-between items-center max-w-content mx-auto mt-12 px-6 py-4 border-t border-border-lighter">')) {
        content = content.replace(
          'class="page-nav flex justify-between items-center max-w-content mx-auto mt-12 px-6 py-4 border-t border-border-lighter">',
          'class="page-nav flex flex-col-reverse sm:flex-row justify-between items-center max-w-content mx-auto mt-8 sm:mt-12 px-4 sm:px-6 py-3 sm:py-4 border-t border-border-lighter gap-4">'
        );
        modified = true;
      }

      // 9. Update page-nav links
      if (content.includes('class="no-underline text-accent font-semibold transition-all duration-200 hover:translate-x-1">')) {
        content = content.replace(
          /class="no-underline text-accent font-semibold transition-all duration-200 hover:translate-x-1">/g,
          'class="no-underline text-accent font-semibold transition-all duration-200 hover:translate-x-1 text-sm sm:text-base w-full sm:w-auto text-center sm:text-left">'
        );
        modified = true;
      }

      // 10. Update two-columns layout for mobile
      if (content.includes('class="flex flex-wrap gap-4 mt-1.5">')) {
        content = content.replace(
          'class="flex flex-wrap gap-4 mt-1.5">',
          'class="flex flex-col md:flex-row gap-4 mt-6">'
        );
        modified = true;
      }

      // 11. Update card items
      if (content.includes('class="flex-1 min-w-[45%] bg-white border border-border-lighter rounded-lg p-8 shadow-sm hover:shadow-md hover:-translate-y-0.75 transition-all duration-200">')) {
        content = content.replace(
          /class="flex-1 min-w-\[45%\] bg-white border border-border-lighter rounded-lg p-8 shadow-sm hover:shadow-md hover:-translate-y-0\.75 transition-all duration-200">/g,
          'class="flex-1 bg-white border border-border-lighter rounded-lg p-4 sm:p-8 shadow-sm hover:shadow-md hover:-translate-y-0.75 transition-all duration-200">'
        );
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Optimized ${file}`);
      }
    }
  });
}

// ============================================================================
// REVERT MOBILE OPTIMIZATIONS
// ============================================================================
function revertMobileOptimizations() {
  console.log('\n--- Reverting Mobile Optimizations ---');
  allFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // 1. Revert header responsive scaling
      if (content.includes('<header class="text-center border-b border-border-light py-5 pb-8 sm:scale-125 sm:origin-top">')) {
        content = content.replace(
          '<header class="text-center border-b border-border-light py-5 pb-8 sm:scale-125 sm:origin-top">',
          '<header class="text-center border-b border-border-light py-5 pb-8 scale-125 origin-top">'
        );
        modified = true;
      }

      // 2. Revert h1 responsive text size
      if (content.includes('<h1 class="font-display font-black text-5xl sm:text-7xl mb-1 -tracking-wider">')) {
        content = content.replace(
          '<h1 class="font-display font-black text-5xl sm:text-7xl mb-1 -tracking-wider">',
          '<h1 class="font-display font-black text-7xl mb-1 -tracking-wider">'
        );
        modified = true;
      }

      // 3. Revert subtitle responsive text size
      if (content.includes('<p class="text-base sm:text-lg text-text-secondary text-center mt-0.5">')) {
        content = content.replace(
          '<p class="text-base sm:text-lg text-text-secondary text-center mt-0.5">',
          '<p class="text-lg text-text-secondary text-center mt-0.5">'
        );
        modified = true;
      }

      // 4. Revert nav ul
      if (content.includes('class="flex flex-wrap justify-center items-center gap-2 sm:gap-nav-gap py-1 px-3 sm:py-0.5 sm:px-0 list-none m-0">')) {
        content = content.replace(
          'class="flex flex-wrap justify-center items-center gap-2 sm:gap-nav-gap py-1 px-3 sm:py-0.5 sm:px-0 list-none m-0">',
          'class="flex justify-center items-center gap-nav-gap py-0.5 px-0 list-none m-0">'
        );
        modified = true;
      }

      // 5. Revert main content area
      if (content.includes('<main class="max-w-content mx-auto pt-4 sm:pt-8 px-4 sm:px-6 pb-8">')) {
        content = content.replace(
          '<main class="max-w-content mx-auto pt-4 sm:pt-8 px-4 sm:px-6 pb-8">',
          '<main class="max-w-content mx-auto pt-8 px-6 pb-8">'
        );
        modified = true;
      }

      // 6. Revert h2 in main
      if (content.includes('class="text-2xl sm:text-3xl font-bold -tracking-wider text-text-primary mt-0 mb-4">')) {
        content = content.replace(
          /class="text-2xl sm:text-3xl font-bold -tracking-wider text-text-primary mt-0 mb-4">/g,
          'class="text-3xl font-bold -tracking-wider text-text-primary mt-0 mb-4">'
        );
        modified = true;
      }

      // 7. Revert paragraphs with mobile text size
      if (content.includes('class="max-w-prose mt-2 mb-6 text-sm sm:text-base text-text-secondary leading-relaxed">')) {
        content = content.replace(
          /class="max-w-prose mt-2 mb-6 text-sm sm:text-base text-text-secondary leading-relaxed">/g,
          'class="max-w-prose mt-2 mb-6 text-text-secondary leading-relaxed">'
        );
        modified = true;
      }

      // 8. Revert page-nav
      if (content.includes('class="page-nav flex flex-col-reverse sm:flex-row justify-between items-center max-w-content mx-auto mt-8 sm:mt-12 px-4 sm:px-6 py-3 sm:py-4 border-t border-border-lighter gap-4">')) {
        content = content.replace(
          'class="page-nav flex flex-col-reverse sm:flex-row justify-between items-center max-w-content mx-auto mt-8 sm:mt-12 px-4 sm:px-6 py-3 sm:py-4 border-t border-border-lighter gap-4">',
          'class="page-nav flex justify-between items-center max-w-content mx-auto mt-12 px-6 py-4 border-t border-border-lighter">'
        );
        modified = true;
      }

      // 9. Revert page-nav links
      if (content.includes('class="no-underline text-accent font-semibold transition-all duration-200 hover:translate-x-1 text-sm sm:text-base w-full sm:w-auto text-center sm:text-left">')) {
        content = content.replace(
          /class="no-underline text-accent font-semibold transition-all duration-200 hover:translate-x-1 text-sm sm:text-base w-full sm:w-auto text-center sm:text-left">/g,
          'class="no-underline text-accent font-semibold transition-all duration-200 hover:translate-x-1">'
        );
        modified = true;
      }

      // 10. Revert two-columns layout
      if (content.includes('class="flex flex-col md:flex-row gap-4 mt-6">')) {
        content = content.replace(
          'class="flex flex-col md:flex-row gap-4 mt-6">',
          'class="flex flex-wrap gap-4 mt-1.5">'
        );
        modified = true;
      }

      // 11. Revert card items
      if (content.includes('class="flex-1 bg-white border border-border-lighter rounded-lg p-4 sm:p-8 shadow-sm hover:shadow-md hover:-translate-y-0.75 transition-all duration-200">')) {
        content = content.replace(
          /class="flex-1 bg-white border border-border-lighter rounded-lg p-4 sm:p-8 shadow-sm hover:shadow-md hover:-translate-y-0\.75 transition-all duration-200">/g,
          'class="flex-1 min-w-[45%] bg-white border border-border-lighter rounded-lg p-8 shadow-sm hover:shadow-md hover:-translate-y-0.75 transition-all duration-200">'
        );
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Reverted ${file}`);
      }
    }
  });
}

// ============================================================================
// EXPORT FUNCTIONS
// ============================================================================
module.exports = {
  optimizeMobile,
  revertMobileOptimizations
};

// Uncomment to run individual functions:
// optimizeMobile();
// revertMobileOptimizations();
