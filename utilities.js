/**
 * MASTER UTILITIES FILE
 * Import and use all HTML modification functions from a single entry point
 * 
 * USAGE:
 * const utils = require('./utilities');
 * 
 * // Run all functions
 * utils.runAll();
 * 
 * // Or run specific functions
 * utils.html.addGithubLink();
 * utils.styles.updateButtonPadding();
 * utils.scripts.addLightboxScript();
 * utils.mobile.optimizeMobile();
 */

const htmlModifiers = require('./html-modifiers');
const styleUpdaters = require('./style-updaters');
const scriptInjectors = require('./script-injectors');
const mobileOptimizers = require('./mobile-optimizers');

// ============================================================================
// MASTER RUNNER - Execute common update sequences
// ============================================================================

/**
 * Run complete HTML modifications and updates
 */
function runAll() {
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║           RUNNING ALL HTML UTILITIES                       ║');
  console.log('╚════════════════════════════════════════════════════════════╝');
  
  // Add HTML elements
  htmlModifiers.addGithubLink();
  htmlModifiers.addFigmaPdfButton();
  htmlModifiers.addFigmaPrototypeButton();
  htmlModifiers.makeImagesClickable();
  htmlModifiers.updateFooterButton();
  htmlModifiers.addMobileMenu();
  
  // Update styles
  styleUpdaters.updateButtonPadding();
  styleUpdaters.updateButtonSpacing();
  styleUpdaters.updateGithubButton();
  styleUpdaters.updateGithubUrl();
  styleUpdaters.updateFooterText();
  styleUpdaters.updateHeaderBottom();
  styleUpdaters.updateHeaderSpacing();
  styleUpdaters.updateImageTitles();
  styleUpdaters.updateHeaders();
  styleUpdaters.updateNav();
  
  // Inject scripts
  scriptInjectors.addLightboxScript();
  scriptInjectors.addResponsiveScript();
  scriptInjectors.addParallaxScript();
  scriptInjectors.addStickyFooterScript();
  scriptInjectors.addMobileNavScript();
  scriptInjectors.addMobileMenuScript();
  
  // Mobile optimization
  mobileOptimizers.optimizeMobile();
  
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║              ALL UTILITIES COMPLETED SUCCESSFULLY           ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
}

/**
 * Run basic setup sequence
 */
function runBasicSetup() {
  console.log('\n--- Running Basic Setup ---');
  htmlModifiers.addGithubLink();
  htmlModifiers.makeImagesClickable();
  styleUpdaters.updateButtonPadding();
  scriptInjectors.addLightboxScript();
  console.log('✓ Basic setup complete\n');
}

/**
 * Run buttons and footer updates
 */
function runButtonUpdates() {
  console.log('\n--- Running Button Updates ---');
  styleUpdaters.updateButtonPadding();
  styleUpdaters.updateButtonSpacing();
  htmlModifiers.addFigmaPdfButton();
  htmlModifiers.addFigmaPrototypeButton();
  styleUpdaters.updateGithubButton();
  console.log('✓ Button updates complete\n');
}

/**
 * Run mobile-specific updates
 */
function runMobileSetup() {
  console.log('\n--- Running Mobile Setup ---');
  htmlModifiers.addMobileMenu();
  styleUpdaters.updateNav();
  scriptInjectors.addMobileNavScript();
  scriptInjectors.addMobileMenuScript();
  mobileOptimizers.optimizeMobile();
  console.log('✓ Mobile setup complete\n');
}

// ============================================================================
// EXPORT
// ============================================================================
module.exports = {
  // Categories
  html: htmlModifiers,
  styles: styleUpdaters,
  scripts: scriptInjectors,
  mobile: mobileOptimizers,
  
  // Convenience runners
  runAll,
  runBasicSetup,
  runButtonUpdates,
  runMobileSetup,
  
  // Helper info
  info: {
    description: 'Master utilities for HTML modification, styling, and scripting',
    categories: ['html', 'styles', 'scripts', 'mobile'],
    conveniences: ['runAll', 'runBasicSetup', 'runButtonUpdates', 'runMobileSetup']
  }
};

// ============================================================================
// CLI EXECUTION
// ============================================================================
// If run directly: node utilities.js [command]
// Examples: node utilities.js all
//          node utilities.js basic
//          node utilities.js mobile

if (require.main === module) {
  const command = process.argv[2];
  
  switch(command) {
    case 'all':
      runAll();
      break;
    case 'basic':
      runBasicSetup();
      break;
    case 'mobile':
      runMobileSetup();
      break;
    case 'buttons':
      runButtonUpdates();
      break;
    default:
      console.log(`
╔════════════════════════════════════════════════════════════╗
║              UTILITIES - AVAILABLE COMMANDS                ║
╚════════════════════════════════════════════════════════════╝

Usage: node utilities.js [command]

COMMANDS:
  all       → Run all modifications (complete setup)
  basic     → Run basic setup (links, images, buttons)
  mobile    → Run mobile-specific setup
  buttons   → Run button and footer updates

CATEGORIES (use in code):
  utilities.html.*      → HTML modifications
  utilities.styles.*    → Style/CSS updates
  utilities.scripts.*   → Script injection
  utilities.mobile.*    → Mobile optimization

EXAMPLES:
  const utils = require('./utilities');
  utils.html.addGithubLink();
  utils.styles.updateButtonPadding();
  utils.mobile.optimizeMobile();
      `);
  }
}
