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

## Run the API server

In a terminal:

    # Always change directory, first
    cd server

    # Initial setup
    npm install

    # Start the server
    npm start

## Run the React UI - Three Parts

## (Part 1)

In a separate terminal from the API server, initialize the React UI:

    # Always change directory, first
    cd client

    # Initial setup
    npm install

## (Part 2)

In a separate terminal from "Part 1" above, initialize the Twilio Messages UI:

    # Always change directory, first
    cd client/example

    # Initial setup
    npm install

## (Part 3)

In the same terminal from "Part 1", start the React & Twilio UIs concurrently:

    # Check to ensure that you're still in the client directory

    # Start the UI
    npm start

\*\*For Part 3, the start script has already been configured to start the React & Twilio UIs concurrently 😊.
