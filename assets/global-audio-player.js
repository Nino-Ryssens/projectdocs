/**
 * Global Background Music Player
 * Persists audio playback across all pages
 */

class GlobalAudioPlayer {
  constructor() {
    this.audioId = 'global-bg-audio';
    this.audio = this.getOrCreateAudio();
    this.songs = {
      1: {
        title: 'Liebestod',
        artist: 'Richard Wagner',
        url: 'assets/Liebestod.mp3'
      },
      2: {
        title: 'Poepinjehoofd',
        artist: 'Raggende Mannen',
        url: 'assets/poepinjehoofd.mp3'
      },
      3: {
        title: 'Schoppenaas',
        artist: 'Peter Pan Speedrock',
        url: 'assets/schoppenaas.mp3'
      }
    };
    this.currentSong = this.loadState('currentSong') || 1;
    this.isPlaying = this.loadState('isPlaying') || false;
    this.volume = this.loadState('volume') || 0.7;
    this.currentTime = this.loadState('currentTime') || 0;
    
    // Load the stored song
    this.loadSong(this.currentSong);
    this.audio.volume = this.volume;
    this.audio.currentTime = this.currentTime;
    
    // Resume playing if it was playing before page load
    if (this.isPlaying) {
      setTimeout(() => {
        this.audio.currentTime = this.currentTime;
        this.play();
      }, 100);
    }
    
    // Save currentTime every 500ms
    setInterval(() => {
      if (this.isPlaying) {
        this.saveState('currentTime', this.audio.currentTime);
      }
    }, 500);
    
    // Setup event listeners
    this.setupListeners();
  }

  getOrCreateAudio() {
    let audio = document.getElementById(this.audioId);
    
    if (!audio) {
      audio = document.createElement('audio');
      audio.id = this.audioId;
      audio.loop = true;
      audio.style.display = 'none';
      document.body.appendChild(audio);
    }
    
    return audio;
  }

  loadSong(songId) {
    if (this.songs[songId]) {
      this.currentSong = songId;
      this.audio.src = this.songs[songId].url;
      this.saveState('currentSong', songId);
    }
  }

  play() {
    this.audio.play();
    this.isPlaying = true;
    this.saveState('isPlaying', true);
    this.updateAllPages();
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
    this.saveState('isPlaying', false);
    this.updateAllPages();
  }

  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.isPlaying = false;
    this.saveState('isPlaying', false);
    this.updateAllPages();
  }

  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume));
    this.audio.volume = this.volume;
    this.saveState('volume', this.volume);
  }

  getCurrentSong() {
    return this.currentSong;
  }

  isCurrentlyPlaying() {
    return this.isPlaying;
  }

  getVolume() {
    return this.volume;
  }

  saveState(key, value) {
    sessionStorage.setItem(`audio_${key}`, JSON.stringify(value));
  }

  loadState(key) {
    const stored = sessionStorage.getItem(`audio_${key}`);
    return stored ? JSON.parse(stored) : null;
  }

  setupListeners() {
    this.audio.addEventListener('play', () => {
      this.isPlaying = true;
      this.saveState('isPlaying', true);
      this.updateAllPages();
    });

    this.audio.addEventListener('pause', () => {
      this.isPlaying = false;
      this.saveState('isPlaying', false);
      this.updateAllPages();
    });

    this.audio.addEventListener('ended', () => {
      // The audio will loop automatically due to loop attribute
      this.updateAllPages();
    });
  }

  updateAllPages() {
    // Update any local page controls if they exist
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const statusText = document.getElementById('status');

    if (playBtn) {
      playBtn.classList.toggle('playing', this.isPlaying);
    }
    if (pauseBtn) {
      pauseBtn.classList.toggle('playing', this.isPlaying);
    }
    if (volumeSlider) {
      volumeSlider.value = this.volume * 100;
    }
    if (statusText) {
      const songName = this.songs[this.currentSong].title;
      if (this.isPlaying) {
        statusText.textContent = `Now playing: ${songName}`;
      } else {
        statusText.textContent = `Paused: ${songName}`;
      }
    }
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.globalAudioPlayer = new GlobalAudioPlayer();
  });
} else {
  window.globalAudioPlayer = new GlobalAudioPlayer();
}
