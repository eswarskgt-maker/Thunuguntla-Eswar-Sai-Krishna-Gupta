# Medical Assistant — Web App

This repository contains a demo single-page Medical Assistant web app:
- Symptom checker (rule-based)
- Medicine search (queries OpenFDA; falls back to local data)
- Medicine reminders (localStorage + Notification API)
- Hospital finder (Leaflet + OpenStreetMap)
- Login (simulated mobile OTP and mock Google sign-in)
- Chat assistant (uses OpenAI if you provide an API key; otherwise a built-in mock assistant)

Files added:
- index.html — main HTML that loads the UI
- style.css — styles
- app.js — application logic
- data/medicines.json — sample medicines
- data/hospitals.json — sample hospitals

How to run
1. Open `index.html` in a modern browser (Chrome/Edge/Firefox). For the map to load and fetch requests to work, serve from a simple static server or GitHub Pages.

2. To host on GitHub Pages:
   - Push these files to the repository's default branch (done by this commit).
   - In the repository Settings → Pages, select the default branch and `/ (root)` as the site folder, then save.
   - Wait a minute and the site will be available at `https://<your-username>.github.io/<repo-name>/`.

Notes & Limitations
- "Every medicine in the world" isn't feasible in a client-only app. This app queries the OpenFDA API for a large dataset of drugs registered in the U.S. You can extend it to other APIs or add a server-side aggregator.
- Real Google Sign-In requires creating an OAuth client ID in Google Cloud and updating the sign-in flow; currently the app uses a demo mock flow.
- OpenAI API key usage in the browser is insecure for production. For a safe production setup, implement a server-side proxy that keeps your API key secret.
- Reminders run while the page is open; background push notifications need a service worker and push subscription (not included here).

If you want I can:
- Add a proper Google OAuth implementation (requires client ID)
- Add a server-side proxy for OpenAI (requires a server)
- Improve UI, add more medicine data, or add unit tests

