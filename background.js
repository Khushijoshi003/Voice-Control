chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "openTab" && msg.url) {
    chrome.tabs.create({ url: msg.url });
  }
});