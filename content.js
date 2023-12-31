chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "toggleBlock" && message.isBlocking) {
    console.log("Blocking content");
    if (window.location.protocol.startsWith("http")) {
      window.location.href = "blocked.html";
    }
  }
});
