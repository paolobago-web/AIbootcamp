# LootBX Command Deck

A JRPG-menu-styled internal dashboard for monitoring **People** (roster, dossiers, coaching) and **The Work** (finance, compliance, activity) — see `people-layer-prd.md` for the product spec behind the newer features.

## Structure

```
frontend/            deployed site — static HTML/CSS/JS, no build step
  index.html
  css/styles.css
  js/app.js
backend/              FastAPI service for coaching-completion + personal-record data (not yet running/deployed)
command-deck.html     original single-file version, kept for standalone use
people-layer-prd.md   PRD for the calendar/coaching/dossier features
vercel.json           tells Vercel to serve the site from frontend/
```

## Running the front end locally

No build step — just open `frontend/index.html` directly in a browser, or serve it:

```
cd frontend
python3 -m http.server 8080   # then visit localhost:8080
```

## Running the backend (once its environment is set up)

```
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

(Backend is still a work in progress — models/routes not yet written.)

## Deployment

This repo is connected to Vercel — pushes to `main` deploy automatically. `vercel.json` points Vercel at `frontend/` as the site root, so no dashboard build configuration is needed beyond the initial GitHub connection.
