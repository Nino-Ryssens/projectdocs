# 🎵 Secret Music Lounge Page

## Overview
A hidden secret page accessible only through the hamburger menu that allows users to select and loop background music while browsing.

## Features

### Access
- **Hidden from main navigation**: Only accessible via the hamburger menu
- **Location**: `/secret.html`
- **Menu Entry**: 🎵 Secret (appears at the bottom of the mobile menu with a divider)

### Music Player
The page features two selectable tracks:

1. **Chillwave Vibes** 🎹
   - URL: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3`

2. **Nighttime Beats** 🌙
   - URL: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3`

### Controls
- **Song Selection**: Click buttons to switch between tracks (automatically loads the selected song)
- **Play**: Start playback of the selected song
- **Pause**: Pause the currently playing song
- **Stop**: Stop and reset the track to the beginning
- **Volume Control**: Slider to adjust volume (0-100%)
- **Auto-Loop**: Audio automatically loops when it finishes
- **Status Display**: Shows current song name and playback status

### Design
- **Purple gradient background**: Creates a relaxing atmosphere
- **Card-based UI**: Clean, centered layout on desktop
- **Responsive**: Fully mobile-friendly with adjusted layout
- **Persistent Playback**: Music continues to play when navigating to other pages

## Implementation Details

### Files Modified
1. **`/index.html`**
   - Added secret menu item to hamburger menu
   - Added visual divider before secret entry
   - Special styling with music note emoji

2. **`/assets/tailwind-custom.css`**
   - Added `.secret-menu-item` styling with purple gradient background
   - Hover effects with gradient transitions

### Files Created
1. **`/secret.html`**
   - Complete secret page with HTML structure
   - Embedded CSS for beautiful UI
   - JavaScript audio player functionality
   - Song database with URLs
   - Full responsive design

## Styling

### Secret Menu Item
```css
.secret-menu-item {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-left-color: #667eea;
}
```

### Music Lounge Card
- Purple gradient background (linear-gradient from #667eea to #764ba2)
- White card with rounded corners and shadow
- Responsive padding and font sizing
- Mobile-optimized button layout

## Usage

### For Users
1. Open the hamburger menu (mobile icon)
2. Scroll to the bottom to find "🎵 Secret"
3. Click to access the music lounge
4. Select a song by clicking a song button
5. Use Play/Pause/Stop controls to manage playback
6. Adjust volume with the slider
7. Navigation away and music continues to play!

### To Add More Songs
Edit the `songs` object in the JavaScript section of `/secret.html`:

```javascript
const songs = {
  1: {
    title: 'Song Name',
    url: 'https://example.com/song.mp3'
  },
  2: {
    title: 'Another Song',
    url: 'https://example.com/song2.mp3'
  },
  // Add more songs here
};
```

Then add corresponding buttons in the HTML:
```html
<button class="song-button" data-song="3">
  🎼 New Song Name
</button>
```

## Browser Compatibility
- Works in all modern browsers that support HTML5 audio
- Responsive design adapts to all screen sizes
- No dependencies required (vanilla JavaScript)

## Notes
- The audio URLs are example streaming URLs from SoundHelix
- Consider replacing with your own audio files for production use
- Music continues to play in the background as a persistent feature
- The secret page is intentionally hidden but not truly secret - just not advertised in main navigation
