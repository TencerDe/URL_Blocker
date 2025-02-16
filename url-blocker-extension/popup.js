document.getElementById("startBlock").addEventListener("click", function() {
    let minutes = parseInt(document.getElementById("blockTime").value);

    if (!minutes || minutes <= 0) {
        alert("Enter a valid number of minutes!");
        return;
    }

    chrome.runtime.sendMessage({ action: "startBlocking", minutes: minutes }, (response) => {
        if (response.success) {
            document.getElementById("status").innerText = `Blocking started for ${minutes} minutes!`;
        }
    });
});
