chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ blockUntil: 0 });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "startBlocking") {
        let blockUntil = Date.now() + message.minutes * 60000;
        chrome.storage.local.set({ blockUntil }, () => {
            enableBlocking();
            sendResponse({ success: true });
        });
        return true;
    }
});

function enableBlocking() {
    chrome.storage.local.get(["blockUntil"], (data) => {
        let currentTime = Date.now();

        if (currentTime < data.blockUntil) {
            // 🛠 Corrected: Enabling the ruleset
            chrome.declarativeNetRequest.updateEnabledRulesets({
                enableRulesetIds: ["ruleset_1"]
            }, () => {
                console.log("Blocking activated.");
            });
        } else {
            // 🛠 Corrected: Disabling the ruleset
            chrome.declarativeNetRequest.updateEnabledRulesets({
                disableRulesetIds: ["ruleset_1"]
            }, () => {
                console.log("Blocking deactivated.");
            });
        }
    });
}

// Check every minute if blocking should be stopped
setInterval(enableBlocking, 60000);
