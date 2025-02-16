document.getElementById("save").addEventListener("click", function() {
    let sites = document.getElementById("blockedSites").value.split("\n");
    chrome.storage.local.set({ blockedSites: sites }, () => {
        alert("Blocked sites updated!");
    });
});
