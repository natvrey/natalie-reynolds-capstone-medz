![Logo](https://i.imgur.com/scnP2y3.png)

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

https://github.com/natvrey/natalie-reynolds-capstone-medz/assets/92003973/ce296821-88d3-4e67-ae28-ff626eb4acdb


# -------- Demo Deployment -------

https://medz-plus-client.herokuapp.com/
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

```
Because this app is made of 3 npm projects, there are 3 places to run npm commands:

1) Node API in the server directory.
2) React UI in client directory.
3) React UI in the example directory (*This is where Twilio's Messages UI is located,
& npm install has to be run in this folder also. *This Twilio UI is accessed from the
app's Home Page, when the "Text Emergency Contact" button is clicked).

👇See detailed instructions below.

```

## One-command local start (recommended)

From the project root:

```bash
npm run setup
npm start
```

`npm run setup` installs dependencies for:

1) `server`
2) `client`
3) `client/example`

`npm start` then starts:

1) the Node API server (`server`)
2) the React UI + Twilio Messages UI (`client`, which already starts `client/example` concurrently)

## What the above commands do

1. **`setup` script**:
   - This script sets up the project by installing all the necessary dependencies for the root project and its subdirectories.
   - `npm install`: Installs dependencies for the root project.
   - `npm --prefix server install`: Installs dependencies for the server directory.
   - `npm --prefix client install`: Installs dependencies for the client directory.
   - `npm --prefix client/example install`: Installs dependencies for the example directory.

   Essentially, it ensures that all parts of the project (root, server, client, and client/example) have their dependencies installed.

2. **`start` script**:
   - This script starts both the server and client applications concurrently.
   - `concurrently`: A tool that allows running multiple commands simultaneously.
     - `-n server,client`: Names the processes as server and client for easier identification in the terminal.
     - `-c cyan,magenta`: Assigns the colors cyan and magenta to the server and client logs, respectively.
   - `"npm --prefix server start"`: Runs the `start` script defined in the server directory's package.json.
   - `"npm --prefix client start"`: Runs the `start` script defined in the client directory's package.json.

   This script is used to run the backend (server) and frontend (client) simultaneously during development.
