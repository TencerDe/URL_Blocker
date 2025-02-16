Unbreakable URL Blocker - Chrome Extension Description Unbreakable URL Blocker helps you boost productivity by blocking distracting websites (e.g., Facebook, Instagram, YouTube) for a set period. Once activated, the block cannot be undone until the timer expires, ensuring you stay focused.

🎯 Features ✅ Block social media & distractions (Facebook, Instagram, YouTube, etc.) ✅ Set a timer (in minutes) to block sites ✅ Cannot disable until the timer ends ⏳ ✅ Works even after browser restart ✅ Lightweight & easy to use

Installation (For Local Testing) 1️⃣ Download the repository or clone it: git clone https://github.com/TencerDe/URL_Blocker cd url-blocker-extension

2️⃣ Go to chrome://extensions/ 3️⃣ Enable "Developer Mode" (toggle in the top right) 4️⃣ Click "Load Unpacked" → Select the folder 5️⃣ Your extension is now installed!

Tech Stack

Manifest V3
JavaScript (background.js, popup.js)
HTML & CSS (popup.html, popup.css)
Chrome Declarative Net Request API
Chrome Storage API
How It Works 1️⃣ Open the extension popup. 2️⃣ Enter the number of minutes to block sites. 3️⃣ Click "Start Blocking" 🚫 4️⃣ The extension blocks social media sites until the timer ends. 5️⃣ Once the time is up, sites will be accessible again.

And the extension work even after browser restart!

Known Issues & Fixes ❌ Extension not blocking sites? ✔️ Ensure rules.json is properly registered in manifest.json.

❌ "Invalid ruleset id: ruleset_1" error? ✔️ Check if rules.json is correctly structured and enabled in the manifest.

Contributing Want to improve this extension? Contributions are welcome! 🎉

Fork the repo

Create a new branch (feature/new-feature)
Commit your changes & push
Open a pull request 🚀
