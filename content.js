console.log("content.js loaded!");

// Voice recognition setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = false; // Single command, but we auto-restart
recognition.lang = "en-US";
recognition.interimResults = false;

let isListening = false;

function controlVideo(command) {
  console.log("controlVideo received command:", command);
  const video = document.querySelector("video");
  if (!video) return;

  // Basic controls
  if (command.includes("pause")) video.pause();
  else if (command.includes("play")) video.play();
  else if (command.includes("slower") || command.includes("decrease speed"))
    video.playbackRate = Math.max(0.25, video.playbackRate - 0.25);
  else if (command.includes("faster") || command.includes("increase speed"))
    video.playbackRate = Math.min(4, video.playbackRate + 0.25);
  else if (command.includes("brighter"))
    video.style.filter = "brightness(1.5)";
  else if (command.includes("dimmer") || command.includes("darker"))
    video.style.filter = "brightness(0.5)";
  // Volume controls
  else if (command.includes("mute")) video.muted = true;
  else if (command.includes("unmute")) video.muted = false;
  else if (command.match(/volume (\d+)/)) {
    const vol = parseInt(command.match(/volume (\d+)/)[1], 10);
    video.volume = Math.min(1, Math.max(0, vol / 100));
  }
  // Repeat/loop
  else if (command.includes("loop") || command.includes("repeat")) video.loop = true;
  else if (command.includes("no loop") || command.includes("stop repeat")) video.loop = false;
  // Subtitle toggle
  else if (command.includes("subtitle") || command.includes("caption")) {
    const tracks = video.textTracks;
    for (let i = 0; i < tracks.length; i++) {
      tracks[i].mode = tracks[i].mode === "showing" ? "disabled" : "showing";
    }
  }
  // Set playback speed to 1.25x, 1.75x, etc.
  else if (command.match(/speed (\d+(\.\d+)?)/)) {
    const speed = parseFloat(command.match(/speed (\d+(\.\d+)?)/)[1]);
    video.playbackRate = speed;
  }
  // Fullscreen
  else if (command.includes("fullscreen")) {
    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
    else if (video.msRequestFullscreen) video.msRequestFullscreen();
  }
  // Screenshot
  else if (command.includes("screenshot")) {
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    const imgURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgURL;
    link.download = "screenshot.png";
    link.click();
  }
}

function startListeningLoop() {
  if (!isListening) {
    recognition.start();
    isListening = true;
  }
}

recognition.onresult = (event) => {
  const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
  console.log("Heard:", transcript);
  controlVideo(transcript);
};

recognition.onend = () => {
  isListening = false;
  // Auto-restart for continuous listening
  startListeningLoop();
};

recognition.onerror = (e) => {
  console.warn("Speech recognition error:", e.error);
  isListening = false;
  // Try to recover by restarting
  setTimeout(startListeningLoop, 1000);
};

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "start-listening" && !isListening) {
    startListeningLoop();
  }
});