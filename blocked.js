// blocked.js
const unblockTime = new Date();
unblockTime.setMinutes(unblockTime.getMinutes() + 1);

function updateTimer() {
    const currentTime = new Date();
    const remainingTime = new Date(unblockTime - currentTime);

    const minutes = remainingTime.getUTCMinutes();
    const seconds = remainingTime.getUTCSeconds();

    document.getElementById('timer').innerText = `${minutes} min ${seconds} sec`;

    if (remainingTime <= 0) {
        console.log("Unblocking website now...");
        window.location.href = "https://example.com";
    }
}

// Initial update and set interval for updating the timer
updateTimer();
setInterval(updateTimer, 1000);
