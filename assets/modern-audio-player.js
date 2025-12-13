/**
 * Modern Audio Player UI
 * Creates a modern, minimalist music player with waveform visualization
 */

class ModernAudioPlayer {
  constructor(globalPlayer) {
    this.globalPlayer = globalPlayer;
    this.container = null;
    this.isVisible = this.loadState('playerVisible') || false;
    this.createPlayerUI();
    this.setupEventListeners();
    this.animateWaveform();
  }

  createPlayerUI() {
    const playerHTML = `
      <div id="modern-audio-player" class="modern-player" data-persistent="true" style="display: ${this.isVisible ? 'flex' : 'none'}">
        <style>
          .modern-player {
            position: fixed;
            bottom: 5.5rem;
            right: 2rem;
            z-index: 40;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.5);
            border-radius: 16px;
            padding: 1.5rem;
            width: 320px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.8);
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .waveform-container {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2px;
          }

          .waveform-bar {
            width: 2px;
            height: 100%;
            background: linear-gradient(180deg, #1a1a1a 0%, #333333 25%, #555555 50%, #777777 75%, #aaaaaa 100%);
            border-radius: 2px;
            opacity: 0.7;
            animation: pulse 0.6s ease-in-out infinite;
            animation-play-state: paused;
          }

          .waveform-container.animating .waveform-bar {
            animation-play-state: running;
          }

          @keyframes pulse {
            0%, 100% { height: 15%; }
            50% { height: 100%; }
          }

          .timeline-container {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 0.75rem;
            color: #555;
          }

          .timeline-bar {
            flex: 1;
            height: 4px;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 2px;
            cursor: pointer;
            position: relative;
            transition: height 0.2s ease;
          }

          .timeline-bar:hover {
            height: 6px;
          }

          .timeline-progress {
            height: 100%;
            background: #048ADE;
            border-radius: 2px;
            transition: width 0.1s linear;
            position: relative;
          }

          .timeline-progress::after {
            content: '';
            position: absolute;
            right: -6px;
            top: 50%;
            transform: translateY(-50%);
            width: 12px;
            height: 12px;
            background: #048ADE;
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(4, 138, 222, 0.4);
            opacity: 0;
          }

          .timeline-bar:hover .timeline-progress::after {
            opacity: 1;
          }

          .player-controls {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
          }

          .control-btn {
            background: none;
            border: none;
            color: #048ADE;
            cursor: pointer;
            padding: 0.5rem;
            transition: color 0.2s ease, transform 0.2s ease;
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .control-btn:hover {
            color: #0270c4;
            transform: scale(1.1);
          }

          .control-btn:active {
            transform: scale(0.95);
          }

          .play-btn {
            background: linear-gradient(135deg, #048ADE 0%, #0270c4 100%);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.3rem;
            box-shadow: 0 8px 32px rgba(4, 138, 222, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.8);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .play-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 12px 40px rgba(4, 138, 222, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.8);
          }

          .play-btn:active {
            transform: scale(0.95);
          }

          .player-info {
            text-align: center;
            color: #555;
            font-size: 0.85rem;
          }

          .song-title {
            font-weight: 600;
            color: #111;
            margin-bottom: 0.25rem;
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
          }

          .toggle-player-btn {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            z-index: 39;
            background: rgba(4, 138, 222, 0.85);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(4, 138, 222, 0.5);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
            transition: transform 0.2s ease, background 0.2s ease;
            font-size: 1.2rem;
          }

          .toggle-player-btn:hover {
            transform: scale(1.1);
            background: rgba(4, 138, 222, 1);
          }

          @media (max-width: 768px) {
            .modern-player {
              bottom: 5rem;
              right: 1rem;
              width: 290px;
              padding: 1.25rem;
            }

            .toggle-player-btn {
              bottom: 1rem;
              right: 1rem;
            }

            .player-controls {
              gap: 1rem;
            }

            .play-btn {
              width: 45px;
              height: 45px;
              font-size: 1.1rem;
            }

            .waveform-container {
              height: 40px;
              gap: 1px;
            }

            .waveform-bar {
              width: 1.5px;
            }
          }
        </style>

        <div class="waveform-container" id="waveform"></div>

        <div class="player-info">
          <div class="song-title" id="song-title">Now Playing</div>
          <div id="song-artist" style="font-size: 0.75rem; color: #666;"></div>
        </div>

        <div class="timeline-container">
          <span id="current-time">0:00</span>
          <div class="timeline-bar" id="timeline-bar">
            <div class="timeline-progress" id="timeline-progress" style="width: 0%;"></div>
          </div>
          <span id="duration">0:00</span>
        </div>

        <div class="player-controls">
          <button class="control-btn" id="prev-btn" title="Previous">⏮</button>
          <button class="control-btn play-btn" id="play-btn" title="Play/Pause">▶</button>
          <button class="control-btn" id="next-btn" title="Next">⏭</button>
        </div>
      </div>

      <button class="toggle-player-btn" id="toggle-player-btn" title="Toggle Player" data-persistent="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg>
      </button>
    `;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = playerHTML;
    document.body.appendChild(wrapper);

    this.container = document.getElementById('modern-audio-player');
    this.setupWaveform();
    this.updatePlayerDisplay();
  }

  setupWaveform() {
    const waveformContainer = document.getElementById('waveform');
    const barCount = 35;

    for (let i = 0; i < barCount; i++) {
      const bar = document.createElement('div');
      bar.className = 'waveform-bar';
      bar.style.animationDelay = `${i * 0.05}s`;
      bar.style.animationDuration = `${0.6 + Math.random() * 0.4}s`;
      waveformContainer.appendChild(bar);
    }
  }

  setupEventListeners() {
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const toggleBtn = document.getElementById('toggle-player-btn');
    const timelineBar = document.getElementById('timeline-bar');

    playBtn.addEventListener('click', () => this.togglePlay());
    prevBtn.addEventListener('click', () => this.previousSong());
    nextBtn.addEventListener('click', () => this.nextSong());
    toggleBtn.addEventListener('click', () => this.togglePlayerVisibility());
    timelineBar.addEventListener('click', (e) => this.seek(e));

    // Update display when global player state changes
    setInterval(() => this.updatePlayerDisplay(), 100);
  }

  updatePlayerDisplay() {
    const playBtn = document.getElementById('play-btn');
    const songTitle = document.getElementById('song-title');
    const songArtist = document.getElementById('song-artist');
    const progressBar = document.getElementById('timeline-progress');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const waveformContainer = document.getElementById('waveform');

    if (this.globalPlayer.isCurrentlyPlaying()) {
      playBtn.textContent = '⏸';
      waveformContainer.classList.add('animating');
    } else {
      playBtn.textContent = '▶';
      waveformContainer.classList.remove('animating');
    }

    const currentSongId = this.globalPlayer.getCurrentSong();
    const songs = this.globalPlayer.songs || {};
    const song = songs[currentSongId];

    if (song) {
      songTitle.textContent = `${song.title} [${song.artist}]`;
      songArtist.textContent = 'Op aanvraag van docent Bram Overstijns';
    }

    // Update timeline
    const audio = this.globalPlayer.audio;
    if (audio && audio.duration) {
      const percentage = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${percentage}%`;
      currentTimeEl.textContent = this.formatTime(audio.currentTime);
      durationEl.textContent = this.formatTime(audio.duration);
    }
  }

  formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  seek(e) {
    const timelineBar = document.getElementById('timeline-bar');
    const rect = timelineBar.getBoundingClientRect();
    const percentage = (e.clientX - rect.left) / rect.width;
    const audio = this.globalPlayer.audio;
    if (audio && audio.duration) {
      audio.currentTime = percentage * audio.duration;
    }
  }

  togglePlay() {
    if (this.globalPlayer.isCurrentlyPlaying()) {
      this.globalPlayer.pause();
    } else {
      this.globalPlayer.play();
    }
    this.updatePlayerDisplay();
  }

  previousSong() {
    const songIds = Object.keys(this.globalPlayer.songs);
    const currentIndex = songIds.indexOf(String(this.globalPlayer.getCurrentSong()));
    const prevIndex = (currentIndex - 1 + songIds.length) % songIds.length;
    this.globalPlayer.loadSong(parseInt(songIds[prevIndex]));
    this.globalPlayer.play();
    this.updatePlayerDisplay();
  }

  nextSong() {
    const songIds = Object.keys(this.globalPlayer.songs);
    const currentIndex = songIds.indexOf(String(this.globalPlayer.getCurrentSong()));
    const nextIndex = (currentIndex + 1) % songIds.length;
    this.globalPlayer.loadSong(parseInt(songIds[nextIndex]));
    this.globalPlayer.play();
    this.updatePlayerDisplay();
  }

  togglePlayerVisibility() {
    this.isVisible = !this.isVisible;
    this.container.style.display = this.isVisible ? 'flex' : 'none';
    this.saveState('playerVisible', this.isVisible);
  }

  animateWaveform() {
    // Waveform bars animate via CSS, but we can add more interactivity here if needed
  }

  saveState(key, value) {
    try {
      localStorage.setItem(`modern-player-${key}`, JSON.stringify(value));
    } catch (e) {
      console.warn('localStorage unavailable:', e);
    }
  }

  loadState(key) {
    try {
      const value = localStorage.getItem(`modern-player-${key}`);
      return value ? JSON.parse(value) : null;
    } catch (e) {
      console.warn('localStorage unavailable:', e);
      return null;
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Check if player already exists (persistent across pages)
  if (document.getElementById('modern-audio-player')) {
    // Player already exists, just sync state
    if (window.globalAudioPlayer && window.modernAudioPlayer) {
      window.modernAudioPlayer.updatePlayerDisplay();
    }
    return;
  }

  // Wait for global player to be initialized
  const checkForPlayer = setInterval(() => {
    if (window.globalAudioPlayer) {
      clearInterval(checkForPlayer);
      window.modernAudioPlayer = new ModernAudioPlayer(window.globalAudioPlayer);
    }
  }, 100);
});

