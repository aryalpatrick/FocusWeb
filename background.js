let isBlocking = false;
let blockedSites = [];
let timer;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ blockedSites, isBlocking });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "toggleBlock") {
    isBlocking = true;
    blockedSites = message.blockedSites;
    startBlocker(message.duration);
  }
});

function startBlocker(duration) {
  chrome.webNavigation.onBeforeNavigate.addListener(blockSite);
  timer = setTimeout(stopBlocker, duration * 60 * 1000);
}

function stopBlocker() {
  isBlocking = false;
  chrome.webNavigation.onBeforeNavigate.removeListener(blockSite);
}

function blockSite(details) {
  const blockedSite = blockedSites.find(site => details.url.includes(site));
  
  if (blockedSite) {
    console.log("Blocking site:", blockedSite);
    chrome.tabs.update(details.tabId, { url: "blocked.html" });
  }
}

