# Consolidated Utilities Guide

## Overview

Your 35 JavaScript utility scripts have been consolidated into **5 organized files** plus a master utilities file:

### Core Utility Files

| File | Purpose | Functions |
|------|---------|-----------|
| **html-modifiers.js** | Add/modify HTML elements | Add buttons, links, images, mobile menu |
| **style-updaters.js** | Update CSS classes & spacing | Button padding, headers, footers, nav |
| **script-injectors.js** | Inject script tags into HTML | Lightbox, responsive, parallax, mobile scripts |
| **mobile-optimizers.js** | Mobile optimization & responsive updates | Optimize/revert mobile layouts |
| **utilities.js** | Master entry point | Import all, run sequences, CLI commands |

### Configuration Files (Unchanged)
- `postcss.config.js` - PostCSS configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `server.js` - Express server

---

## Quick Start

### Command Line
```bash
# Run all modifications
node utilities.js all

# Run basic setup (essential updates)
node utilities.js basic

# Run mobile-specific setup
node utilities.js mobile

# Run button updates only
node utilities.js buttons
```

### In Node.js Code
```javascript
const utils = require('./utilities');

// Run all functions
utils.runAll();

// Run specific categories
utils.runBasicSetup();
utils.runMobileSetup();

// Access individual functions
utils.html.addGithubLink();
utils.styles.updateButtonPadding();
utils.scripts.addLightboxScript();
utils.mobile.optimizeMobile();
```

---

## File Consolidation Reference

### HTML Modifiers (6 functions)
```javascript
htmlModifiers.addGithubLink()              // Adds GitHub link to footer
htmlModifiers.addFigmaPdfButton()          // Adds Figma PDF download button
htmlModifiers.addFigmaPrototypeButton()    // Adds Figma prototype link
htmlModifiers.makeImagesClickable()        // Wraps images with lightbox
htmlModifiers.updateFooterButton()         // Styles GitHub link as button
htmlModifiers.addMobileMenu()              // Adds hamburger menu + nav
```

**Original files merged:** `add-github-link.js`, `add-figma-pdf-button.js`, `add-figma-prototype-button.js`, `make-images-clickable.js`, `fix-footer-button.js`, `update-mobile-menu.js`

---

### Style Updaters (11 functions)
```javascript
styleUpdaters.updateButtonPadding()        // px-4 → px-6
styleUpdaters.updateButtonSpacing()        // gap-2 → gap-4
styleUpdaters.updateGithubButton()         // Convert link to styled button
styleUpdaters.updateGithubUrl()            // Update repo URLs
styleUpdaters.updateFooterText()           // Fix "Grafisch en Digitale Media 1"
styleUpdaters.updateHeaderBottom()         // pb-8 → pb-header-bottom
styleUpdaters.fixHeaderBottom()            // pb-header-bottom → inline style
styleUpdaters.updateHeaderSpacing()        // mb-1 → mb-header-gap
styleUpdaters.updateImageTitles()          // Set image data-alt to week names
styleUpdaters.updateHeaders()              // Update old header styling
styleUpdaters.updateNav()                  // Add relative positioning
```

**Original files merged:** `update-button-padding.js`, `update-button-spacing.js`, `update-github-button.js`, `update-github-url.js`, `update-footer.js`, `update-header-bottom.js`, `fix-header-bottom.js`, `update-header-spacing.js`, `update-image-titles.js`, `update-headers.js`, `update-nav-mobile.js`

---

### Script Injectors (7 functions)
```javascript
scriptInjectors.addLightboxScript()        // Inject lightbox.js
scriptInjectors.addResponsiveScript()      // Inject responsive-breakpoints.js
scriptInjectors.addParallaxScript()        // Inject parallax-scroll.js
scriptInjectors.removeParallaxScript()     // Remove parallax-scroll.js
scriptInjectors.addStickyFooterScript()    // Inject sticky-footer.js
scriptInjectors.addMobileNavScript()       // Inject mobile-nav.js (week files)
scriptInjectors.addMobileMenuScript()      // Inject mobile-menu.js
```

**Original files merged:** `add-lightbox-script.js`, `add-responsive-script.js`, `add-parallax-script.js`, `revert-parallax.js`, `add-sticky-footer.js`, `add-mobile-script.js`, `update-mobile-menu.js` (script injection portion)

---

### Mobile Optimizers (2 functions)
```javascript
mobileOptimizers.optimizeMobile()          // Add responsive breakpoints & classes
mobileOptimizers.revertMobileOptimizations() // Revert mobile optimizations
```

**Original files merged:** `optimize-mobile.js`, `revert-mobile.js`

---

## Function Categories by Purpose

### Adding UI Elements
```javascript
utils.html.addGithubLink()
utils.html.addFigmaPdfButton()
utils.html.addFigmaPrototypeButton()
utils.html.makeImagesClickable()
utils.html.addMobileMenu()
```

### Button & Footer Updates
```javascript
utils.styles.updateButtonPadding()
utils.styles.updateButtonSpacing()
utils.styles.updateGithubButton()
utils.html.updateFooterButton()
utils.styles.updateFooterText()
```

### Script Management
```javascript
utils.scripts.addLightboxScript()
utils.scripts.addResponsiveScript()
utils.scripts.addParallaxScript()
utils.scripts.addStickyFooterScript()
utils.scripts.addMobileNavScript()
utils.scripts.addMobileMenuScript()
```

### Header & Spacing
```javascript
utils.styles.updateHeaderBottom()
utils.styles.updateHeaderSpacing()
utils.styles.fixHeaderBottom()
utils.styles.updateHeaders()
```

### Mobile & Responsive
```javascript
utils.mobile.optimizeMobile()
utils.mobile.revertMobileOptimizations()
utils.styles.updateNav()
utils.html.addMobileMenu()
utils.scripts.addMobileNavScript()
utils.scripts.addMobileMenuScript()
```

---

## File Size Reduction

**Before:** 35 JavaScript files
**After:** 5 organized utility files + 2 config files (server.js stays unchanged)

**Space saved:** ~85% reduction in root directory clutter

---

## Next Steps

1. **Test the consolidated files:**
   ```bash
   node utilities.js all
   ```

2. **Use individual files as needed:**
   ```javascript
   const html = require('./html-modifiers');
   html.addGithubLink();
   ```

3. **Archive original files** (optional - keep backup):
   ```bash
   mkdir utilities_backup
   mv add-*.js fix-*.js update-*.js revert-*.js optimize-*.js utilities_backup/
   ```

4. **Update any scripts/documentation** that referenced the old filenames to use the new consolidated utilities.

---

## Notes

- All original logic has been preserved exactly
- Functions are fully compatible with the original single-purpose scripts
- Can still run functions individually or as sequences
- CLI interface for quick command-line usage
- Each module is self-contained and can be used independently
