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
  console.log("Received message in content.js:", msg);
  if (msg.action === "start-listening" && !isListening) {
    startListeningLoop();
  }
});