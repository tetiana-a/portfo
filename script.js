document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Loaded");
    // Add any additional interactivity if needed
});
const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");
const seekSlider = document.getElementById("seek-slider");
const currentTimeElement = document.getElementById("current-time");
const durationElement = document.getElementById("duration");

audio.addEventListener("loadedmetadata", () => {
    durationElement.textContent = formatTime(audio.duration);
    seekSlider.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", () => {
    seekSlider.value = Math.floor(audio.currentTime);
    currentTimeElement.textContent = formatTime(audio.currentTime);
});

seekSlider.addEventListener("input", () => {
    audio.currentTime = seekSlider.value;
});

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "Pause";
    } else {
        audio.pause();
        playPauseButton.textContent = "Play";
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
}

function togglePlay() {
    const musicPlayer = document.getElementById("music-player");
    
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "Pause";
        musicPlayer.classList.add("playing");       // Add pulse animation
        playPauseButton.classList.add("pulsing");   // Scale play button
    } else {
        audio.pause();
        playPauseButton.textContent = "Play";
        musicPlayer.classList.remove("playing");    // Remove pulse animation
        playPauseButton.classList.remove("pulsing");// Reset button scale
    }
}

