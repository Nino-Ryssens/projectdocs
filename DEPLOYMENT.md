# Deployment & Testing Guide

Complete checklist and testing procedures before deployment.

---

## ✅ Pre-Deployment Checklist

### Core Deliverables

#### HTML Pages (13 files)
- [ ] index.html - Homepage ready
- [ ] week1.html through week12.html - All week pages ready
- [ ] secret-page.html - Hidden music page ready
- [ ] All pages include mobile hamburger menu
- [ ] All pages include mobile navigation dropdown
- [ ] All pages reference mobile-menu.js script

#### Styling
- [ ] dist/output.css - Tailwind compiled and minified
- [ ] assets/tailwind-custom.css - Mobile CSS + glass morphism included
- [ ] Mobile breakpoints configured (768px boundary)
- [ ] Desktop layout preserved (1025px+)
- [ ] Responsive typography applied
- [ ] All color variables defined (accent, text, borders)

#### JavaScript
- [ ] assets/mobile-menu.js - Menu functionality working
- [ ] assets/mobile-nav.js - Mobile navigation utilities present
- [ ] assets/responsive-breakpoints.js - Responsive utilities present
- [ ] assets/lightbox.js - Image modal functionality working
- [ ] assets/sticky-footer.js - Footer behavior correct
- [ ] assets/global-audio-player.js - Audio player present (for secret page)
- [ ] assets/parallax-scroll.js - Parallax effects working (if enabled)

#### Assets
- [ ] assets/TR-8.jpg - Background image present
- [ ] assets/Lost-in-tra(i)nslation_borden_RyssensN_2526.pdf - Figma PDF present
- [ ] Audio files present for secret page music
- [ ] All font files configured
- [ ] All images optimized for web

#### Configuration
- [ ] tailwind.config.js - Custom colors, fonts, spacing configured
- [ ] postcss.config.js - Build pipeline configured
- [ ] package.json - All dependencies listed
- [ ] server.js - Express server configured

---

## 📱 Mobile Features Verification

### Hamburger Menu
- [ ] Menu button appears at < 768px
- [ ] Menu button hidden at > 1025px
- [ ] Icon animates to X on click
- [ ] Icon animates back to ☰ on close
- [ ] Menu slides down smoothly (0.3s)
- [ ] Menu has proper styling (white bg, shadows, rounded)

### Menu Interactions
- [ ] Click hamburger → menu opens
- [ ] Click X button → menu closes
- [ ] Click menu item → page loads + menu closes
- [ ] Click outside menu → menu closes
- [ ] Press Escape → menu closes
- [ ] Tab key navigates menu items
- [ ] Enter key activates links

### Mobile Layout
- [ ] All buttons full-width on mobile
- [ ] Content stacked vertically
- [ ] No horizontal scrolling on mobile
- [ ] Typography readable (no zoom needed)
- [ ] Images responsive and full-width
- [ ] Touch targets minimum 44px tall
- [ ] Proper spacing (1.5rem gaps)

### Mobile Typography
- [ ] h1: 2rem on mobile (readable)
- [ ] h2: 1.5rem on mobile (readable)
- [ ] Body text: 1rem on mobile (readable)
- [ ] All text has sufficient contrast
- [ ] Font weights appropriate

---

## 💻 Desktop Features Verification

### Header & Navigation
- [ ] Header 125% scale maintained
- [ ] Desktop navigation visible and horizontal
- [ ] Hamburger menu completely hidden
- [ ] Navigation links properly spaced
- [ ] Hover states working on links

### Layout & Styling
- [ ] Original button layouts preserved
- [ ] Glass morphism effects intact
- [ ] Color scheme unchanged
- [ ] Spacing and padding as before
- [ ] All interactive features working
- [ ] Footer styling consistent

### Functionality
- [ ] All links navigate correctly
- [ ] Lightbox images work
- [ ] Click interactions responsive
- [ ] Form inputs functional (if any)
- [ ] Modal windows open/close properly

---

## 🧪 Testing Procedures

### Manual Mobile Testing (< 768px)

#### Device Testing
1. iPhone SE (375px width)
2. iPhone 12 (390px width)
3. iPhone 14 Pro Max (430px width)
4. Samsung Galaxy S21 (360px width)
5. iPad (768px - tablet boundary)

#### Test Cases
```
1. Hamburger Menu
   - Click hamburger → menu opens ✓
   - Menu shows all 13 links ✓
   - Click link → menu closes ✓
   - Click outside → menu closes ✓
   - Press Escape → menu closes ✓

2. Content Display
   - No horizontal scrolling ✓
   - Text readable without zoom ✓
   - Images display correctly ✓
   - Buttons full-width ✓
   - Proper spacing between elements ✓

3. Button Interactions
   - Buttons respond to tap ✓
   - Buttons show hover state ✓
   - Buttons navigate correctly ✓
   - Footer buttons full-width ✓
   - Page nav buttons working ✓

4. Typography
   - Headers readable ✓
   - Body text readable ✓
   - Proper font sizes ✓
   - Good contrast ✓
```

### Manual Tablet Testing (768px - 1024px)

#### Device Testing
1. iPad (8.3") - 768px+
2. iPad Pro (11") - 834px+
3. iPad Air (10.9") - 820px+
4. Android tablets - various widths

#### Test Cases
```
1. Hamburger Menu
   - Menu still visible ✓
   - All functionality same as mobile ✓

2. Layout
   - Hybrid layout appears ✓
   - Elements properly sized ✓
   - No horizontal scrolling ✓

3. Buttons
   - Buttons appropriately sized ✓
   - Touch targets adequate ✓
```

### Manual Desktop Testing (> 1025px)

#### Device Testing
1. 1920x1080 (Full HD monitor)
2. 2560x1440 (QHD monitor)
3. Laptop at 100% zoom
4. Desktop at 100% zoom

#### Test Cases
```
1. Hamburger Menu
   - Menu completely hidden ✓
   - No menu button visible ✓

2. Navigation
   - Desktop nav visible ✓
   - Horizontal layout ✓
   - All links accessible ✓

3. Layout & Styling
   - Header 125% scale active ✓
   - Original layout preserved ✓
   - All styling unchanged ✓
   - Everything looks as before ✓

4. Functionality
   - All features working ✓
   - Interactions responsive ✓
   - Performance smooth ✓
```

### Browser Compatibility Testing

#### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

#### Mobile Browsers
- [ ] Safari (iOS 15+)
- [ ] Chrome (Android)
- [ ] Samsung Internet
- [ ] Firefox Mobile

#### Test Coverage
```
For each browser:
- Hamburger menu visible/hidden correctly ✓
- CSS styling renders properly ✓
- JavaScript functions work ✓
- Animations smooth ✓
- Images load ✓
- Links navigate ✓
```

### Accessibility Testing

#### Keyboard Navigation
- [ ] Tab key cycles through all interactive elements
- [ ] Shift+Tab goes backward
- [ ] Enter activates buttons/links
- [ ] Escape closes menus
- [ ] Focus states clearly visible

#### Screen Reader Testing
- [ ] Hamburger button has aria-label
- [ ] Menu items have semantic HTML
- [ ] Images have alt text
- [ ] Links have descriptive text
- [ ] Headings properly structured (h1, h2, h3)

#### Color & Contrast
- [ ] Text contrast ratio ≥ 4.5:1 (normal text)
- [ ] Text contrast ratio ≥ 3:1 (large text)
- [ ] Links distinguishable from text
- [ ] Color not only information method

#### Mobile Accessibility
- [ ] Touch targets minimum 44px
- [ ] Buttons clearly tappable
- [ ] Links have sufficient padding
- [ ] Menus keyboard accessible

---

## 🚀 Performance Optimization

### CSS Optimization
- [ ] dist/output.css is minified
- [ ] Unused CSS removed (if using PurgeCSS)
- [ ] File size reasonable (< 100KB gzipped)
- [ ] No render-blocking resources

### JavaScript Optimization
- [ ] Scripts are minified
- [ ] Scripts load asynchronously (if possible)
- [ ] No console errors
- [ ] Smooth animations (60fps)

### Image Optimization
- [ ] Images are optimized (WebP format where possible)
- [ ] File sizes reasonable
- [ ] Lazy loading used for below-fold images
- [ ] Responsive image sizes (srcset)

### Font Loading
- [ ] Web fonts load efficiently
- [ ] Font-display: swap (avoid invisible text)
- [ ] Fallback fonts defined
- [ ] No layout shift on font load

---

## 📊 Lighthouse Testing

Run Chrome DevTools Lighthouse audit:

```
Target Scores:
- Performance: 85+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

Checklist:
- [ ] Performance score ≥ 85
- [ ] Accessibility score ≥ 90
- [ ] Best Practices score ≥ 90
- [ ] SEO score ≥ 90
- [ ] No critical issues reported
```

---

## 🌐 Deployment Checklist

### Pre-Upload
- [ ] All testing completed and passed
- [ ] No console errors in any browser
- [ ] All assets present and optimized
- [ ] Configuration files updated with correct URLs
- [ ] Environment variables set (if needed)

### Upload Steps
1. [ ] Connect to hosting server (FTP/SSH)
2. [ ] Upload all HTML files
3. [ ] Upload all CSS files (dist/ and assets/)
4. [ ] Upload all JavaScript files (assets/)
5. [ ] Upload all images and media
6. [ ] Upload other assets (PDFs, fonts, etc.)
7. [ ] Verify file permissions (755 for directories, 644 for files)

### Post-Upload Verification
- [ ] All pages load correctly
- [ ] Mobile menu works on live site
- [ ] All links are working
- [ ] Images display properly
- [ ] CSS styling applied correctly
- [ ] JavaScript functionality intact
- [ ] No 404 errors in console
- [ ] Responsive design works on mobile
- [ ] Performance acceptable

### DNS & Domain
- [ ] Domain points to correct server
- [ ] SSL certificate installed (HTTPS)
- [ ] www redirect configured
- [ ] Email working (if applicable)

---

## 🔄 Post-Deployment

### Monitoring
- [ ] Set up error tracking (if applicable)
- [ ] Monitor uptime
- [ ] Check analytics
- [ ] Monitor user feedback
- [ ] Test regularly on different devices

### Maintenance
- [ ] Keep dependencies updated
- [ ] Monitor security alerts
- [ ] Backup regularly
- [ ] Track performance metrics
- [ ] Update content as needed

---

## 📋 Quick Reference

### File Structure for Deployment
```
/                          Root directory
├── index.html
├── week1.html - week12.html
├── secret-page.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── server.js
├── dist/
│   └── output.css         ← Compiled Tailwind
├── src/
│   └── input.css
├── assets/
│   ├── styles.css
│   ├── tailwind-custom.css ← Mobile CSS
│   ├── mobile-menu.js      ← Menu JS
│   ├── *.js                ← Other scripts
│   └── [media files]
└── utilities/              ← Helper scripts (optional)
```

### Critical Files Checklist
```
Required for Mobile Menu:
✓ assets/mobile-menu.js
✓ assets/tailwind-custom.css
✓ HTML pages with menu structure

Required for Styling:
✓ dist/output.css (or compiled CSS)
✓ assets/styles.css

Required for Functionality:
✓ assets/*.js (all scripts)
✓ Configuration files (tailwind, postcss)
```

---

## 🆘 Troubleshooting

### Menu Not Working
1. Check if mobile-menu.js is loaded
2. Verify HTML structure (button and nav IDs)
3. Check browser console for errors
4. Verify CSS classes are applied

### Styling Issues
1. Verify dist/output.css is linked
2. Check tailwind-custom.css is linked
3. Verify Tailwind config has correct colors
4. Check for CSS specificity conflicts

### Mobile Issues
1. Verify viewport meta tag in head
2. Check media query breakpoints
3. Test on actual mobile devices
4. Check touch event handling

### Performance Issues
1. Minify CSS and JavaScript
2. Optimize images
3. Reduce file sizes
4. Use CDN if available
5. Enable caching

---

## 📞 Support Resources

- [MOBILE_IMPLEMENTATION.md](MOBILE_IMPLEMENTATION.md) - Mobile implementation details
- [README.md](README.md) - Main project documentation
- [UTILITIES_GUIDE.md](UTILITIES_GUIDE.md) - Utilities reference

---

**Status:** ✅ READY TO DEPLOY  
**Last Updated:** 13 December 2025
