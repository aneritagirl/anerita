ANERITA — Code Kit (Pieces) — README_FIRST.txt

You have 4 pieces. Unzip each into the SAME parent folder so paths look like:
- app/
- anerita_backend_nextgen/
- wallet/
- launchers/

Quick demo (offline, no backend):
1) Open app/ANERITA_master_nextgen_PWA.html by double‑clicking.
2) Open app/emergency_tina.html or app/emergency_gia.html to show Emergency View.

Run local backend (optional):
Windows:
  1) Double‑click launchers/RUN_ANERITA_WINDOWS.bat
  2) Open http://localhost:5000/ping to check
macOS:
  1) Right‑click launchers/RUN_ANERITA_MAC.command → Open
  2) Open http://localhost:5000/ping to check

Connect the app to backend:
- In your PWA page, set API base to http://localhost:5000 (if your app supports it),
  or just open http://localhost:5000/emergency/demo to see JSON coming back.

Notes:
- Service workers (for offline caching) require https or localhost. Use a quick local server:
  python -m http.server 8080
  then visit http://localhost:8080/ANERITA_master_nextgen_PWA.html
- Wallet passes require signing (Apple) or an issuer (Google). See wallet/ READMEs.
