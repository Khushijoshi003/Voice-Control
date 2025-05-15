document.getElementById("start").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "start-listening" });
    document.getElementById("status").textContent = "Listening... Speak your command!";
  });
});