document.addEventListener("DOMContentLoaded", function () {
  const blockButton = document.getElementById("blockButton");

  blockButton.addEventListener("click", function () {
    const duration = document.getElementById("duration").value;
    const sites = document.getElementById("sites").value.split(",").map(site => site.trim());

    chrome.runtime.sendMessage({ action: "toggleBlock", duration, blockedSites: sites });
    window.close();
  });
});
