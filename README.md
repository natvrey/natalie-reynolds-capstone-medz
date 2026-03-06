<p align="center">
  <img src="client/src/assets/images/medz-logo-blue.png" alt="Medz+ logo" height="50" style="min-height:32px; max-height:50px; min-width:32px; border-radius:27px; object-fit:cover; display:block; box-shadow: inset 0 1px 0 rgba(255,255,255,0.35), 0 2px 4px rgba(0,61,122,0.2), 0 4px 12px rgba(0,61,122,0.3), 0 8px 24px rgba(0,0,0,0.25);" />
</p>

# This project is a medical alert app 📢.

🩺Medical emergencies are unpredictable.

🚑Ambulances take patients to the ER over 16 million times per year in the US.

                        ⚠During these emergencies:

❌Someone may not be immediately available to assist you.

❌Bystanders may not be aware that you need help.

                        ✅This app allows you to:

1️. Call 911 & your emergency contacts

2️. Text your emergency contacts

3️. Activate a distress alarm to alert bystanders that you need help

4️. Store brief medical info that emergency responders may need when attending to you

➡Please Note: Due to Twilio's requirements, the call & text features won't work in
your local environment. To test these features, please use the deployed App.
# -------- Demo Video -------

### TODO: put new demo video here


# -------- Demo Deployment -------

### TODO: put new app link here
➡Please Note:
1)This demo uses a Twilio trial account with a limited
$ balance. Once the funds are exhausted, call & text features won't work.
2)Calls are limited to Canadian phone #s.

# -------- Run Locally -------

## Clone the project

```bash
  git clone https://github.com/natvrey/natalie-reynolds-capstone-medz.git
```

## Go to the project directory

```bash
  cd natalie-reynolds-capstone-medz-main
```

## Install dependencies

### One-command local start (recommended)

From the project root:

```bash
npm run setup
npm start
```

`npm run setup` installs dependencies for:

1) `server`
2) `client`

`npm start` then starts:

1) the Node API server (`server`)
2) the React UI (`client`)

## What the above commands do

1. **`setup` script**:
   - This script sets up the project by installing all dependencies for the root project and each app folder.
   - `npm install`
   - `cd server && npm install`
   - `cd ../client && npm install`

   Essentially, it ensures that all parts of the project (root, server, and client) have their dependencies installed.

2. **`start` script**:
   - This script starts both the server and client applications concurrently.
   - `concurrently`: A tool that allows running multiple commands simultaneously.
     - `-n server,client`: Names the processes as server and client for easier identification in the terminal.
     - `-c cyan,magenta`: Assigns the colors cyan and magenta to the server and client logs, respectively.
   - `"npm --prefix server start"`: starts the API server.
   - `"npm --prefix client start"`: starts the React app.

   This script is used to run the backend (server) and frontend (client) simultaneously during development.

## Deploy (Netlify + Render)

1. Deploy backend on **Render** from `server`:
   - Use `render.yaml` from repo root, or configure manually:
   - Root directory: `server`
   - Build command: `npm install`
   - Start command: `npm start`
   - Add all required env vars from `server/.env.example`

2. Deploy frontend on **Netlify** from `client`:
   - `netlify.toml` in repo root already configures build and publish settings.
   - Add frontend env vars in Netlify:
     - `REACT_APP_API_URL=https://<your-render-service>.onrender.com`
     - Optional: `REACT_APP_APP_URL=https://<your-netlify-site>.netlify.app`

3. SPA routing is preconfigured:
   - `client/public/_redirects` includes `/* /index.html 200`.
